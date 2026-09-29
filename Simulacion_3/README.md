Estructura del proyecto
viajeplus/
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
1. index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>ViajePlus | Explora el mundo</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- HEADER -->
    <header class="header">

        <div class="logo">
            <span class="logo-icon">✈</span>
            <span>ViajePlus</span>
        </div>

        <nav class="nav">
            <a href="#inicio">Inicio</a>
            <a href="#destinos">Destinos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
        </nav>

        <div class="buscador">
            <input
                type="text"
                id="buscarDestino"
                placeholder="Buscar destino..."
            >

            <button id="btnBuscar">
                Buscar
            </button>
        </div>

    </header>


    <!-- CONTENIDO PRINCIPAL -->
    <main>

        <!-- HERO -->
        <section class="hero" id="inicio">

            <div class="hero-texto">

                <p class="subtitulo">
                    VIAJEPLUS
                </p>

                <h1>
                    Explora el mundo
                </h1>

                <p>
                    Descubre nuevos destinos, experiencias
                    inolvidables y lugares que siempre
                    has querido conocer.
                </p>

                <div class="hero-botones">

                    <a href="#destinos" class="btn btn-principal">
                        Ver destinos
                    </a>

                    <a href="#contacto" class="btn btn-secundario">
                        Contactarnos
                    </a>

                </div>

            </div>

            <div class="hero-imagen">

                <div class="imagen-placeholder">
                    <span>IMAGEN</span>
                    <strong>Destino turístico</strong>
                </div>

            </div>

        </section>


        <!-- DESTINOS -->
        <section class="destinos-section" id="destinos">

            <div class="section-header">

                <div>
                    <p class="subtitulo">
                        DESCUBRE
                    </p>

                    <h2>
                        Destinos destacados
                    </h2>
                </div>

                <p>
                    Encuentra inspiración para tu próximo viaje.
                </p>

            </div>


            <div class="destinos">

                <!-- TARJETA 1 -->
                <article class="destino-card">

                    <div class="card-imagen torres">
                        <span>IMAGEN</span>
                    </div>

                    <div class="card-contenido">

                        <p class="pais">
                            Chile
                        </p>

                        <h3>
                            Torres del Paine
                        </h3>

                        <p class="descripcion">
                            Naturaleza, montañas y paisajes
                            únicos en la Patagonia.
                        </p>

                        <p class="extra-info oculto">
                            Un destino ideal para trekking,
                            fotografía y aventura.
                        </p>

                        <button class="btn-ver-mas">
                            Ver más
                        </button>

                    </div>

                </article>


                <!-- TARJETA 2 -->
                <article class="destino-card">

                    <div class="card-imagen cusco">
                        <span>IMAGEN</span>
                    </div>

                    <div class="card-contenido">

                        <p class="pais">
                            Perú
                        </p>

                        <h3>
                            Cusco
                        </h3>

                        <p class="descripcion">
                            Cultura, historia y arquitectura
                            en el corazón de los Andes.
                        </p>

                        <p class="extra-info oculto">
                            Una ciudad perfecta para conocer
                            historia, gastronomía y tradiciones.
                        </p>

                        <button class="btn-ver-mas">
                            Ver más
                        </button>

                    </div>

                </article>


                <!-- TARJETA 3 -->
                <article class="destino-card">

                    <div class="card-imagen cancun">
                        <span>IMAGEN</span>
                    </div>

                    <div class="card-contenido">

                        <p class="pais">
                            México
                        </p>

                        <h3>
                            Cancún
                        </h3>

                        <p class="descripcion">
                            Playas, naturaleza y descanso
                            frente al mar.
                        </p>

                        <p class="extra-info oculto">
                            Excelente alternativa para disfrutar
                            del Caribe y sus playas.
                        </p>

                        <button class="btn-ver-mas">
                            Ver más
                        </button>

                    </div>

                </article>


                <!-- TARJETA 4 -->
                <article class="destino-card">

                    <div class="card-imagen madrid">
                        <span>IMAGEN</span>
                    </div>

                    <div class="card-contenido">

                        <p class="pais">
                            España
                        </p>

                        <h3>
                            Madrid
                        </h3>

                        <p class="descripcion">
                            Cultura, gastronomía y vida urbana.
                        </p>

                        <p class="extra-info oculto">
                            Museos, plazas, gastronomía y una
                            gran variedad de actividades.
                        </p>

                        <button class="btn-ver-mas">
                            Ver más
                        </button>

                    </div>

                </article>

            </div>

            <p
                id="mensajeBusqueda"
                class="mensaje-busqueda"
            ></p>

        </section>


        <!-- NOSOTROS -->
        <section class="info-section" id="nosotros">

            <div class="info-bloque">

                <p class="subtitulo">
                    VIAJEPLUS
                </p>

                <h2>
                    Viajamos contigo
                </h2>

                <p>
                    Nuestro objetivo es ayudarte a descubrir
                    nuevos lugares y planificar experiencias
                    memorables.
                </p>

            </div>

            <div class="beneficios">

                <div class="beneficio">
                    <span>01</span>
                    <h3>Destinos</h3>
                    <p>
                        Diferentes alternativas para explorar.
                    </p>
                </div>

                <div class="beneficio">
                    <span>02</span>
                    <h3>Experiencias</h3>
                    <p>
                        Ideas para disfrutar cada viaje.
                    </p>
                </div>

                <div class="beneficio">
                    <span>03</span>
                    <h3>Planificación</h3>
                    <p>
                        Información para organizar tu aventura.
                    </p>
                </div>

            </div>

        </section>

    </main>


    <!-- FOOTER -->
    <footer class="footer" id="contacto">

        <div class="footer-contenido">

            <div>
                <h2>
                    ViajePlus
                </h2>

                <p>
                    Explora. Descubre. Viaja.
                </p>
            </div>

            <div>
                <h3>
                    Contacto
                </h3>

                <p>
                    contacto@viajeplus.cl
                </p>

                <p>
                    +56 9 1234 5678
                </p>
            </div>

            <div>
                <h3>
                    Redes sociales
                </h3>

                <p>
                    Instagram · Facebook · TikTok
                </p>
            </div>

        </div>

        <div class="footer-bottom">
            © 2026 ViajePlus
        </div>

    </footer>


    <script src="js/script.js"></script>

</body>
</html>
2. css/style.css
/* ================================
   RESET BÁSICO
================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    color: #222;
    background: #f5f5f5;
}


/* ================================
   VARIABLES
================================ */

:root {
    --azul: #1565c0;
    --azul-claro: #eaf3ff;
    --gris: #666;
    --gris-claro: #eeeeee;
    --blanco: #ffffff;
    --negro: #222;
}


/* ================================
   ELEMENTOS GENERALES
================================ */

a {
    text-decoration: none;
    color: inherit;
}

button,
input {
    font: inherit;
}


/* ================================
   HEADER
================================ */

.header {
    width: 100%;
    padding: 18px 5%;

    background-color: var(--blanco);

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 20px;

    border-bottom: 1px solid #ddd;
}


/* LOGO */

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 1.5rem;
    font-weight: bold;

    color: var(--azul);

    flex-grow: 1;
}

.logo-icon {
    font-size: 1.7rem;
}


/* NAV */

.nav {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    gap: 20px;

    flex-grow: 1;
}

.nav a {
    color: #333;
    font-size: 0.95rem;
}

.nav a:hover {
    color: var(--azul);
}


/* BUSCADOR */

.buscador {
    display: flex;
    align-items: center;

    gap: 8px;

    flex-grow: 1;
}

.buscador input {
    width: 100%;
    min-width: 160px;

    padding: 10px 12px;

    border: 1px solid #ccc;
    border-radius: 6px;
}

.buscador button {
    padding: 10px 15px;

    border: none;
    border-radius: 6px;

    background-color: var(--azul);
    color: white;

    cursor: pointer;
}

.buscador button:hover {
    opacity: 0.9;
}


/* ================================
   MAIN
================================ */

main {
    width: 100%;
}


/* ================================
   HERO
================================ */

.hero {
    width: 90%;
    max-width: 1200px;

    margin: 40px auto;

    padding: 40px;

    background-color: var(--blanco);

    display: flex;
    align-items: center;

    flex-wrap: wrap;

    gap: 40px;

    border-radius: 12px;
}


/* TEXTO HERO */

.hero-texto {
    flex: 1 1 300px;
}

.subtitulo {
    color: var(--azul);

    font-size: 0.8rem;

    font-weight: bold;

    letter-spacing: 2px;

    margin-bottom: 8px;
}

.hero h1 {
    font-size: clamp(2rem, 5vw, 4rem);

    line-height: 1.1;

    margin-bottom: 20px;
}

.hero-texto > p:not(.subtitulo) {
    color: var(--gris);

    max-width: 550px;

    margin-bottom: 25px;
}


/* BOTONES HERO */

.hero-botones {
    display: flex;

    flex-wrap: wrap;

    gap: 12px;
}

.btn {
    display: inline-block;

    padding: 12px 20px;

    border-radius: 6px;

    font-weight: bold;
}

.btn-principal {
    background-color: var(--azul);
    color: white;
}

.btn-secundario {
    border: 1px solid var(--azul);
    color: var(--azul);
}


/* IMAGEN HERO */

.hero-imagen {
    flex: 1 1 300px;

    min-width: 0;
}

.imagen-placeholder {
    min-height: 280px;

    width: 100%;

    background-color: #dcecff;

    border: 2px dashed #7aaeea;

    border-radius: 10px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 8px;

    color: #4778ae;
}

.imagen-placeholder span {
    font-size: 0.8rem;
    letter-spacing: 2px;
}

.imagen-placeholder strong {
    font-size: 1.4rem;
}


/* ================================
   DESTINOS
================================ */

.destinos-section {
    width: 90%;
    max-width: 1200px;

    margin: 60px auto;
}


/* ENCABEZADO SECCIÓN */

.section-header {
    margin-bottom: 30px;

    display: flex;
    align-items: end;
    justify-content: space-between;

    flex-wrap: wrap;

    gap: 20px;
}

.section-header h2 {
    font-size: 2rem;
}

.section-header > p {
    max-width: 400px;

    color: var(--gris);
}


/* CONTENEDOR TARJETAS */

.destinos {
    display: flex;

    flex-wrap: wrap;

    gap: 20px;
}


/* TARJETA */

.destino-card {
    background-color: var(--blanco);

    border-radius: 10px;

    overflow: hidden;

    border: 1px solid #ddd;

    /*
        El ancho base es 230px.
        El elemento puede crecer y reducirse.
    */
    flex: 1 1 230px;

    min-width: 0;

    display: flex;
    flex-direction: column;
}


/* IMAGEN TARJETA */

.card-imagen {
    min-height: 180px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: white;

    font-weight: bold;

    letter-spacing: 2px;
}


/*
    Estos fondos representan
    distintos destinos.
*/

.torres {
    background: linear-gradient(
        135deg,
        #31566d,
        #9dc5d8
    );
}

.cusco {
    background: linear-gradient(
        135deg,
        #8d6549,
        #d9b88f
    );
}

.cancun {
    background: linear-gradient(
        135deg,
        #1594b6,
        #8de2ed
    );
}

.madrid {
    background: linear-gradient(
        135deg,
        #75616a,
        #d6a8b1
    );
}


/* CONTENIDO */

.card-contenido {
    padding: 20px;

    display: flex;
    flex-direction: column;

    gap: 8px;

    flex-grow: 1;
}

.pais {
    color: var(--azul);

    font-size: 0.85rem;

    font-weight: bold;
}

.card-contenido h3 {
    font-size: 1.3rem;
}

.descripcion {
    color: var(--gris);
}


/* BOTÓN VER MÁS */

.btn-ver-mas {
    align-self: flex-start;

    margin-top: auto;

    padding: 8px 14px;

    border: none;

    border-radius: 5px;

    background-color: var(--azul);

    color: white;

    cursor: pointer;
}

.btn-ver-mas:hover {
    opacity: 0.9;
}


/* INFORMACIÓN OCULTA */

.oculto {
    display: none;
}


/* MENSAJE BÚSQUEDA */

.mensaje-busqueda {
    margin-top: 20px;

    font-weight: bold;

    color: var(--azul);
}


/* ================================
   INFORMACIÓN
================================ */

.info-section {
    width: 90%;
    max-width: 1200px;

    margin: 60px auto;

    padding: 40px;

    background-color: var(--azul-claro);

    border-radius: 12px;

    display: flex;

    flex-wrap: wrap;

    gap: 40px;
}

.info-bloque {
    flex: 1 1 300px;
}

.info-bloque h2 {
    font-size: 2rem;

    margin-bottom: 15px;
}

.info-bloque p:last-child {
    color: var(--gris);

    max-width: 500px;
}


/* BENEFICIOS */

.beneficios {
    flex: 1 1 400px;

    display: flex;

    flex-wrap: wrap;

    gap: 15px;
}

.beneficio {
    flex: 1 1 150px;

    padding: 20px;

    background-color: white;

    border-radius: 8px;
}

.beneficio span {
    color: var(--azul);

    font-weight: bold;
}

.beneficio h3 {
    margin: 8px 0;
}

.beneficio p {
    color: var(--gris);

    font-size: 0.9rem;
}


/* ================================
   FOOTER
================================ */

.footer {
    background-color: #222;

    color: white;

    padding: 40px 5% 20px;
}

.footer-contenido {
    max-width: 1200px;

    margin: 0 auto;

    display: flex;

    flex-wrap: wrap;

    gap: 40px;
}

.footer-contenido > div {
    flex: 1 1 200px;
}

.footer h2,
.footer h3 {
    margin-bottom: 10px;
}

.footer p {
    color: #ccc;
}

.footer-bottom {
    max-width: 1200px;

    margin: 30px auto 0;

    padding-top: 20px;

    border-top: 1px solid #444;

    text-align: center;

    color: #aaa;
}


/* ================================
   RESPONSIVIDAD
   SIN MEDIA QUERIES
================================ */

/*
    La responsividad depende principalmente de:

    display: flex;
    flex-wrap: wrap;
    flex: 1 1;
    min-width;
    max-width;
    width: 100%;
    gap;
*/
3. js/script.js
// ========================================
// BOTONES "VER MÁS"
// ========================================

const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

botonesVerMas.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const card = boton.closest(".destino-card");

        const informacion = card.querySelector(".extra-info");

        if (informacion.classList.contains("oculto")) {

            informacion.classList.remove("oculto");

            boton.textContent = "Ver menos";

        } else {

            informacion.classList.add("oculto");

            boton.textContent = "Ver más";
        }

    });

});


// ========================================
// BUSCADOR
// ========================================

const inputBuscar = document.getElementById("buscarDestino");
const botonBuscar = document.getElementById("btnBuscar");

const mensajeBusqueda = document.getElementById("mensajeBusqueda");

const tarjetas = document.querySelectorAll(".destino-card");


botonBuscar.addEventListener("click", function () {

    const texto = inputBuscar.value.trim().toLowerCase();

    let encontrados = 0;


    tarjetas.forEach(function (tarjeta) {

        const titulo = tarjeta
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const pais = tarjeta
            .querySelector(".pais")
            .textContent
            .toLowerCase();


        if (
            texto === "" ||
            titulo.includes(texto) ||
            pais.includes(texto)
        ) {

            tarjeta.style.display = "flex";

            encontrados++;

        } else {

            tarjeta.style.display = "none";

        }

    });


    if (texto === "") {

        mensajeBusqueda.textContent =
            "Mostrando todos los destinos.";

    } else {

        mensajeBusqueda.textContent =
            `Destinos encontrados: ${encontrados}`;

    }

});


// ========================================
// BUSCAR AL PRESIONAR ENTER
// ========================================

inputBuscar.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        botonBuscar.click();

    }

});
🔎 Lo importante del ejercicio

La parte más interesante para tu simulación es que no hay ningún bloque @media.

La distribución depende de estas propiedades:

display: flex;
flex-wrap: wrap;
flex: 1 1 230px;
gap: 20px;
min-width: 0;
max-width: 1200px;
width: 100%;

Por ejemplo, las tarjetas:

.destinos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.destino-card {
    flex: 1 1 230px;
}

hacen que el navegador distribuya automáticamente las tarjetas según el espacio disponible.

El Hero utiliza el mismo principio:

.hero {
    display: flex;
    flex-wrap: wrap;
}

.hero-texto,
.hero-imagen {
    flex: 1 1 300px;
}

Por tanto, el estudiante debería poder observar algo como:

PANTALLA GRANDE

┌──────────────┐ ┌──────────────┐
│    HERO      │ │    IMAGEN    │
└──────────────┘ └──────────────┘

┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ CARD │ │ CARD │ │ CARD │ │ CARD │
└──────┘ └──────┘ └──────┘ └──────┘

y al reducir el ancho:

┌──────────────┐
│    HERO      │
├──────────────┤
│    IMAGEN    │
└──────────────┘

┌────────┐ ┌────────┐
│  CARD  │ │  CARD  │
└────────┘ └────────┘

┌────────┐ ┌────────┐
│  CARD  │ │  CARD  │
└────────┘ └────────┘

y finalmente:

┌──────────────┐
│     HERO     │
├──────────────┤
│    IMAGEN    │
└──────────────┘

┌──────────────┐
│     CARD     │
└──────────────┘

┌──────────────┐
│     CARD     │
└──────────────┘

┌──────────────┐
│     CARD     │
└──────────────┘

Todo esto ocurre sin @media queries.