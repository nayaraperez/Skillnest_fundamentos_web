console.log("conexión de js exitosa...");

// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
    let textoBoton = boton.textContent;
    if (textoBoton == "Iniciar sesión") {
        this.innerText = "Cerrar sesión";
    } else {
        this.innerText = "Iniciar sesión";
    }

});




function Ver_Perfil(){
    alert(`Bienvenido a tu perfil`);
}

function contador() {
    for (let i = 1; i <= 10; i++) {
        alert(`interaccion ${i}`)
    }
}
