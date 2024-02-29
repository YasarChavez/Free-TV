var datoRecibido = localStorage.getItem("link");

// Obtener el elemento source por su ID
var miFuente = document.getElementById("miFuenteVideo");

// Asignar el valor del atributo src
miFuente.src = datoRecibido;

// Obtener el elemento de video por su ID
var miVideo = document.getElementById("my-video");

// Llamar al método load() para que el video cargue la nueva fuente
miVideo.load();
// Configuración de Video.js
var player = videojs("my-video");
player.play(); // Auto-reproducir el video al cargar la página

console.log(datoRecibido);
document.getElementById("datoRecibido").innerText = datoRecibido;
