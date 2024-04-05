'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b8cc38536f244b6d5c76ec59a749e106",
"index.html": "54f79bab9bade6cbf2ae5dd903567950",
"/": "54f79bab9bade6cbf2ae5dd903567950",
"main.dart.js": "e11ef1ed7c684447f01536780327e4d2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "afdc67cc7b8bf9c439467f39bb21938f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "81ae47301a65b4b2e9fc246ed068b804",
"assets/AssetManifest.json": "84532d64b41cae8aed690c0a63f6a16d",
"assets/NOTICES": "7cd1c7f3a5b5429229197db2be0937fc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8acdc93f9c26881ecb28186f083797a5",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/check.png": "5b33ecf9febd1b1f12bcf7c02d34808b",
"assets/assets/images/hero.png": "3ec755125a2ebe62edbfd053f0812ce0",
"assets/assets/images/plan1.png": "b941b8612c7f0402159032f102350d24",
"assets/assets/images/back11.png": "cf5f0b2da2b932448a318177ffa913d7",
"assets/assets/images/plan3.png": "9d31a8617d039b609b099826db658ccb",
"assets/assets/images/instagram.png": "2b8f79074f46dac9d0ee3310bfffbb12",
"assets/assets/images/plan2.png": "975a476d87913bbe2de03c3523a33df1",
"assets/assets/images/back10.png": "916b3bd4eb8de1452f47d606f0c5783b",
"assets/assets/images/f7.png": "7b2561de38f708e1fe327a3e3dee1c75",
"assets/assets/images/logo_big_2.png": "ddb214a89438c4df761344e37d6ef829",
"assets/assets/images/logo_big.png": "c3a94bb538e156d99d19948f63c31b8e",
"assets/assets/images/f6.png": "2654484bb3a41b667efd5f4f6c51801f",
"assets/assets/images/community.png": "aba3e435d7399cab4936fa1fff376ada",
"assets/assets/images/back8.png": "dd28b48d7ca187eb6051b63b64f8a843",
"assets/assets/images/f4.png": "a84655c9442a03dfd845f72c9f83eb2b",
"assets/assets/images/f5.png": "b4f133318b985269c60cbdc9b6b201ae",
"assets/assets/images/back9.png": "6bc6585d8a4d8923388cd9165ce12e15",
"assets/assets/images/f1.png": "418c539b6828cc4d8aa5b531302e5586",
"assets/assets/images/f0.png": "f6ee8ead1cbe77c55adfb8f295ebdacc",
"assets/assets/images/f2.png": "0d3e02fd107451f8773b9ea82612348b",
"assets/assets/images/grid.png": "e950dfd69ba79bf7d0e71f296a214586",
"assets/assets/images/f3.png": "f2a4007097b73b07639820a7a3629108",
"assets/assets/images/back2.png": "0f9daea1f3de780a923f530e02bfd005",
"assets/assets/images/back3.png": "f9ed36a5634aa2d70a8f83a5793aa72e",
"assets/assets/images/graph.png": "952b062f1b5f371b94bab0b50d142803",
"assets/assets/images/check_grey.png": "e9d8b379f47883e7e4b1e997757d7300",
"assets/assets/images/back1.png": "d3a280b38659ed7c2bda71ecf7133943",
"assets/assets/images/back0.png": "dd85153ef47dba736e6307db9609d926",
"assets/assets/images/logo.png": "afdc67cc7b8bf9c439467f39bb21938f",
"assets/assets/images/back4.png": "099da6ad3d86342c6c1f479742a48cfe",
"assets/assets/images/f8.png": "69b8008407b4f0f4bfb1b153c1768f58",
"assets/assets/images/twitter.png": "665cacb19b41c2656172e4c007ffca7d",
"assets/assets/images/f9.png": "0cb676c9c64d2321e3518330ff3b8a1f",
"assets/assets/images/f12.png": "79fa088ab2b21a141e560eba631c7ae4",
"assets/assets/images/back5.png": "4f8ec1d7e2c696c374458d7b5c1b7332",
"assets/assets/images/back7.png": "9978ffafead29466454a5fbe80bf6a69",
"assets/assets/images/f10.png": "8e4b3145d463a9d0251382f6724ca4af",
"assets/assets/images/f11.png": "0ead43ad975fc7c89aa26799c3e82318",
"assets/assets/images/back6.png": "401fb1f912f38286bc2ea6c04949abe1",
"assets/assets/images/qr.png": "d58fe70f5d8e9fe02f73009af5c8527f",
"assets/assets/images/three_people.png": "5dc77fa8df513986f5a3eefd26f7b3df",
"assets/assets/images/facebook.png": "5724a6e7e8023701b507faea10cd90a0",
"assets/assets/images/table.png": "85b923984a1f1c0a82c44d3a0ef2369c",
"assets/assets/videos/7.mp4": "5fe4f159d058140f441f74033fc10433",
"assets/assets/videos/6.mp4": "64c19438e5d95611bd4f70442f8bdbdd",
"assets/assets/videos/4.mp4": "f1fc86a64219354e3075a3ed1a015569",
"assets/assets/videos/5.mp4": "e0d307c47d4f97557e50c9c26621ba75",
"assets/assets/videos/1.mp4": "1d3d5b8e1c1063f7615dca96794c6da5",
"assets/assets/videos/2.mp4": "bb8d591b02f4443a6783b225c33bfffd",
"assets/assets/videos/3.mp4": "35dd7717113ddfc7dfbeced26574a32f",
"assets/assets/videos/11.mp4": "509fb7e102ffe498cded12ef18689c5e",
"assets/assets/videos/10.mp4": "363dd24f1525977f303992c261243855",
"assets/assets/videos/12.mp4": "90f6d3f11d6bff95164a39044af2b43f",
"assets/assets/videos/13.mp4": "3476e522e5d5eccd729a28d9e925a34d",
"assets/assets/videos/8.mp4": "012d3fa4038d741c71916f75d679c8d5",
"assets/assets/videos/9.mp4": "7e3fc8a1d9af9a5a5a03293103a78846",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
