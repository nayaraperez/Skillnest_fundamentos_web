console.log("conexión de js exitosa...");


const imagen = document.getElementById('miImagen');


const imagenOriginal = 'static/images/campo-de-trigo-con-cipreses.png';

const imagenNueva = 'static/images/noche-estrellada-sobre-el-ródano.png'; 


imagen.addEventListener('mouseover', () => {
  imagen.src = imagenNueva;
});


imagen.addEventListener('mouseout', () => {
  imagen.src = imagenOriginal;
});