    let usuario;
    let contrasenia;
    
    for (let i = 1; i <= 3; i++) {
    usuario = prompt('Tu nombre de usuario');
    contrasenia = prompt('Tu contraseña');
    if ((usuario == 'Juan') && (contrasenia == '1234')) {
        alert('Bienvenido Juan !!!!');
        break;
    } else {
        alert('Usuario y/o contrasenia erroneos');
    }
    }
    
    const productosPrecio = [
    { nombre: "Smartphone", precio: 500, impuesto: 10, descuento: 5 },
    { nombre: "Tablet", precio: 300, impuesto: 8, descuento: 3 },
    { nombre: "Laptop", precio: 1000, impuesto: 12, descuento: 8 },
    ];
    
    function calcularPrecioFinal(precioProductoPrecio, impuesto, descuento) {
      const impuestoAplicado = precioProductoPrecio * (impuesto / 100);
      const descuentoAplicado = precioProductoPrecio * (descuento / 100);
    const precioFinal = precioProductoPrecio + impuestoAplicado - descuentoAplicado;
    return precioFinal;
    }
    
    function calcularCuotas(monto, cuotas) {
    const cuotaMensual = monto / cuotas;
    return cuotaMensual;
    }
    
    function seleccionarProducto() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productosPrecio.length; i++) {
        console.log(
        i + 1 + ". " + productosPrecio[i].nombre + " - Precio: $" + productosPrecio[i].precio
        );
    }
    let opcion = parseInt(prompt("Seleccione el número del producto deseado:"));
    if (opcion >= 1 && opcion <= productosPrecio.length) {
        let productoSeleccionado = productosPrecio[opcion - 1];
        return productoSeleccionado;
    } else {
        console.log("Opción inválida. Vuelva a intentarlo.");
        return seleccionarProducto();
    }
    }
    
    function iniciarSimulador() {
    let producto = seleccionarProducto();
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
      let precioTotal = producto.precio * cantidad;
    let precioFinal = calcularPrecioFinal(
        precioTotal,
        producto.impuesto,
        producto.descuento
    );
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    let cuotaMensual = calcularCuotas(precioFinal, cuotas);
    
    console.log(
        "Producto seleccionado: " + producto.nombre + " - Precio unitario: $" + producto.precio
    );
    console.log("Cantidad: " + cantidad);
    console.log("Precio total: $" + precioTotal);
    console.log("Precio final con impuestos y descuentos: $" + precioFinal);
    console.log("Pago en " + cuotas + " cuotas de $" + cuotaMensual.toFixed(2));
    }
    
    iniciarSimulador();
    
    let notasAlumnos = [8, 9, 7, 6, 10]; // Ejemplo de notas de alumnos
    
    calcularNotaFinal(notasAlumnos);
    

// Ejemplos 

calcularCosto(1000); 

calcularCuotas(2000, 6); 

calcularValorFinal(500, 10, 20); 

calcularTiempoEspera(50); 

calcularEdadPromedio([20, 25, 30, 35, 40]);

calcularNotaFinal([7, 8, 9, 6, 8]); 

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, foto: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-07/28/22/asset/1a3db609333d/sub-buzz-125-1595975896-20.jpg' },
    { id: 2, nombre: 'Producto 2', precio: 200, foto: 'maxresdefault.jpg' },
    { id: 3, nombre: 'Producto 3', precio: 150, foto: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-07/28/22/asset/1a3db609333d/sub-buzz-125-1595975896-20.jpg' },
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let cantidad = document.getElementById('cantidad');
cantidad.innerText = `🛒${carrito.length}`;

    productos.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener('click', () => {
            agregarACarrito(producto);
        });
    });

function agregarACarrito(prodAAgregar) {
    carrito.push(prodAAgregar);
    cantidad.innerText = `🛒${carrito.length}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    Swal.fire({
        title: 'Fantástico!',
        text: `Agregaste ${prodAAgregar.nombre} al carrito`,
        imageUrl: prodAAgregar.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: prodAAgregar.nombre,
    });

    // Agregar fila a la tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAAgregar.id}</td>
            <td>${prodAAgregar.nombre}</td>
            <td>${prodAAgregar.precio}</td>
            <td><button class='btn btn-light' onclick='eliminarDelCarrito(${prodAAgregar.id})'>🗑️</button></td>
        </tr>
    `;

    // Incrementar el total
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
}

function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter((producto) => producto.id !== idProducto);
    cantidad.innerText = `🛒${carrito.length}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la tabla de carrito
    renderizarCarrito();
}

function renderizarCarrito() {
    document.getElementById('tablabody').innerHTML = '';
    for (const prod of carrito) {
        // Agregar fila a la tabla de carrito
        document.getElementById('tablabody').innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nombre}</td>
                <td>${prod.precio}</td>
                <td><button class='btn btn-light' onclick='eliminarDelCarrito(${prod.id})'>🗑️</button></td>
            </tr>
        `;
    }

    // Incrementar el total
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
}

// Agregar evento para el botón 'Finalizar Compra'
let finalizarBtn = document.getElementById('finalizar');
finalizarBtn.onclick = finalizarCompra;

// Renderizar los productos disponibles al cargar la página
renderizarProductos(productos);

// Renderizar el contenido del carrito al cargar la página
renderizarCarrito();