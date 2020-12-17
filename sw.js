var NOME_CACHE = 'cache-v1';
var coseDaChachare = [
    '/',
    '/style.css',
    '/script.js',
    '/favicon.ico',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(NOME_CACHE)
            .then(function(cache) {
                console.log('chache aperta');
                return cache.addAll(coseDaChachare);
            })
    );
});  

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then( (response) => {
                if (response) {
                    return response;
                }
            return fetch(event.request);
            }
        )
    );
});
  