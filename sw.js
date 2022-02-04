const VERSION = "v1";

self.addEventListener("install", event => {
    // wait until the pre-cache complete
    event.waitUntil(preCache())
})

// Every time a fetch(request) occurs, I want the SW to do something
self.addEventListener("fetch", event => {
    // catch the request
    const request = event.request;

    // Only get
    if (request.method !== "GET") {
        return;
    }

    // search in cache
    event.respondWith(cachedResponse(request));

    // update cache
    event.waitUntil(updateCache(request));
})

async function preCache() {
    const cache = await caches.open(VERSION);
    // all own resources
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/javascript/index.js',
        '/assets/javascript/MediaPlayer.js',
        '/assets/javascript/plugins/AutoPlay.js',
        '/assets/javascript/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/video.mp4',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);

    // search in cache if we have
    // if have not, return undefine
    const response = await cache.match(request);

    // if is undefine, return with a request internet
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}

