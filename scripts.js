const cartToggle = document.getElementById('cart-toggle');
const cartMenu = document.getElementById('cart-menu');
const cartClose = document.getElementById('cart-close'); // Agregamos la referencia al elemento de la flecha de cerrar
// Agregar un controlador de eventos al hacer clic en el ícono del carrito
cartToggle.addEventListener('click', function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    // Alternar la clase "active" en el menú del carrito para mostrarlo u ocultarlo
    cartMenu.classList.toggle('active');
    // Cambiar la dirección de la animación del menú del carrito
    cartMenu.style.transform = cartMenu.classList.contains('active') ? 'translateX(0)' : 'translateX(100%)';
});
// Agregar un controlador de eventos al hacer clic en la flecha de cerrar
cartClose.addEventListener('click', function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    // Ocultar el menú del carrito
    cartMenu.classList.remove('active');
    // Cambiar la dirección de la animación del menú del carrito
    cartMenu.style.transform = 'translateX(100%)';
});
    





    

