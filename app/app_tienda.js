import { ListaDeProductos, CrearTarjetas, DetalleProducto,agregarAlCarrito} from "../app/functions.js";

let Productos = await ListaDeProductos()
console.log('productos: ', Productos);

let containerAllProduct = document.querySelector('#containerAllProduct')

CrearTarjetas(Productos, containerAllProduct)
DetalleProducto(Productos)
agregarAlCarrito(Productos)



// document.addEventListener('DOMContentLoaded', async () => {
//     let response = await ListaDeProductos()
//     console.log(Productos);
    
// })
// console.log(containerAllProduct);

// document.querySelector('#containerAllProduct').innerHTML='prueba'

// document.querySelector('.pruebita').innerHTML= 'as'



