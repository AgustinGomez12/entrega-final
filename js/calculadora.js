//Variables de el menu oculto del usuario ⬇⬇
let logoDeMenuRegistro = document.getElementById("menuContenedorInfo")
let menuLoger = document.getElementById("menuLogear")
//Variables de el menu oculto del usuario ⬆⬆

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


const activarInstrucciones = document.getElementById("activarInstrcciones")


activarInstrucciones.onclick = () => {
  let storageRegistro = localStorage.getItem("usuarioRegistrado")
  storageRegistro = JSON.parse(storageRegistro)
  Swal.fire("hola:" + `${storageRegistro.nombre}` + "\nTe mostraremos como usar la calculadora y que hace:\n1-imc porcentaje de grasa abdominal\n2-Contador de calorias\n3-contador de proteinas\nComo funciona:\nPara un correcto uso no dejes campos libres\ncuando tengas todos los campos llenos dale al boton calcular");
}

function Calcular() {
  //Funcion de IMC y salud ⬇⬇
  function calcularIMC() {
    let resultadoIMC = document.getElementById("resultadoIMC")
    let resultadoPorcentaje = document.getElementById("resultadoEstadoSalud")
    let alturaXAltura = parseFloat(altura.value) * parseFloat(altura.value)
    let pesoXAltura = Math.round(parseInt(peso.value) / alturaXAltura)
    resultadoIMC.value = "Tu IMC es de : " + parseInt(pesoXAltura) + "%"

    switch (pesoXAltura) {
      case 15:
      case 16:
      case 17:
      case 18:
        resultadoPorcentaje.value = `Peso muy bajo`
        break;
      case 19:
      case 20:
      case 21:
      case 22:
        resultadoPorcentaje.value = `Peso saludable`
        break;
      case 23:
      case 24:
      case 25:
      case 26:
        resultadoPorcentaje.value = `Sobrepeso`
        break;
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
        resultadoPorcentaje.value = `Obesidad`
        break;
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
        resultadoPorcentaje.value = `obesidad morvida`
        break;

      default:
        resultadoPorcentaje.value = `Digito no valido`
        break;
    }


  } calcularIMC()
  //Funcion de IMC y salud ⬆⬆

  //Funcion de contador de calorias ⬇⬇
  function actividadDiaria() {
    let actividadXDia = document.getElementById("actividad").value
    let parametroBenedic = parseInt(peso.value) * 22
    let resultadoBasal = document.getElementById("resultadoBasal")
    switch (actividadXDia) {
      case "1":
        resultadoBasal.value = Math.round(1.2 * parametroBenedic) + " Calorias X dia"
        break;
      case "2":
        resultadoBasal.value = Math.round(1.375 * parametroBenedic) + " Calorias X dia"
        break;
      case "3":
        resultadoBasal.value = Math.round(1.55 * parametroBenedic) + " Calorias X dia"
        break;
      case "4":
        resultadoBasal.value = Math.round(1.75 * parametroBenedic) + " Calorias X dia"
        break;
      case "5":
        resultadoBasal.value = Math.round(1.9 * parametroBenedic) + " Calorias X dia"
        break;
      default:
        resultadoBasal.value = "Seleccione una opcion"
        break;
    }

  } actividadDiaria()
  //Funcion de contador de calorias ⬆⬆

  function calcularProteinas() {
    let seleccionarSexo = document.getElementById("seleccionarSexo").value
    let resultadoProteina = document.getElementById("resulatadoProteina")
    switch (seleccionarSexo) {
      case "mujer":
        resultadoProteina.value = Math.round(parseInt(peso.value) * 0.85) + " De proteina X dia"
        break;
      case "hombre":
        resultadoProteina.value = Math.round(parseInt(peso.value) * 1.25) + " De proteina X dia"
        break;

      default:
        resultadoProteina.value = "seleccione una opcion"
        break;
    }
  } calcularProteinas()




}

//bonton para calcular ⬇⬇
const botonCalcular = document.getElementById("botonCalcular")

botonCalcular.onclick = () => {
  Calcular()
}
//bonton para calcular ⬆⬆

//funcion para generar el chat del doctor ⬇⬇
const mainCalculadora = document.getElementById("mainCalculadora")
const fitDoctor = document.getElementById("fitDoctor")
function generarChat() {
  let storageRegistro = localStorage.getItem("usuarioRegistrado")
  storageRegistro = JSON.parse(storageRegistro)
  let generarChat = document.createElement("div")
  generarChat.className = "chat-doc"
  generarChat.id = "chatDoc"
  generarChat.innerHTML = `<p id="saludo">hola ${storageRegistro.nombre} ¿en que puedo ayudarte?</p>` +
    `<p class= "articular" id="dolorArticular">dolores articulares</p>` +
    `<p class="cabeza" id="dolorCabeza"> dolores de cabeza </p>` +
    `<p class= "agujeta" id= "dolorAgujeta">agujetas despues de entrenar</p>`

  mainCalculadora.appendChild(generarChat)
  generarChat.style.display = "flex"
  const saludo = document.getElementById("saludo")
  const dolorArticular = document.getElementById("dolorArticular")
  const dolorCabeza = document.getElementById("dolorCabeza")
  const dolorAgujetas = document.getElementById("dolorAgujeta")
  dolorArticular.onclick = () => {
    saludo.style.display = "none"
    dolorCabeza.style.display = "none"
    dolorAgujetas.style.display="none"

    dolorArticular.innerHTML = "Haz diariamente estiramientos suaves que muevan tus articulaciones en toda su amplitud de movimiento."+
    "(para salir pulsa mi icono nuevamente)"  
  }

  dolorCabeza.onclick = () =>{
    saludo.style.display = "none"
    dolorAgujetas.style.display="none"
    dolorArticular.style.display = "none"

    dolorCabeza.innerHTML ="Toma agua, ya que la mala hidratación puede causar dolor de cabeza,"+
    "Toma magnesio,Duerme lo suficiente.(para salir pulsa mi icono nuevamente)"
  }

  dolorAgujetas.onclick = () =>{
    saludo.style.display = "none"
    dolorArticular.style.display = "none"
    dolorCabeza.style.display ="none"
    dolorAgujetas.innerHTML ="Baño para relajar los músculos Después de una ardua sesión de entrenamiento.Esta es la opción más rápida para disminuir el dolor ocasionado por hacer deporte."+
    "(para salir pulsa mi icono nuevamente)"
  }
}
//funcion para generar el chat del doctor ⬆⬆

//funcion para cerrar el chat del doctor ⬇⬇
function cerrarChat() {
  let cerrar = document.createElement("div")
  cerrar.className = "cerrar-doc"
  cerrar.id = "cerrarDoc"
  mainCalculadora.appendChild(cerrar)
  const eliminar = document.getElementById("cerrarDoc")

  eliminar.onclick = () => {
    let chatDoc = document.getElementById("chatDoc")
    chatDoc.remove()
    eliminar.remove()
  }
}
//funcion para cerrar el chat del doctor ⬆⬆



//"boton" para abrir y cerrar chat ⬇⬇
fitDoctor.onclick = () => {
  generarChat()
  cerrarChat()
}
//"boton" para abrir y cerrar chat ⬆⬆



