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



/*const boton3 = document.getElementById("miBoton3");


boton3.addEventListener("click", function () {
    boton3.style.color = "white";
    boton3.style.backgroundColor = "blue";
    boton3.innerText = "Haz cambiado el texto!";
});


*/




const boton1 = document.querySelector("#miBoton3");


    boton1.addEventListener("click", function () {
        if (boton1 !== null){
    if (this.textContent === "Haz click en mi y cambiare") {
        this.textContent === "Ves que es distinto?"
        this.style.backgroundColor = "pink"
        this.style.color = "gray"
    } else {
        this.textContent = "Haz click en mi y cambiare"
        this.style.backgroundColor = "gray"
        this.style.color = "white"
    }
} else {
    console.log ("El boton no existe");
}});




