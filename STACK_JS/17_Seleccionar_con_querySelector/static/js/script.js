console.log("conexión exitosa...");
//seleccion de título con querySylector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`EL contenido del titulo es: ${title.textContent}`);


let parrafoe = document.querySelector("p");
console.log(parrafoe); //    <p id ="parrafo">seleccionar el parrafo </p>




let parrafo = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."












//elemento inexcistente 


let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}



//Tarea:
/*Crear un boton y aplicar condicion al igual que el ejemplo...
-Debe camnbiar su texto al momento de hacerle click
-debe activar un hover js cambiando el color del fondo*/



const boton3 = document.getElementById("miBoton3");


boton3.addEventListener("click", function () {
    console.log("El ratón está sobre el botón");
    boton3.style.backgroundColor = "white";
    boton3.style.color = "black";
    boton3.innerText = "Haz cambiado el texto!";
});

boton3.addEventListener("click", function () {

    boton3.style.backgroundColor = "red";
    boton3.innerText = "Haz cambiado el texto!";
});




document.getElementById("miBoton3").addEventListener("click", cambiarColor);


// Función que cambia el color de fondo al hacer clic
function cambiarColor() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento= document.querySelector("body")
    elemento.style.backgroundColor = colorAleatorio;
}