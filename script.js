// Obtener el botón de alternar modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Verificar la preferencia de modo oscuro almacenada en el almacenamiento local
const isDarkMode = localStorage.getItem('darkMode');

// Función para actualizar el texto del botón según el modo actual
function updateButtonText() {
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Modo claro';
  } else {
    darkModeToggle.textContent = 'Modo oscuro';
  }
}

// Aplicar la preferencia de modo oscuro al cargar la página
if (isDarkMode === 'true') {
  document.body.classList.add('dark-mode');
  updateButtonText();
}

// Agregar un controlador de eventos para alternar los estilos de modo oscuro
darkModeToggle.addEventListener('click', function() {
  // Alternar la clase 'dark-mode' en el elemento 'body'
  document.body.classList.toggle('dark-mode');

  // Guardar la preferencia de modo oscuro en el almacenamiento local
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  // Actualizar el texto del botón
  updateButtonText();
});

// Actualizar el texto del botón al cargar la página
updateButtonText();
