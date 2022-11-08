let productos = [
    { nombre: "aretes", precio: 20, stock: 300, imgUrl: "./img/llamitaof.png" },
    { nombre: "llamitas", precio: 20, stock: 300, imgUrl: "../img/llamita.jpg" },
    { nombre: "recordatorios", precio: 20, stock: 300, imgUrl: "https://i.pinimg.com/564x/f7/68/8c/f7688cc1500ed123faaefc13ea54d22b.jpg" },
    { nombre: "polos", precio: 20, stock: 300, imgUrl: "../img/llamita.jpg" },
    { nombre: "ponchos", precio: 20, stock: 300, imgUrl: "../img/llamita.jpg" },

]
let contenedorProductos = document.getElementById("contenedorProductos")

for (const producto of productos) {
    let tarjetaProducto = document.createElement('div')
    tarjetaProducto.className = 'producto'
    tarjetaProducto.innerHTML = `
    <h3>${producto.nombre}</h3>
    <h4>${producto.precio}</h4>
    <p>${producto.stock}</p>
    <img scr =${producto.imgUrl}>
    `



    contenedorProductos.append(tarjetaProducto)
}
/*
#contenedorProductos {
    width: 800px;
    height: 800px;
    background-color: aquamarine;
    display: flex;
    color: black;
}

.producto {
    width: 700px;
    height: 500px;
    background-color: rgb(251, 139, 242);
    margin: 5px;
   border: 1px solid black;
}
img{
    width: 80px;
    height: 80px;
}*/