//variable de registro ⬇⬇
let registrar = document.getElementById("registro")
//variable de registro ⬆⬆

//variable de logiarse ⬇⬇
let logiarse = document.getElementById("logiar")
//variable de logiarse ⬆⬆

//variables de inputs de registro y login ⬇⬇
let nombreInput = document.getElementById("nombre-completo")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPasword = document.getElementById("confirmarPassword")
let parrafoNoValid = document.getElementById("incompleto")
//variables de inputs de registro y login ⬆⬆

//variable de titulo ⬇⬇
let title = document.getElementById("title")
//variable de titulo ⬆⬆

//variable de formulario registro y login ⬇⬇
let formularioRegisLogin = document.getElementById("formLogReg")
//variable de formulario registro y login ⬆⬆



//funcion para registrar usuario ⬇⬇
function registrarUser() {

    class Usuario {
        constructor(nombre, password) {
            this.nombre = nombre
            this.password = password
        }
    }

    const registros = new Usuario(nombreInput.value, password.value)

    console.log(registros)

    formularioRegisLogin.addEventListener("submit", e => {
        e.preventDefault()
        let errorIncomplete = ""
        let sumit = false
        parrafoNoValid.innerHTML = ""
        if (nombreInput.value.length < 9) {
            errorIncomplete += `El nombre no es valido <br>`
            sumit = true
        }
        if (password.value.length < 7) {
            errorIncomplete += `La contraseña no es valida <br>`
            sumit = true
        }
        if (confirmPasword.value !== password.value) {
            errorIncomplete += `Las contraseñas no coinciden <br>`
            sumit = true
        }
        if (sumit) {
            parrafoNoValid.innerHTML = errorIncomplete
        } else {
            Swal.fire("Regitrado ✔ \nlogeate para continuar");
            localStorage.setItem("usuarioRegistrado", JSON.stringify(registros))
        }
    })

}
//funcion para registrar usuario ⬆⬆

//funcion para logear usuario ⬇⬇
function logiarseUser() {
    formularioRegisLogin.addEventListener("submit", e => {
        e.preventDefault()
        let storageRegistro = localStorage.getItem("usuarioRegistrado")
        storageRegistro = JSON.parse(storageRegistro)

        switch (password.value && nombreInput.value) {
            case storageRegistro.password && storageRegistro.nombre:
                let entrar = setTimeout(() => {
                    window.location.href = "../pages/calculadora.html"
                }, 3000)


                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "bienvenid@:"+` ${storageRegistro.nombre}`,
                    showConfirmButton: false,
                    timer: 2000
                  });
                   
                break;

            default:
                Swal.fire({
                    icon: "error",
                    title: "🧐",
                    text: "Usted no se encuetra registrado",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                break;
        }

    })
}
//funcion para logear usuario ⬆⬆

//boton para logear ⬇⬇
logiarse.onclick = () => {
    confirmPasword.style.display = "none"
    title.innerHTML = "logiarse"
    registrar.classList.add("disable")
    logiarse.classList.remove("disable")

    logiarseUser()
}
//boton para logear ⬆⬆

//boton para registrar ⬇⬇
registrar.onclick = () => {
    nombreInput.style.display = "";
    confirmPasword.style.display = ""
    title.innerHTML = "registrarse"
    registrar.classList.remove("disable")
    logiarse.classList.add("disable")

    registrarUser()
}
//boton para registrar ⬆⬆
