//Variables de el menu oculto del usuario ⬇⬇
let logoDeMenuRegistro = document.getElementById("menuContenedorInfo")
let menuLoger = document.getElementById("menuLogear")
//Variables de el menu oculto del usuario ⬆⬆

const activarInstrucciones = document.getElementById("activarInstrcciones")

activarInstrucciones.onclick = () => {
    let storageRegistro = localStorage.getItem("usuarioRegistrado")
    storageRegistro = JSON.parse(storageRegistro)
    Swal.fire("hola:" + ` ${storageRegistro.nombre}` + " Te mostraremos como funciona nuestro buscador de rutinas:\nselecciona una rutinas en el selector de la patalla\n hay de dos tipos fuerza y cardio\nfuerza:rutinas consentradas en aumentar la fuerza del individuo\ncardio:rutinas consentradas en quemar grasa y aumentar resistencia");
}

//Funcion para ocultar el menu ⬇⬇
function ocultarMenuReg() {
    let nuevoBoton = document.createElement("div")
    let parrafoOculto = document.createElement("p")
    parrafoOculto.className = "parrafo-oculto"
    parrafoOculto.innerText = `👤`
    nuevoBoton.className = "boton-oculto"
    nuevoBoton.id = "botonOculto"
    menuLoger.appendChild(nuevoBoton)
    nuevoBoton.appendChild(parrafoOculto)
    menuLoger.style.width = "500px"

    let botonOculto = document.getElementById("botonOculto")

    botonOculto.onclick = () => {
        menuLoger.style.width = "1px"
        botonOculto.remove(botonOculto)
    }

}
//Funcion para ocultar el menu ⬆⬆

//Funcion para renderizar al perfil del usuario ⬇⬇
function renderizarUsuario() {
    let storageRegistro = localStorage.getItem("usuarioRegistrado")
    storageRegistro = JSON.parse(storageRegistro)
    let generarNombreUser = document.createElement("div")
    generarNombreUser.innerHTML = `<h2 class="nombreuser">${storageRegistro.nombre}</h2>`
    menuLoger.appendChild(generarNombreUser)
} renderizarUsuario()
//Funcion para renderizar al perfil del usuario ⬆⬆

//Variable del boton para salir de la app ⬇⬇
let bontonSalir = document.getElementById("botonSalir")
//Variable del boton para salir de la app ⬆⬆

//Captura del evento para salir de la app ⬇⬇
bontonSalir.onclick = () => {
    window.location.href = "../index.html"
}
//Captura del evento para salir de la app ⬆⬆

//Captura del evento para ocultar el menu ⬇⬇
logoDeMenuRegistro.onclick = () => {
    ocultarMenuReg()
}
//Captura del evento para ocultar el menu ⬆⬆

//funcion para traer rutina y meme ⬇⬇
function traerRutina() {
    let selectorRutina = document.getElementById("selectroRutina").value
    let containerRutinas = document.getElementById("containerRutinas")
    let armarCard = document.createElement("div")
    armarCard.className = "container-busqueda"
    try {
        switch (selectorRutina) {
            case "cardio facil":
                Swal.fire({
                    imageUrl: "../img/bobesponja.gif",
                    imageHeight: 500,
                    imgeWidth: 500,
                    imageAlt: "A tall image",
                    title: "Facil 😂😁",
                });
            case "cardio facil":
                fetch("../db/data.json")
                    .then(response => response.json())
                    .then(rutina => {
                        const buscar = rutina.find(entrenamiento => entrenamiento.dificultad === "facil 2")
                        armarCard.innerHTML = `<h2>${buscar.rutina}</h2>` +
                            `<img class="img-instruc" src="../img/burpees.gif">` +
                            `<h2>${buscar.burpies}</h2>` +
                            `<img class="img-instruc" src="../img/saltostijera.gif">` +
                            `<h2>${buscar.saltos}</h2>`
                        containerRutinas.appendChild(armarCard)
                    })
                break;
            case "cardio normal":
                Swal.fire({
                    imageUrl: "../img/sigma.gif",
                    imageHeight: 500,
                    imgeWidth: 500,
                    imageAlt: "A tall image",
                    title: "normal 😎"
                });
            case "cardio normal":
                fetch("../db/data.json")
                    .then(response => response.json())
                    .then(rutina => {
                        const buscar = rutina.find(entrenamiento => entrenamiento.dificultad === "normal 2")
                        armarCard.innerHTML = `<h2>${buscar.rutina}</h2>` +
                            `<img class="img-instruc" src="../img/burpees.gif">` +
                            `<h2>${buscar.burpies}</h2>` +
                            `<img class="img-instruc" src="../img/saltostijera.gif">` +
                            `<h2>${buscar.saltos}</h2>`
                        containerRutinas.appendChild(armarCard)

                    })
                break;
            case "cardio dificil":
                Swal.fire({
                    imageUrl: "../img/ghost.gif",
                    imageHeight: 500,
                    imgeWidth: 500,
                    imageAlt: "A tall image",
                    title: "dificil 💀"
                });
            case "cardio dificil":
                fetch("../db/data.json")
                    .then(response => response.json())
                    .then(rutina => {
                        const buscar = rutina.find(entrenamiento => entrenamiento.dificultad === "dificil 2")
                        armarCard.innerHTML = `<h2>${buscar.rutina}</h2>` +
                            `<img class="img-instruc" src="../img/burpees.gif">` +
                            `<h2>${buscar.burpies}</h2>` +
                            `<img class="img-instruc" src="../img/saltostijera.gif">` +
                            `<h2>${buscar.saltos}</h2>`
                        containerRutinas.appendChild(armarCard)

                    })
                break;
            case "fuerza facil":
                Swal.fire({
                    imageUrl: "../img/bobesponja.gif",
                    imageHeight: 500,
                    imgeWidth: 500,
                    imageAlt: "A tall image",
                    title: "Facil 😂😁",
                });
            case "fuerza facil":
                fetch("../db/data.json")
                    .then(response => response.json())
                    .then(rutina => {
                        const buscar = rutina.find(entrenamiento => entrenamiento.dificultad === "facil 1")
                        armarCard.innerHTML = `<h2 class="h2fuerza">${buscar.rutina}</h2>` +
                            `<img class="img-instruc" src="../img/lagartija.gif">` +
                            `<h2>${buscar.pecho}</h2>` +
                            `<img class="img-instruc" src="../img/flexionessilla.gif">` +
                            `<h2>${buscar.espalda}</h2>` +
                            `<img class="img-instruc" src="../img/sentadillas.gif">` +
                            `<h2>${buscar.pierna}</h2>`
                        containerRutinas.appendChild(armarCard)

                    })
                break;
            case "fuerza normal":
                Swal.fire({
                    imageUrl: "../img/sigma.gif",
                    imageHeight: 500,
                    imgeWidth: 500,
                    imageAlt: "A tall image",
                    title: "normal 😎"
                });
            case "fuerza normal":
                fetch("../db/data.json")
                    .then(response => response.json())
                    .then(rutina => {
                        const buscar = rutina.find(entrenamiento => entrenamiento.dificultad === "normal 1")
                        armarCard.innerHTML = `<h2 class="h2fuerza">${buscar.rutina}</h2>` +
                            `<img class="img-instruc" src="../img/lagartija.gif">` +
                            `<h2>${buscar.pecho}</h2>` +
                            `<img class="img-instruc" src="../img/flexionessilla.gif">` +
                            `<h2>${buscar.espalda}</h2>` +
                            `<img class="img-instruc" src="../img/sentadillas.gif">` +
                            `<h2>${buscar.pierna}</h2>`
                        containerRutinas.appendChild(armarCard)
                    })
                break;
            case "fuerza dificil":
                Swal.fire({
                    imageUrl: "../img/ghost.gif",
                    imageHeight: 500,
                    imgeWidth: 500,
                    imageAlt: "A tall image",
                    title: "dificil 💀"
                });
            case "fuerza dificil":
                fetch("../db/data.json")
                    .then(response => response.json())
                    .then(rutina => {
                        const buscar = rutina.find(entrenamiento => entrenamiento.dificultad === "dificil 1")
                        armarCard.innerHTML = `<h2 class="h2fuerza">${buscar.rutina}</h2>` +
                            `<img class="img-instruc" src="../img/lagartija.gif">` +
                            `<h2>${buscar.pecho}</h2>` +
                            `<img class="img-instruc" src="../img/flexionessilla.gif">` +
                            `<h2>${buscar.espalda}</h2>` +
                            `<img class="img-instruc" src="../img/sentadillas.gif">` +
                            `<h2>${buscar.pierna}</h2>`
                        containerRutinas.appendChild(armarCard)
                    })
                break;
            default:
                throw new Error("seleccione rutina o dificultad")
                break;
        }



    } catch (error) {
        busqueda = error
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: `${busqueda}`,
            showConfirmButton: false,
            timer: 2000
        });

        function recargarPagina() {
            window.location.reload()
        }
        let llamar = setTimeout(() => {
            recargarPagina()
        }, 2000)

    }

    const botonBorrarRutinas = document.getElementById("boton borrar")

    botonBorrarRutinas.onclick = () => {
        containerRutinas.removeChild(armarCard)
        botonBorrarRutinas.remove()
    }

}
//funcion para traer rutina y meme ⬆⬆

//boton para buscar la rutina ⬇⬇
const botonBuscar = document.getElementById("botonBuscar")
const containerDeboton = document.getElementById("botonBuscarRutinas")
botonBuscar.onclick = () => {
    const botonOcultoborrar = document.createElement("div")
    botonOcultoborrar.innerHTML = `<button class="boton-borrarrutina" id="boton borrar">borrar</button>`
    containerDeboton.appendChild(botonOcultoborrar)
    traerRutina()
}
//boton para buscar la rutina ⬆⬆


