// mage sure, sw are supported
if('serviceWorker' in navigator) {
    // console.log('service worker supported')
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('./sw-cached-pages.js')
        // .register('./sw-cached-site.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log(`Service worker: Error: ${err}`))
    })
}