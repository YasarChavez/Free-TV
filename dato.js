// Obtener todos los elementos con la clase 'link'
var links = document.getElementsByClassName("link");

// Adjuntar un controlador de eventos a cada enlace
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el enlace se abra normalmente

        var link = this.getAttribute("href");
        localStorage.setItem("link", link);
        window.location.href = "player.html";
    });
}
