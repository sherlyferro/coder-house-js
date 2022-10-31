


/////////////////////////////////////////////////////////////////////////ultimo ejemplo
let Edad = parseInt(prompt('Ingrese su edad por favor'));

if (Edad > 17) {
    alert('Felicidades usted puede acceder a ver los productos');

const productosTienda = [
    { id: 0, nombre: 'carteras', precio: 120, stock: 800 },
    { id: 1, nombre: 'polos', precio: 50, stock: 500 },
    { id: 2, nombre: 'aretes', precio: 30, stock: 400 },
    { id: 3, nombre: 'llaveros', precio: 10, stock: 580 },
    { id: 4, nombre: 'sombreros', precio: 70, stock: 200 },
    { id: 5, nombre: 'pantalones', precio: 110, stock: 700 }
];

let productos = productosTienda.map(producto => {
    return { id: producto.id, nombre: producto.nombre, precio: producto.precio }

})
let mensaje = ''
productos.forEach(producto => {
    mensaje = mensaje + ` id : ${producto.id}  Nombre : ${producto.nombre}  Precio : ${producto.precio} \n`
})
alert('Tenemos los siguientes productos en ofertapara usted \n' + mensaje)

let carrito = [];


function agregaCarrito() {
    let elegirProducto = prompt('Si desea elegir algun producto coloque el numero correspondiente a : 0  ,  1 ,2  ,3  ,4 o 5 \n y  para salir introdusca el número 100 ')
    while (isNaN(elegirProducto)) {
        alert('Porfavor ingrese solo números')
        
        elegirProducto = prompt('Si desea elegir algun producto coloque el numero correspondiente 0  ,  1 ,2  ,3  ,4 o 5 \n  y para salir introdusca el número 100 ')
    }
    
    while (elegirProducto != 100) {
        switch (parseInt(elegirProducto)) {
            case 0:
                carrito.push(productosTienda[0])
                alert(`Agregamos a tu carrito el producto ${productosTienda[0].nombre}`)
               
                break;
            case 1:
                carrito.push(productosTienda[1])
                alert(`Agregamos a tu carrito el producto ${productosTienda[1].nombre}`)
               
                break;
            case 2:
                carrito.push(productosTienda[2])
                alert(`Agregamos a tu carrito el producto ${productosTienda[2].nombre}`)
               
                break;
            case 3:
                carrito.push(productosTienda[3])
                alert(`Agregamos a tu carrito el producto ${productosTienda[3].nombre}`)
               
                break;
            case 4:
                carrito.push(productosTienda[4])
                alert(`Agregamos a tu carrito el producto ${productosTienda[4].nombre}`)
                
                break;
            case 5:
                carrito.push(productosTienda[5])
                alert(`Agregamos a tu carrito el producto ${productosTienda[5].nombre}`)
               
                break;
            default:
                alert('No tenemos ese producto')
                break
        }
        elegirProducto = prompt('Si desea elegir algun producto coloque el numero correspondiente 0  ,  1 ,2  ,3  ,4 o 5 \n para salir introdusca el número 100 ')
    }
    
    alert('¡carrito cerrado!')
    mostrarCarrito()
}

let productosCarrito = "vas a llevar :\ n"
let precioCarrito = 0


function mostrarCarrito() {
    for (itemCarrito of carrito) {
        productosCarrito += `\n - ${itemCarrito.nombre}`
        precioCarrito += itemCarrito.precio
    }
    alert(`Repasemos : \n ${productosCarrito} \n por un total de $: ${precioCarrito}`)
}

 
agregaCarrito();

} else {
    alert('Lo sentimos usted es menor de edad no le podemos mostrar las ofertas');
}



