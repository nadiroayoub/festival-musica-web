'use strict'
document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    navigacionFija();
});

function navigacionFija(){
    
    const barra = document.querySelector('.header');
    //Registrar el intersection observar
    const observar = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            console.log('ya desaparecio');
            barra.classList.add('fijo');
        }
    });
    // Elemento observar
    observar.observe(document.querySelector('.sobre-festival'));
}
function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlace =>{
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const seccion = document.querySelector(`${e.target.attributes.href.value}`);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        })
    });
}
