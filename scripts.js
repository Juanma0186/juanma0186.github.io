// Función para verificar qué sección está visible y desplazar un poco más arriba
function checkScroll() {
  const sections = document.querySelectorAll("section"); // Obtener todas las secciones
  const navLinks = document.querySelectorAll(".navbar li"); // Obtener los enlaces del menú

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect(); // Obtener la posición de la sección
    if (rect.top <= 100 && rect.bottom >= 100) {
      // Si la sección está en el rango superior de la ventana
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Eliminar la clase "active" de todos los enlaces
      });
      navLinks[index].classList.add("active"); // Agregar la clase "active" al enlace correspondiente
    }
  });
}

// Escuchar el evento de desplazamiento y realizar el desplazamiento con compensación
window.addEventListener("scroll", checkScroll);

// Añadir compensación al hacer clic en los enlaces internos
document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 75; // Ajusta esto según tu diseño
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth", // Desplazamiento suave
      });
    }
  });
});

//Redirigir a otra página

function redirection(url) {
  (window.location.href = "https://juanma0186.github.io/" + url), "_blank";
}
