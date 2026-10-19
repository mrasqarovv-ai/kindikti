const CACHE = 'kindikti-29ba7e2a089d';
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(["./","./assets/index-B7WyHjfe.js","./assets/index-Dh00vcpW.css","./assets/manrope-cyrillic-wght-normal-Dvxsihut.woff2","./assets/manrope-greek-wght-normal-DL7QRZyv.woff2","./assets/manrope-latin-ext-wght-normal-Ch3YOpNY.woff2","./assets/manrope-latin-wght-normal-DHIcAJRg.woff2","./assets/manrope-vietnamese-wght-normal-usUDDRr7.woff2","./assets/original-01-3SVpbXdo.jpg","./assets/original-02-6D0J5cM4.jpg","./assets/original-03-DZkQX5m2.jpg","./assets/original-04-CfphLrrs.jpg","./assets/original-05-BUIi4oJz.jpg","./assets/original-06-HwQAq_jT.jpg","./assets/photo-01-BtP8RCGx.webp","./assets/photo-02-pydFSVSK.webp","./assets/photo-03-Cg0WatZk.webp","./assets/photo-04-CRKFp9lq.webp","./assets/photo-05-l4g-t15q.webp","./assets/photo-06-Bf0ViVyq.webp","./assets/photo-07-lgvuzASA.webp","./assets/rock-hOyebhBD.jpg","./icon-192.png","./icon-512.png","./icon.svg","./index.html","./manifest.webmanifest","./third-party-notices.txt"])));
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('kindikti-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  if (event.request.headers.has('range') || event.request.destination === 'video' || /\.(?:mp4|mov|webm|m4v)$/i.test(new URL(event.request.url).pathname)) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.status === 200) { const copy = response.clone(); event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(() => {})); }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === 'navigate' ? caches.match('./') : Response.error()))));
});
