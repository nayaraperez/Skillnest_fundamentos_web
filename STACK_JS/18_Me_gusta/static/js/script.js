
const publicaciones = document.querySelectorAll('.cajas');

publicaciones.forEach((publicacion) => {

    const boton = publicacion.querySelector('.botones_likes');
    const contador = publicacion.querySelector('.contador');

    boton.onclick = () => {

        let likes = parseInt(contador.innerText);
        likes++;

        contador.innerText = `${likes} like(s)`;
    };
});