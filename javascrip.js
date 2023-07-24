let usuario;
let contrasenia;

for(let i=1; i<=3; i++){
    usuario = prompt('Tu nombre de usuario');
    contrasenia = prompt('Tu contraseña');
    if((usuario == 'Juan')&&(contrasenia=='1234')){
        alert('Bienvenido Juan !!!!');
        break;
    }else{
        alert('Usuario y/o contrasenia erroneos');
    }
}

let id = prompt('Ingresa el codigo del producto 0-salir');

while(id != '0'){
    switch(id){
        case '1':
            alert('Departamento Palermo una noche U$D 25');
            break;
        case '2':
            alert('Departamento Caballito una noche U$D 27 ');
            break;
        case '3':
            alert('Departamento Gerli U$D 5408');
            break;
        default:
            alert('Codigo inexistente');
            break;
    }

    id = prompt('Ingresa el codigo del producto 0-salir');
}

// Objeto para almacenar la información de los productos disponibles
var productos = [
    { nombre: "Smartphone", precio: 500, impuesto: 10, descuento: 5 },
    { nombre: "Tablet", precio: 300, impuesto: 8, descuento: 3 },
    { nombre: "Laptop", precio: 1000, impuesto: 12, descuento: 8 },
];

  // Función para calcular el precio final de un producto
function calcularPrecioFinal(precioProducto, impuesto, descuento) {
    var impuestoAplicado = precioProducto * (impuesto / 100);
    var descuentoAplicado = precioProducto * (descuento / 100);
    var precioFinal = precioProducto + impuestoAplicado - descuentoAplicado;
    return precioFinal;
}

  // Función para realizar el pago en cuotas
function calcularCuotas(monto, cuotas) {
    var cuotaMensual = monto / cuotas;
    return cuotaMensual;
}

  // Función para mostrar los productos disponibles y dejar que el usuario seleccione uno
function seleccionarProducto() {
    console.log("Productos disponibles:");
    for (var i = 0; i < productos.length; i++) {
    console.log(
        i + 1 + ". " + productos[i].nombre + " - Precio: $" + productos[i].precio
    );
    }
    var opcion = parseInt(prompt("Seleccione el número del producto deseado:"));
    if (opcion >= 1 && opcion <= productos.length) {
    var productoSeleccionado = productos[opcion - 1];
    return productoSeleccionado;
    } else {
    console.log("Opción inválida. Vuelva a intentarlo.");
    return seleccionarProducto();
    }
}

  // Función principal del simulador
function iniciarSimulador() {
    var producto = seleccionarProducto();
    var cantidad = parseInt(prompt("Ingrese la cantidad de productos:"));
    var precioTotal = producto.precio * cantidad;
    var precioFinal = calcularPrecioFinal(
    precioTotal,
    producto.impuesto,
    producto.descuento
    );
    var cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));
    var cuotaMensual = calcularCuotas(precioFinal, cuotas);

    console.log(
    "Producto seleccionado: " + producto.nombre + " - Precio unitario: $" + producto.precio
    );
    console.log("Cantidad: " + cantidad);
    console.log("Precio total: $" + precioTotal);
    console.log("Precio final con impuestos y descuentos: $" + precioFinal);
    console.log("Pago en " + cuotas + " cuotas de $" + cuotaMensual.toFixed(2));
}

iniciarSimulador();


function calcularCosto(costoTotal) {
    var resultado = costoTotal;
    console.log("El costo total es: " + resultado);
}

function calcularCuotas(monto, cuotas) {
    var resultado = monto / cuotas;
    console.log("El pago mensual es: " + resultado);
}

function calcularValorFinal(valorProducto, impuesto, descuento) {
    var impuestoAplicado = valorProducto * (impuesto / 100);
    var descuentoAplicado = valorProducto * (descuento / 100);
    var resultado = valorProducto + impuestoAplicado - descuentoAplicado;
    console.log("El valor final es: " + resultado);
}

function calcularTiempoEspera(turnos) {
    var resultado = "Tiempo de espera promedio: ..."; 
    console.log(resultado);
}


function calcularEdadPromedio(edades) {
    var sumaEdades = 0;
    for (var i = 0; i < edades.length; i++) {
        sumaEdades += parseInt(edades[i]);
    }
    var resultado = sumaEdades / edades.length;
    console.log("La edad promedio es: " + resultado);
}


function calcularNotaFinal(notas) {
    var sumaNotas = 0;
    for (var i = 0; i < notas.length; i++) {
        sumaNotas += parseFloat(notas[i]);
    }
    var resultado = sumaNotas / notas.length;
    console.log("La nota final es: " + resultado);
}

// Ejemplos 

calcularCosto(1000); 

calcularCuotas(2000, 6); 

calcularValorFinal(500, 10, 20); 

calcularTiempoEspera(50); 

calcularEdadPromedio([20, 25, 30, 35, 40]);

calcularNotaFinal([7, 8, 9, 6, 8]); 
