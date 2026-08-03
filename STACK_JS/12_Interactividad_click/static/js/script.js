console.log("Prueba de conexion Js...");



document.getElementById("colorButton1").addEventListener("click", cambiarColor);
document.getElementById("colorButton2").addEventListener("click", cambiarColor);
document.getElementById("colorButton3").addEventListener("click", cambiarColor);


// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento= document.querySelector("body")
    elemento.style.backgroundColor = colorAleatorio;
}





