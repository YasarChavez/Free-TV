window.onload = function () {
    // Configuración de Video.js
    var player = videojs("my-video");
    player.play(); // Auto-reproducir el video al cargar la página
};

// scripts.js
document.querySelector('.volver-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
