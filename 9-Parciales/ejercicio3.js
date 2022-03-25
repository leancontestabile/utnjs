function mostrar() {
	/*
	3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, validando los datos ingresados:
	nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), temporada(“alta”,”baja”,“media”), cantidad de pasajeros que viajan.
	informar:
	a)el lugar destino mas elegido.
	b)el nombre del pasajero titular que lleva menos pasajeros.
	c)el promedio de personas, que viajan en temporada alta.
	*/
	let ingreso;
	let nombre;
	let destino;
	let temporada;
	let cantidad;
	let minPasajeros = 9999;
	let nminPasajeros;
	let acumAlta = 0;
	let acumTotal = 0;
	let promedioAlta;
	let contBrasil = 0;
	let contCaribe = 0;
	let contEuropa = 0;
	let mayorCantidad;
	ingreso = prompt("Ingrese s para salir");
	ingreso = ingreso.toLowerCase();
	while (ingreso != "s") {
		nombre = prompt("Ingrese el nombre del pasajero titular");
		do {
			destino = prompt("Ingrese el destino brasil/caribe/europa");
			destino = destino.toLowerCase();
		} while (destino != "brasil" && destino != "caribe" && destino != "europa");
		do {
			temporada = prompt("Ingrese la temporada alta/media/baja");
			temporada = temporada.toLowerCase();
		} while (temporada != "alta" && temporada != "media" && temporada != "baja");
		do {
			cantidad = parseInt(prompt("Ingrese la cantidad de pasajeros que viajan"));
		} while (cantidad <= 0 || Number.isNaN(cantidad) == true);
		switch (destino) {
			case "brasil":
				contBrasil = contBrasil + 1;
				break;
			case "caribe":
				contCaribe = contCaribe + 1;
				break;
			default:
				contEuropa = contEuropa + 1;
				break;
		}
		if (cantidad < minPasajeros) {
			minPasajeros = cantidad;
			nminPasajeros = nombre;
		}
		if (temporada == "alta") {
			acumAlta = acumAlta + cantidad;
		}
		acumTotal = acumTotal + cantidad;
		ingreso = prompt("Ingrese s para salir");
		ingreso = ingreso.toLowerCase();
	}
	promedioAlta = acumTotal / acumAlta;
	alert(contBrasil)
	alert(contCaribe)
	alert(contEuropa)
	if (contBrasil > contCaribe && contBrasil > contEuropa) {
        mayorCantidad = "El destino mas elegido es Brasil";
    } else if (contCaribe > contEuropa) {
        mayorCantidad = "El destino mas elegido es Caribe";
    } else {
        mayorCantidad = "El destino mas elegido es Europa";
    }
	alert(mayorCantidad);
	alert("El nombre del pasajero titular que lleva menos pasajeros es " + nminPasajeros);
	alert("El promedio de personas que viajan en temporada alta es " + promedioAlta);
}