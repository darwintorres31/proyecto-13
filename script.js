const opciones = document.querySelectorAll(".opcion");

opciones.forEach(function(opcion) {
    opcion.addEventListener("click", function() {

        const respuesta = opcion.nextElementSibling;
        const estabaAbierta = respuesta.classList.contains("mostrar");

        document.querySelectorAll(".respuesta").forEach(function(item) {
            item.classList.remove("mostrar");
        });

        document.querySelectorAll(".opcion").forEach(function(item) {
            item.classList.remove("activa");
        });

        if (!estabaAbierta) {
            respuesta.classList.add("mostrar");
            opcion.classList.add("activa");
        }

    });
});