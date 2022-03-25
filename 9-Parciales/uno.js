let producto;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let minPrecio = 301;
	let minUnidades;
	let minFabricante;
	let maxUnidades = 0;
	let maxProducto;
	let maxPrecio;
	let acumJabones = 0;
	for (let i = 0; i < 5; i++) {
		producto = prompt("Ingrese el producto barbijo/jabón/alcohol");
		while (producto != "barbijo" && producto != "jabón" && producto != "alcohol") {
			producto = prompt("Ingrese un producto valido barbijo/jabón/alcohol");
		}
		precio = parseFloat(prompt("Ingrese el precio unitario 100/300"));
		while (precio < 100 || precio > 300 || Number.isNaN(precio) == true) {
			precio = parseFloat(prompt("Ingrese un precio valido 100/300"));
		}
		unidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		while (unidades <= 0 || unidades > 1000 || Number.isNaN(unidades) == true) {
			unidades = parseInt(prompt("Ingrese una cantidad de unidades valida"));
		}
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");
		if (producto == "alcohol" && precio < minPrecio) {
			minPrecio = precio;
			minUnidades = unidades;
			minFabricante = fabricante;
		}
		if (unidades > maxUnidades) {
			maxUnidades = unidades;
			maxProducto = producto;
			maxPrecio = precio;
		}
		if (producto == "jabón") {
			acumJabones = acumJabones + unidades;
		}
	}
	alert("Del alcohol mas barato hay " + minUnidades + " y el fabricante es " + minFabricante);
	alert("El precio del tipo con mas unidades es " + maxPrecio);
	alert("La cantidad de jabones que hay en total es " + acumJabones);