const CACHE_NAME = "back9-cache-v9"; // Cambia la versión cada vez que actualices
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/images/icons/icon-192.png",
  "/images/icons/icon-512.png",
  "/styles.css",
  "/main.js?v=2" // Asegúrate de coincidir con el query string en index.html
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

// Estrategia de fetch: Cache primero, luego red
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Manejo del evento 'message' para actualizaciones
// ...existing code...