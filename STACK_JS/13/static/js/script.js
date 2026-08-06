
const boton = document.getElementById("cambiarTexto");


const textoInicial = "Haz clic en mí";
const textoNuevo = "¡Texto cambiado!";


boton.addEventListener("click", function () {
   
    if (this.textContent === textoInicial) {
        this.textContent = textoNuevo;
    } else {
        this.textContent = textoInicial;
    }
});