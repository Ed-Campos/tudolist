const CACHE_NAME = "tudolist-v1";

self.addEventListener("install", function(event) {
  console.log("TudoList instalado");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request)
  );
});
