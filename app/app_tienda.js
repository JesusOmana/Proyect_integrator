import { ListaDeProductos, CrearTarjetas, DetalleProducto} from "../app/functions.js";

let Productos = await ListaDeProductos()
// console.log('productos: ', Productos);

let containerAllProduct = document.querySelector('.productos')

CrearTarjetas(Productos, containerAllProduct)
DetalleProducto(Productos)

// document.addEventListener('DOMContentLoaded', async () => {
//     let response = await ListaDeProductos()
//     console.log(Productos);
    
// })
// console.log(containerAllProduct);



// document.querySelector('#containerAllProduct').innerHTML='prueba'

// document.querySelector('.pruebita').innerHTML= 'as'



