'use strict'
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++){
        // Crear variables de lista 'li' y imagenes 'img'
        const lista = document.createElement('LI');
        const imagen = document.createElement('IMG');

        // Agregar imagenes en la lista 'li'
        imagen.src = `build/img/thumb/${i}.webp`;
        lista.appendChild(imagen);
        
        //Añadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;
        imagen.dataset.imagenId = i;

        // Agregar lista 'li' en galeria
        galeria.appendChild(lista);

        //Estilos a la lista
        lista.style.textAlign = 'center';
        
    }
} 
function mostrarImagen(e){
    
    const id = parseInt(e.target.dataset.imagenId);
    
    // Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.classList.add('overlay');
    overlay.appendChild(imagen);

    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    overlay.appendChild(cerrarImagen);

    // Cuando se da click, cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
    }
    // Cuando se presiona, se cierra la imagen 
    cerrarImagen.onclick = function(){
        overlay.remove();
    }
    overlay.onclick
    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}