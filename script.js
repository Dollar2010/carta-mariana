function abrirCarta() {
    document.getElementById("inicio").style.display = "none";

    const carta = document.getElementById("carta");
    carta.classList.remove("oculto");

    crearCorazones();
}

function mostrarRespuesta() {
    const sorpresa = document.getElementById("sorpresa");

    sorpresa.classList.remove("oculto");

    document.querySelector(".respuesta").style.display = "none";

    crearCorazones();
}

function crearCorazones() {
    const contenedor = document.getElementById("hearts");

    for (let i = 0; i < 15; i++) {
        const corazon = document.createElement("div");

        corazon.className = "corazon";
        corazon.innerHTML = "♥";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.fontSize = (15 + Math.random() * 20) + "px";
        corazon.style.animationDuration = (5 + Math.random() * 5) + "s";

        contenedor.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 10000);
    }
}