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
    "revision": "0243aea2d7005114489d0c3f967054e0"
  },
  {
    "url": "about/index.html",
    "revision": "deca2418d5855f7f648aa27cc8f7c597"
  },
  {
    "url": "angular/index.html",
    "revision": "6b95426d9ead10cce996f27ebffb48d1"
  },
  {
    "url": "assets/css/0.styles.2f2c72ce.css",
    "revision": "db2e3fb2540dfa1bc3d4a4598735dd4d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cd8a685d.js",
    "revision": "0fd4ad141d4d914b0d425d461b14708c"
  },
  {
    "url": "assets/js/11.68144a41.js",
    "revision": "945677a09a4bb31d49d6412ba9e74070"
  },
  {
    "url": "assets/js/12.d8f19535.js",
    "revision": "f60845b1e095258eb0b9b209b90cc760"
  },
  {
    "url": "assets/js/13.be6024b0.js",
    "revision": "72fdcf0da0bb5c8424c860adb19ac37f"
  },
  {
    "url": "assets/js/2.40fe5f74.js",
    "revision": "b09d2453fe76b6073340bde181895b70"
  },
  {
    "url": "assets/js/3.c6fe4f3f.js",
    "revision": "966c5a43855d877af20dca6c606d62d4"
  },
  {
    "url": "assets/js/4.61be5de4.js",
    "revision": "20315a34a100cf63f5781fd02c4dc5dc"
  },
  {
    "url": "assets/js/5.7c87cdaa.js",
    "revision": "2a0a8ceefbbd5de8a847763a757670dd"
  },
  {
    "url": "assets/js/6.33c61968.js",
    "revision": "a347e5cc4c7459d6491f0112f39b6f3d"
  },
  {
    "url": "assets/js/7.963f79d7.js",
    "revision": "7cefd65a844ffd715d2be077aafeb4a9"
  },
  {
    "url": "assets/js/8.13e93dba.js",
    "revision": "3fba38c6c33ea31835858ae23bb999b8"
  },
  {
    "url": "assets/js/9.0391033a.js",
    "revision": "76aa84d74cff5b22a038fe2397980ba3"
  },
  {
    "url": "assets/js/app.066ee11b.js",
    "revision": "7f35705a8dc66abc94e18d2035de67b3"
  },
  {
    "url": "css/index.html",
    "revision": "52cac9872501a18107a44cad7d1b5681"
  },
  {
    "url": "html/index.html",
    "revision": "275cb5143e25bc105ad3428d94abbacf"
  },
  {
    "url": "index.html",
    "revision": "2c5df131337d98865e6e735ddf0131c1"
  },
  {
    "url": "js/index.html",
    "revision": "73a9c37bba559e2cbe984e514615d438"
  },
  {
    "url": "logo.jpg",
    "revision": "dad816f112a85ff7250d7271b2222a01"
  },
  {
    "url": "node/index.html",
    "revision": "f66e0280945a37326767b24ab26ce1be"
  },
  {
    "url": "svg/index.html",
    "revision": "c8f41fa097e4a08fd7bd6544616c5ab3"
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
