const titleElement = document.getElementById('title');
const text = titleElement.innerText;
titleElement.innerText = '';

let i = 0;
function typeWriter() {
  if (i < text.length) {
    titleElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Ajusta el retardo entre cada letra agregada (en milisegundos)
  }
}

// Llama a la función typeWriter después de cierto tiempo (por ejemplo, 2 segundos)
setTimeout(typeWriter, 2000);
window.addEventListener('scroll', function() {
  var titleContainer = document.querySelector('.title-container');
  var title = document.querySelector('.title');
  var scrollPosition = window.scrollY;

  if (scrollPosition === 0) {
    titleContainer.style.opacity = 1; /* Muestra el contenedor del título cuando está en la parte superior */
  } else {
    titleContainer.style.opacity = 0; /* Oculta el contenedor del título cuando se desplaza hacia abajo */
  }
});