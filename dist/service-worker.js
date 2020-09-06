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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.3f031fe3.css",
    "revision": "4c7fe2e7d402964dd6343d049f509b25"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/Spring.a86e72be.png",
    "revision": "a86e72be321ab09152b9d4b75121f87c"
  },
  {
    "url": "assets/js/1.b4ca2ef3.js",
    "revision": "eedde979b2588e00b41a0b19f35b6807"
  },
  {
    "url": "assets/js/10.980a0962.js",
    "revision": "f057eca92ccd933572bb0d3f0cb5965a"
  },
  {
    "url": "assets/js/11.9661dc54.js",
    "revision": "ede8a46effc8ad916ea3c07326bb2ce6"
  },
  {
    "url": "assets/js/12.1d4391ea.js",
    "revision": "f33cb604581342f545e8cbf2aec79c0e"
  },
  {
    "url": "assets/js/13.1f71bca2.js",
    "revision": "059d7a410d2070fdca648b33de75e597"
  },
  {
    "url": "assets/js/14.d3ed0086.js",
    "revision": "9a844a90bdbe404cf3c4b9feeb49e67b"
  },
  {
    "url": "assets/js/15.9a7dc862.js",
    "revision": "a0f4696993bf1edfbae535a5242e4f68"
  },
  {
    "url": "assets/js/16.606220b8.js",
    "revision": "6bdf25924ef2081d37eb13ac7d8c3782"
  },
  {
    "url": "assets/js/17.5f8d65a3.js",
    "revision": "74838fb5bd61974415c11a8ad97991a6"
  },
  {
    "url": "assets/js/18.e2c1e589.js",
    "revision": "8fb4a3a1ece6feac34e22e9ae372043f"
  },
  {
    "url": "assets/js/19.608489bf.js",
    "revision": "12bccd77bdf0f0cc00bb25a68d355aa1"
  },
  {
    "url": "assets/js/3.511c65fb.js",
    "revision": "cf6cc0a1e8c91345302d43494b1007c6"
  },
  {
    "url": "assets/js/4.a1c646d2.js",
    "revision": "ad7d331c71591ef591f3d357532051d0"
  },
  {
    "url": "assets/js/5.ac00a5e5.js",
    "revision": "e54a0f89f6aaf4fee1c8e9ea19f8d8c7"
  },
  {
    "url": "assets/js/6.016688b3.js",
    "revision": "c06e6a03d6c984ce6b82520091b217a4"
  },
  {
    "url": "assets/js/7.d8b1d788.js",
    "revision": "c13da27906468f788775be8d1bca6e94"
  },
  {
    "url": "assets/js/8.17da934d.js",
    "revision": "8948cbba4bdd5e3735c33b80d23ecc47"
  },
  {
    "url": "assets/js/9.87a70e64.js",
    "revision": "fe6185a28953e725c4e301db49b94382"
  },
  {
    "url": "assets/js/app.d2269853.js",
    "revision": "b6086a515a4808e4684ac701f7159615"
  },
  {
    "url": "categories/essay/index.html",
    "revision": "259cd7aa00785738c2524b1975ed8868"
  },
  {
    "url": "categories/github/index.html",
    "revision": "1812a6bc7d3c9ed23208b94ae4f62c29"
  },
  {
    "url": "categories/index.html",
    "revision": "58619ec6f936c9688690c92726337ed4"
  },
  {
    "url": "categories/Spring/index.html",
    "revision": "215a5c28cd4e3091c395354087e24131"
  },
  {
    "url": "categories/xdag/index.html",
    "revision": "a71e64366d7bdbbac1c6ba70122dc4cf"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "a4d2ed04da38f1a0c3556c0ea6c7f7a5"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "4990796ab71a3aed9c13c04a7c31c8f7"
  },
  {
    "url": "index.html",
    "revision": "a5dc4b52612e41d8d492354a07e8b12c"
  },
  {
    "url": "myron.png",
    "revision": "e3cfdb8e4b7d3e13bb269a9f90027fa4"
  },
  {
    "url": "sky.jpg",
    "revision": "d29643962553159353fcd2c051ff3907"
  },
  {
    "url": "sun.png",
    "revision": "1eefdc7794d01f82a8eaae90815beb99"
  },
  {
    "url": "tag/essay/index.html",
    "revision": "a97b9326f136cd0e8b574fea5b663aa7"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8f3c5a763d39ec872e960d761bd74eb9"
  },
  {
    "url": "tag/index.html",
    "revision": "da5528b0bbc0a1114b9ca062800d0d42"
  },
  {
    "url": "tag/JDBC/index.html",
    "revision": "08b55d373ca991d705b81581cc3d7c11"
  },
  {
    "url": "tag/Spring/index.html",
    "revision": "eaf9eddccd8030a8a10585ca292e314a"
  },
  {
    "url": "tag/xdag/index.html",
    "revision": "3c5ace0ab27726c7b31e57f7c94fa570"
  },
  {
    "url": "tag/多线程/index.html",
    "revision": "d4368a9b9a5771959df2208b7d3e0626"
  },
  {
    "url": "timeline/index.html",
    "revision": "be86aa36821b28ddc8e03fb3062447c9"
  },
  {
    "url": "view/eaasy/hello.html",
    "revision": "6d79cb3f7d0e0e10ef6fba8f140a812c"
  },
  {
    "url": "view/eaasy/test.html",
    "revision": "f01d24782ccab25c2037be04db245700"
  },
  {
    "url": "view/github/git-clone-下载加速.html",
    "revision": "b913e9ede5076785c06b27c9104a236d"
  },
  {
    "url": "view/xdag/2020-03-30-pool.c的解读.html",
    "revision": "da33c08aea8eafb2dc94540d768aab8b"
  },
  {
    "url": "view/学习笔记/Spring/Spring入门学习笔记(一).html",
    "revision": "7816b197d0ff0fe9385b85d6c075f322"
  },
  {
    "url": "view/学习笔记/并发/2020-04-09-关于并发的一些知识.html",
    "revision": "a7586e275667047a2a005e3513a1afdd"
  },
  {
    "url": "view/学习笔记/数据库/JDBC入门学习.html",
    "revision": "d95f8b1cb73896c21643327fc9254dd4"
  }
].concat(self.__precacheManifest || []);
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
