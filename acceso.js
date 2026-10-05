let carrito = [];

function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    alert(nombre + " fue agregado al carrito 🎮");
}
function actualizarCarrito() {

    document.getElementById("cantidadCarrito").textContent = carrito.length;

    let lista = document.getElementById("listaCarrito");

    lista.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        lista.innerHTML = `
            <p style="color:#999;">
                Tu carrito está vacío.
            </p>
        `;

    } else {

        carrito.forEach(function(juego, indice) {

            total = total + juego.precio;

            let item = document.createElement("div");

            item.className = "item-carrito";

            item.innerHTML = `
                <div>
                    <strong>${juego.nombre}</strong>
                    <br>
                    <span>
                        $${juego.precio.toLocaleString("es-CO")} COP
                    </span>
                </div>

                <button onclick="eliminarJuego(${indice})">
                    Eliminar
                </button>
            `;

            lista.appendChild(item);

        });

    }

    document.getElementById("totalCarrito").textContent =
        "$" + total.toLocaleString("es-CO") + " COP";
}
function eliminarJuego(indice) {

    carrito.splice(indice, 1);

    actualizarCarrito();
}
function mostrarCarrito() {

    actualizarCarrito();

    document.getElementById("carritoModal").style.display = "block";
}
function cerrarCarrito() {

    document.getElementById("carritoModal").style.display = "none";
}
function finalizarCompra() {

    if (carrito.length === 0) {

        alert("Tu carrito está vacío.");

        return;
    }

    alert(
        "¡Gracias por comprar en PortalTheVideoGames! 🎮\n\n" +
        "Esta es una demostración de la tienda."
    );

}
function reservarJuego(nombre) {

    let confirmar = confirm(
        "¿Quieres reservar " + nombre + "?"
    );

    if (confirmar) {

        alert(
            "¡Reserva realizada! 🚀\n\n" +
            "Videojuego: " + nombre +
            "\n\n" +
            "Nos pondremos en contacto contigo cuando esté disponible."
        );

    }

}
function buscarJuego() {

    let texto = document
        .getElementById("buscador")
        .value
        .toLowerCase();

    let juegos = document.querySelectorAll(".juego");

    juegos.forEach(function(juego) {

        let nombre = juego
            .getAttribute("data-nombre")
            .toLowerCase();

        if (nombre.includes(texto)) {

            juego.style.display = "block";

        } else {

            juego.style.display = "none";

        }

    });

}

window.onclick = function(event) {

    let modal = document.getElementById("carritoModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};