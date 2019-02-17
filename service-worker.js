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
    "revision": "c3625f5302d0015d902460184ddb94f0"
  },
  {
    "url": "about/index.html",
    "revision": "c054c102c7ee672823693a15dc58476d"
  },
  {
    "url": "angular/index.html",
    "revision": "6d93b2d85bd8a68f837e972977d9196b"
  },
  {
    "url": "assets/css/0.styles.5463427d.css",
    "revision": "79a35cd76497a94039361315d7b1d68f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eeb29629.js",
    "revision": "8d3b5ae36c469584d14d6a92bafbf18a"
  },
  {
    "url": "assets/js/11.ccc1275e.js",
    "revision": "7f6b95b97641f9c9ecd34becdfec45ac"
  },
  {
    "url": "assets/js/12.ae7a9cc0.js",
    "revision": "b19294b5d298df14e7d033c826ae3ad6"
  },
  {
    "url": "assets/js/13.1bf20d14.js",
    "revision": "3527a10ead26de8a7f60e40e0d614afe"
  },
  {
    "url": "assets/js/14.45a004ab.js",
    "revision": "671cebe039657c45ace7913cc088a92b"
  },
  {
    "url": "assets/js/15.8341daa3.js",
    "revision": "9d94092397dd3c9b86ab40fccc0910a8"
  },
  {
    "url": "assets/js/16.0a5853f1.js",
    "revision": "f2136e46853bc2ea7e658220630893fa"
  },
  {
    "url": "assets/js/2.1b72b72a.js",
    "revision": "2277ab8872bc6b9426f00b4bf5623af1"
  },
  {
    "url": "assets/js/3.448c3911.js",
    "revision": "08db24d9b0fe3d821da67f62b3f6f33d"
  },
  {
    "url": "assets/js/4.d7ce0aef.js",
    "revision": "6f41604378dccd2b252bd3e553a1eaa7"
  },
  {
    "url": "assets/js/5.e9081449.js",
    "revision": "c07c120a98c41ec842112d30fe781f4a"
  },
  {
    "url": "assets/js/6.46b59e67.js",
    "revision": "11cd11e84bad7b210d5fb12edaa93739"
  },
  {
    "url": "assets/js/7.dbc8acb0.js",
    "revision": "7b110d8b55981e79f74a5f65c933fc34"
  },
  {
    "url": "assets/js/8.a7f24264.js",
    "revision": "9e0c58856fcec63faabaf4faecfc1175"
  },
  {
    "url": "assets/js/9.2cfbc155.js",
    "revision": "60c43548f179f27941767ec8b8961c2e"
  },
  {
    "url": "assets/js/app.cd111aa2.js",
    "revision": "be966598489c23e2ef2c7962f28681df"
  },
  {
    "url": "css/index.html",
    "revision": "e50bc18e8c40c54ae0f9e86c20a0b6a8"
  },
  {
    "url": "html/index.html",
    "revision": "f6d06f2137403e347fff2550ff238bee"
  },
  {
    "url": "index.html",
    "revision": "21b425618bee63e7e7951709214a909f"
  },
  {
    "url": "js/index.html",
    "revision": "e183032bdfdd95cef2faa73e43582510"
  },
  {
    "url": "logo.jpg",
    "revision": "dad816f112a85ff7250d7271b2222a01"
  },
  {
    "url": "node/index.html",
    "revision": "95e61a0d88ae13f16ecb5b4f70d9b523"
  },
  {
    "url": "svg/index.html",
    "revision": "ce102428fe5c400f242c0780ac2faa78"
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
