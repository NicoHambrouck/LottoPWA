<<<<<<< HEAD
const CACHE_NAME = "lotto-pwa-cache";

const urlsToCache = [
  "./",
  "./index.html",
  "./lotto.css",
  "./lotto.js",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
=======
const CACHE_NAME = "lotto-pwa-cache";

const urlsToCache = [
  "/",
  "/lotto.html",
  "/lotto.css",
  "/lotto.js",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
>>>>>>> df61a4ac0d1281770a4f1410135a71e9246fb138
});