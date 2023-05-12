if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, t) => {
    const i =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => a(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
  };
}
define(['./workbox-588899ac'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '1368a99af4cc67d1b87ed64a2ebd95ea',
        },
        {
          url: '/_next/static/F0EhDT4dIqPMV2-APuMtU/_buildManifest.js',
          revision: '2659b4f80b79c6c2b92fcb2b129936ae',
        },
        {
          url: '/_next/static/F0EhDT4dIqPMV2-APuMtU/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/2443530c-77b4a82fc7655c03.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/361-b88b5175e79dfa6d.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/450.39aa9c13459d022f.js',
          revision: '39aa9c13459d022f',
        },
        {
          url: '/_next/static/chunks/522-99c6c3ae3cd2d1b8.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/807.345c59ad553f2be5.js',
          revision: '345c59ad553f2be5',
        },
        {
          url: '/_next/static/chunks/95-7d756418797b63cd.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/app/layout-4dc3a39527b66380.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/app/page-290319f395c3194f.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/app/plans/page-a4433e3c6a4bda1f.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/app/receipts/%5Bid%5D/page-848352cc3dee3016.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/app/receipts/page-efe69c112b61a3c1.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/main-app-7a203a79cfdc4ed7.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/main-cc196506c005604a.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/pages/_app-bd272b71e07170e0.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/pages/_error-ce54a1605ae7cc63.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-0314b67c1b1152aa.js',
          revision: 'F0EhDT4dIqPMV2-APuMtU',
        },
        {
          url: '/assets/android-chrome-192x192.png',
          revision: 'eb6ac5a28c5f40ed37311880a7405baa',
        },
        {
          url: '/assets/android-chrome-512x512.png',
          revision: '34f2a865667496dd03c382e4db031e19',
        },
        {
          url: '/assets/apple-touch-icon.png',
          revision: '99f10483f3b362de4ff3df6e96a4f558',
        },
        {
          url: '/assets/fonts/BrunoAceSC-Regular.ttf',
          revision: 'a2b06d6a2166d7c00cfe79693fa6cfbd',
        },
        {
          url: '/assets/fonts/Ephesis-Regular.ttf',
          revision: '13edaad8288d4cc98e17f8134f730df6',
        },
        {
          url: '/assets/icon.png',
          revision: '43cf92d8de81837627fb90205f097a2a',
        },
        {
          url: '/assets/ipad_splash.png',
          revision: '8f8bacb349e9b9f49408ddfff3801573',
        },
        {
          url: '/assets/ipadpro1_splash.png',
          revision: 'b3c8dcfd21cebd15b1bfe2680eb98a2b',
        },
        {
          url: '/assets/ipadpro2_splash.png',
          revision: '8537229ba0b96b59cbbaa0e3cbe8776e',
        },
        {
          url: '/assets/ipadpro3_splash.png',
          revision: '034ca1b3f5b4d23cee0d84debdea44e0',
        },
        {
          url: '/assets/iphone5_splash.png',
          revision: '164a0742401c86f2d33b5cb0b8699fee',
        },
        {
          url: '/assets/iphone6_splash.png',
          revision: '87b72c68a34ac413a2b127c0c1567e3c',
        },
        {
          url: '/assets/iphoneplus_splash.png',
          revision: 'b7af3fcd7c029382b282f557e9774983',
        },
        {
          url: '/assets/iphonex_splash.png',
          revision: 'c23583d9646853545f040c0c2bdbfa46',
        },
        {
          url: '/assets/iphonexr_splash.png',
          revision: '39b70edf27f0c6ce02dce2e66cbd826a',
        },
        {
          url: '/assets/iphonexsmax_splash.png',
          revision: 'b69525478f585bf5e459a03c4c742cd2',
        },
        {
          url: '/assets/splash_screen.jpg',
          revision: 'b8e43e32a246de97a1c3cecfbff645c5',
        },
        { url: '/favicon.ico', revision: 'de2065a0bbe8f3a2043e7c4d670a68a4' },
        { url: '/logo.svg', revision: '3576739acc32e9b72399fc09bba0f5e0' },
        { url: '/manifest.json', revision: 'c98550cb427eb6401ae7c35bf2390532' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
