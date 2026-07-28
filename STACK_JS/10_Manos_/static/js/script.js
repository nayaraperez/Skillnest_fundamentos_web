console.log("Prueba de conexion Js...");

function ejemplo (){
function sandwichFactory(pan, proteina, queso, salsas) {
    let sandwich = {};
    sandwich.pan = pan;
    sandwich.proteina = proteina;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}

let s1 = sandwichFactory(
    "trigo",
    "pavo",
    "provolone",
    ["mostaza", "cebolla frita", "rúcula"],
);   
let s2 =sandwichFactory(
    "Masa madre","pollo","chedar",["kepchup","mayonesa"]
);

alert(`ingredientes del primer sandwitch;
    Pan: ${s1.pan}
    Protenina: ${s1.proteina}
    queso: ${s1.queso}
    salsas: ${s1.salsas.join(" - ")}`);

alert(`ingredientes del segundo sandwitch;
    Pan: ${s2.pan}
    Protenina: ${s2.proteina}
    queso: ${s2.queso}
    salsas: ${s2.salsas.join(" - ")}`);
}
    

    

    


    


    



function pizza(){

    
    
    function pizzaOven(corteza,salsa,quesos,ingredientes){
        let pizza= {};
        pizza.corteza=corteza;
        pizza.salsa=salsa;
        pizza.quesos=quesos;
        pizza.ingredientes=ingredientes;
        return pizza
    }
    let n1 = pizzaOven(
        "Deep-Dish",
        "tomate",
        ["mozzarella", "Parmesano "],
        ["pepperoni", "salchicha"],
    )
    
    let n2 = pizzaOven(
    "cornicione",
    "pomodoro",
    ["mozzarella", "Provolone"],
    ["pepperoni", "salchicha"],
    )
    let n3 = pizzaOven(
    "delgada",
    "tomate",
    ["mozzarella", "Provolone"],
    ["pepperoni", "Champiñón"],)

    let n4 = pizzaOven(
    "Esponjosa",
    "tomate",
    ["mozzarella", "Provolone"],
    ["Jamón", "Piña"],)


    alert(`ingredientes una pizza “estilo Chicago”;
    corteza: ${n1.corteza}
    salsa: ${n1.salsa}
    quesos: ${n1.quesos.join(" - ")}
    ingredientes: ${n1.ingredientes.join(" - ")}`);


    alert(`ingredientes una Una pizza “lanzada a mano”;
    corteza: ${n2.corteza}
    salsa: ${n2.salsa}
    quesos: ${n2.quesos.join(" - ")}
    ingredientes: ${n2.ingredientes.join(" - ")}`);


    alert(`ingredientes una pizza Muy buena;
    corteza: ${n3.corteza}
    salsa: ${n3.salsa}
    quesos: ${n3.quesos.join(" - ")}
    ingredientes: ${n3.ingredientes.join(" - ")}`);


    alert(`ingredientes una pizza Muy rara;
    corteza: ${n4.corteza}
    salsa: ${n4.salsa}
    quesos: ${n4.quesos.join(" - ")}
    ingredientes: ${n4.ingredientes.join(" - ")}`);

}