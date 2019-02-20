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
    "revision": "3a4cf0bbbadadec6a0fbac4a264eaa12"
  },
  {
    "url": "about/index.html",
    "revision": "346e50c5c36bcef3a7e706acacf64f99"
  },
  {
    "url": "angular/index.html",
    "revision": "de461d28e0df2ac5fa4f7e93d645622b"
  },
  {
    "url": "assets/css/0.styles.5463427d.css",
    "revision": "79a35cd76497a94039361315d7b1d68f"
  },
  {
    "url": "assets/img/bg-5.937a95a7.png",
    "revision": "937a95a7e48c4cc41c27aa69fcffde2b"
  },
  {
    "url": "assets/img/bg-6.5677a27f.png",
    "revision": "5677a27f408bb413e07c8cfab4468d15"
  },
  {
    "url": "assets/img/bg-p1.4ea58b63.png",
    "revision": "4ea58b6349095ff1a5c0b1fac6404586"
  },
  {
    "url": "assets/img/bg-p4.4d81391b.png",
    "revision": "4d81391b14a8db14f198618044dad827"
  },
  {
    "url": "assets/img/bg3.7f55a7f2.png",
    "revision": "7f55a7f289a88464f441e33036c818b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0e9775ea.js",
    "revision": "335c387e02a5d4cd9534801aa3af8b8c"
  },
  {
    "url": "assets/js/11.a37b5553.js",
    "revision": "85d07f8cba03bded6ba19bd929bae123"
  },
  {
    "url": "assets/js/12.807c9d2c.js",
    "revision": "f5b9c2fb2794f2511a440a52a08ee2ca"
  },
  {
    "url": "assets/js/13.50d954cb.js",
    "revision": "eba186592800ae87f8e631f35c68a651"
  },
  {
    "url": "assets/js/14.5de4781a.js",
    "revision": "41d42653fb69f5cd11e441c8bc42a664"
  },
  {
    "url": "assets/js/15.dcf00edd.js",
    "revision": "102525852944a86f8b22768725a9f648"
  },
  {
    "url": "assets/js/16.45a5f533.js",
    "revision": "07304173daca6ae35fd46ed1792a2df9"
  },
  {
    "url": "assets/js/17.c47f08c8.js",
    "revision": "e240bda0ab2c88711d12f43e287c7ed5"
  },
  {
    "url": "assets/js/18.1cb98814.js",
    "revision": "4029893c29af3244adaf71e857c0d3fc"
  },
  {
    "url": "assets/js/19.f94be41d.js",
    "revision": "4456c3911f6aef6f8f5ea4886d12a4f6"
  },
  {
    "url": "assets/js/2.4cfc15a8.js",
    "revision": "bf6c0d2b82b64bac5dad50f99258ef34"
  },
  {
    "url": "assets/js/20.cdc366ad.js",
    "revision": "35eb9bad138c14acaed70dc5d367453d"
  },
  {
    "url": "assets/js/21.64ca258d.js",
    "revision": "18d06999c5ef716fad67e7ab161f899b"
  },
  {
    "url": "assets/js/3.0d149bf3.js",
    "revision": "03a4840a32992b192c3e2f7ba2f47e7d"
  },
  {
    "url": "assets/js/4.1ebe2832.js",
    "revision": "ce6216c2f61fb4ad333f20929199f0f6"
  },
  {
    "url": "assets/js/5.39712711.js",
    "revision": "06f2294dee8fc8b7384e1f42b61c374c"
  },
  {
    "url": "assets/js/6.713e80e8.js",
    "revision": "4dfaf61ec782835720e9836710129a70"
  },
  {
    "url": "assets/js/7.0431602e.js",
    "revision": "061fe225d61be2aae746f9d03a25250f"
  },
  {
    "url": "assets/js/8.c2ed65a9.js",
    "revision": "48a8d10be0e12729dc8793b5b269cf0b"
  },
  {
    "url": "assets/js/9.b180156e.js",
    "revision": "331aa96731de60a144609c402f8bad11"
  },
  {
    "url": "assets/js/app.cc22ba57.js",
    "revision": "85922a2571008f88bfdb1bad56640219"
  },
  {
    "url": "css/background.html",
    "revision": "857cda24c04a4abb7986cf389bcca089"
  },
  {
    "url": "css/detatype-position.html",
    "revision": "7b0d47a59553214392b394f378752d08"
  },
  {
    "url": "css/index.html",
    "revision": "0f5b88a9adb3a1b3c6cd1cb5ef17e314"
  },
  {
    "url": "datastructure/index.html",
    "revision": "2993874b38128c8ba043619922b8c8ca"
  },
  {
    "url": "html/index.html",
    "revision": "873dc53f1eaf55e4aa17716fc8503624"
  },
  {
    "url": "index.html",
    "revision": "82e4e487128b909a9b7a78a0a8aa116a"
  },
  {
    "url": "js/index.html",
    "revision": "b76e4df1619b35dfea8471e1b9d205f1"
  },
  {
    "url": "logo.jpg",
    "revision": "dad816f112a85ff7250d7271b2222a01"
  },
  {
    "url": "node/index.html",
    "revision": "38d5b6a151fd1e2635e1ee7d9b99ebaf"
  },
  {
    "url": "rxjs/index.html",
    "revision": "428818f5cfa00528e18cc45a9359c87f"
  },
  {
    "url": "svg/index.html",
    "revision": "6af2f31266f7ad1c7b50c3f24553c857"
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
