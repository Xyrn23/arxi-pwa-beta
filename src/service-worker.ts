// src/service-worker.ts

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open('video-cache').then((cache) => {
      return cache.addAll([
        '/path/to/video1.mp4',
        '/path/to/video2.mp4',
        // Add all other videos or media files you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event: any) => {
  if (event.request.url.endsWith('.mp4') || event.request.url.endsWith('.webm')) {
    event.respondWith(
      caches.open('video-cache').then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
