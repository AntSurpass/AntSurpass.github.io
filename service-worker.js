/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1e2c6214eaecac289fdc237d67a33eb0"
  },
  {
    "url": "about/index.html",
    "revision": "e5f818a5d988dd22fc99850bfe74bbc3"
  },
  {
    "url": "angular/index.html",
    "revision": "099fdbc6d84b2ed08921825df923db1d"
  },
  {
    "url": "assets/css/0.styles.a328c14c.css",
    "revision": "f86a4e31fe909c51c172fd1069cc45b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3609e2db.js",
    "revision": "46114e92164fef10c962cac424bdfe61"
  },
  {
    "url": "assets/js/11.4173985a.js",
    "revision": "07d3ee743e88419d96fceb83236894be"
  },
  {
    "url": "assets/js/12.042f438c.js",
    "revision": "9ead72156aaac1cc21049d29512dda36"
  },
  {
    "url": "assets/js/13.9025d53e.js",
    "revision": "49d53f61463a0635a034a63d667251ab"
  },
  {
    "url": "assets/js/14.fcc736e4.js",
    "revision": "5879d3d2bf7d3479863ce1a7a48a8add"
  },
  {
    "url": "assets/js/2.f4e82d85.js",
    "revision": "9d698a03674a2909e8ad22884fd8152c"
  },
  {
    "url": "assets/js/3.df598a32.js",
    "revision": "83f78e31573ad1e4a6eee0a25abcdec7"
  },
  {
    "url": "assets/js/4.73ddeb36.js",
    "revision": "e62c715717dcee23719b380dc6a298c0"
  },
  {
    "url": "assets/js/5.739476bb.js",
    "revision": "39781844e4bf53290708ccdeecd783ec"
  },
  {
    "url": "assets/js/6.1a1705ba.js",
    "revision": "56d82b13b2172073283804013c136f0d"
  },
  {
    "url": "assets/js/7.a842bf7b.js",
    "revision": "2777be8fa1a2d6e4528fec18defd0111"
  },
  {
    "url": "assets/js/8.2e9cdc45.js",
    "revision": "9fd3ba65d36403aa35c72b8f4d9b0b2f"
  },
  {
    "url": "assets/js/9.086f2e5c.js",
    "revision": "6692bbb72215e9f93f324a6082f06b85"
  },
  {
    "url": "assets/js/app.ea8e79bd.js",
    "revision": "9fcec8fe14322c0c0a03590ece25a85b"
  },
  {
    "url": "css/index.html",
    "revision": "86d2c65ada9b21c7a8cb1c46b9059a51"
  },
  {
    "url": "html/index.html",
    "revision": "e0f1e7fd1a259726018f09229b654a30"
  },
  {
    "url": "index.html",
    "revision": "a2ed4ece6a6d831a39f8d26543da8ab7"
  },
  {
    "url": "js/index.html",
    "revision": "0f3b078f80197497a9dc8b4b3f54440f"
  },
  {
    "url": "logo.jpg",
    "revision": "dad816f112a85ff7250d7271b2222a01"
  },
  {
    "url": "node/index.html",
    "revision": "7e32cf39c48933daf2d5fe06cce95182"
  },
  {
    "url": "svg/index.html",
    "revision": "84e3475437c394588f846a8b4317a181"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
