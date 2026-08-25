const CACHE_NAME = "ctts-v12";
const urlsToCache = ["./","./index.html","./logo.png","./manifest.json","./staff-rogom.jpg","./staff-team.jpg","./bookshop.jpg","./techcenter.jpg","./stationery.jpg"];
self.addEventListener("install", e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)))});
self.addEventListener("fetch", e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
