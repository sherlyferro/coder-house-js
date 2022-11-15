let productos = [
  {
    id: 43,
    nombre: "aretes",
    precio: 20,
    stock: 200,
    imgUrl:
      "https://i.pinimg.com/564x/4d/25/e5/4d25e52522a2ea52f3fa739a704f72e4.jpg",
  },
  {
    id: 44,
    nombre: "llamitas",
    precio: 100,
    stock: 300,
    imgUrl:
      "https://i.pinimg.com/564x/66/f1/0d/66f10dacafc3461e8b394c74b84a2bd0.jpg",
  },
  {
    id: 45,
    nombre: "recordatorios",
    precio: 150,
    stock: 500,
    imgUrl:
      "https://i.pinimg.com/564x/88/f9/1a/88f91a29c98ebfc11b3d1c0990b0f413.jpg",
  },
  {
    id: 46,
    nombre: "polos",
    precio: 80,
    stock: 300,
    imgUrl:
      "https://i.pinimg.com/564x/d6/e4/e3/d6e4e39150ee5973ac5df048d4657a0c.jpg",
  },
  {
    id: 47,
    nombre: "ponchos",
    precio: 50,
    stock: 200,
    imgUrl:
      "https://i.pinimg.com/564x/fc/6d/6a/fc6d6a12256f38aed397b023aa50dfed.jpg",
  },
];

let contenedorProductos = document.getElementById("contenedorProductos");
renderizarProductos();

let inputBusqueda = document.getElementById("busqueda");
let botonBusqueda = document.getElementById("buscar");

botonBusqueda.onclick = () => {
  let productosFiltrados = productos.filter((producto) =>
    producto.nombre.includes(inputBusqueda.value)
  );
  renderizarProductos(productosFiltrados);
};

inputBusqueda.oninput = () => {
  let productosFiltrados = productos.filter((producto) =>
    producto.nombre.includes(inputBusqueda.value)
  );
  renderizarProductos(productosFiltrados);
};

function renderizarProductos(productosFiltrados) {
  let productosaRenderizar = productos;
  if (productosFiltrados) {
    productosaRenderizar = productosFiltrados;
  }
  contenedorProductos.innerHTML = "";
  for (const producto of productosaRenderizar) {
    let tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "producto";
    tarjetaProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <h4> $ ${producto.precio}</h4>
            <p>Quedan ${producto.stock} u.</p>
            <img src=${producto.imgUrl}>
            <button class="boton" id=${producto.id}>Agregar al carrito</button>
            `;
    contenedorProductos.append(tarjetaProducto);
  }
}

let botones = document.getElementsByClassName("boton");
let carrito = document.getElementById("carrito");

let carritoGuardado = [];
if (localStorage.getItem("carrito")) {
  carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
}
renderizarCarrito();

for (const boton of botones) {
  boton.onclick = (e) => {
    let productoBuscado = productos.find(
      (producto) => producto.id == e.target.id
    );

    let posicionProductoEnCarrito = carritoGuardado.findIndex(
      (producto) => producto.id == productoBuscado.id
    );

    if (posicionProductoEnCarrito != -1) {
      carritoGuardado[posicionProductoEnCarrito].unidades++;
      carritoGuardado[posicionProductoEnCarrito].subtotal =
        carritoGuardado[posicionProductoEnCarrito].precioUnidad *
        carritoGuardado[posicionProductoEnCarrito].unidades;
    } else {
      carritoGuardado.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precioUnidad: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
    renderizarCarrito();
  };
}

function renderizarCarrito() {
  carrito.innerHTML = `
      <div class="itemCarrito">
        <p>nombre</p>
        <p>precioUnidad</p>
        <p>unidades</p>
        <p>subtotal</p>
      </div>
    `;
  let total = 0;
  for (const item of carritoGuardado) {
    total += item.subtotal;
    carrito.innerHTML += `
        <div class="itemCarrito">
          <p>${item.nombre}</p>
          <p>${item.precioUnidad}</p>
          <p>${item.unidades}</p>
          <p> $ ${item.subtotal}</p>
        </div>
      `;
  }
  carrito.innerHTML += `
      <div class="itemCarrito">
        <h3>total:  $ ${total}</h3>
      </div>
    `;
}
