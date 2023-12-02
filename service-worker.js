const CACHE_NAME = 'offline-api';
const CACHE_DATA = [
  'service-worker.js',
  'load-service-worker.html',
  'create.html',
  'delete.html',
  'clear.html',
  'editor.js',
  'authMaker.html',
  'authorize.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_DATA);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
