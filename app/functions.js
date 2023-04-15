export const ListaDeProductos = async () => {
  try {
    let response = await fetch('../Lista_Productos.json')
    // console.log('response: ', response)
    if (response.ok !== true) {
      new Error('error en la solicitud')
    }
    let data = await response.json()
    // console.log('data: ', data[0]);
    return data
  } catch (error) {
    alert(error)
  }

}

export const CrearProducto = (item, contenedor) => {

  // contenedor.innerHTML = ''
  console.log('item: ',item);
   contenedor.innerHTML = `
   
    <div class="container text-center">
    <h3><strong>${item.nombre}</strong></h3>
    <div class="row">
        <div class="row-cols-xs-6 row-cols-sm-1 col-md-6 mt-4">
            
            <div id="carouselExampleIndicators" class="carousel slide ">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="bd-placeholder-img bd-placeholder-img-lg w-100 img-fluid d-block"
                            style="width: 400px; height: 580px;"
                            src="${item.img}" role="img"
                            aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice"
                            focusable="false">
                        </img>
                    </div>
                    <div class="carousel-item">
                        <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 img-fluid"
                            style="width: 400px; height: 580px;"
                            src="${item.img}" role="img"
                            aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice"
                            focusable="false">
                        </img>
                    </div>
                    <div class="carousel-item">
                        <img class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 img-fluid"
                            style="width: 400px; height: 580px;" src="${item.img}"
                            role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice"
                            focusable="false">
                        </img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="row-cols-xs-6 row-cols-sm-1 col-md-6">
        <div class="card border-warning bg-success text-dark bg-opacity-25 mt-4 mx-3">
            <div class="text-center card-body">
                <h3>${item.nombre}</h3>
                <ul>
                    <br>
                    <li class="text-start">Cada suculenta puede variar con respecto a las imágenes mostradas</li>
                    <li class="text-start">Las suculentas vienen en macetas cuadradas de 2 pulgadas totalmente enraizadas en el
                        suelo
                    </li>
                    <br>
                        <b>Descripción</b>
                        <br>
                        <p class="text-start">${item.descripcion}</p>    
                    </br>
                    <li class="text-start">Exposición a la luz solar: ${item.caracteristica} </li>
                </ul>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                </div>
                    <p class="text-start"><b>$ ${item.precio}</b>              
                    </p>
                    <a class="btn btn-success mb-2 btn-agregar">agregar al carrito</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
                            
                            `
}

export const CrearTarjetas = (array, container) => {

  container.innerHTML = ''
  for (const item of array) {


    container.innerHTML += `
   
                          <div class="col px-4 py-4 " >
                                  <div class="row card shadow-sm">
                                  <img src=${item.imagen} class="img-fluid mt-2 mx-auto d-block" style="width: 300px; height: 300px;" alt="">
                                  <div class="card-body">
                                      <h5 class="row card-title justify-content-center">${item.nombre}</h5>
                                      <p class="caracteristicas ">Suculenta de ${item.caracteristica}</p>
                                      <p class="precio d-flex justify-content-end me-3">Precio: $${item.precio}</p>
                                      
                                      <div class="d-flex justify-content-between align-items-center">
                                          <div class="btn-group">
                                              <button  class="btn btn-primary btn-detalles" id="${item.id}">Detalles</button>
                                          </div>
                                              <button class="btn btn-success btn-agregar" id="${item.id}">Agregar</button>
                                          </div>
                                      </div> 
                                  </div>
                              </div>  
                          </div>  
                            
                            `
  }
}

export const DetalleProducto = (array) =>{

  let btnProductos = document.querySelectorAll('.btn-detalles')
  for (const btn of btnProductos){
          btn.addEventListener('click', (event) => {
            // console.log(event);
            // console.log(event.target.attributes[1].value);
          let id = event.target.attributes[1].value
          let FiltroProducto = array.find((el) => el.id == id)
          let InfoProducto = {
            nombre: FiltroProducto.nombre,
            caracteristica: FiltroProducto.caracteristica,
            descripcion: FiltroProducto.descripcion,
            precio: FiltroProducto.precio,
            img: FiltroProducto.imagen,
            id: FiltroProducto.id,
          }
          
          localStorage.setItem('InfoProducto', JSON.stringify(InfoProducto))
          window.location = './pageproduct.html'
          
          
          console.log('infoproductos ',InfoProducto);
          console.log('Filtraso: ', FiltroProducto.precio);
        })
        
      }
      
    }
    
    //<-- Inyecta la pagina de producto pero no funciona el boton "Atras" porque no existe pagina anterior siempre es la misma -->
    // document.querySelector('#tienda').innerHTML = `
  
    // <button type="button" class="btn btn-secondary mt-4 ms-5" onclick="history.back()">Volver
    // Atrás</button>
    // <div class="row">
    // <div class="col-5 mt-3 ms-5">
    //     <h3><strong>Suculenta</strong></h3>
    //     <img class="card bg-dark ms-5" width="90%" src="/Imagenes/productos/suculenta-echeveria-pulvinata-ruby.jpg" alt="foto de planta">
    // </div>
    // <div class="col-1 mt-5">
    //     <img class="mt-3 card bg-dark" width="100%" src="/Imagenes/productos/suculenta-echeveria-pulvinata-ruby.jpg"
    //         alt="foto de planta"><br>
    //     <img class="mt-2 card bg-dark" width="100%" src="/Imagenes/productos/suculenta-echeveria-pulvinata-ruby.jpg"
    //         alt="foto de planta"><br>
    //     <img class="mt-2 card bg-dark" width="100%" src="/Imagenes/productos/suculenta-echeveria-pulvinata-ruby.jpg"
    //         alt="foto de planta"><br>
    //     <img class="mt-2 card bg-dark" width="100%" src="/Imagenes/productos/suculenta-echeveria-pulvinata-ruby.jpg"
    //         alt="foto de planta">
    // </div>
    // <div class="col-5 mt-5 me-5 align-middle">
    //     <div class="card border-warning bg-success text-dark bg-opacity-25 mt-4 mx-3">
    //         <div class="card-body">
    //             <h3>Suculenta</h3>
    //             <ul>
    //                 <li>Cada suculenta puede variar con respecto a las imágenes mostradas</li>
    //                 <li>Las suculentas vienen en macetas cuadradas de 2 pulgadas totalmente enraizadas en el suelo
    //                 </li>
    //                 <DL>
    //                     <DT><b>MANTENIMIENTO</b>
    //                     <DD> Riego: agua 1 vez x por semana. Durante la inactividad (invierno), 1 vez cada 2 o 3
    //                         semanas. Remoja completamente la tierra, luego sécala completamente antes de regar. No
    //                         utilices
    //                         una
    //                         botella de espray ya que el agua en las hojas podría causar daños
    //                         Fertilización: durante la temporada de crecimiento, un fertilizante equilibrado, que se
    //                         ha
    //                         diluido a 1/4
    //                         de fuerza, se puede añadir al agua para cada riego
    //                         Tierra | sol | maceta | Use tierra bien drenada. La tierra normal o abono no servirán.
    //                         Elige
    //                         tierra de
    //                         cactus o mezcla tierra para macetas con arena, piedra pómez o perlita. Asegúrate de que
    //                         tus
    //                         contenedores
    //                         tengan agujeros de drenaje
    //                 </DL>
    //                 <li>Exposición a la luz solar: sol parcial </li>
    //             </ul>
    //             <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                 </div>
    //                 <p><b>PRECIO</b>
    //                     <BR>
    //                     $1000
    //                 </p>
    //                 <a href="" class="btn btn-success mb-2">agregar al carrito</a>
    //             </div>
    //         </div>

    //     </div>
    //     <div class="row"></div>
    //   </div>
    //   </div>
    
      
    //   `

export const addEventDetail = () => {
  const btnsCollection = document.querySelectorAll('.btn-detail')
  for (const btn of btnsCollection) {
      btn.addEventListener('click', (event) => {
        console.dir(event.target.parentNode.children[0].attributes[0].textContent);
        let productDetail = {
          img: event.target.parentNode.children[0].attributes[0].textContent,
          product: event.target.parentNode.children[1].innerText,
          description: event.target.parentNode.children[2].innerText,
          price: event.target.parentNode.children[3].innerText,
        }

        localStorage.setItem('productDetail', JSON.stringify(productDetail))
        window.location = './pages/detailProduct.html'
        console.log(productDetail);

      })
  }
}


// <div class="producto">
//   <img src=${item.imagen} alt="producto">
//   <h3>${item.nombre}</h3>
//   <p>${item.descripcion}</p>
//   <p>${item.precio}</p>
//   <button class='btn-detail'>Ver más</button>
//   <button class="btn" id='${item.id}'>Añadir al carrito</button>
// </div>

export function agregarAlCarrito(array){
    // TODO arreglar error en el carrito
    let arrayCarrito;
    console.log('array carrito: 1', array);
    let botones = document.querySelectorAll('.btn-agregar')
    // console.log('botones: ', botones);
    botones.forEach(function(boton){
      boton.addEventListener('click', function(evento){
        console.log(evento)
        // console.dir(evento.target)
        // console.dir(evento.target.parentNode)
        // alert('agregado al carrito')
        
        let id = evento.target.attributes[1].value
        let FiltroProducto = array.find((el) => el.id == id)
      console.log('id: ', id);
       
      // let FiltroProducto = array.find( (elemento) =>  elemento.id == id  )
      console.log('filtro de productos', FiltroProducto);
      if (FiltroProducto !== undefined) {
            arrayCarrito =  JSON.parse( localStorage.getItem('carrito')) || []
            console.log('arraycarrito dps de filtro', arrayCarrito);
            let index = arrayCarrito.findIndex( (el) => el.id == FiltroProducto.id)
            // console.log(FiltroProducto.id);
            // console.log(arrayCarrito[0].id);
            if (index !== -1) {
                arrayCarrito[index].cantidad += 1
                localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
            }else{
                FiltroProducto.cantidad = 1
                arrayCarrito.push(FiltroProducto)
                localStorage.setItem('carrito: ', JSON.stringify(arrayCarrito))
                console.log('stringigy', arrayCarrito);
            }
           
      }
        // console.log(productoFilter.nombre);
     
      })
    })
  }


// export const addEventDetail = () => {
//   const btnsCollection = document.querySelectorAll('.btn-detail')
//   for (const btn of btnsCollection) {
//       btn.addEventListener('click', (event) => {
//         console.log('textcontent: ', event.target.parentNode.children[0].attributes[0].textContent);
//         let productDetail = {
//           img: event.target.parentNode.children[0].attributes[0].textContent,
//           product: event.target.parentNode.children[1].innerText,
//           description: event.target.parentNode.children[2].innerText,
//           price: event.target.parentNode.children[3].innerText,
//         }

//         localStorage.setItem('productDetail', JSON.stringify(productDetail))
//         window.location = './pages/detailProduct.html'
//         console.log('detalles del producto: ', productDetail);

//       })
//   }
// }