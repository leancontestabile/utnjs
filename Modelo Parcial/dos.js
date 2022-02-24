function mostrar() {
  let ingreso;
  let producto;
  let cantidad;
  let precio;
  let totalCantidad = 0;
  let precioBolsas;
  let totalPrecioBruto = 0;
  let precioFinal;
  let descuento;
  let cantidadArena = 0;
  let cantidadCal = 0;
  let cantidadCemento = 0;
  let mayorCantidad;
  let maxPrecio = 0;
  let nmaxPrecio;
  ingreso = prompt("Ingrese s para salir");
  while (ingreso != "s") {
    do {
      producto = prompt("Ingrese el producto arena/cal/cemento");
    } while (producto != "arena" && producto != "cal" && producto != "cemento");
    do {
      cantidad = parseInt(prompt("Ingrese la cantidad de bolsas"))
    } while (cantidad <= 0 || Number.isNaN(cantidad) == true);
    do {
      precio = parseFloat(prompt("Ingrese el precio por bolsa"))
    } while (precio <= 0 || Number.isNaN(precio) == true);
    totalCantidad = totalCantidad + cantidad;
    precioBolsas = precio * cantidad;
    totalPrecioBruto = totalPrecioBruto + precioBolsas;
    if (totalCantidad >= 10) {
      descuento = totalPrecioBruto * 15 / 100;
      precioFinal = totalPrecioBruto - descuento;
    } else if (totalCantidad >= 30) {
      descuento = totalPrecioBruto * 30 / 100;
      precioFinal = totalPrecioBruto - descuento;
    } else {
      descuento = 0;
      precioFinal = totalPrecioBruto;
    }
    if (producto == "arena") {
      cantidadArena = cantidadArena + cantidad;
    } else if (producto == "cal") {
      cantidadCal = cantidadCal + cantidad;
    } else {
      cantidadCemento = cantidadCemento + cantidad;
    }
    if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
      mayorCantidad = "El tipo con mas cantidad de bolsas es de Arena";
    } else if (cantidadCal > cantidadCemento) {
      mayorCantidad = "El tipo con mas cantidad de bolsas es de Cal";
    } else {
      mayorCantidad = "El tipo con mas cantidad de bolsas es de Cemento";
    }
    if (precio > maxPrecio) {
      maxPrecio = precio;
      nmaxPrecio = producto;
    }
    ingreso = prompt("Ingrese una s para salir");
  }
  alert("El importe total es " + precioFinal + "$, bruto sin descuento es " + totalPrecioBruto + "$, con un descuento de " + descuento + "$.");
  alert(mayorCantidad);
  alert("El tipo mas caro es " + nmaxPrecio);
}