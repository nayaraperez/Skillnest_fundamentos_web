console.log("Prueba de conexion Js...");

//Valiables a lista

let nombre1 = "Ana";
let nombre2 = "Pedro";
let nombre3 = "María";
let nombre4 = "Carlos";

let Nombres = ["ana", "Pedro", "María", "Carlos"]
//Mostrar a maria en una alerta
function Ejercicio() {
    let Nombres = ["ana", "Pedro", "María", "Carlos"];
    alert(Nombres[2]); //Mostrar a maria en una alerta
    let compras = [5000, 2300, 12000, 4500, 3000];
    let alumnos = ["Ana", "Pedro", "María", "José"];
    let datos = ["Carlos", 18, true];
    let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
    let mensaje = `${alumnos[1]} compro una ${frutas[0]} a ${compras[1]} con ${datos[0]}`;
    alert(mensaje);
}


//obtener el ultimo elemento
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"];
let ultima = frutas[frutas.length - 1]
// "variable.length -1 "simpre trae el ultimo elemento
console.log(ultima);


//Desafio
//del arreglo ["Hola", "a", "todos", "los", "programadores"]
//mostar en penuntimo elemento y el ultimo concatenado

let Palabras = ["Hola", "a", "todos", "los", "programadores"]
let ultima1 = Palabras[Palabras.length - 1]
let frase = Palabras[Palabras.length - 2] + (ultima1);
console.log(frase);



let ListaTareas = ["Barrer", "Cocinar", "Realizar Compras"];

function manipularArreglo() {
    //Modificar un elemento del arreglo
    ListaTareas[1] = "Contruir";
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




function buscarMayoresEdad() {
    let edades = [12, 15, 18, 20, 14, 25];
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        //conduicion para buscar mayores de 18
        if (edades[i] >= 18) {
        mayores.push(edades[i])
        }
    }
    alert(`De la lista de edades:${edades.join(' / ')}.
        \nLos mayores son:${mayores.join(' / ')}`)
}






// 1. Crear el arreglo con las edades proporcionadas




// ## Ejercicio 2

// Crear un arreglo con cinco nombres.

// Mostrar todos utilizando un ciclo `for`.

// ---



// ## Ejercicio 1

// Crear el siguiente arreglo.

// ```javascript
// let edades = [15,18,20,14,25];
// ```

// Mostrar:

// - Primera edad.
// - Última edad.
// - Cantidad de elementos.
function Ejercicio000() {
    let edades = [15, 18, 20, 14, 25];
    let ultima = edades[edades.length - 1]
    alert(`ultima edad ${ultima}`)
}



function Ejercicio0() {

    let nombres = ["Ana", "Pedro", "María", "Carlos", "Juan"];
    for (let i = 0; i < nombres.length; i++) {
        alert(`${i + 1}: ${nombres[i]}`);
    }
}


// ## Ejercicio 5

// Crear un arreglo con diez números.

// Contar:

// - Cuántos son pares.
// - Cuántos son impares.

function Ejercicio00() {

    let numeros = [4, 7, 12, 15, 22, 33, 40, 55, 68, 91];
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    let mensaje = `Cantidad de números pares: ${pares}\n- Cantidad de números impares: ${impares}`;
    alert(mensaje);
}

//# 🔁 Recorrer un arreglo
function RecorrerArreglo() {
    let notas = [6.2, 5.8, 4.1, 7.0, 2.0, 3.5,];

    for (let i = 0; i < notas.length; i++) {

        alert(`Mostrando nota ${i + 1} de ${notas.length} : ${notas[i]}`);

    }
}




//# 📊 Ejemplo: sumar todos los elementos

function sumarElementos() {
    let ventas = [10000, 5000, 12000, 8000];

    let total = 0;

    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i]; //+= acumula 

    }

    alert(`El resultado final es: ${total}`);
}

//📈 Calcular el promedio
function CalcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }

    alert(`La suma acumulado es ${suma}`)
    let promedio = suma / notas.length;
    alert(`El Promedio de las notas: ${notas.join(' / ')}\nPromedio: ${promedio}`);
}
//Condiciones dentro de bucles
//# 🔍 Buscar elementos utilizando condiciones

function BuscarElementos() {
    let edades = [12, 15, 18, 20, 25];

    for (let i = 0; i < edades.length; i++) {

        if (edades[i] >= 18) {

            alert(edades[i]);

        }

    }
}
