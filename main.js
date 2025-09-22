const form = document.getElementById("formulario");
const inputCodigo = document.getElementById("codigo");
const readerDiv = document.getElementById("reader");
const ayudaTexto = document.getElementById("ayuda");
const installBtn = document.getElementById("installBtn");

// Desactivar autocompletado del navegador
inputCodigo.setAttribute('autocomplete', 'off');
inputCodigo.setAttribute('spellcheck', 'false');
inputCodigo.setAttribute('autocapitalize', 'off');
inputCodigo.setAttribute('autocorrect', 'off');
inputCodigo.setAttribute('data-form-type', 'other');
form.setAttribute('autocomplete', 'off');

let scannerActivo = false;
let deferredPrompt;
let puedeEscanear = true;
let ultimoCodigoEscaneado = "";
let datosYaCargados = false; // Control para evitar consultas automáticas repetidas

// Configuración de Google Vision API
const GOOGLE_VISION_CONFIG = {
  apiKey: '', // Se configurará después
  enabled: false,
  monthlyLimit: 950, // Límite de seguridad (50 menos que el gratuito)
  dailyLimit: 32, // ~1000/31 días
  warningThreshold: 800 // Aviso cuando llegue a 800 usos
};

// Control de uso de la API
class GoogleVisionUsageTracker {
  constructor() {
    this.storageKey = 'googleVisionUsage';
    this.loadUsage();
  }

  loadUsage() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.usage = JSON.parse(saved);
    } else {
      this.resetMonthlyUsage();
    }
    
    // Verificar si cambió el mes
    const currentMonth = new Date().getMonth();
    if (this.usage.month !== currentMonth) {
      this.resetMonthlyUsage();
    }
  }

  resetMonthlyUsage() {
    this.usage = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      monthlyCount: 0,
      dailyCount: 0,
      lastUsedDate: new Date().toDateString(),
      history: []
    };
    this.saveUsage();
  }

  saveUsage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.usage));
  }

  canUseAPI() {
    const today = new Date().toDateString();
    
    // Resetear contador diario si cambió el día
    if (this.usage.lastUsedDate !== today) {
      this.usage.dailyCount = 0;
      this.usage.lastUsedDate = today;
      this.saveUsage();
    }

    // Verificar límites
    const monthlyOk = this.usage.monthlyCount < GOOGLE_VISION_CONFIG.monthlyLimit;
    const dailyOk = this.usage.dailyCount < GOOGLE_VISION_CONFIG.dailyLimit;
    
    return monthlyOk && dailyOk;
  }

  recordUsage() {
    this.usage.monthlyCount++;
    this.usage.dailyCount++;
    this.usage.history.push({
      date: new Date().toISOString(),
      count: this.usage.monthlyCount
    });
    
    // Mantener solo los últimos 50 registros
    if (this.usage.history.length > 50) {
      this.usage.history = this.usage.history.slice(-50);
    }
    
    this.saveUsage();
  }

  getUsageStatus() {
    return {
      monthlyUsed: this.usage.monthlyCount,
      monthlyLimit: GOOGLE_VISION_CONFIG.monthlyLimit,
      dailyUsed: this.usage.dailyCount,
      dailyLimit: GOOGLE_VISION_CONFIG.dailyLimit,
      remainingMonthly: GOOGLE_VISION_CONFIG.monthlyLimit - this.usage.monthlyCount,
      remainingDaily: GOOGLE_VISION_CONFIG.dailyLimit - this.usage.dailyCount,
      canUse: this.canUseAPI()
    };
  }

  showUsageWarning() {
    const status = this.getUsageStatus();
    
    if (status.monthlyUsed >= GOOGLE_VISION_CONFIG.warningThreshold) {
      return `⚠️ <strong>Límite cerca:</strong> ${status.monthlyUsed}/${status.monthlyLimit} usos mensuales`;
    }
    
    if (status.dailyUsed >= (GOOGLE_VISION_CONFIG.dailyLimit * 0.8)) {
      return `⚠️ <strong>Límite diario cerca:</strong> ${status.dailyUsed}/${status.dailyLimit} usos hoy`;
    }
    
    return null;
  }
}

// Instancia global del tracker
const visionUsageTracker = new GoogleVisionUsageTracker();

// Función principal para detectar con Google Vision API via Backend
async function detectarConGoogleVision(img) {
  console.log('📸 Preparando imagen para Google Vision...');
  
  // Convertir imagen a base64
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Optimizar tamaño para la API
  let { width, height } = img;
  const maxSize = 1024;
  
  if (width > maxSize || height > maxSize) {
    const ratio = Math.min(maxSize / width, maxSize / height);
    width *= ratio;
    height *= ratio;
  }
  
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
  
  // Convertir a base64
  const base64 = canvas.toDataURL('image/jpeg', 0.9);
  
  console.log('📡 Enviando a backend proxy...');
  
  try {
    // Usar tu backend desplegado en Vercel
    const response = await fetch('https://contador-apicloudvision.vercel.app/api/vision-detect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        image: base64,
        userAgent: navigator.userAgent.substring(0, 50),
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Backend error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('📊 Respuesta del backend:', result);
    
    // El backend maneja el conteo, aquí solo registramos localmente para UI
    if (result.success) {
      visionUsageTracker.recordUsage();
      console.log('✅ Google Vision API usada exitosamente - contador local actualizado');
      console.log('💡 El contador del backend se actualiza automáticamente en el servidor');
      return extraerCodigoDeTexto(result.visionData);
    } else {
      throw new Error(result.error || 'Error en detección');
    }
  } catch (error) {
    console.log('❌ Error específico del backend:', error.message);
    
    // Diagnóstico específico para diferentes tipos de error
    if (error.message.includes('500')) {
      console.log('🔧 Error 500: Problema interno del servidor');
      console.log('   Posibles causas:');
      console.log('   • Variable GOOGLE_VISION_API_KEY no configurada en Vercel');
      console.log('   • Problema en el código de la función serverless');
      console.log('   • API Key inválida o límites excedidos');
      console.log('   💡 Ejecuta diagnosticarBackend() para más detalles');
    } else if (error.message.includes('CORS') || error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('CORS_ERROR: Backend no accesible desde este dominio');
    }
    
    // Para otros errores, relanzar
    throw error;
  }
}

// Extraer códigos de barras del texto detectado por Google Vision
function extraerCodigoDeTexto(visionResult) {
  const annotations = visionResult.responses[0]?.textAnnotations || [];
  
  if (annotations.length === 0) {
    console.log('❌ Google Vision no detectó texto');
    return null;
  }
  
  // El primer elemento es todo el texto detectado
  const fullText = annotations[0]?.description || '';
  console.log('📝 Texto completo detectado:', fullText);
  
  // Buscar patrones de códigos de barras comunes
  const patterns = [
    /\b(\d{13})\b/g,        // EAN-13
    /\b(\d{12})\b/g,        // UPC-A  
    /\b(\d{8})\b/g,         // EAN-8
    /\b(\d{6,8})\b/g,       // UPC-E
    /\b([A-Z0-9\-]{4,20})\b/g, // Code 39/128 alfanuméricos
  ];
  
  for (const pattern of patterns) {
    const matches = [...fullText.matchAll(pattern)];
    for (const match of matches) {
      const codigo = match[1].trim();
      console.log(`🔍 Código candidato encontrado: ${codigo}`);
      
      // Validar el código según su longitud
      if (validarCodigoPorLongitud(codigo)) {
        console.log(`✅ Código válido seleccionado: ${codigo}`);
        return codigo;
      }
    }
  }
  
  console.log('❌ No se encontraron códigos válidos en el texto');
  return null;
}

// Validar código por longitud y formato
function validarCodigoPorLongitud(codigo) {
  if (/^\d{13}$/.test(codigo)) return true; // EAN-13
  if (/^\d{12}$/.test(codigo)) return true; // UPC-A
  if (/^\d{8}$/.test(codigo)) return true;  // EAN-8
  if (/^\d{6,8}$/.test(codigo)) return true; // UPC-E
  if (/^[A-Z0-9\-]{4,20}$/.test(codigo) && codigo.length >= 4) return true; // Otros códigos
  
  return false;
}

// Función para diagnosticar problemas del backend
async function diagnosticarBackend() {
  console.log('🔍 Iniciando diagnóstico del backend...');
  
  // Mostrar indicador de carga en la UI
  const diagnosticoDiv = document.getElementById('diagnostico-resultado');
  if (diagnosticoDiv) {
    diagnosticoDiv.innerHTML = `
      <div class="alert alert-info">
        <div class="spinner-border spinner-border-sm me-2" role="status"></div>
        🔍 Diagnosticando backend...
      </div>
    `;
  }
  
  let resultadoUI = '';
  
  try {
    // 1. Verificar conectividad básica
    const statsResponse = await fetch('https://contador-apicloudvision.vercel.app/api/stats');
    if (statsResponse.ok) {
      console.log('✅ Endpoint /api/stats funciona correctamente');
      const stats = await statsResponse.json();
      console.log('📊 Estadísticas:', stats);
      resultadoUI += `<div class="alert alert-success">✅ Endpoint /api/stats funciona correctamente</div>`;
    } else {
      console.log('❌ Endpoint /api/stats falló:', statsResponse.status);
      resultadoUI += `<div class="alert alert-danger">❌ Endpoint /api/stats falló: ${statsResponse.status}</div>`;
    }
    
    // 2. Probar endpoint de vision-detect con imagen real
    console.log('🧪 Probando vision-detect con imagen de prueba...');
    const testResponse = await fetch('https://contador-apicloudvision.vercel.app/api/vision-detect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
        userId: 'diagnostic'
      })
    });
    
    const testResult = await testResponse.json();
    console.log('🧪 Respuesta completa vision-detect:', testResult);
    console.log('📊 Status HTTP:', testResponse.status);
    
    // Análisis detallado del error
    if (testResponse.status === 500) {
      console.log('🔧 Error 500 detectado - Analizando causa específica:');
      
      if (testResult.details) {
        if (testResult.details.includes('BILLING_DISABLED')) {
          console.log('🏦 PROBLEMA: Facturación no habilitada en el proyecto correcto');
          console.log('💡 Verifica que el proyecto #1070150612422 tenga facturación activa');
          console.log('🔗 Ve a: https://console.cloud.google.com/billing');
          resultadoUI += `
            <div class="alert alert-warning">
              <h6>🏦 Problema de Facturación</h6>
              <p>La facturación no está habilitada en el proyecto correcto (#1070150612422)</p>
              <small><a href="https://console.cloud.google.com/billing" target="_blank">Ve a Google Cloud Billing</a></small>
            </div>
          `;
        } else if (testResult.details.includes('API_KEY_INVALID')) {
          console.log('🔑 PROBLEMA: API Key inválida');
          resultadoUI += `<div class="alert alert-danger">🔑 API Key inválida - verifica la configuración en Vercel</div>`;
        } else if (testResult.details.includes('PERMISSION_DENIED')) {
          console.log('🚫 PROBLEMA: Permisos denegados - Vision API no habilitada');
          console.log('💡 Ve a: https://console.cloud.google.com/apis/library/vision.googleapis.com');
          resultadoUI += `
            <div class="alert alert-warning">
              <h6>🚫 Vision API No Habilitada</h6>
              <p>La Vision API no está habilitada en tu proyecto</p>
              <small><a href="https://console.cloud.google.com/apis/library/vision.googleapis.com" target="_blank">Habilitar Vision API</a></small>
            </div>
          `;
        } else {
          console.log('❓ Error desconocido en Google Vision API');
          console.log('📋 Detalles completos:', testResult.details);
          resultadoUI += `<div class="alert alert-danger">❓ Error desconocido en Google Vision API</div>`;
        }
      }
    } else if (testResponse.status === 200) {
      console.log('🎉 ¡Google Vision API funcionando correctamente!');
      resultadoUI += `
        <div class="alert alert-success">
          <h6>🎉 ¡Google Vision API Activa!</h6>
          <p>✅ La detección premium está funcionando correctamente</p>
          <small class="text-muted">Fallback automático: Local → Google Vision</small>
        </div>
      `;
    }
    
  } catch (error) {
    console.log('❌ Error en diagnóstico:', error.message);
    if (error.message.includes('CORS')) {
      console.log('🔧 Problema de CORS - verifica configuración de headers');
      resultadoUI += `<div class="alert alert-danger">🔧 Problema de CORS - verifica configuración de headers</div>`;
    } else {
      resultadoUI += `<div class="alert alert-danger">❌ Error en diagnóstico: ${error.message}</div>`;
    }
  }
  
  // Mostrar resultado en la UI
  if (diagnosticoDiv) {
    diagnosticoDiv.innerHTML = resultadoUI;
  }
}

// Función para verificar estado del backend
async function verificarBackend() {
  try {
    const response = await fetch('https://contador-apicloudvision.vercel.app/api/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (response.ok) {
      const stats = await response.json();
      console.log('✅ Backend activo. Estadísticas:', stats);
      return { 
        activo: true, 
        stats: stats,
        mensaje: `Google Vision API activa y funcional`
      };
    } else {
      console.log('⚠️ Backend responde pero con error:', response.status);
      return { 
        activo: false, 
        mensaje: `Backend con error: ${response.status}`
      };
    }
  } catch (error) {
    console.log('❌ Backend no disponible:', error.message);
    return { 
      activo: false, 
      mensaje: 'Backend no disponible - usando detección local'
    };
  }
}

// Función para mostrar estadísticas de uso con estado del backend
async function mostrarEstadisticasUso() {
  const status = visionUsageTracker.getUsageStatus();
  const warning = visionUsageTracker.showUsageWarning();
  
  let mensaje = `📊 <strong>Uso local de este dispositivo:</strong><br>`;
  mensaje += `• Mensual: ${status.monthlyUsed}/${status.monthlyLimit} (quedan ${status.remainingMonthly})<br>`;
  mensaje += `• Diario: ${status.dailyUsed}/${status.dailyLimit} (quedan ${status.remainingDaily})`;
  
  if (warning) {
    mensaje += `<br>${warning}`;
  }
  
  // Verificar estado del backend si está habilitado
  if (GOOGLE_VISION_CONFIG.enabled) {
    try {
      const backendStatus = await verificarBackend();
      mensaje += `<br><br>🌐 <strong>Backend:</strong> ${backendStatus.mensaje}`;
    } catch (error) {
      mensaje += `<br><br>🌐 <strong>Backend:</strong> Error verificando estado`;
    }
  }
  
  return mensaje;
}
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
  return null;
}

// NUEVO: historial de productos y resultado independiente
const historialDiv = document.getElementById("historial");
const resultadoDiv = document.getElementById("resultado");

// --- IndexedDB helpers ---
const DB_NAME = 'verificadorB9DB';
const DB_STORE = 'productos';
const DB_STORE_PROMOCIONES = 'promociones';
let db;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 2); // Incrementamos versión para el upgrade
    request.onupgradeneeded = function(e) {
      db = e.target.result;
      
      // Store de productos
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: 'id', autoIncrement: true });
      }
      
      // Store de promociones (nuevo)
      if (!db.objectStoreNames.contains(DB_STORE_PROMOCIONES)) {
        db.createObjectStore(DB_STORE_PROMOCIONES, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = function(e) {
      db = e.target.result;
      resolve(db);
    };
    request.onerror = function(e) {
      reject(e);
    };
  });
}

function clearProductos() {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      tx.objectStore(DB_STORE).clear();
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
  });
}

function saveProductos(productos) {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readwrite');
      const store = tx.objectStore(DB_STORE);
      productos.forEach(p => store.add(p));
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
  });
}

function getAllProductos() {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, 'readonly');
      const store = tx.objectStore(DB_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = reject;
    });
  });
}

// --- Funciones IndexedDB para promociones ---
function clearPromociones() {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE_PROMOCIONES, 'readwrite');
      tx.objectStore(DB_STORE_PROMOCIONES).clear();
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
  });
}

function savePromociones(promociones) {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE_PROMOCIONES, 'readwrite');
      const store = tx.objectStore(DB_STORE_PROMOCIONES);
      promociones.forEach(p => store.add(p));
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
  });
}

function getAllPromociones() {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE_PROMOCIONES, 'readonly');
      const store = tx.objectStore(DB_STORE_PROMOCIONES);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = reject;
    });
  });
}

// --- Sugerencias UI ---
const sugerenciasDiv = document.createElement('div');
sugerenciasDiv.id = 'sugerenciasDiv';
sugerenciasDiv.className = 'list-group position-absolute w-100';
sugerenciasDiv.style.zIndex = '1000';
sugerenciasDiv.style.maxHeight = '200px';
sugerenciasDiv.style.overflowY = 'auto';
sugerenciasDiv.style.top = '100%';
sugerenciasDiv.style.left = '0';
sugerenciasDiv.style.right = '0';
inputCodigo.parentNode.style.position = 'relative';
inputCodigo.parentNode.appendChild(sugerenciasDiv);


const actualizarDiv = document.createElement('div');
actualizarDiv.className = "d-flex flex-column align-items-center mb-3";
actualizarDiv.innerHTML = `
<button type="button" id="btnPromociones" class="ant-btn css-1r8qqf1 ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm mb-4" style="border-radius:6px; border:1px solid #ffc107; background:#fff8dc; color:#856404; font-size:0.9rem; padding:2px 12px; margin-left:20px;">
        🏷️ Ver Promociones
      </button>
  <div class="d-flex justify-content-between align-items-center w-100 mb-2">
    <div class="d-flex flex-column flex-md-row align-items-md-end gap-2">
      <h5 class="ant-typography css-1r8qqf1 mb-0">Productos</h5>
      <span id="ultimaActualizacion" class="ant-typography css-1r8qqf1 ms-md-4" style="font-size:1rem;">Última actualización: nunca </span>
      
    </div>
    <div class="d-flex gap-2">
      
      <button type="button" id="btnActualizar" class="ant-btn css-1r8qqf1 ant-btn-default ant-btn-color-default ant-btn-variant-outlined ant-btn-sm" style="border-radius:6px; border:1px solid #d9d9d9; background:#fff; color:#222; font-size:1rem; padding:2px 16px; margin-left:15px;">
        <span id="btnTexto">Actualizar</span>
        <span id="btnSpinner" class="d-none spinner-border spinner-border-sm ms-2" role="status"></span>
      </button>
    </div>
  </div>
  <div id="mensajeActualizacion" class="text-center" style="min-height: 1.5rem;"></div>
`;
historialDiv.parentNode.insertBefore(actualizarDiv, historialDiv);

const btnActualizar = actualizarDiv.querySelector("#btnActualizar");
const btnPromociones = actualizarDiv.querySelector("#btnPromociones");
const ultimaActualizacionSpan = actualizarDiv.querySelector("#ultimaActualizacion");
const btnTexto = actualizarDiv.querySelector("#btnTexto");
const btnSpinner = actualizarDiv.querySelector("#btnSpinner");
const mensajeActualizacion = actualizarDiv.querySelector("#mensajeActualizacion");

// Función para mostrar productos con promociones
async function mostrarProductosConPromociones() {
  const productos = await getAllProductos();
  const productosConPromociones = [];
  
  // Procesar productos de forma asíncrona para usar detectarPromocionReal
  for (const producto of productos) {
    try {
      const promociones = await detectarPromocionReal(producto);
      if (promociones.length > 0) {
        productosConPromociones.push(producto);
      }
    } catch (error) {
      console.warn(`⚠️ Error al detectar promociones para SKU ${producto.pr_sku}:`, error);
    }
  }

  if (productosConPromociones.length === 0) {
    resultadoDiv.innerHTML = `
      <div class="alert alert-info" role="alert">
        <h5>🏷️ No se encontraron productos con promociones</h5>
        <p class="mb-0">Puede ser que no haya promociones activas en este momento o que el servicio no esté disponible.</p>
      </div>
    `;
    renderHistorial();
    return;
  }

  const promocionesHTML = [];
  
  // Procesar solo los primeros 20 productos
  for (const producto of productosConPromociones.slice(0, 20)) {
    try {
      const promociones = await detectarPromocionReal(producto);
      const precioBase = Number(producto.pr_precio) || Number(producto.L1) || 0;
      const precioConIVA = Math.round(precioBase * 1.16 * 100) / 100;
      
      const promocionesHTML_inner = promociones.map(promo => {
        let badge = 'bg-success';
        let texto = promo.detalle || promo.nombre_promocion || 'PROMO';
        
        if (promo.tipo.includes('precio especial')) {
          badge = 'bg-danger';
          texto = `🔥 ${texto}`;
        } else if (promo.es_oficial) {
          badge = 'bg-warning text-dark';
          texto = `🏷️ ${texto}`;
        }
        
        return `<span class="badge ${badge} me-1 mb-1" style="font-size:0.75rem;">${texto}</span>`;
      }).join('');

      promocionesHTML.push(`
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <div class="card h-100 border-warning" style="cursor:pointer;" onclick="mostrarProductoPromocion('${producto.pr_sku}')">
            <div class="card-body p-3">
              <h6 class="card-title text-truncate" title="${producto.pr_name}">${producto.pr_name}</h6>
              <div class="mb-2">${promocionesHTML_inner}</div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="text-success fw-bold">$${precioConIVA.toFixed(2)}</span>
                <small class="text-muted">SKU: ${producto.pr_sku}</small>
              </div>
            </div>
          </div>
        </div>
      `);
    } catch (error) {
      console.warn(`⚠️ Error al procesar producto ${producto.pr_sku}:`, error);
    }
  }

  resultadoDiv.innerHTML = `
    <div class="mb-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-warning">🏷️ Productos con Promociones</h4>
        <span class="badge bg-warning text-dark">${productosConPromociones.length} encontrados</span>
      </div>
      <div class="alert alert-warning text-center mb-3">
        <small><strong>⚠️ Las promociones solo aplican pagando de contado</strong></small>
      </div>
      <div class="row">
        ${promocionesHTML.join('')}
      </div>
      ${productosConPromociones.length > 20 ? 
        `<div class="alert alert-info mt-3">
          <small>Mostrando los primeros 20 productos. Hay ${productosConPromociones.length - 20} más con promociones.</small>
        </div>` : ''
      }
    </div>
  `;
  
  renderHistorial();
}

// Función global para mostrar detalle desde la lista de promociones
window.mostrarProductoPromocion = async function(sku) {
  const productos = await getAllProductos();
  const producto = productos.find(p => p.pr_sku === sku || p.pr_gtin === sku);
  if (producto) {
    mostrarDetalleProducto(producto);
    // Agregar al historial
    const productoHist = { ...producto, FECHA_ESCANEO: new Date().toISOString() };
    historial.unshift(productoHist);
    setCookie("historial", JSON.stringify(historial), 30);
    renderHistorial();
  }
};

// URLs del backend - agregando endpoint de promociones
const urlBase = "https://verificadorb9-backend.vercel.app/api/productos";
const urlBaseConCodigos = "https://verificadorb9-backend.vercel.app/api/productos-con-codigos";
const urlPromociones = "https://verificadorb9-backend.vercel.app/api/promociones";

// Configuración de endpoints
const CONFIG_ENDPOINTS = {
  productosBasicos: urlBase,
  productosConCodigos: urlBaseConCodigos,
  promociones: urlPromociones,
  usarCodigosBarras: true, // Habilitar/deshabilitar integración de códigos
  fallbackTiempo: 5000 // 5 segundos timeout para fallback (reducido para mayor velocidad)
};

function tiempoRelativo(fecha) {
  if (!fecha) return "Nunca";
  const ahora = Date.now();
  const diff = Math.floor((ahora - fecha) / 1000);
  if (diff < 60) return `Hace ${diff} segundos`;
  if (diff < 3600) return `Hace ${Math.floor(diff/60)} minutos`;
  if (diff < 86400) return `Hace ${Math.floor(diff/3600)} horas`;
  return `Hace ${Math.floor(diff/86400)} días`;
}

function renderUltimaActualizacion() {
  const productosTs = localStorage.getItem("productos_ts");
  const promocionesTs = localStorage.getItem("promociones_ts");
  
  let mensaje = "Nunca actualizado";
  
  if (productosTs && promocionesTs) {
    const tiempoProductos = tiempoRelativo(Number(productosTs));
    const tiempoPromociones = tiempoRelativo(Number(promocionesTs));
    
    // Si ambos timestamps son similares (menos de 1 minuto de diferencia), mostrar uno solo
    const diff = Math.abs(Number(productosTs) - Number(promocionesTs));
    if (diff < 60000) { // menos de 1 minuto
      mensaje = `Última actualización: ${tiempoProductos}`;
    } else {
      mensaje = `Productos: ${tiempoProductos} | Promociones: ${tiempoPromociones}`;
    }
  } else if (productosTs) {
    mensaje = `Productos: ${tiempoRelativo(Number(productosTs))} | Promociones: nunca`;
  } else if (promocionesTs) {
    mensaje = `Productos: nunca | Promociones: ${tiempoRelativo(Number(promocionesTs))}`;
  }
  
  ultimaActualizacionSpan.textContent = mensaje;
}

// Función para actualizar progreso con porcentajes
function actualizarProgreso(porcentaje, mensaje, detalle = '') {
  const width = Math.min(100, Math.max(0, porcentaje));
  const color = porcentaje >= 100 ? 'success' : porcentaje >= 50 ? 'warning' : 'primary';
  
  mensajeActualizacion.innerHTML = `
    <div class="mb-2">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <small class="fw-medium">${mensaje}</small>
        <small class="text-muted">${porcentaje}%</small>
      </div>
      <div class="progress" style="height: 8px;">
        <div class="progress-bar bg-${color}" role="progressbar" style="width: ${width}%; transition: width 0.3s ease;" aria-valuenow="${porcentaje}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      ${detalle ? `<small class="text-muted mt-1 d-block">${detalle}</small>` : ''}
    </div>
  `;
}

// Función para actualizar tanto productos como promociones
async function actualizarTodosLosDatos() {
  console.log('🚀 Iniciando actualización con progreso...');
  
  // Mostrar estado inicial
  btnActualizar.disabled = true;
  btnTexto.textContent = "Actualizando...";
  btnSpinner.classList.remove("d-none");
  
  const startTime = Date.now();
  let productosCompletado = false;
  let promocionesCompletado = false;
  
  // Función para actualizar progreso general
  const actualizarProgresoGeneral = () => {
    let progreso = 0;
    let mensaje = 'Iniciando...';
    let detalle = '';
    
    if (!productosCompletado && !promocionesCompletado) {
      progreso = 10;
      mensaje = 'Consultando 3 endpoints...';
      detalle = 'Productos básicos, códigos de barras y promociones';
    } else if (productosCompletado && !promocionesCompletado) {
      progreso = 70;
      mensaje = '2 endpoints completados, finalizando...';
      detalle = 'Cargando promociones';
    } else if (!productosCompletado && promocionesCompletado) {
      progreso = 70;
      mensaje = '1 endpoint completado, finalizando...';
      detalle = 'Procesando productos';
    } else {
      progreso = 100;
      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      mensaje = '✅ Los 3 endpoints consultados';
      detalle = `Finalizada en ${duration} segundos`;
    }
    
    actualizarProgreso(progreso, mensaje, detalle);
  };
  
  // Progreso inicial
  actualizarProgresoGeneral();
  
  try {
    // Simular progreso inicial
    await new Promise(resolve => setTimeout(resolve, 200));
    actualizarProgreso(25, 'Consultando los 3 endpoints...', 'Conectando con todos los servidores');
    
    // Ejecutar ambas cargas en paralelo
    const promiseProductos = cargarProductosRapido().then(result => {
      productosCompletado = true;
      actualizarProgresoGeneral();
      return result;
    });
    
    const promisePromociones = cargarPromocionesRapido().then(result => {
      promocionesCompletado = true;
      actualizarProgresoGeneral();
      return result;
    });
    
    // Simular progreso intermedio
    setTimeout(() => {
      if (!productosCompletado || !promocionesCompletado) {
        actualizarProgreso(50, 'Descargando desde múltiples endpoints...', 'Básicos, códigos de barras y promociones');
      }
    }, 1000);
    
    const [resultadoProductos, resultadoPromociones] = await Promise.allSettled([
      promiseProductos,
      promisePromociones
    ]);

    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`⚡ Actualización completada en ${duration}s`);

    // Verificar resultados y mostrar estado final
    const productosOk = resultadoProductos.status === 'fulfilled';
    const promocionesOk = resultadoPromociones.status === 'fulfilled';

    if (productosOk && promocionesOk) {
      const totalProductos = resultadoProductos.value?.productos || 0;
      const totalPromociones = resultadoPromociones.value?.promociones || 0;
      const endpointsProductos = resultadoProductos.value?.detalles || '';
      const endpointsPromociones = resultadoPromociones.value?.detalles || '';
      
      actualizarProgreso(100, '✅ Todos los endpoints consultados', 
        `${totalProductos} productos (${endpointsProductos}), ${totalPromociones} promociones (${endpointsPromociones}) - ${duration}s`);
    } else if (productosOk || promocionesOk) {
      actualizarProgreso(75, '⚠️ Consulta parcial de endpoints', 
        `Algunos endpoints fallaron (${duration}s)`);
    } else {
      actualizarProgreso(25, '❌ Error consultando endpoints', 
        `Todos los endpoints fallaron (${duration}s)`);
    }

    // Reportar errores específicos
    if (resultadoProductos.status === 'rejected') {
      console.error('Error al cargar productos:', resultadoProductos.reason);
    }
    if (resultadoPromociones.status === 'rejected') {
      console.error('Error al cargar promociones:', resultadoPromociones.reason);
    }

  } catch (error) {
    console.error('Error en actualización:', error);
    actualizarProgreso(0, '❌ Error de conexión', 'Verifique su conexión a internet');
  } finally {
    // Restaurar botón
    btnActualizar.disabled = false;
    btnTexto.textContent = "Actualizar";
    btnSpinner.classList.add("d-none");
    
    // Limpiar mensaje después de 4 segundos
    setTimeout(() => { 
      mensajeActualizacion.textContent = ""; 
      renderUltimaActualizacion();
    }, 4000);
  }
}

// Versión optimizada que consulta TODOS los endpoints
async function cargarProductosRapido() {
  const timestamp = Date.now();
  
  if (!navigator.onLine) {
    throw new Error('Sin conexión a internet');
  }

  let productos = [];
  let endpointsConsultados = [];
  
  console.log('📡 Consultando TODOS los endpoints de productos...');
  
  // 1. Intentar endpoint con códigos de barras
  if (CONFIG_ENDPOINTS.usarCodigosBarras) {
    try {
      const urlConCodigos = `${CONFIG_ENDPOINTS.productosConCodigos}?t=${timestamp}`;
      console.log('🔄 Consultando endpoint con códigos de barras...');
      
      const responseConCodigos = await Promise.race([
        fetch(urlConCodigos, { 
          cache: "no-store",
          mode: 'cors', // Especificar modo CORS explícitamente
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), CONFIG_ENDPOINTS.fallbackTiempo)
        )
      ]);
      
      if (responseConCodigos.ok) {
        const dataConCodigos = await responseConCodigos.json();
        if (dataConCodigos.success && dataConCodigos.productos) {
          productos = dataConCodigos.productos;
          endpointsConsultados.push('códigos de barras ✅');
          console.log('✅ Productos cargados con códigos de barras:', dataConCodigos.productos.length);
        } else {
          endpointsConsultados.push('códigos de barras ⚠️ (sin datos)');
        }
      } else {
        endpointsConsultados.push(`códigos de barras ❌ (HTTP ${responseConCodigos.status})`);
      }
    } catch (error) {
      console.warn('⚠️ Error con endpoint de códigos de barras:', error.message);
      
      // Identificar tipo de error específico
      if (error.message.includes('CORS') || error.message.includes('Failed to fetch')) {
        endpointsConsultados.push('códigos de barras ❌ (CORS/Red)');
        console.log('🔧 Sugerencia: Verificar configuración CORS en el backend para /api/productos-con-codigos');
      } else {
        endpointsConsultados.push('códigos de barras ❌ (timeout/error)');
      }
    }
  }
  
  // 2. Consultar endpoint básico SIEMPRE (no solo como fallback)
  try {
    const urlBasico = `${CONFIG_ENDPOINTS.productosBasicos}?t=${timestamp}`;
    console.log('🔄 Consultando endpoint básico...');
    
    const responseBasico = await fetch(urlBasico, { cache: "no-store" });
    
    if (responseBasico.ok) {
      const dataBasico = await responseBasico.json();
      const productosBasicos = Array.isArray(dataBasico) ? dataBasico : [];
      
      // Si no tenemos productos del primer endpoint, usar estos
      if (productos.length === 0 && productosBasicos.length > 0) {
        productos = productosBasicos;
      }
      
      endpointsConsultados.push('básico ✅');
      console.log('✅ Endpoint básico consultado:', productosBasicos.length, 'productos');
    } else {
      endpointsConsultados.push('básico ❌ (error HTTP)');
    }
  } catch (error) {
    console.warn('⚠️ Error con endpoint básico:', error.message);
    endpointsConsultados.push('básico ❌ (error)');
  }
  
  // Verificar que tenemos productos
  if (productos.length === 0) {
    throw new Error('No se pudieron cargar productos de ningún endpoint');
  }
  
  // Guardar productos en IndexedDB
  await clearProductos();
  await saveProductos(productos);
  
  // Actualizar timestamp
  localStorage.setItem("productos_ts", String(timestamp));
  
  console.log('📊 Resumen endpoints productos:', endpointsConsultados.join(', '));
  
  return { 
    productos: productos.length, 
    endpoints: endpointsConsultados,
    detalles: `${endpointsConsultados.length} endpoints consultados`
  };
}

// Versión optimizada de cargarPromociones con mejor reporte
async function cargarPromocionesRapido() {
  console.log('🔄 Consultando endpoint de promociones...');
  
  const response = await fetch(CONFIG_ENDPOINTS.promociones, { 
    cache: "no-store",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  
  const data = await response.json();
  
  if (data.success && data.data && data.data.promociones) {
    const promociones = data.data.promociones;
    console.log(`✅ Endpoint promociones consultado: ${promociones.length} promociones`);
    
    // Guardar promociones en IndexedDB
    try {
      await clearPromociones();
      await savePromociones(promociones);
      
      // Actualizar timestamp de promociones
      const timestamp = Date.now();
      localStorage.setItem("promociones_ts", String(timestamp));
      
      console.log('💾 Promociones guardadas en IndexedDB');
    } catch (error) {
      console.error('❌ Error guardando promociones en IndexedDB:', error);
    }
    
    return { 
      promociones: promociones.length,
      detalles: 'promociones ✅'
    };
  } else {
    throw new Error('Formato de promociones inválido');
  }
}

btnActualizar.addEventListener("click", actualizarTodosLosDatos);
btnPromociones.addEventListener("click", verPromociones);
renderUltimaActualizacion();

// Actualizar el tiempo relativo cada minuto
setInterval(renderUltimaActualizacion, 60000);

// Descargar productos la primera vez si no existen en IndexedDB
openDB().then(async db => {
  const txProductos = db.transaction(DB_STORE, 'readonly');
  const storeProductos = txProductos.objectStore(DB_STORE);
  const reqProductos = storeProductos.count();
  
  const txPromociones = db.transaction(DB_STORE_PROMOCIONES, 'readonly');
  const storePromociones = txPromociones.objectStore(DB_STORE_PROMOCIONES);
  const reqPromociones = storePromociones.count();
  
  Promise.all([
    new Promise(resolve => { reqProductos.onsuccess = () => resolve(reqProductos.result); }),
    new Promise(resolve => { reqPromociones.onsuccess = () => resolve(reqPromociones.result); })
  ]).then(([countProductos, countPromociones]) => {
    const hayProductos = countProductos > 0;
    const hayPromociones = countPromociones > 0;
    
    if (!hayProductos && !hayPromociones) {
      console.log('🔄 Primera carga: cargando productos y promociones...');
      actualizarTodosLosDatos();
    } else if (!hayProductos) {
      console.log('🔄 Sin productos: cargando productos y promociones...');
      actualizarTodosLosDatos();
    } else if (!hayPromociones && !datosYaCargados) {
      console.log('🔄 Productos existentes: cargando solo promociones...');
      cargarPromocionesRapido();
    } else {
      console.log('✅ Datos locales encontrados: productos:', countProductos, 'promociones:', countPromociones);
    }
    
    datosYaCargados = true;
  }).catch(error => {
    console.error('Error verificando datos locales:', error);
    // En caso de error, cargar todo
    actualizarTodosLosDatos();
    datosYaCargados = true;
  });
});

// Cargar historial desde cookie si existe
let historial = [];
const historialCookie = getCookie("historial");
if (historialCookie) {
  try {
    historial = JSON.parse(historialCookie);
  } catch (e) {
    historial = [];
  }
}

// Botón para limpiar historial centrado verticalmente
function renderClearButton() {
  return `
    <div class="d-flex align-items-center justify-content-end h-100">
      <button id="limpiarHistorialBtn" class="btn btn-danger btn-sm">Limpiar historial</button>
    </div>
  `;
}

function renderHistorial() {
  historialDiv.innerHTML = `
    <div class="card shadow-sm mb-3 w-100">
      <div class="card-header bg-primary text-white d-flex flex-column flex-md-row justify-content-between align-items-center">
        <strong>Historial de productos escaneados:</strong>
        ${historial.length > 0 ? renderClearButton() : ""}
      </div>
      <div class="card-body p-2">
        ${
          historial.length === 0
            ? '<p class="text-muted mb-0">No hay productos escaneados.</p>'
            : `<ul class="list-group list-group-flush">
                ${historial
                  .map((producto) => {
                    const nombre = producto.pr_name || producto.NOMBRE || "Producto desconocido";
                    const sku = producto.pr_sku || producto.pr_gtin || producto.CODIGO || producto.SKU || "SKU desconocido";
                    const precio = producto.pr_precio || producto.L1 || producto.PRECIO || 0;
                    const precioConIVA = Math.round(precio * 1.16 * 100) / 100;
                    const fecha = producto.FECHA_ESCANEO
                      ? new Date(producto.FECHA_ESCANEO).toLocaleString()
                      : "Fecha desconocida";
                    
                    return `<li class="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
                      <span class="d-flex align-items-center">
                        <strong>${nombre}</strong>
                        <button class="btn btn-link btn-sm ms-2 p-0 copiar-btn" title="Copiar descripción" data-copiar="${nombre}" style="font-size:1.2rem; color:#616161;">
                          <i class="bi bi-clipboard"></i>
                        </button>
                      </span>
                      <span class="small text-secondary ms-md-2 d-flex align-items-center">
                        SKU: <strong class="ms-1">${sku}</strong>
                        <button class="btn btn-link btn-sm ms-2 p-0 copiar-btn" title="Copiar SKU" data-copiar="${sku}" style="font-size:1.2rem; color:#616161;">
                          <i class="bi bi-clipboard"></i>
                        </button>
                      </span>
                      <span class="badge bg-success fs-6 mb-1 mb-md-0 ms-md-2">
                        Precio: $${precioConIVA.toFixed(2)}
                      </span>
                      <span class="text-muted small ms-md-2">Escaneado: ${fecha}</span>
                    </li>`;
                  })
                  .join("")}
              </ul>`
        }
      </div>
    </div>
  `;
  setCookie("historial", JSON.stringify(historial), 30);

  const limpiarBtn = document.getElementById("limpiarHistorialBtn");
  if (limpiarBtn) {
    limpiarBtn.addEventListener("click", () => {
      historial = [];
      setCookie("historial", JSON.stringify(historial), 30);
      renderHistorial();
    });
  }

  // Botones copiar
  const copiarBtns = historialDiv.querySelectorAll('.copiar-btn');
  copiarBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const valor = btn.getAttribute('data-copiar');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(valor).then(() => {
          btn.innerHTML = '<i class="bi bi-clipboard-check"></i>';
          setTimeout(() => {
            btn.innerHTML = '<i class="bi bi-clipboard"></i>';
          }, 1200);
        });
      }
    });
  });
}

// --- ENVÍO AUTOMÁTICO AL ESCANEAR O PEGAR UN SKU ---
inputCodigo.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    form.requestSubmit();
    
    // Desplazamiento automático al área de resultados después de presionar Enter
    setTimeout(() => {
      const resultadoElement = document.getElementById('resultado');
      if (resultadoElement) {
        resultadoElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 300); // Timeout más corto para Enter ya que es más rápido
  }
});




form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let codigo = inputCodigo.value.trim().replace(/\s+$/, "");
  inputCodigo.value = codigo;
  resultadoDiv.innerHTML = "";
  
  // Desplazamiento automático al área de resultados al enviar formulario
  setTimeout(() => {
    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
      resultadoElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  }, 100); // Timeout muy corto para que se vea inmediato
  
  // Limpiar sugerencias al consultar
  sugerenciasDiv.innerHTML = '';
  sugerenciasDiv.style.display = 'none';
  
  if (!codigo) {
    resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">Por favor ingresa un código</div>`;
    renderHistorial();
    inputCodigo.focus();
    return;
  }
  
  inputCodigo.placeholder = "";
  resultadoDiv.innerHTML = `<div class="alert alert-info" role="alert">Buscando producto...</div>`;
  
  let productos = await getAllProductos();
  
  // Búsqueda mejorada que incluye códigos adicionales
  let producto = productos.find(p => {
    // Búsqueda por SKU (tradicional)
    if (String(p.pr_sku) === codigo || String(p.pr_gtin) === codigo) {
      return true;
    }
    
    // Búsqueda por códigos adicionales (si existen)
    if (p.codigos_barras && Array.isArray(p.codigos_barras)) {
      return p.codigos_barras.some(c => String(c) === codigo);
    }
    
    return false;
  });
  
  if (producto) {
    mostrarDetalleProducto(producto);
    
    // Clonar el producto antes de agregarlo al historial
    const productoHist = { ...producto, FECHA_ESCANEO: new Date().toISOString() };
    historial.unshift(productoHist);
    setCookie("historial", JSON.stringify(historial), 30);
    
    inputCodigo.value = "";
    inputCodigo.focus();
    
    // Log de búsqueda para debugging
    if (producto.codigos_barras && producto.codigos_barras.length > 1) {
      console.log(`🎯 Producto encontrado con códigos múltiples:`, {
        sku: producto.pr_sku,
        gtin_principal: producto.pr_gtin,
        codigo_buscado: codigo,
        todos_los_codigos: producto.codigos_barras
      });
    }
    
  } else {
    resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">No se encontró el código ingresado</div>`;
    inputCodigo.value = "";
    inputCodigo.focus();
    setTimeout(() => {
      resultadoDiv.innerHTML = "";
    }, 5000);
    
    // Log de búsqueda fallida para debugging
    console.log(`❌ Código no encontrado: "${codigo}"`);
  }
  
  renderHistorial();
});

// Función NUEVA para detectar promociones usando datos reales del sistema
async function detectarPromocionReal(producto) {
  const sku = (producto.pr_sku || '').toString();
  
  try {
    // Intentar cargar promociones desde IndexedDB primero
    let promociones = await getAllPromociones();
    
    // Si no hay promociones locales, cargar desde el servidor
    if (promociones.length === 0) {
      console.log('🔄 No hay promociones locales, consultando servidor...');
      
      const response = await fetch('https://verificadorb9-backend.vercel.app/api/promociones-mejoradas');
      if (!response.ok) {
        console.log('Error al obtener promociones mejoradas:', response.status);
        return [];
      }
      
      const data = await response.json();
      
      // Verificar el formato de respuesta y extraer promociones
      if (data.status === 'SUCCESS' && data.promoResult) {
        promociones = data.promoResult;
      } else if (Array.isArray(data)) {
        promociones = data;
      } else {
        console.log('❌ Formato de promociones inválido');
        return [];
      }
      
      // Guardar en IndexedDB para futuras consultas
      try {
        await clearPromociones();
        await savePromociones(promociones);
        localStorage.setItem("promociones_ts", String(Date.now()));
        console.log('💾 Promociones guardadas en IndexedDB desde servidor');
      } catch (error) {
        console.warn('⚠️ Error guardando promociones:', error);
      }
    } else {
      console.log('✅ Usando promociones desde IndexedDB:', promociones.length);
    }
    
    console.log('🔍 Buscando promociones para SKU:', sku);
    
    const promocionesEncontradas = [];
    
    // Buscar el SKU en las promociones activas
    for (const promo of promociones) {
      let skusPromocion = [];
      
      // Extraer SKUs de diferentes formatos
      if (promo.skus && Array.isArray(promo.skus)) {
        skusPromocion = promo.skus;
      } else if (promo.pro_grupoProductos_primaria && promo.pro_grupoProductos_primaria.pr_sku) {
        if (Array.isArray(promo.pro_grupoProductos_primaria.pr_sku)) {
          skusPromocion = promo.pro_grupoProductos_primaria.pr_sku;
        } else {
          skusPromocion = promo.pro_grupoProductos_primaria.pr_sku.split(' ').filter(s => s.trim());
        }
      }
      
      if (skusPromocion.includes(sku)) {
        const nombre = promo.pro_nombrePromo || promo.descripcion || promo.nombre || 'Promoción especial';
        const cantidad = promo.pro_cantidad_base || promo.cantidad || promo.qty || '';
        
        // Buscar precio total en múltiples campos posibles
        const precio = promo.pro_precioPromo || 
                      promo.precio || 
                      promo.price || 
                      promo.precioTotal || 
                      promo.precio_total ||
                      promo.pro_precio_total ||
                      promo.total_price ||
                      promo.valor_total ||
                      '';
        
        // Log detallado para debugging con todos los campos de precio disponibles
        console.log(`🎯 PROMOCIÓN ENCONTRADA para SKU ${sku}:`, {
          nombre: nombre,
          cantidad: cantidad,
          precio: precio,
          campos_precio_disponibles: {
            pro_precioPromo: promo.pro_precioPromo,
            precio: promo.precio,
            price: promo.price,
            precioTotal: promo.precioTotal,
            precio_total: promo.precio_total,
            pro_precio_total: promo.pro_precio_total,
            total_price: promo.total_price,
            valor_total: promo.valor_total
          },
          campos_disponibles: Object.keys(promo),
          promo_completa: promo
        });
        
        promocionesEncontradas.push({
          tipo: 'promoción oficial',
          detalle: `🔥 ${nombre}`,
          nombre_promocion: nombre,
          es_oficial: true,
          fuente: 'indexeddb_local',
          id_promocion: promo.idPromo || promo.id,
          cantidad: cantidad,
          precio: precio,
          mensaje: promo.pro_mensaje || promo.mensaje || '',
          tipo_promo: promo.pro_tipoPromo || promo.tipo || '',
          vigencia: promo.validFrom && promo.validTo ? `${promo.validFrom} al ${promo.validTo}` : '',
          // Datos adicionales para debugging
          raw_data: {
            pro_cantidad_base: promo.pro_cantidad_base,
            pro_precioPromo: promo.pro_precioPromo,
            pro_nombrePromo: promo.pro_nombrePromo,
            todos_campos_precio: {
              pro_precioPromo: promo.pro_precioPromo,
              precio: promo.precio,
              price: promo.price,
              precioTotal: promo.precioTotal,
              precio_total: promo.precio_total,
              pro_precio_total: promo.pro_precio_total,
              total_price: promo.total_price,
              valor_total: promo.valor_total
            }
          }
        });
      }
    }
    
    if (promocionesEncontradas.length === 0) {
      console.log(`❌ No hay promociones para SKU: ${sku}`);
    } else {
      console.log(`✅ ${promocionesEncontradas.length} promocion(es) encontrada(s) para SKU: ${sku}`);
    }
    
    return promocionesEncontradas;
    
  } catch (error) {
    console.error('Error obteniendo promociones:', error);
    return [];
  }
}

function mostrarDetalleProducto(producto) {
  let urlImg = "";
  if (producto.pr_imagen && producto.pr_imagen.trim() !== "") {
    if (producto.pr_imagen.startsWith("http")) {
      urlImg = producto.pr_imagen;
    } else {
      let cleanPath = producto.pr_imagen.startsWith("/") ? producto.pr_imagen : `/${producto.pr_imagen}`;
      urlImg = `https://media.megaservicio.net${cleanPath}`;
    }
  }
  
  // Calcular precio con IVA (16%)
  // Si pr_precio es 0, usar L1 como precio base
  let precioBase = Number(producto.pr_precio) || Number(producto.L1) || 0;
  let precioConIVA = Math.round(precioBase * 1.16 * 100) / 100;
  
  // Calcular precio a MSI (precio con IVA + 10% comisión)
  let mesesMSI = 12;
  let comisionMSI = 0.10; // 10%
  let precioMSI = Math.round((precioConIVA * (1 + comisionMSI)) * 100) / 100;
  
  // Preparar información de códigos de barras
  let infoCodigosHTML = '';
  if (producto.codigos_barras && producto.codigos_barras.length > 1) {
    const codigosUnicos = [...new Set(producto.codigos_barras)].filter(c => c && c.trim());
    if (codigosUnicos.length > 1) {
      infoCodigosHTML = `
        <div class="text-secondary mt-2" style="font-size:0.9rem;">
          <strong>Códigos disponibles:</strong> ${codigosUnicos.join(', ')}
        </div>
      `;
    }
  }
  
  // Mostrar producto inmediatamente y cargar promociones después
  renderProductoConPromociones(producto, urlImg, precioConIVA, precioMSI, infoCodigosHTML);
  
  // Cargar promociones de forma asíncrona
  detectarPromocionReal(producto).then(promocionesReales => {
    // Actualizar la vista con las promociones
    actualizarPromocionesEnVista(producto, urlImg, precioConIVA, precioMSI, infoCodigosHTML, promocionesReales);
  }).catch(error => {
    console.error('Error cargando promociones:', error);
    // En caso de error, mostrar sin promociones
    actualizarPromocionesEnVista(producto, urlImg, precioConIVA, precioMSI, infoCodigosHTML, []);
  });
}

// Función para renderizar el producto inicialmente (sin promociones)
function renderProductoConPromociones(producto, urlImg, precioConIVA, precioMSI, infoCodigosHTML) {
  resultadoDiv.innerHTML = `
    <div class="row align-items-center justify-content-center g-0 mb-4" style="padding: 0px 10px;">
      ${urlImg ? `
      <div class="col-12 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0">
        <div style="background:#fff; border-radius:16px; box-shadow:0 4px 24px rgba(0,0,0,0.15); padding:16px; display:flex; justify-content:center; align-items:center; width:240px; height:140px;">
          <img src="${urlImg}" alt="${producto.pr_name}" style="width:218px; height:124px; object-fit:contain; background:#fff; border-radius:12px;">
        </div>
      </div>
      ` : ""}
      <div class="col-12 col-lg-8 text-center">
        <div class="fw-bold" style="font-size:2rem; color:#616161;">${producto.pr_name}</div>
        <div class="d-flex justify-content-center align-items-start gap-4 flex-wrap">
          <div class="text-center">
            <div class="fw-bold text-danger" style="font-size:3.5rem;">$ ${precioConIVA.toFixed(2)} MXN.</div>
            <div class="text-muted" style="font-size:1rem; margin-top:-5px;">CONTADO</div>
          </div>
          <div class="text-center">
            <div class="fw-bold text-primary" style="font-size:3.5rem;">$ ${precioMSI.toFixed(2)} MXN.</div>
            <div class="text-muted" style="font-size:1rem; margin-top:-5px;">MSI</div>
          </div>
        </div>
        <div class="text-secondary" style="font-size:1rem;">SKU: <b>${producto.pr_sku}</b></div>
        ${infoCodigosHTML}
        <div id="promociones-container" class="mt-3">
          <div class="text-center text-muted">
            <small>🔍 Verificando promociones...</small>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Función para actualizar las promociones una vez cargadas
function actualizarPromocionesEnVista(producto, urlImg, precioConIVA, precioMSI, infoCodigosHTML, promociones) {
  console.log('🔍 Actualizando promociones en vista:', promociones);
  
  let infoPromocionesHTML = '';
  
  if (promociones.length > 0) {
    // Filtrar promociones oficiales (del backend o IndexedDB)
    const promocionesOficiales = promociones.filter(promo => 
      promo.es_oficial && (promo.fuente === 'backend_mejorado' || promo.fuente === 'indexeddb_local')
    );
    
    console.log('🏷️ Promociones oficiales filtradas:', promocionesOficiales);
    
    if (promocionesOficiales.length > 0) {
      const promocionesHTML = promocionesOficiales.map(promo => {
        console.log('🔍 Datos de promoción recibidos:', promo);
        
        // Usar datos directos del endpoint con mejores fallbacks
        const cantidad = promo.cantidad || promo.pro_cantidad_base || '';
        let precio = promo.precio || promo.pro_precioPromo || '';
        const nombrePromo = promo.nombre_promocion || promo.pro_nombrePromo || '';
        
        console.log('📊 Datos extraídos antes de procesamiento:', { cantidad, precio, nombrePromo });
        
        // Si tenemos cantidad y precio, calcular el precio total (cantidad x precio unitario)
        if (cantidad && precio) {
          const cantidadNum = parseInt(cantidad);
          const precioNum = parseFloat(precio);
          
          if (!isNaN(cantidadNum) && !isNaN(precioNum)) {
            // Calcular precio total si parece que es precio unitario
            const precioTotal = cantidadNum * precioNum;
            const precioRedondeado = Math.round(precioTotal);
            console.log(`🧮 Calculando precio total: ${cantidadNum} x ${precioNum} = ${precioTotal} → ${precioRedondeado} (redondeado)`);
            precio = precioRedondeado.toString();
          }
        }
        
        console.log('📊 Datos finales para construcción:', { cantidad, precio, nombrePromo });
        
        // Construir texto de promoción
        let textoPromo = '';
        
        if (cantidad && precio) {
          // Caso ideal: tenemos cantidad y precio (ej: "3x1500")
          textoPromo = `${cantidad}x${precio}`;
          console.log('✅ Usando cantidad y precio calculado:', textoPromo);
        } else if (nombrePromo) {
          // Intentar extraer formato "cantidad x precio" del nombre con regex más robusta
          const matchCompleto = nombrePromo.match(/(\d+)\s*[xX×]\s*(\d+)/i);
          const matchConPeso = nombrePromo.match(/(\d+)\s*[xX×]\s*\$?\s*(\d+)/i);
          const matchSoloCantidad = nombrePromo.match(/(\d+)\s*[xX×]/i);
          
          if (matchCompleto) {
            textoPromo = `${matchCompleto[1]}x${matchCompleto[2]}`;
            console.log('✅ Extraído formato completo del nombre:', textoPromo);
          } else if (matchConPeso) {
            textoPromo = `${matchConPeso[1]}x${matchConPeso[2]}`;
            console.log('✅ Extraído formato con peso del nombre:', textoPromo);
          } else if (matchSoloCantidad) {
            textoPromo = `${matchSoloCantidad[1]}x`;
            console.log('⚠️ Solo cantidad extraída:', textoPromo);
          } else {
            // Si no se puede extraer formato, usar el nombre completo
            textoPromo = nombrePromo;
            console.log('⚠️ Usando nombre completo:', textoPromo);
          }
        } else {
          textoPromo = 'PROMO';
          console.log('❌ Sin datos, usando genérico');
        }
        
        return `<span class="badge bg-warning text-dark me-2 mb-1" style="font-size:0.85rem;">🔥 ${textoPromo}</span>`;
      }).join('');
      
      infoPromocionesHTML = `
        <div class="mt-3 p-2" style="background-color:#f8f9fa; border-radius:8px;">
          <div class="text-center mb-2">
            <strong style="color:#495057;">🏷️ PROMOCIONES ACTIVAS</strong>
          </div>
          <div class="text-center">
            ${promocionesHTML}
          </div>
          <div class="text-center mt-2">
            <small class="text-warning" style="font-weight:500;">⚠️ Las promociones solo aplican pagando de contado</small>
          </div>
        </div>
      `;
    } else {
      infoPromocionesHTML = `
        <div class="mt-3 p-2 text-center" style="background-color:#f8f9fa; border-radius:8px;">
          <small class="text-muted">ℹ️ Sin promociones activas</small>
        </div>
      `;
    }
  } else {
    infoPromocionesHTML = `
      <div class="mt-3 p-2 text-center" style="background-color:#f8f9fa; border-radius:8px;">
        <small class="text-muted">ℹ️ Sin promociones activas</small>
      </div>
    `;
  }
  
  // Actualizar solo el contenedor de promociones
  const promocionesContainer = document.getElementById('promociones-container');
  if (promocionesContainer) {
    promocionesContainer.innerHTML = infoPromocionesHTML;
  }
}

// Función rápida para verificar si un producto tiene promociones (usando datos locales)
async function tienePromociones(producto) {
  try {
    const sku = (producto.pr_sku || '').toString();
    if (!sku) return false;
    
    // Cargar promociones desde IndexedDB (muy rápido)
    const promociones = await getAllPromociones();
    if (promociones.length === 0) return false;
    
    // Buscar el SKU en las promociones
    for (const promo of promociones) {
      let skusPromocion = [];
      
      // Extraer SKUs de diferentes formatos
      if (promo.skus && Array.isArray(promo.skus)) {
        skusPromocion = promo.skus;
      } else if (promo.pro_grupoProductos_primaria && promo.pro_grupoProductos_primaria.pr_sku) {
        if (Array.isArray(promo.pro_grupoProductos_primaria.pr_sku)) {
          skusPromocion = promo.pro_grupoProductos_primaria.pr_sku;
        } else {
          skusPromocion = promo.pro_grupoProductos_primaria.pr_sku.split(' ').filter(s => s.trim());
        }
      }
      
      if (skusPromocion.includes(sku)) {
        return true; // Tiene al menos una promoción
      }
    }
    
    return false;
  } catch (error) {
    console.warn('Error verificando promociones:', error);
    return false;
  }
}

// --- Sugerencias en tiempo real con debounce ---
let searchTimeout;
inputCodigo.addEventListener('input', async function(e) {
  const texto = inputCodigo.value.trim().toLowerCase();
  
  // Limpiar timeout anterior
  clearTimeout(searchTimeout);
  
  sugerenciasDiv.innerHTML = '';
  if (!texto || texto.length < 2) {
    sugerenciasDiv.style.display = 'none';
    return;
  }
  
  // Esperar 300ms antes de buscar
  searchTimeout = setTimeout(async () => {
    let productos = await getAllProductos();
    let sugerencias = productos.filter(p => {
      return (
        (p.pr_name && p.pr_name.toLowerCase().includes(texto)) ||
        (p.pr_sku && String(p.pr_sku).toLowerCase().includes(texto)) ||
        (p.pr_gtin && String(p.pr_gtin).toLowerCase().includes(texto))
      );
    });
  
  // Eliminar duplicados usando SKU como identificador único
  const skusVistos = new Set();
  sugerencias = sugerencias.filter(p => {
    const sku = p.pr_sku || p.pr_gtin;
    if (!sku || skusVistos.has(sku)) {
      return false;
    }
    skusVistos.add(sku);
    return true;
  }).slice(0, 10); // máximo 10 sugerencias
  
  if (sugerencias.length === 0) {
    sugerenciasDiv.style.display = 'none';
    return;
  }
  
  // Optimizar ordenamiento por relevancia (sin llamadas a API)
  sugerencias.sort((a, b) => {
    const textoA = (a.pr_name || '').toLowerCase();
    const textoB = (b.pr_name || '').toLowerCase();
    
    // Priorizar coincidencias exactas al inicio
    const coincideInicioA = textoA.startsWith(texto);
    const coincideInicioB = textoB.startsWith(texto);
    
    if (coincideInicioA && !coincideInicioB) return -1;
    if (!coincideInicioA && coincideInicioB) return 1;
    
    // Después por longitud de nombre (más específicos primero)
    return textoA.length - textoB.length;
  });

  // Verificar promociones para todas las sugerencias en paralelo (muy rápido con datos locales)
  const promocionesPromises = sugerencias.map(p => tienePromociones(p));
  const promocionesResults = await Promise.all(promocionesPromises);

  sugerencias.forEach((p, index) => {
    const tienePromo = promocionesResults[index];
    
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'list-group-item list-group-item-action d-flex align-items-center';
    
    // Crear imagen en miniatura
    let imgHtml = '';
    if (p.pr_imagen && p.pr_imagen.trim() !== "") {
      let urlImg = "";
      if (p.pr_imagen.startsWith("http")) {
        urlImg = p.pr_imagen;
      } else {
        let cleanPath = p.pr_imagen.startsWith("/") ? p.pr_imagen : `/${p.pr_imagen}`;
        urlImg = `https://media.megaservicio.net${cleanPath}`;
      }
      imgHtml = `<img src="${urlImg}" alt="${p.pr_name}" style="width:40px; height:40px; object-fit:cover; border-radius:4px; margin-right:12px; background:#f8f9fa;">`;
    }
    
    // Agregar indicador de promoción si aplica
    const promoIndicator = tienePromo ? 
      `<span class="badge bg-success text-white ms-2" style="font-size:0.7rem;">🏷️ PROMO</span>` : '';
    
    item.innerHTML = `
      ${imgHtml}
      <div class="flex-grow-1">
        <div class="d-flex align-items-center">
          <strong>${p.pr_name}</strong>
          ${promoIndicator}
        </div>
        <small class="text-muted">SKU: ${p.pr_sku || p.pr_gtin || ''}</small>
      </div>
    `;
    
    item.onclick = function() {
      mostrarDetalleProducto(p);
      // Guardar en historial desde sugerencia
      const productoHist = { ...p, FECHA_ESCANEO: new Date().toISOString() };
      historial.unshift(productoHist);
      setCookie("historial", JSON.stringify(historial), 30);
      renderHistorial();
      inputCodigo.value = '';
      sugerenciasDiv.innerHTML = '';
      sugerenciasDiv.style.display = 'none';
    };
    sugerenciasDiv.appendChild(item);
  });
  sugerenciasDiv.style.display = 'block';
  }, 300); // Fin del setTimeout
});

// Ocultar sugerencias al hacer clic fuera del input
document.addEventListener('click', function(e) {
  if (!inputCodigo.contains(e.target) && !sugerenciasDiv.contains(e.target)) {
    sugerenciasDiv.innerHTML = '';
    sugerenciasDiv.style.display = 'none';
  }
});

function iniciarScanner() {
  if (scannerActivo) return;

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      stream.getTracks().forEach((track) => track.stop());

      scannerActivo = true;
      readerDiv.style.display = "block";
      document.getElementById("reader").scrollIntoView({ behavior: "smooth", block: "center" });
      ayudaTexto.style.display = "block";

      const html5QrCode = new Html5Qrcode("reader");
      const config = {
        fps: 10,
        videoConstraints: {
          width: { min: 400, ideal: 1920 },
          height: { min: 400, ideal: 1080 },
          facingMode: "environment",
          advanced: [{ zoom: 2.0 }],
        },
        qrbox: function (viewfinderWidth, viewfinderHeight) {
          const width = Math.min(300, viewfinderWidth * 0.9);
          const height = 100;
          return { width, height };
        },
        rememberLastUsedCamera: true,
        aspectRatio: 1.0,
        formatsToSupport: [
          Html5QrcodeSupportedFormats.CODE_128,
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.EAN_8,
          Html5QrcodeSupportedFormats.UPC_A,
          Html5QrcodeSupportedFormats.UPC_E,
          Html5QrcodeSupportedFormats.CODE_39,
          Html5QrcodeSupportedFormats.CODE_93,
          Html5QrcodeSupportedFormats.CODABAR,
          Html5QrcodeSupportedFormats.ITF,
          Html5QrcodeSupportedFormats.QR_CODE,
          Html5QrcodeSupportedFormats.DATA_MATRIX,
          Html5QrcodeSupportedFormats.AZTEC,
          Html5QrcodeSupportedFormats.PDF_417,
        ],
        experimentalFeatures: {
          useBarCodeDetectorIfSupported: true,
        },
      };

      html5QrCode
        .start(
          { facingMode: "environment" },
          config,
          (decodedText) => {
            inputCodigo.value = decodedText.trim().replace(/\s+$/, "");
            html5QrCode.stop().then(() => {
              readerDiv.style.display = "none";
              ayudaTexto.style.display = "none";
              scannerActivo = false;
              html5QrCode.clear();
              form.requestSubmit();
              
              // Desplazamiento automático al área de resultados después de detectar código
              setTimeout(() => {
                const resultadoElement = document.getElementById('resultado');
                if (resultadoElement) {
                  resultadoElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                  });
                }
              }, 500); // Esperar un poco para que se procese la búsqueda
            });
          },
          (errorMessage) => {}
        )
        .then(() => {
          setTimeout(() => {
            const video = readerDiv.querySelector("video");
            if (video) {
              const track = video.srcObject.getVideoTracks()[0];
              track
                .applyConstraints({
                  focusMode: "continuous",
                  advanced: [{ zoom: 2.0 }],
                })
                .then(() => {
                  // Constraints aplicadas
                })
                .catch((err) => {
                  // No se pudieron aplicar constraints
                });
            }
          }, 2000);
        })
        .catch((err) => {
          scannerActivo = false;
          resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">No se pudo acceder a la cámara: ${err}</div>`;
          renderHistorial();
        });

      const observer = new MutationObserver(() => {
        const video = readerDiv.querySelector("video");
        if (video) {
          video.setAttribute("playsinline", "");
          video.setAttribute("autoplay", "");
          video.setAttribute("muted", "");
          observer.disconnect();
        }
      });
      observer.observe(readerDiv, { childList: true, subtree: true });
    })
    .catch((err) => {
      resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">Por favor autoriza el acceso a la cámara</div>`;
      renderHistorial();
    });
}

//Leer codigo de barras desde una imagen
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  resultadoDiv.innerHTML = `<div class="alert alert-info" role="alert">Procesando imagen...</div>`;

  try {
    // Crear imagen desde archivo
    const img = new Image();
    const imgLoadPromise = new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
    
    await imgLoadPromise;
    
    // Verificar si podemos usar Google Vision API
    if (GOOGLE_VISION_CONFIG.enabled && visionUsageTracker.canUseAPI()) {
      console.log('🚀 Intentando con Google Vision API...');
      
      try {
        const codigo = await detectarConGoogleVision(img);
        if (codigo) {
          console.log('✅ Google Vision detectó:', codigo);
          inputCodigo.value = codigo;
          form.requestSubmit();
          URL.revokeObjectURL(img.src);
          fileInput.value = "";
          return;
        }
      } catch (error) {
        console.log('❌ Error con Google Vision, usando fallback:', error.message);
        
        // Mostrar ayuda específica según el tipo de error
        if (error.message.includes('CORS_ERROR')) {
          console.log('🔧 Problema de CORS detectado - necesita configuración en backend');
        } else if (error.message.includes('500')) {
          console.log('🔧 Error 500: Problema con Google Vision API');
          
          // Detectar tipo específico de error 500
          if (error.message.includes('BILLING_DISABLED')) {
            console.log('🏦 Error de facturación: Habilita billing en Google Cloud');
            console.log('💡 Ve a: https://console.developers.google.com/billing/enable?project=1070150612422');
          } else {
            console.log('💡 Verifica la configuración de GOOGLE_VISION_API_KEY en Vercel');
          }
        } else if (error.message.includes('Backend error')) {
          console.log('🔄 Backend no disponible, usando detección local');
        }
      }
    } else if (GOOGLE_VISION_CONFIG.enabled && !visionUsageTracker.canUseAPI()) {
      const status = visionUsageTracker.getUsageStatus();
      console.log(`⚠️ Límite local alcanzado. Mensual: ${status.monthlyUsed}/${status.monthlyLimit}, Diario: ${status.dailyUsed}/${status.dailyLimit}`);
    }
    
    // Intentar usar Barcode Detection API nativa primero
    if ('BarcodeDetector' in window) {
      console.log('🚀 Usando Barcode Detection API nativa');
      try {
        // Todos los formatos disponibles en la API nativa
        const allFormats = [
          'aztec', 'code_128', 'code_39', 'code_93', 
          'codabar', 'data_matrix', 'ean_13', 'ean_8', 
          'itf', 'pdf417', 'qr_code', 'upc_a', 'upc_e'
        ];
        
        const barcodeDetector = new BarcodeDetector({
          formats: allFormats
        });
        
        const barcodes = await barcodeDetector.detect(img);
        console.log(`🔍 Códigos detectados por API nativa: ${barcodes.length}`, barcodes);
        
        if (barcodes.length > 0) {
          // Validar códigos con criterios más flexibles
          const validCodes = barcodes.filter(barcode => {
            const value = barcode.rawValue.trim();
            console.log(`🔍 Validando: "${value}" formato: ${barcode.format} longitud: ${value.length}`);
            
            // Validaciones por formato (más permisivas)
            switch (barcode.format) {
              case 'ean_13':
                return value.length === 13 && /^\d{13}$/.test(value);
              case 'upc_a':
                return value.length === 12 && /^\d{12}$/.test(value);
              case 'ean_8':
                return value.length === 8 && /^\d{8}$/.test(value);
              case 'upc_e':
                return (value.length >= 6 && value.length <= 8) && /^\d+$/.test(value);
              case 'code_128':
                return value.length >= 1 && value.length <= 50;
              case 'code_39':
                return value.length >= 1 && /^[A-Z0-9\-. $\/+%*]+$/.test(value);
              case 'code_93':
                return value.length >= 1 && value.length <= 50;
              case 'codabar':
                return value.length >= 3 && /^[A-D][0-9\-$:\/.\+]+[A-D]$/.test(value);
              case 'itf':
                return value.length >= 2 && value.length % 2 === 0 && /^\d+$/.test(value);
              case 'qr_code':
                return value.length >= 1 && value.length <= 4296;
              case 'data_matrix':
                return value.length >= 1 && value.length <= 3116;
              case 'pdf417':
                return value.length >= 1 && value.length <= 2710;
              case 'aztec':
                return value.length >= 1 && value.length <= 3832;
              default:
                // Para formatos desconocidos, validar que tenga contenido
                return value.length >= 1 && value.length <= 100;
            }
          });
          
          console.log(`✅ Códigos válidos: ${validCodes.length}`);
          
          if (validCodes.length > 0) {
            // Priorizar por formato (códigos de productos primero)
            const priority = {
              'ean_13': 10, 'upc_a': 9, 'ean_8': 8, 'upc_e': 7,
              'code_128': 6, 'code_39': 5, 'code_93': 4,
              'itf': 3, 'codabar': 2,
              'qr_code': 1, 'data_matrix': 1, 'pdf417': 1, 'aztec': 1
            };
            
            const sortedCodes = validCodes.sort((a, b) => {
              const priorityDiff = (priority[b.format] || 0) - (priority[a.format] || 0);
              if (priorityDiff !== 0) return priorityDiff;
              
              // Si mismo formato, elegir por área (más grande mejor para códigos lineales)
              if (['ean_13', 'upc_a', 'ean_8', 'upc_e', 'code_128', 'code_39', 'code_93', 'itf', 'codabar'].includes(a.format)) {
                const aArea = a.boundingBox.width * a.boundingBox.height;
                const bArea = b.boundingBox.width * b.boundingBox.height;
                return bArea - aArea;
              }
              
              // Para códigos 2D, elegir el más centrado
              const aCenter = a.boundingBox.x + a.boundingBox.width / 2;
              const bCenter = b.boundingBox.x + b.boundingBox.width / 2;
              const imgCenter = img.width / 2;
              
              return Math.abs(aCenter - imgCenter) - Math.abs(bCenter - imgCenter);
            });
            
            const bestCode = sortedCodes[0];
            const codigo = bestCode.rawValue.trim().replace(/\s+$/, "");
            console.log(`🎯 Mejor código seleccionado: "${codigo}" (${bestCode.format})`);
            
            inputCodigo.value = codigo;
            form.requestSubmit();
            URL.revokeObjectURL(img.src);
            fileInput.value = "";
            return;
          }
        }
        
        console.log('⚠️ API nativa no detectó códigos válidos');
      } catch (error) {
        console.log('❌ Error con API nativa, usando fallback:', error);
      }
    } else {
      console.log('⚠️ BarcodeDetector no disponible en este navegador');
    }
    
    // Fallback: usar Quagga como antes
    console.log('📸 Usando Quagga como fallback');
    usarQuaggaFallback(img);
    
  } catch (error) {
    console.error('Error procesando imagen:', error);
    resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">Error al procesar la imagen</div>`;
    renderHistorial();
    fileInput.value = "";
  }
});

// Función fallback con Quagga mejorada
function usarQuaggaFallback(img) {
  console.log('📸 Procesando con Quagga...');
  
  // Crear canvas con mejor resolución
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  
  // Para imágenes pequeñas/recortadas, amplificar
  let { width, height } = img;
  const minSize = 400;
  
  if (width < minSize || height < minSize) {
    const scale = Math.max(minSize / width, minSize / height) * 1.5;
    width *= scale;
    height *= scale;
    console.log(`📏 Ampliando imagen pequeña: ${img.width}x${img.height} -> ${width}x${height}`);
  }
  
  // Límite máximo
  const maxSize = 1500;
  if (width > maxSize || height > maxSize) {
    const ratio = Math.min(maxSize / width, maxSize / height);
    width *= ratio;
    height *= ratio;
  }
  
  canvas.width = width;
  canvas.height = height;
  
  // Dibujar con suavizado deshabilitado para códigos de barras
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0, width, height);

  // Aplicar múltiples técnicas de procesamiento
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  
  // Calcular umbral dinámico (método Otsu simplificado)
  let histogram = new Array(256).fill(0);
  for (let i = 0; i < data.length; i += 4) {
    const gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
    histogram[gray]++;
  }
  
  // Encontrar umbral óptimo
  let threshold = 128;
  let maxVariance = 0;
  const total = width * height;
  
  for (let t = 0; t < 256; t++) {
    let w0 = 0, w1 = 0, sum0 = 0, sum1 = 0;
    
    for (let i = 0; i <= t; i++) {
      w0 += histogram[i];
      sum0 += i * histogram[i];
    }
    for (let i = t + 1; i < 256; i++) {
      w1 += histogram[i];
      sum1 += i * histogram[i];
    }
    
    if (w0 === 0 || w1 === 0) continue;
    
    const mean0 = sum0 / w0;
    const mean1 = sum1 / w1;
    const variance = w0 * w1 * (mean0 - mean1) * (mean0 - mean1);
    
    if (variance > maxVariance) {
      maxVariance = variance;
      threshold = t;
    }
  }
  
  console.log(`🎯 Umbral calculado: ${threshold}`);
  
  // Aplicar umbralización con múltiples técnicas
  const originalData = new Uint8ClampedArray(data);
  
  // Técnica 1: Umbralización calculada
  for (let i = 0; i < data.length; i += 4) {
    const gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
    const value = gray > threshold ? 255 : 0;
    
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
  }
  
  ctx.putImageData(imageData, 0, 0);
  let processedDataUrl = canvas.toDataURL('image/png');
  
  // Crear versión alternativa con umbral más agresivo para superficies reflectivas
  const imageData2 = ctx.createImageData(width, height);
  const data2 = imageData2.data;
  
  for (let i = 0; i < originalData.length; i += 4) {
    const gray = Math.round(0.299 * originalData[i] + 0.587 * originalData[i + 1] + 0.114 * originalData[i + 2]);
    // Umbral más bajo para superficies reflectivas
    const value = gray > (threshold * 0.7) ? 255 : 0;
    
    data2[i] = value;
    data2[i + 1] = value;
    data2[i + 2] = value;
    data2[i + 3] = 255;
  }
  
  // Guardar ambas versiones para probar
  const canvas2 = document.createElement("canvas");
  canvas2.width = width;
  canvas2.height = height;
  const ctx2 = canvas2.getContext("2d");
  ctx2.putImageData(imageData2, 0, 0);
  const processedDataUrl2 = canvas2.toDataURL('image/png');

  // Configuración más agresiva para códigos difíciles
  const config = {
    src: processedDataUrl,
    numOfWorkers: 0,
    locate: true,
    inputStream: {
      size: Math.max(width, height)
    },
    locator: {
      patchSize: "large",
      halfSample: false,
      debug: {
        showCanvas: false,
        showPatches: false,
        showFoundPatches: false,
        showSkeleton: false,
        showLabels: false,
        showPatchLabels: false,
        showRemainingPatchLabels: false,
        boxFromPatches: {
          showTransformed: false,
          showTransformedBox: false,
          showBB: false
        }
      }
    },
    decoder: {
      readers: [
        // Códigos de productos (alta prioridad)
        "ean_reader",
        "ean_8_reader", 
        "upc_reader",
        "upc_e_reader",
        // Códigos industriales/comerciales
        "code_128_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "code_93_reader",
        "codabar_reader",
        "i2of5_reader",
        // Códigos 2D
        "code_32_reader"
      ],
      multiple: true, // Permitir múltiples códigos
      debug: {
        drawBoundingBox: false,
        showFrequency: false,
        showPattern: false
      }
    }
  };

  console.log('🔄 Iniciando detección con Quagga...');
  
  // Función para probar con una configuración específica
  const probarConfiguracion = (dataUrl, configName, callback) => {
    console.log(`📋 Probando configuración: ${configName}`);
    
    const configPrueba = {
      src: dataUrl,
      numOfWorkers: 0,
      locate: true,
      inputStream: {
        size: Math.max(width, height)
      },
      locator: {
        patchSize: configName === 'agresiva' ? 'x-large' : 'large',
        halfSample: configName === 'alternativa' ? true : false,
        debug: { showCanvas: false, showPatches: false, showFoundPatches: false }
      },
      decoder: {
        readers: [
          "ean_reader", "ean_8_reader", "upc_reader", "upc_e_reader",
          "code_128_reader", "code_39_reader", "code_39_vin_reader",
          "code_93_reader", "codabar_reader", "i2of5_reader"
        ],
        multiple: true,
        debug: { drawBoundingBox: false, showFrequency: false, showPattern: false }
      }
    };
    
    Quagga.decodeSingle(configPrueba, callback);
  };
  
  let codigosDetectados = []; // Array para almacenar códigos detectados
  
  // Probar primera configuración (umbral calculado)
  probarConfiguracion(processedDataUrl, 'principal', function (result) {
    if (result && result.codeResult) {
      let codigo = result.codeResult.code.trim().replace(/\s+$/, "");
      codigosDetectados.push(`${codigo} (${result.codeResult.format})`);
      console.log('✅ Código detectado (configuración principal):', codigo, 'Formato:', result.codeResult.format);
      
      if (validarCodigo(codigo, result.codeResult.format)) {
        inputCodigo.value = codigo;
        form.requestSubmit();
        URL.revokeObjectURL(img.src);
        fileInput.value = "";
        return;
      }
    }
    
    console.log('🔄 Probando configuración alternativa...');
    // Probar segunda configuración (umbral más bajo)
    probarConfiguracion(processedDataUrl2, 'agresiva', function (result2) {
      if (result2 && result2.codeResult) {
        let codigo = result2.codeResult.code.trim().replace(/\s+$/, "");
        codigosDetectados.push(`${codigo} (${result2.codeResult.format})`);
        console.log('✅ Código detectado (configuración agresiva):', codigo, 'Formato:', result2.codeResult.format);
        
        if (validarCodigo(codigo, result2.codeResult.format)) {
          inputCodigo.value = codigo;
          form.requestSubmit();
          URL.revokeObjectURL(img.src);
          fileInput.value = "";
          return;
        }
      }
      
      console.log('🔄 Probando con imagen original...');
      // Tercera tentativa: imagen original sin procesamiento
      intentarSegundaPasada(img, codigosDetectados);
    });
  });
}

// Función para validar códigos
function validarCodigo(codigo, formato) {
  console.log(`🔍 Validando: "${codigo}" formato: ${formato} longitud: ${codigo.length}`);
  
  switch (formato) {
    case 'ean_13':
      return codigo.length === 13 && /^\d{13}$/.test(codigo);
    case 'upc_a':
      return codigo.length === 12 && /^\d{12}$/.test(codigo);
    case 'ean_8':
      return codigo.length === 8 && /^\d{8}$/.test(codigo);
    case 'upc_e':
      return (codigo.length >= 6 && codigo.length <= 8) && /^\d+$/.test(codigo);
    case 'code_128':
    case 'code_39':
    case 'code_93':
      return codigo.length >= 1 && codigo.length <= 50;
    case 'codabar':
      return codigo.length >= 3 && /^[A-D][0-9\-$:\/.\+]+[A-D]$/.test(codigo);
    case 'i2of5':
      return codigo.length >= 2 && codigo.length % 2 === 0 && /^\d+$/.test(codigo);
    default:
      return codigo.length >= 1 && codigo.length <= 50;
  }
}

// Segunda pasada con configuración alternativa
function intentarSegundaPasada(img, codigosDetectados = []) {
  console.log('🔄 Tercera tentativa: imagen original sin procesamiento...');
  
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  
  // Usar imagen original pero con mejor escala para códigos largos
  let { width, height } = img;
  
  // Para códigos muy largos como este, amplificar más
  const targetWidth = 1600; // Más ancho para códigos largos
  if (width < targetWidth) {
    const scale = targetWidth / width;
    width *= scale;
    height *= scale;
  }
  
  canvas.width = width;
  canvas.height = height;
  ctx.imageSmoothingEnabled = false; // Importante para códigos de barras
  ctx.drawImage(img, 0, 0, width, height);
  
  // Aplicar un filtro de enfoque antes de la detección
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  
  // Mejorar contraste para códigos en superficies reflectivas
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Aumentar contraste
    const factor = 1.5;
    const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    const enhanced = Math.min(255, Math.max(0, (gray - 128) * factor + 128));
    
    data[i] = enhanced;
    data[i + 1] = enhanced;
    data[i + 2] = enhanced;
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  const configAlternativa = {
    src: canvas.toDataURL('image/png'),
    numOfWorkers: 0,
    locate: true,
    inputStream: {
      size: Math.max(width, height),
      area: { // Definir área específica para códigos largos
        top: "0%",
        right: "0%", 
        left: "0%",
        bottom: "0%"
      }
    },
    locator: {
      patchSize: "x-large", // Usar el tamaño más grande
      halfSample: false,
      debug: {
        showCanvas: false,
        showPatches: false,
        showFoundPatches: false
      }
    },
    decoder: {
      readers: [
        "ean_reader", // Priorizar EAN para este tipo de código
        "upc_reader",
        "code_128_reader", 
        "code_39_reader",
        "ean_8_reader",
        "upc_e_reader",
        "i2of5_reader",
        "codabar_reader"
      ],
      multiple: true,
      debug: {
        drawBoundingBox: false,
        showFrequency: false,
        showPattern: false
      }
    }
  };
  
  console.log('📋 Configuración final para códigos largos...');
  
  Quagga.decodeSingle(configAlternativa, function (result) {
    if (result && result.codeResult) {
      const codigo = result.codeResult.code.trim().replace(/\s+$/, "");
      codigosDetectados.push(`${codigo} (${result.codeResult.format})`);
      console.log('✅ Tercera tentativa exitosa:', codigo, 'Formato:', result.codeResult.format);
      
      if (validarCodigo(codigo, result.codeResult.format)) {
        inputCodigo.value = codigo;
        form.requestSubmit();
        return;
      }
    }
    
    console.log('❌ Todas las configuraciones fallaron');
    
    // Construir mensaje con códigos detectados
    let mensajeDetectados = '';
    if (codigosDetectados.length > 0) {
      mensajeDetectados = `<br>• 🔍 <strong>Códigos detectados:</strong> ${codigosDetectados.join(', ')}`;
    }
    
    // Mostrar estadísticas de Google Vision si está habilitado
    let mensajeVision = '';
    if (GOOGLE_VISION_CONFIG.enabled) {
      // Obtener estadísticas de forma síncrona para evitar problemas con async
      const status = visionUsageTracker.getUsageStatus();
      mensajeVision = `<br><br>📊 <strong>Uso local:</strong> ${status.monthlyUsed}/${status.monthlyLimit} mensual, ${status.dailyUsed}/${status.dailyLimit} diario<br>🌐 <strong>Backend:</strong> Verificando...`;
      
      // Verificar backend en paralelo
      verificarBackend().then(backendStatus => {
        if (document.querySelector('.alert-danger')) {
          const alertDiv = document.querySelector('.alert-danger');
          if (alertDiv) {
            alertDiv.innerHTML = alertDiv.innerHTML.replace(
              '🌐 <strong>Backend:</strong> Verificando...',
              `🌐 <strong>Backend:</strong> ${backendStatus.mensaje}`
            );
          }
        }
      }).catch(() => {
        // Ignorar errores silenciosamente
      });
    } else {
      mensajeVision = `<br><br>💡 <strong>Tip:</strong> Activa la detección avanzada en "⚙️ Configurar" para mejor detección`;
    }
    
    resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">
      <strong>⚠️ No se detectó código válido</strong><br>
      Para códigos largos como este, intenta:<br>
      • 📏 <strong>Recortar muy cerca del código</strong><br>
      • 💡 <strong>Mejor iluminación uniforme</strong><br>
      • 📱 <strong>Evitar superficies reflectivas</strong><br>
      • 🔍 <strong>Imagen más nítida y estable</strong>${mensajeDetectados}${mensajeVision}
    </div>`;
    renderHistorial();
  });
}

// Función para mostrar configuración de Google Vision
async function mostrarConfiguracion() {
  // Verificar estado del backend
  const backendStatus = await verificarBackend();
  
  // Verificar estadísticas de códigos de barras
  let statsCodigosBarras = null;
  if (CONFIG_ENDPOINTS.usarCodigosBarras) {
    try {
      const response = await fetch(`${CONFIG_ENDPOINTS.productosConCodigos}?stats=true`);
      if (response.ok) {
        const data = await response.json();
        statsCodigosBarras = data.estadisticas;
      }
    } catch (error) {
      console.log('⚠️ No se pudieron obtener estadísticas de códigos de barras');
    }
  }
  
  let statsHTML = '';
  if (statsCodigosBarras) {
    statsHTML = `
      <div class="alert alert-info">
        <strong>🏷️ Sistema de Códigos de Barras:</strong><br>
        • <strong>Productos:</strong> ${statsCodigosBarras.totalProductos}<br>
        • <strong>Códigos totales:</strong> ${statsCodigosBarras.totalCodigos}<br>
        • <strong>Con códigos adicionales:</strong> ${statsCodigosBarras.productosConCodigosAdicionales}<br>
        • <strong>Actualizado:</strong> ${new Date(statsCodigosBarras.ultimaActualizacion).toLocaleString()}
      </div>
    `;
  }
  
  Swal.fire({
    title: '⚙️ Configuración de detección avanzada',
    html: `
      <div class="text-start">
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="enabledCheck" 
                   ${GOOGLE_VISION_CONFIG.enabled ? 'checked' : ''}>
            <label class="form-check-label" for="enabledCheck">
              <strong>Activar detección avanzada (Backend)</strong>
            </label>
          </div>
          <small class="text-muted">
            Usa servidor dedicado para mejor detección de códigos
          </small>
        </div>
        
        <div class="alert ${backendStatus.activo ? 'alert-success' : 'alert-warning'}">
          <strong>🌐 Google Vision API:</strong><br>
          ${backendStatus.mensaje}<br>
          <small class="text-muted">Backend: https://contador-apicloudvision.vercel.app/</small><br>
          <div class="mt-2">
            <button type="button" class="btn btn-info btn-sm" onclick="diagnosticarBackend()">
              🔍 Probar Conexión
            </button>
          </div>
        </div>
        
        ${statsHTML}
        
        <!-- Área para mostrar resultados del diagnóstico -->
        <div id="diagnostico-resultado"></div>
        
        <div class="alert alert-info">
          <strong>💡 Detección de Códigos de Barras:</strong><br>
          • 📷 <strong>Local:</strong> Html5QrCode + BarcodeDetector + Quagga.js<br>
          • 🌐 <strong>Premium:</strong> Google Vision API (para códigos difíciles)<br>
          • 🔄 <strong>Automático:</strong> Fallback inteligente entre métodos
        </div>
        
        <div class="alert alert-success">
          <strong>✅ Ventajas del backend:</strong><br>
          • Sin límites por dispositivo<br>
          • Detección superior en superficies reflectivas<br>
          • Mejor precisión con códigos largos<br>
          • Funciona con imágenes de baja calidad<br>
          • Gestión centralizada de recursos
        </div>
        
        <div class="alert alert-warning">
          <strong>🔄 Fallback automático:</strong><br>
          Si el backend no está disponible, la app usará detección local automáticamente.
        </div>
        
        <div class="text-muted small">
          <strong>💡 Recomendación:</strong><br>
          Mantén activada la detección avanzada para mejores resultados.
        </div>
      </div>
    `,
    width: 600,
    showCancelButton: true,
    confirmButtonText: '💾 Guardar',
    cancelButtonText: '❌ Cancelar',
    confirmButtonColor: '#198754',
    cancelButtonColor: '#6c757d',
    preConfirm: () => {
      const enabled = document.getElementById('enabledCheck').checked;
      return { enabled };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { enabled } = result.value;
      
      // Guardar configuración (sin API key)
      GOOGLE_VISION_CONFIG.enabled = enabled;
      
      // Persistir en localStorage
      localStorage.setItem('googleVisionConfig', JSON.stringify({
        enabled: enabled
      }));
      
      // Mostrar confirmación
      const mensaje = enabled ? 
        '✅ Detección avanzada activada' : 
        '⚠️ Usando solo detección local';
        
      Swal.fire({
        title: '✅ Configuración guardada',
        text: mensaje,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    }
  });
}

// Cargar configuración guardada al inicio
function cargarConfiguracionGuardada() {
  const saved = localStorage.getItem('googleVisionConfig');
  if (saved) {
    try {
      const config = JSON.parse(saved);
      GOOGLE_VISION_CONFIG.enabled = config.enabled || false;
      
      if (GOOGLE_VISION_CONFIG.enabled) {
        console.log('✅ Detección avanzada (backend) configurada y activa');
      }
    } catch (error) {
      console.log('❌ Error cargando configuración:', error);
    }
  }
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((reg) =>
        console.log("✅ Service Worker registrado:", reg.scope)
      )
      .catch((err) => console.error("❌ Error al registrar SW:", err));
  });
}

// Manejo del evento beforeinstallprompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  if (installBtn) {
    installBtn.classList.remove("d-none");
  }
});

installBtn.addEventListener("click", (e) => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("✅ Instalación aceptada");
      } else {
        console.log("❌ Instalación rechazada");
      }
      deferredPrompt = null;
      installBtn.classList.add("d-none");
    });
  }
});

// Forzar actualización del Service Worker y recarga automática si hay nueva versión
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.update();
    }
  });
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    window.location.reload();
  });
}

// Estilo para mostrar solo el cuadro de escaneo
const style = document.createElement('style');
style.innerHTML = `
  #reader {
    position: relative;
    width: 320px;
    height: 120px;
    overflow: hidden;
    margin: 0 auto;
    background: #000;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  #reader video {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 320px !important;
    height: 120px !important;
    object-fit: cover;
  }
`;
document.head.appendChild(style);

// Función simple para ver promociones
async function verPromociones() {
  try {
    console.log('🎯 Consultando promociones...');
    
    // Mostrar loading
    document.getElementById('resultado').innerHTML = `
      <div class="text-center p-4">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Cargando promociones...</span>
        </div>
        <p class="mt-2">Cargando promociones y productos...</p>
      </div>
    `;
    
    // Cargar promociones y productos en paralelo
    const [responsePromos, productos] = await Promise.all([
      fetch('https://verificadorb9-backend.vercel.app/api/promociones-mejoradas'),
      getAllProductos()
    ]);
    
    if (!responsePromos.ok) {
      throw new Error(`Error ${responsePromos.status}: ${responsePromos.statusText}`);
    }
    
    const data = await responsePromos.json();
    console.log('📋 Datos de promociones:', data);
    
    // Verificar el formato de respuesta
    let promociones = [];
    if (data.status === 'SUCCESS' && data.promoResult) {
      promociones = data.promoResult;
    } else if (Array.isArray(data)) {
      promociones = data;
    } else {
      throw new Error('Formato de respuesta no reconocido');
    }
    
    if (promociones.length === 0) {
      document.getElementById('resultado').innerHTML = `
        <div class="alert alert-info">
          <h6>ℹ️ Sin promociones</h6>
          <p>No hay promociones activas en este momento.</p>
        </div>
        <div class="alert alert-warning text-center">
          <strong>⚠️ Las promociones solo aplican pagando de contado</strong>
        </div>
      `;
      return;
    }
    
    let html = '<div class="row">';
    
    promociones.forEach((promo, index) => {
      // Extraer SKUs de diferentes formatos
      let skus = [];
      if (promo.skus && Array.isArray(promo.skus)) {
        skus = promo.skus;
      } else if (promo.pro_grupoProductos_primaria && promo.pro_grupoProductos_primaria.pr_sku) {
        // Verificar si es array o string
        if (Array.isArray(promo.pro_grupoProductos_primaria.pr_sku)) {
          skus = promo.pro_grupoProductos_primaria.pr_sku;
        } else {
          // Split por espacios para formato string
          skus = promo.pro_grupoProductos_primaria.pr_sku.split(' ').filter(s => s.trim());
        }
      }
      
      // Buscar productos que coincidan con los SKUs de la promoción
      const productosEnPromo = skus.map(sku => {
        return productos.find(p => p.pr_sku === sku);
      }).filter(p => p !== undefined);
      
      const nombre = promo.pro_nombrePromo || promo.descripcion || `Promoción ${index + 1}`;
      const tipo = promo.pro_tipoPromo || promo.tipo || 'No especificado';
      const mensaje = promo.pro_mensaje || promo.mensaje || '';
      const cantidad = promo.pro_cantidad_base || '';
      const cantidadPromo = Number(cantidad) || 1;
      
      // Extraer el precio real de la promoción del mensaje o nombre
      let precioPromoTotal = 0;
      const textoCompleto = `${mensaje} ${nombre}`.toLowerCase();
      
      // Buscar patrones como "2 x 990", "3x1500", "3 x 700"
      const matchPrecio = textoCompleto.match(/(\d+)\s*x\s*(\d+)/);
      if (matchPrecio) {
        // El segundo número es el precio total de la promoción
        precioPromoTotal = Number(matchPrecio[2]);
      } else {
        // Fallback al precio de la API multiplicado por cantidad si no se puede extraer
        const precioUnitarioPromo = Number(promo.pro_precioPromo) || 0;
        precioPromoTotal = precioUnitarioPromo * cantidadPromo;
      }
      
      // Calcular precio normal total basado en los productos reales
      let precioNormalTotal = 0;
      let ahorroTotal = 0;
      
      if (productosEnPromo.length > 0 && cantidad && precioPromoTotal > 0) {
        // Calcular precio promedio de los productos en promoción
        const preciosNormales = productosEnPromo.map(p => {
          let precioBase = Number(p.pr_precio) || Number(p.L1) || 0;
          return Math.round(precioBase * 1.16 * 100) / 100; // Con IVA
        });
        
        const precioPromedioNormal = preciosNormales.reduce((sum, precio) => sum + precio, 0) / preciosNormales.length;
        
        // El precio normal total es: precio_promedio × cantidad_de_la_promoción
        precioNormalTotal = Math.round(precioPromedioNormal * cantidadPromo * 100) / 100;
        
        // El ahorro es la diferencia entre precio normal total y precio promocional total
        ahorroTotal = Math.round((precioNormalTotal - precioPromoTotal) * 100) / 100;
      }
      
      // Preparar galería de imágenes
      let galeriaImagenes = '';
      if (productosEnPromo.length > 0) {
        const imagenesHTML = productosEnPromo.slice(0, 4).map(producto => {
          let urlImg = "";
          if (producto.pr_imagen && producto.pr_imagen.trim() !== "") {
            if (producto.pr_imagen.startsWith("http")) {
              urlImg = producto.pr_imagen;
            } else {
              let cleanPath = producto.pr_imagen.startsWith("/") ? producto.pr_imagen : `/${producto.pr_imagen}`;
              urlImg = `https://media.megaservicio.net${cleanPath}`;
            }
          }
          
          if (urlImg) {
            return `
              <div class="col-6 col-md-3 mb-2">
                <div class="card border-0 bg-light">
                  <img src="${urlImg}" class="card-img-top" alt="${producto.pr_name}" 
                       style="height: 80px; object-fit: contain; padding: 5px;">
                  <div class="card-body p-1">
                    <small class="text-muted d-block text-truncate" style="font-size: 0.7rem;">
                      ${producto.pr_name}
                    </small>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-primary" style="font-size: 0.65rem;">
                        SKU: ${producto.pr_sku}
                      </small>
                      <button class="btn btn-outline-primary btn-sm copiar-sku-btn" 
                              data-sku="${producto.pr_sku}" 
                              style="font-size: 0.6rem; padding: 1px 4px; border-radius: 3px;"
                              title="Copiar SKU">
                        📋
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          } else {
            return `
              <div class="col-6 col-md-3 mb-2">
                <div class="card border-0 bg-light">
                  <div class="card-img-top d-flex align-items-center justify-content-center bg-secondary" style="height: 80px;">
                    <span class="text-white">📦</span>
                  </div>
                  <div class="card-body p-1">
                    <small class="text-muted d-block text-truncate" style="font-size: 0.7rem;">
                      ${producto.pr_name}
                    </small>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-primary" style="font-size: 0.65rem;">
                        SKU: ${producto.pr_sku}
                      </small>
                      <button class="btn btn-outline-primary btn-sm copiar-sku-btn" 
                              data-sku="${producto.pr_sku}" 
                              style="font-size: 0.6rem; padding: 1px 4px; border-radius: 3px;"
                              title="Copiar SKU">
                        📋
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }
        }).join('');
        
        galeriaImagenes = `
          <div class="mt-3">
            <h6 class="text-muted mb-2">📦 Productos en promoción:</h6>
            <div class="row">
              ${imagenesHTML}
              ${productosEnPromo.length > 4 ? `
                <div class="col-12 text-center mt-2">
                  <small class="text-muted">... y ${productosEnPromo.length - 4} producto${productosEnPromo.length - 4 > 1 ? 's' : ''} más</small>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }
      
      html += `
        <div class="col-md-6 mb-4">
          <div class="card h-100 border-warning">
            <div class="card-body">
              <h6 class="card-title text-warning d-flex align-items-center">
                🔥 ${nombre}
              </h6>
              
              <div class="mb-2">
                <span class="badge bg-warning text-dark">${tipo.replace('CANTIDAD_X_PRECIO_FIJO', 'Combo Especial')}</span>
              </div>
              
              ${mensaje && mensaje !== nombre ? `
                <p class="card-text text-muted small">${mensaje}</p>
              ` : ''}
              
              ${precioPromoTotal > 0 ? `
                <div class="text-center mb-3 p-3 bg-light rounded">
                  <div class="row">
                    <div class="col-4">
                      <strong class="text-primary d-block" style="font-size: 1.1rem;">${cantidadPromo}</strong>
                      <small class="text-muted">Unidades</small>
                    </div>
                    <div class="col-4">
                      <strong class="text-success d-block" style="font-size: 1.3rem;">$${precioPromoTotal.toLocaleString('es-CL')}</strong>
                      <small class="text-success">Total con Promo</small>
                    </div>
                    <div class="col-4">
                      ${precioNormalTotal > 0 ? `
                        <span class="text-decoration-line-through text-muted d-block" style="font-size: 1.1rem;">$${precioNormalTotal.toLocaleString('es-CL')}</span>
                        <small class="text-muted">Total Normal</small>
                      ` : `
                        <strong class="text-muted">-</strong>
                        <small class="text-muted">Sin datos</small>
                      `}
                    </div>
                  </div>
                  ${ahorroTotal > 0 ? `
                    <div class="mt-3">
                      <span class="badge bg-success" style="font-size: 0.9rem;">
                        💰 Ahorras $${ahorroTotal.toLocaleString('es-CL')} comprando ${cantidadPromo} unidades
                      </span>
                    </div>
                  ` : ''}
                </div>
              ` : `
                <div class="row text-center mb-3">
                  ${cantidad ? `
                    <div class="col-6">
                      <strong class="text-primary">${cantidad}</strong>
                      <small class="d-block text-muted">Cantidad</small>
                    </div>
                  ` : ''}
                  ${precioPromo ? `
                    <div class="col-6">
                      <strong class="text-success">$${precioPromo}</strong>
                      <small class="d-block text-muted">Precio promocional</small>
                    </div>
                  ` : ''}
                </div>
              `}
              
              ${galeriaImagenes}
              
              ${productosEnPromo.length > 0 ? `
                <div class="mt-3">
                  <h6 class="text-muted mb-2">📋 Descripción completa de productos:</h6>
                  <div class="border rounded p-3 bg-light">
                    ${productosEnPromo.map((producto, index) => `
                      <div class="mb-3 ${index < productosEnPromo.length - 1 ? 'border-bottom pb-3' : ''}">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                          <strong class="text-dark" style="font-size: 1rem;">${producto.pr_name}</strong>
                          <span class="badge bg-primary ms-2">1 unidad</span>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <small class="text-muted d-block"><strong>SKU:</strong> ${producto.pr_sku}</small>
                            ${producto.pr_gtin ? `<small class="text-muted d-block"><strong>Código:</strong> ${producto.pr_gtin}</small>` : ''}
                          </div>
                          <div class="col-6">
                            ${(() => {
                              let precioBase = Number(producto.pr_precio) || Number(producto.L1) || 0;
                              let precioConIVA = Math.round(precioBase * 1.16 * 100) / 100;
                              return precioConIVA > 0 ? `<small class="text-success"><strong>Precio unitario:</strong> $${precioConIVA.toFixed(2)}</small>` : '';
                            })()}
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              
              ${skus.length > productosEnPromo.length ? `
                <div class="mt-3">
                  <small class="text-muted">
                    <strong>� Total SKUs:</strong> ${skus.length} 
                    (${productosEnPromo.length} con datos disponibles)
                  </small>
                  <div class="mt-1">
                    ${skus.slice(0, 6).map(sku => `
                      <span class="badge bg-light text-dark me-1 mb-1" style="font-size: 0.7rem;">${sku}</span>
                    `).join('')}
                    ${skus.length > 6 ? `<span class="badge bg-secondary" style="font-size: 0.7rem;">+${skus.length - 6} más</span>` : ''}
                  </div>
                </div>
              ` : ''}
              
              ${promo.validFrom && promo.validTo ? `
                <div class="mt-3 pt-2 border-top">
                  <small class="text-muted">
                    <strong>📅 Vigencia:</strong><br>
                    ${promo.validFrom} al ${promo.validTo}
                  </small>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    
    // Agregar advertencia sobre promociones
    html += `
      <div class="alert alert-warning text-center mt-4">
        <strong>⚠️ Las promociones solo aplican pagando de contado</strong>
      </div>
    `;
    
    document.getElementById('resultado').innerHTML = html;
    
    // Agregar event listeners para los botones de copiar SKU en promociones
    const copiarSkuBtns = document.querySelectorAll('.copiar-sku-btn');
    copiarSkuBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const sku = btn.getAttribute('data-sku');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(sku).then(() => {
            const originalText = btn.innerHTML;
            btn.innerHTML = '✅';
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-success');
            setTimeout(() => {
              btn.innerHTML = originalText;
              btn.classList.remove('btn-success');
              btn.classList.add('btn-outline-primary');
            }, 1200);
          }).catch(err => {
            console.error('Error al copiar:', err);
            const originalText = btn.innerHTML;
            btn.innerHTML = '❌';
            setTimeout(() => {
              btn.innerHTML = originalText;
            }, 1200);
          });
        }
      });
    });
    
  } catch (error) {
    console.error('❌ Error cargando promociones:', error);
    document.getElementById('resultado').innerHTML = `
      <div class="alert alert-danger">
        <h6>❌ Error</h6>
        <p>No se pudieron cargar las promociones: ${error.message}</p>
        <button onclick="verPromociones()" class="btn btn-outline-primary btn-sm">
          🔄 Reintentar
        </button>
      </div>
    `;
  }
}

// Cargar configuración de Google Vision
cargarConfiguracionGuardada();

// Renderiza historial
renderHistorial();