// 缓存名称和预缓存列表
const CACHE_NAME = 'v2-cache';
const PRE_CACHE_LIST = [
  '/',
  '/index.html',
//   '/cache-control.css',
  '/strong-cache.html'
];

// 安装阶段：预缓存关键资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRE_CACHE_LIST))
  );
});

// 激活阶段：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      );
    })
  );
});

// 拦截请求：Stale-While-Revalidate策略
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});