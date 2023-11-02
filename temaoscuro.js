
const cambioTema = document.getElementById('cambiar-tema');
const body = document.body;

// Verificar si el tema almacenado en el caché y aplicarlo
const temaAlmacenado = localStorage.getItem('tema');
if (temaAlmacenado) {
  body.classList.add(temaAlmacenado);

  // Cambia la clase de los elementos .producto al cargar la página
  if (body.classList.contains('tema-oscuro')) {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
      producto.classList.add('producto-tema-oscuro');
    });

    // Cambia el color del texto a #FFF (blanco)
    document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6').forEach(element => {
      element.style.color = '#FFF';
    });

    // Cambia la clase de los botones .botonAnadir al cargar la página
    const botonesAnadir = document.querySelectorAll('.botonAnadir');
    botonesAnadir.forEach(boton => {
      boton.classList.add('botonAnadir-tema-oscuro');
    });
  }
}

// Manejar el cambio de tema cuando se hace clic en el botón
cambioTema.addEventListener('click', () => {
  if (body.classList.contains('tema-oscuro')) {
    body.classList.remove('tema-oscuro');
    localStorage.setItem('tema', 'tema-claro');

    // Cambia la clase de los elementos .producto al cambiar al tema claro
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
      producto.classList.remove('producto-tema-oscuro');
    });

    // Cambia el color del texto a su estado original
    document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6').forEach(element => {
      element.style.color = '';
    });

    // Cambia la clase de los botones .botonAnadir al cambiar al tema claro
    const botonesAnadir = document.querySelectorAll('.botonAnadir');
    botonesAnadir.forEach(boton => {
      boton.classList.remove('botonAnadir-tema-oscuro');
    });
  } else {
    body.classList.add('tema-oscuro');
    localStorage.setItem('tema', 'tema-oscuro');

    // Cambia la clase de los elementos .producto al cambiar al tema oscuro
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
      producto.classList.add('producto-tema-oscuro');
    });

    // Cambia el color del texto a #FFF (blanco)
    document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6').forEach(element => {
      element.style.color = '#FFF';
    });

    // Cambia la clase de los botones .botonAnadir al cambiar al tema oscuro
    const botonesAnadir = document.querySelectorAll('.botonAnadir');
    botonesAnadir.forEach(boton => {
      boton.classList.add('botonAnadir-tema-oscuro');
    });
  }
});
