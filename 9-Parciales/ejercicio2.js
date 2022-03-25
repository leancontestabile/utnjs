function mostrar() {
	/*
	2)De una compra debes ingresar una cantidad indeterminada de productos, validando los siguientes datos:
	nombre de producto, precio, unidades, tipo(minorista o mayorista)
	a)informar el precio total de la compra.
	b)el nombre del producto más caro de tipo minorista
	c)el nombre del producto con menos unidades
	*/
	let ingreso;
	let nombre;
	let precio;
	let unidades;
	let tipo;
	let precioFinal;
	let acumTotal = 0;
	let maxPrecio = 0;
	let nmaxPrecio;
	let minUnidades = 9999;
	let nminUnidades;
	ingreso = prompt("Ingrese s para salir");
	ingreso = ingreso.toLowerCase();
	while (ingreso != "s") {
		nombre = prompt("Ingrese el nombre del producto");
		do {
			precio = parseFloat(prompt("Ingrese el precio del producto"));
		} while (precio <= 0 || Number.isNaN(precio) == true);
		do {
			unidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		} while (unidades <= 0 || Number.isNaN(unidades) == true);
		do {
			tipo = prompt("Ingrese el tipo del producto minorista/mayorista");
			tipo = tipo.toLowerCase();
		} while (tipo != "minorista" && tipo != "mayorista");
		precioFinal = precio * unidades;
		acumTotal = acumTotal + precioFinal;
		if (tipo == "minorista") {
			if (precio > maxPrecio) {
				maxPrecio = precio;
				nmaxPrecio = nombre;
			}
		}
		if (unidades < minUnidades) {
			minUnidades = unidades;
			nminUnidades = nombre;
		}
		ingreso = prompt("Ingrese s para salir");
		ingreso = ingreso.toLowerCase();
	}
	alert("El precio total de la compra es " + acumTotal);
	alert("El nombre del producto mas caro de tipo minorista es " + nmaxPrecio);
	alert("El nombre del producto con menos unidades es " + nminUnidades);
}