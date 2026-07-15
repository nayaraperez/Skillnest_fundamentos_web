console.log("Prueba de conexion Js...");

//Valiables a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

let Nombres = ["ana","Pedro" ,"María" ,"Carlos"]
//Mostrar a maria en una alerta
function  Ejercicio(){
    let Nombres = ["ana","Pedro" ,"María" ,"Carlos"];
    alert (Nombres[2]); //Mostrar a maria en una alerta
    let compras = [5000, 2300, 12000, 4500, 3000];
    let alumnos = ["Ana", "Pedro", "María", "José"];
    let datos = ["Carlos", 18, true];
    let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
    let mensaje =`${alumnos[1]} compro una ${frutas [0]} a ${compras[1]} con ${datos[0]}`;
    alert(mensaje);}


//obtener el ultimo elemento
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
let ultima = frutas[frutas.length -1]
// "variable.length -1 "simpre trae el ultimo elemento
console.log(ultima);


//Desafio
//del arreglo ["Hola", "a", "todos", "los", "programadores"]
//mostar en penuntimo elemento y el ultimo concatenado

let Palabras = ["Hola", "a", "todos", "los", "programadores"]
let ultima1 = Palabras[Palabras.length -1]
let frase = Palabras [Palabras.length -2 ] + (ultima1);
console.log(frase);



let ListaTareas =["Barrer", "Cocinar", "Realizar Compras"];
    
    function manipularArreglo(){
    //Modificar un elemento del arreglo
    ListaTareas [1]="Contruir";
    //Añadir un elemento al final de la lista 
    ListaTareas.push("cocinar");//agrega un elemento al final /.push/
    //eliminar el ultimo elemento/.pop/ y mostrarlo
    let eliminado = ListaTareas.pop();
    //añadir al inicio de la lista 
    ListaTareas.unshift("Boxear");//agrega al principio
    //Eliminar el primer momento de la lista
    eliminado += "-" + ListaTareas.shift();
    //mostrar resultados
    alert(ListaTareas.join("-"));
    alert("Elementos eliminados - " + eliminado);
}




//function buscarMayoresEdad(){
//     let edades = [15,18,20,14,25];
//     for (let i=0; i< edades.length; i++){
//         if(edades[i]) >= 18;
//     }
// }