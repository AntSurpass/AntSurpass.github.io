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
    "revision": "9277928b9d07beb510db56c170e54908"
  },
  {
    "url": "about/index.html",
    "revision": "50992ceb37146109863e893a6b6af5d2"
  },
  {
    "url": "angular/index.html",
    "revision": "6afa4ff0c8165089d396058bf48c042f"
  },
  {
    "url": "assets/css/0.styles.43267ab8.css",
    "revision": "9125258d84e69877edee6e29ca1b9dd7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.18f13ad6.js",
    "revision": "11c7e022d249a69464ea157ea254da40"
  },
  {
    "url": "assets/js/11.482de883.js",
    "revision": "85d07f8cba03bded6ba19bd929bae123"
  },
  {
    "url": "assets/js/12.62b4c409.js",
    "revision": "bec104a86fa9d443d20572b4573971bd"
  },
  {
    "url": "assets/js/13.01b9a4ba.js",
    "revision": "7f06d2d3a3f8483ad1b2525472d5cb7f"
  },
  {
    "url": "assets/js/14.eafed54f.js",
    "revision": "1db53bc1b95bd20213fab39ae9f308be"
  },
  {
    "url": "assets/js/15.5d051f1f.js",
    "revision": "01058b3464c2697f2dfbab941aa6990a"
  },
  {
    "url": "assets/js/16.30fe9cda.js",
    "revision": "4a756ad0bd5ec8e2a4d3cdc64be8e07a"
  },
  {
    "url": "assets/js/17.bff019bd.js",
    "revision": "a03ef4000100ce74bd06ab509f334e5b"
  },
  {
    "url": "assets/js/18.eb7133e0.js",
    "revision": "079979536f3994751f95094448ae060b"
  },
  {
    "url": "assets/js/19.19c12326.js",
    "revision": "cb3a8ae8d2852411290448da81282c4b"
  },
  {
    "url": "assets/js/2.8a24f939.js",
    "revision": "aa32edf0cf1ad0adf6a500b3d90e53f1"
  },
  {
    "url": "assets/js/20.cdc07717.js",
    "revision": "21f35b802719f99b6fdfa71c02a0ecf5"
  },
  {
    "url": "assets/js/3.c7014856.js",
    "revision": "08db24d9b0fe3d821da67f62b3f6f33d"
  },
  {
    "url": "assets/js/4.d53a01d1.js",
    "revision": "391ea414265e4b13cf57c25cb5016751"
  },
  {
    "url": "assets/js/5.39712711.js",
    "revision": "06f2294dee8fc8b7384e1f42b61c374c"
  },
  {
    "url": "assets/js/6.e15e0203.js",
    "revision": "266601100202c106c157c38cf5f73491"
  },
  {
    "url": "assets/js/7.a58354ca.js",
    "revision": "35f502cf602ec3ff990babd4c41d00e4"
  },
  {
    "url": "assets/js/8.e6854a9e.js",
    "revision": "d3363dd66c617d3f0945e02a2b45f003"
  },
  {
    "url": "assets/js/9.39de09b4.js",
    "revision": "aeecef3c1b387b76f98aa04772fe464c"
  },
  {
    "url": "assets/js/app.1ad323ea.js",
    "revision": "a689b941dfe1f8ad82ae638a565bd0eb"
  },
  {
    "url": "css/background.html",
    "revision": "90ae7010cfc9111e54c1d578fc764953"
  },
  {
    "url": "css/index.html",
    "revision": "64908241e8173ab98d0ef9b3420602f5"
  },
  {
    "url": "datastructure/index.html",
    "revision": "af90d0c9746e690d7c0e7dabb7ef13a6"
  },
  {
    "url": "html/index.html",
    "revision": "9b728c970559206eaac8b9699f221010"
  },
  {
    "url": "index.html",
    "revision": "ba4e8198701dd02271d0801265ce7bd4"
  },
  {
    "url": "js/index.html",
    "revision": "627c4ff56b650da96161b3adc7762931"
  },
  {
    "url": "logo.jpg",
    "revision": "dad816f112a85ff7250d7271b2222a01"
  },
  {
    "url": "node/index.html",
    "revision": "11c2699c27343ec523fc1ab22e117548"
  },
  {
    "url": "rxjs/index.html",
    "revision": "5180e1410a5697b632a4e027e920366f"
  },
  {
    "url": "svg/index.html",
    "revision": "afd519bfc3246ed5e5369634139d6d60"
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
