const cacheName = 'v2';

// call Install Event
self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');
})

// call activate event
self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

 

// call fetch event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        // bei misserfolg lade assets vom cache
        fetch(e.request)
        .then(res => {
            // Make a clone of response
            const resClone = res.clone();
            caches.open(cacheName)
            .then(cache => {
                // Add Response to cache
                cache.put(e.request, resClone);
            })
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    )
})