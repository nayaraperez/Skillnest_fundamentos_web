console.log("Prueba de conexion Js...");

document.getElementById("colorButton").addEventListener("click", function () {
    cambiarColorBody()}); 

document.getElementById("colorButton2").addEventListener("click", function () { 
    cambiarColor()});

    document.getElementById("colorButton3").addEventListener("click", function () {
    cambiar()});

function cambiarColorBody() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("body");
    elemento.style.backgroundColor = colorAleatorio;
}

function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja1");
    elemento.style.backgroundColor = colorAleatorio;
}

function cambiar() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("#caja2");
    elemento.style.backgroundColor = colorAleatorio;
}




