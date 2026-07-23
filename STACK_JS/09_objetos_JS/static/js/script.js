console.log("Prueba de conexion Js...");



//⚙️ Métodos   
// Método en una hamburguesa 🍔

    let hamburguesaEspecial = {
        pan: "Pan brioche",
        carne: "Pollo crujiente",
        queso: "Suizo",
        extras: [
            "Lechuga",
            "Pepinos",
            "Miel"
        ],
        mostrarIngredientes: function () {
            console.log("Pan:", this.pan);
            console.log("Carne:", this.carne);
            console.log("Queso:", this.queso);
            console.log(
                "Extras:",
                this.extras.join(", ")
            );
        }
    };

//Acceder al pan
console.log(hamburguesaEspecial.pan);

hamburguesaEspecial.mostrarIngredientes();

//Objeto con metodo automovil

let auto = {

    marca:"Toyota",

    modelo:"Corolla",

    año:2023,

    encender:function(){

        alert(

            "Encendiendo",

            this.marca,

            this.modelo

        );

    }

};
function holauno(){
auto.encender();
}

let casa = {

    direccion:"Av. Siempre Viva 742",

    habitaciones:4,

    baños:2,

    mostrarInformacion:function(){

        alert(
            this.direccion,

        );

    }

};
function hola(){
casa.mostrarInformacion()}