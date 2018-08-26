importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

  // point where we'll mount the precache manifest files
  workbox.precaching.precacheAndRoute([
  {
    'url': 'css/master.css',
    'revision': '588aa989df5b9bb1f59aa6d22cba0cb6',
  },
  {
    'url': 'index.html',
    'revision': '708da8295998f6e46d9a4ecd13ae9dad',
  },
  {
    'url': 'js/bibliotype.js',
    'revision': '37efaf4d7f4bb690833bd11f0449c4af',
  },
]);

  workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
      // Use a custom cache name
      cacheName: 'css-cache',
    })
  );

  workbox.routing.registerRoute(
    /.*\.(?:otf|ttf|woff|woff2)/,
    workbox.strategies.cacheFirst({
      cacheName: 'fonts-cache',
        plugins: [
          new workbox.expiration.Plugin({
            // Cache only 20 images
            maxEntries: 4,
            // Cache for a maximum of 30 days
            maxAgeSeconds: 120 * 24 * 60 * 60,
          }),
        ],
      }
    )
  );

  workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images
          maxEntries: 20,
          // Cache for a maximum of 30 days
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    })
  );


