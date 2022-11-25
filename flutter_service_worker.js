'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/logs/HEAD": "429617744065b20dace57f08a88edbef",
".git/logs/refs/remotes/origin/main": "a2c9e614697de5aed03956256b7df9bb",
".git/logs/refs/heads/main": "cc4532d61e092f41c814b1dfa60286ea",
".git/config": "23a52b57dbd4ceef6012ff01488a2607",
".git/COMMIT_EDITMSG": "4c3cbcadf7b8a9ae2932afc00560a0d6",
".git/index": "b7583fc5b781e181649bb2310895779c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "1f7734dcf401bbee42677072bbb6f0f4",
".git/refs/heads/main": "816765a6097710e01fa8eb21001c16d5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "d528b3d1450cae81e1d1c82098fb8b28",
".git/objects/ec/d277d13de51a22f29bd24394a7b6e3e353f0f7": "a01b2418e9399db36e356c22f4267604",
".git/objects/28/cad366c41dae1dcd48af71efc7c452c1caaa0d": "e35450e74545cec3a623a6b7b1f3f121",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/bb/f916ae928ddfc905cecd50eb5810511f018b10": "a3dd70d941d7c6897ebb2b9536e8aceb",
".git/objects/5c/2ae271606f2435843a6f0e725c8eb9579e7960": "0b74dc850ccefb65ea2c4f237a23c289",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/12/34802e2133b4f8b9a2bc623e09245d275aeec2": "d799a678951ba80c7827b2fe681a57b2",
".git/objects/7e/4e9d4f39b3a96e485bac9f8910baca3d036ad7": "131f305fc2d02a04e8a2f755a540c3eb",
".git/objects/62/d23f903374cf722c5cd78c4c1b3c47d013b0be": "44d9c6c2e6698d851adbe04d0819d1f6",
".git/objects/47/dfefe6bc35243a52974415212127d43cae303e": "01cfd9591cbbaa0b23a0ccec70e1c40f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/d8/636ea555457aa5349d7882535df5da47d792b5": "84718c6ec341d11516308fc3aedd6c78",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/04/4c1aae80f634b6438af36967e33ee78960af99": "a9315958f2fbde44ffc3fedef768c4c9",
".git/objects/07/d6f75f1414c5d3ea08c6f067e207bccc33a45f": "89518ef27d1c6be2b9d6434cf6433bb1",
".git/objects/65/effde29153115ba55430d3f9362fc0e2b310e9": "50b06aa89db7cc43ecfbe7e60ef7a4a9",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/f9/5e976a8709a8415a735c6b99a5cf4ef9e310b1": "d3fc9fe26330ad569cea2ddc608d7b7d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c4996e1302a7884013c14a9f19fe44887a2744": "91dfa5cfcf7a0c1178dc400505d447a0",
".git/objects/92/df976e3eead2bcda95ca7308b8ce4604efae61": "33ce878458eec784dd36918d91234af9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/9c/05c70905cc66640e16c46f6ff4e5b9ed7f3111": "0241bea1876c9a2aef388debfb13c6c9",
".git/objects/9c/d06eb6bfdebb5a880daf2afb91b185239294ec": "793d8cadecf8a45378dedc5d01ce19b5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/39/ad516b63000ea2ad0c39e6e1b54b08d4c8b01f": "5937b74380fb6a5cd3850b157dec3eda",
".git/objects/d9/ef8f130ffcbcdb52187c3a06da0f241132b35f": "7d708d4f966aef3b594167ebed166e82",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/03/0f280f5131124c04b7ec37c3e60144ccbc30ab": "40e221ddab4d313d8a2a7c47ba602b08",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cf/d489d5ba74ed56ae2a4e53992d4cea908269d8": "be173f6860e6953ecda85891adb89476",
".git/objects/6f/7111faf4be3609826ece3b7c4ca71db4b32755": "93539401441f49f1367477e58074612e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1f/77d3c5972ba2364d9e0a136ef81e2dfcf05b31": "afc0ebe89430eb9c38809aaf33d5b786",
".git/objects/b8/e785cfc0d8e62013811a7f3c276d4bce4bb8cb": "4de1d5673b3d5b177742f53b681d3bbe",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/82/0aefae8d4b150dedac361aa7d807c5a0d770ad": "0d954ef3c27f92a0e336f6847aaa70f0",
".git/objects/c5/478fdd3fbfb3020b2c40008fca53b32b107b39": "54e2239f711853c5c59713d38dbde1c5",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bd/239350399d81da51ce1407ac8cf663dc1f49bb": "3f707fb6cc8c166abb2d129c6938099d",
"version.json": "d55f769c815760ee035eeb8721fb234c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js": "a7c6f250b6407dab780bb889b02dfef2",
"assets/NOTICES": "a565378877317d78f4e5020b0a1edd51",
"assets/assets/splash.png": "380e53ef6b2e872dc5479cfd829da832",
"assets/assets/logo.jpeg": "edf582600d247bbe3ab908f72dd033ae",
"assets/assets/logo.png": "83336434426532bdc1c36bb33983f212",
"assets/shaders/ink_sparkle.frag": "86102a1a86941d3c440f00bc00bae1eb",
"assets/AssetManifest.json": "058033dfda219e4561e4d9d4ef8d982e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"index.html": "9a4ad9519fc12dd501862a40fa759943",
"/": "9a4ad9519fc12dd501862a40fa759943",
"manifest.json": "254097c458e0eb3a28b35a01bb8f1582",
"splash/img/light-4x.png": "b0e7f32cece9f1a7da2f8ecc16131908",
"splash/img/dark-2x.png": "db64d81fa7f66f1b4998a123d6e80ba6",
"splash/img/light-3x.png": "92c42114818d7d2a9d94e16a7e90286c",
"splash/img/light-2x.png": "db64d81fa7f66f1b4998a123d6e80ba6",
"splash/img/dark-4x.png": "b0e7f32cece9f1a7da2f8ecc16131908",
"splash/img/light-1x.png": "1ae1638f2b5c59cec408ee0b3b138c2c",
"splash/img/dark-1x.png": "1ae1638f2b5c59cec408ee0b3b138c2c",
"splash/img/dark-3x.png": "92c42114818d7d2a9d94e16a7e90286c",
"splash/style.css": "3e8699dd65a865ff991ec5b47a93643d",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
