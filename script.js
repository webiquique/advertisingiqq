document.addEventListener("DOMContentLoaded", function () {
  // Define aquí los nombres de tus imágenes
  const images = [
    'milenkaccesoriosmejor.png',
    'CGimpresiones3D.png',
    'cycconsultores.png'
  ];

  let currentIndex = 0;
  const slideshowDiv = document.getElementById('slideshow');

  function showImage(index) {
    slideshowDiv.innerHTML = `<img src="${images[index]}" alt="Publicidad ${index + 1}">`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Mostrar primera imagen
  showImage(currentIndex);

  // Cambiar cada 3 segundos
  setInterval(nextImage, 6000);
});
