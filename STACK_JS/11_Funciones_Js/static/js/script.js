console.log("Prueba de conexion Js...");




//ejemplo fuincion simple (sin parametro)
function saludar() {
    alert("¡Hola, bienvenido!");
}

//funciones con parametros
//el parametro resive un valor para trabajar en la funcion.
//el parametro recibe el tipo de dato al momento de tomar valor.
function saludarParam(nombre) {
    alert("¡Hola, " + nombre + "!");
}

saludarParam("Nayara");//ejecucuin de la funcion de parametros.("argumento")
//saludarParam("Ana");

//🎯 Funciones con return
function encontarMayor(){
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;  //este valor se debuelve porque cumple la condicion
    } else {
        return b;
    }
}

let numero1 = 10;
let numero2 = 7;
let maximo = encontrarMaximo(numero1, numero2);
//maximo guardara el valor del retorno!
alert(`El número mayor entre, ${numero1} y ${numero2}, es: ${maximo}`);}

//crear una funcion que resiva tres parametros a, b ,c 
//debe sumar a + b y el restalo por c.
//devolver el valor final y mostrar con alert
//ejemplo

function operaciones (a, b, c){
    return a + b - c;
}
function MostrarResultado(){
    //crear variables
let num1 =parseInt(prompt("ingresar primer numero"));
let num2 =parseInt(prompt("ingresar segundo numero"));
let num3 =parseInt(prompt("ingresar tercer numero"));
//mostar resultados
let resultado = operaciones(num1, num2, num3);
alert(`la operacion de ${num1} + ${num2} - ${num3} es igual a ${resultado}`)}

/*
crear una funcion que resiba un parametro y permita a tarves de un bucle 
contar hasta este.
ejemplo: se resive el numero 5 y mustra:1-2-3-4-5*/
//añadir una condicion para que no sea mayor que 100

function mostrarConteo(){
    //creacion de variantes
    let parametro = parseInt(prompt(`Ingrese el limite del contador`));
    //Mostrar Resultado
    if(parametro <=100){    resultado =contadorNumero(parametro);
    alert(resultado.join(" - "))
    }else {alert("ingresa valor inferior a 100");

    }
    
}
function contadorNumero(a){

    let numeros = []
    for(let i = 1; i <=a; i++){
        numeros.push(i)
    }
    return numeros;
}

/* Intento
function contarHasta (a){
    return a;
}
function MostrarResultadoBucle(){
let num1 =parseInt(prompt("ingresar primer numero"));
//mostar resultados
contarHasta(num1)
for (let num1 = 1; num1 <= num1; num1++) 
        alert(`interaccion ${num1}`)
}
*/