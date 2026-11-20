// CARRUSEL AUTOMÁTICO
let currentSlide = 1;
const totalSlides = 4;

function nextSlide() {
    currentSlide++;
    if (currentSlide > totalSlides) currentSlide = 1;
    document.getElementById(`slide${currentSlide}`).checked = true;
}

setInterval(nextSlide, 5000);


// FORMULARIO: MENSAJE DE ÉXITO
const formulario = document.querySelector('.horizontal-form');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    formulario.reset();
});


// DESPLAZAMIENTO SUAVE EN ENLACES
const enlaces = document.querySelectorAll('a[href^="#"]');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const destino = this.getAttribute('href');
        if (destino !== '#') {
            const elemento = document.querySelector(destino);
            if (elemento) {
                e.preventDefault();
                elemento.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


// ANIMACIÓN DE ENTRADA AL BAJAR
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .service-item, .widget').forEach(elemento => {
    elemento.style.opacity = '0';
    elemento.style.transform = 'translateY(25px)';
    elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observador.observe(elemento);
});


// CONTADOR DE VISITAS
let visitas = localStorage.getItem('visitas') || 0;
visitas = parseInt(visitas) + 1;
localStorage.setItem('visitas', visitas);
console.log(`👀 Visitas a la página: ${visitas}`);
