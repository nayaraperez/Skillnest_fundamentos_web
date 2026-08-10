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





let boton1 = document.getElementById("megusta1");

boton1.addEventListener("click", function () {
    let cantidad = parseInt(boton1.textContent) + 1;
    boton1.innerText = cantidad + " Me gusta";
});

let boton2 = document.getElementById("megusta2");

boton2.addEventListener("click", function () {
    let cantidad = parseInt(boton2.textContent) + 1;
    boton2.innerText = cantidad + " Me gusta";
});