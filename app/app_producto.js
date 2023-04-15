import {CrearProducto, agregarAlCarrito} from './functions.js'

let contenedorHTML = document.querySelector('.container')
let producto =  JSON.parse( localStorage.getItem('InfoProducto'))
console.log('Productoo: ',producto);
console.log('Localstorage: ',localStorage.getItem('InfoProducto'));

CrearProducto(producto, contenedorHTML)
// agregarAlCarrito(producto)

let btnCarrito = document.querySelector('.btn-agregar')
btnCarrito.addEventListener('click', (evento) => {
    console.log('evento: ', evento);
    // localStorage.setItem('carrito', JSON.stringify(evento))

})
