// Seleccionamos el botón por su id
let boton = document.getElementById("cambiarTexto");

// Agregamos un evento 'click' al botón
boton.addEventListener("click", function () {
        let textoBoton = boton.textContent;
        if (textoBoton == "Haz click en mí"){
            this.innerText ="¡Texto cambiado!";
        }else {
            this.innerText = "Haz click en mí";
        }
    
});