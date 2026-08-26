const CACHE='ctts-v13.2-final-app';
const FILES=['index.html','admin.html','staff-invite.html','manifest.json','logo.png','staff-rogom.jpg','staff-team.jpg','techcenter.jpg','bookshop.jpg','stationery.jpg'];
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
