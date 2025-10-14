// filepath: /home/efrain/Escritorio/PaginaManillas/js/productos.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  if (!modal || !modalImg || !closeBtn) {
    console.error("El modal o sus elementos no se encontraron en el DOM.");
    return;
  }

  console.log("Modal y elementos encontrados.");

  // Agregar evento a todas las imágenes de productos
  document.querySelectorAll(".producto img").forEach((img) => {
    img.addEventListener("click", () => {
      console.log("Imagen clickeada:", img.src);
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Cerrar el modal al hacer clic en la "X"
  closeBtn.addEventListener("click", () => {
    console.log("Botón de cerrar clickeado.");
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      console.log("Clic fuera de la imagen.");
      modal.style.display = "none";
    }
  });
});