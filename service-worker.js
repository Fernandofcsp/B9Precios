const CACHE_NAME = "back9-cache-v7"; // Incrementado para nueva versión
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images/icons/icon-192.png",
  "./images/icons/icon-512.png",
  "./main.js?v=3", // Actualizado para coincidir con index.html
  "./images/back9ico.ico",
  "./images/logob9.png"
];

// Instala y precachea con manejo de errores mejorado
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Instalando...");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
      .catch(err => {
        console.error("[Service Worker] Error al precachear:", err);
      })
  );
});

// Activación con limpieza de caches antiguos
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activado");

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de fetch mejorada: Network first para APIs, cache first para assets
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  
  // Network first para APIs y recursos dinámicos
  if (url.hostname.includes('verificadorb9-backend.vercel.app') || 
      url.hostname.includes('contador-apicloudvision.vercel.app') ||
      event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // Fallback a cache solo si la red falla
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // Cache first para assets estáticos
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      
      // Si no está en cache, fetch y cache
      return fetch(event.request).then(response => {
        // Verificar que sea una respuesta válida
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Clonar la respuesta
        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        
        return response;
      });
    })
  );
});

// Manejo del evento 'message' para actualizaciones
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Manejo de errores de cache
self.addEventListener('error', (event) => {
  console.error('[Service Worker] Error:', event.error);
});

// Manejo de promesas rechazadas
self.addEventListener('unhandledrejection', (event) => {
  console.error('[Service Worker] Unhandled promise rejection:', event.reason);
  event.preventDefault();
});