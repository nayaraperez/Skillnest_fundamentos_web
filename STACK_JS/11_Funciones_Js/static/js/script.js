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


function calcular (){
function calcularOperacion(a, b, c) {
    let resultado = (a + b) - c;
    alert(`El resultado final es: ${resultado}`);
    return resultado;
}

let numero1 = 10;
let numero2 = 7;
let numero3 = 3;

let resultadoFinal = calcularOperacion(numero1, numero2, numero3);}