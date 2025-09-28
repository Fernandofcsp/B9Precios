// ---------------------------------------------
// Back9 Service Worker - Offline/Online soporte
// ---------------------------------------------
// Estrategias:
// - Precarga: shell y recursos estáticos críticos
// - Navegación: network-first con fallback a index.html (SPA)
// - API (vercel backend): network-first con fallback a cache si existe y, si no, respuesta vacía segura
// - Imágenes: cache-first con fallback a placeholder
// - Otros assets: cache-first

const VERSION = "v15"; // Incrementa para invalidar caches
const CACHE_STATIC = `back9-static-${VERSION}`;
const CACHE_DYNAMIC = `back9-dynamic-${VERSION}`;
const CACHE_API = `back9-api-${VERSION}`;
const CACHE_IMAGES = `back9-images-${VERSION}`;

const ORIGIN = self.location.origin;

// Ajusta para coincidir con index.html (usa main.js?v=12 actualmente)
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/main.js?v=12",
  "/images/logob9.png",
  "/images/bastonico.png",
  "/images/bastonb9.png",
  "/images/back9ico.ico",
  "/images/icons/icon-192.png",
  "/images/icons/icon-512.png",
  // CDN críticos para que funcione como app offline
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css",
  "https://cdn.jsdelivr.net/npm/sweetalert2@11",
];

// Instala y precachea con manejo de errores mejorado
self.addEventListener("install", (event) => {
  console.log("[SW] Install: precache");
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_STATIC);
        await cache.addAll(PRECACHE_URLS);
        await self.skipWaiting();
      } catch (err) {
        console.error("[SW] Precache error:", err);
      }
    })()
  );
});

// Activación con limpieza de caches antiguos
self.addEventListener("activate", (event) => {
  console.log("[SW] Activate: cleanup old caches");
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(k => ![CACHE_STATIC, CACHE_DYNAMIC, CACHE_API, CACHE_IMAGES].includes(k))
          .map(k => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// Utilidades
const isGET = (req) => req.method === 'GET';
const isHTMLNavigate = (event) => event.request.mode === 'navigate';
const isImage = (req) => req.destination === 'image';
const isStaticAsset = (req) => ['script','style','worker','font'].includes(req.destination);
const isAPI = (url) => /verificadorb9-backend\.vercel\.app/.test(url.host);

// Respuesta JSON fallback segura para API de promociones si no hay nada en cache
const apiFallbackResponse = () => new Response(JSON.stringify({
  status: 'SUCCESS',
  promoResult: [],
  offline: true,
  message: 'Sin conexión. No hay promociones en cache.'
}), { headers: { 'Content-Type': 'application/json' } });

// Placeholder para imágenes cuando offline y no en cache
const imagePlaceholder = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
    <rect width="100%" height="100%" fill="#f0f0f0"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-family="Arial" font-size="18">Imagen offline</text>
  </svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};

// Fetch avanzado por tipo de recurso
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (!isGET(req)) return; // No manejar POST/PUT/etc

  const url = new URL(req.url);

  // Navegación HTML (SPA): network-first con fallback a index.html
  if (isHTMLNavigate(event)) {
    event.respondWith((async () => {
      try {
        const netResp = await fetch(req);
        // Cachear copia del index si es mismo origen
        if (url.origin === ORIGIN) {
          const cache = await caches.open(CACHE_STATIC);
          cache.put('/index.html', netResp.clone());
        }
        return netResp;
      } catch (_) {
        const cache = await caches.open(CACHE_STATIC);
        const cached = await cache.match('/index.html');
        return cached || new Response('Offline', { status: 503, statusText: 'Offline' });
      }
    })());
    return;
  }

  // API del backend: network-first con fallback a cache o JSON vacío
  if (isAPI(url)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_API);
      try {
        const netResp = await fetch(req);
        if (netResp && netResp.ok) {
          cache.put(req, netResp.clone());
        }
        return netResp;
      } catch (_) {
        const cached = await cache.match(req);
        return cached || apiFallbackResponse();
      }
    })());
    return;
  }

  // Imágenes: cache-first con fallback a placeholder
  if (isImage(req)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_IMAGES);
      const cached = await cache.match(req);
      if (cached) return cached;
      try {
        const netResp = await fetch(req);
        if (netResp && netResp.ok) cache.put(req, netResp.clone());
        return netResp;
      } catch (_) {
        return imagePlaceholder();
      }
    })());
    return;
  }

  // Assets estáticos (scripts, styles, fonts): cache-first
  if (isStaticAsset(req)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_STATIC);
      const cached = await cache.match(req);
      if (cached) return cached;
      try {
        const netResp = await fetch(req);
        if (netResp && netResp.ok) cache.put(req, netResp.clone());
        return netResp;
      } catch (_) {
        return cached || new Response('', { status: 504, statusText: 'Gateway Timeout' });
      }
    })());
    return;
  }

  // Otros GET: stale-while-revalidate simple
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_DYNAMIC);
    const cached = await cache.match(req);
    const fetchPromise = fetch(req)
      .then(resp => {
        if (resp && resp.ok) cache.put(req, resp.clone());
        return resp;
      })
      .catch(() => undefined);
    return cached || fetchPromise || new Response('', { status: 504 });
  })());
});

// Manejo del evento 'message' para actualizaciones
self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data === 'SKIP_WAITING' || (event.data && event.data.type === 'SKIP_WAITING')) {
    self.skipWaiting();
  }
});