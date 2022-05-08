'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a540fdb1559fc37ae988dd7424beb248",
"index.html": "1d81472fec51022205dd841d8a5e8903",
"/": "1d81472fec51022205dd841d8a5e8903",
"main.dart.js": "726c462ea6dc6f08712cc97da078c39d",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "47c14605b6558efa5ea9087ea91003f4",
"assets/AssetManifest.json": "791954851983fb36bc2f82353cbaea07",
"assets/NOTICES": "e682aa55293f3370ee8a847260289f79",
"assets/FontManifest.json": "eb079b385e78aafe4e45e0859e8ef05b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/EBGaramond-Regular.ttf": "7212787ac2cb006948236e4600392180",
"assets/fonts/EBGaramond-Bold.ttf": "34e47062878705ec05ff16214f94ca38",
"assets/fonts/CinzelDecorative-Black.ttf": "6df555c4d9894f4786b7dfeaa1729430",
"assets/fonts/EBGaramond-Italic.ttf": "34b7c3fde2950359f0ad21f6a81f17b1",
"assets/fonts/AGaramondPro-BoldItalic.otf": "8a07359b549df0622defc109096b054d",
"assets/fonts/AGaramondPro-Regular.otf": "402c0c3f9ad95557355234c4721de230",
"assets/fonts/EBGaramond-BoldItalic.ttf": "5517b13569df337accec97b0cd2c96b1",
"assets/fonts/CinzelDecorative-Bold.ttf": "0307381d874b740df7117fd55135cc06",
"assets/fonts/EBGaramond-SemiBoldItalic.ttf": "1cca1f629b4a567339e623743f259ced",
"assets/fonts/EBGaramond-SemiBold.ttf": "b0f0745b5895ebb6b23bacb092a36e45",
"assets/fonts/AGaramondPro-Bold.otf": "7e6e34c24e9f06e8fe5b80d957bbed11",
"assets/fonts/AGaramondPro-Italic.otf": "f5eac8bc34d796294b100ff72b085800",
"assets/fonts/EBGaramond-MediumItalic.ttf": "afef29bd6ec91c63c7332a0eecaae888",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/CinzelDecorative-Regular.ttf": "56a9d689963e9e055a252666cc88bf3a",
"assets/fonts/EBGaramond-ExtraBoldItalic.ttf": "159416b81a1b7e5067fcb68d1222f783",
"assets/fonts/EBGaramond-ExtraBold.ttf": "38e3a5d2e7ac7636151a79911ad8b976",
"assets/fonts/EBGaramond-Medium.ttf": "159b30e9c4fd907b69a26cb47ead99a2",
"assets/assets/rules.pdf": "90ed879510f928b7429c25d10085949e",
"assets/assets/Iron%2520Helm%2520cartes.pdf": "3e4ab8b4cfce2744f4f985c271839cd3",
"assets/assets/images/back_trappings.png": "5fc410ebefdd0a5af18223afa2cd43f0",
"assets/assets/images/back_accessories.png": "375fcedab9089143f5ef3ec84633170f",
"assets/assets/images/ration.png": "8727b202891522f4e474c348222e231e",
"assets/assets/images/back_plots.png": "907e7afbf6f878845b95a554ade11c1f",
"assets/assets/images/green_heart.png": "368ced89d05bb1a556c060b4d9ac6365",
"assets/assets/images/rule.png": "117f6f67b4a6915a1c043a07c51f0a90",
"assets/assets/images/back_loot.png": "ac3efca8fd1165b2a7408de24b5a3b11",
"assets/assets/images/energy.png": "fd7b9aab93ae555ce677cec6ff9410e1",
"assets/assets/images/back_secondary.png": "cdf8fddd8a6f0689b9ce8380b0590d32",
"assets/assets/images/blessing.png": "042e6ec3323a1e0ff704c37634bee555",
"assets/assets/images/back_enemies.png": "d76d1bb2c90393c0afa50e278288428d",
"assets/assets/images/back_bosses.png": "5b96bda48f3a4664fc9be79881db867d",
"assets/assets/images/back_head.png": "b23c5c3457f5fe46872eb2afbaea92ba",
"assets/assets/images/poison.png": "fa49a7236e898400c3c96c10244c1e82",
"assets/assets/images/heart.png": "ac3af5c51cdb806a1804253cb3a148d3",
"assets/assets/images/back_characters.png": "6b7adf20280552a54462e1ac6a0fc43f",
"assets/assets/images/back_body.png": "e26c23da5491747ce63171e268dc03d2",
"assets/assets/images/back_potions.png": "ed31ec0863211d2d107e8702ad90de56",
"assets/assets/images/none.png": "01fde28843add07c25c73c631662b403",
"assets/assets/images/double_heart.png": "01fde28843add07c25c73c631662b403",
"assets/assets/images/ironhelm.png": "32c9414da35cdcb425f455cf8d3d200a",
"assets/assets/images/back_doors.png": "1df74a12216c2e2b69f5c0112f456a1e",
"assets/assets/images/back_skills.png": "f563f57cf236ab64ca6f0f46429d7c72",
"assets/assets/images/back_primary.png": "a576193e909e8d84aefaec6d4ec3e965",
"assets/assets/images/gold.png": "bd9f3e91ee004c8accf4806951fee889",
"assets/assets/rules_small.pdf": "3dfdf46472675a4f7babec8fc2b3b86e",
"assets/assets/ironhelm.psd": "d1fb74339426f1fd6542d39cc700305f",
"assets/assets/playmat.png": "50632c74ec079b8c9ff766e1491d7e5a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
