function mostrar()
{
	let estacion;
	let destino;
	let precio;
	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value
	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					precio = 15000 + (15000 * 20 / 100);
					alert(precio);
					break;
				case "Cataratas":
				case "Cordoba":
					precio = 15000 - (15000 * 10 / 100);
					alert(precio);
					break;
				case "Mar del plata":
					precio = 15000 - (15000 * 20 / 100);
					alert(precio);
					break;
		}
		break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					precio = 15000 - (15000 * 20 / 100);
					alert(precio);
					break;
				case "Cataratas":
				case "Cordoba":
					precio = 15000 + (15000 * 10 / 100);
					alert(precio);
					break;
				case "Mar del plata":
					precio = 15000 + (15000 * 20 / 100);
					alert(precio);
					break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					precio = 15000 + (15000 * 10 / 100);
					alert(precio);
					break;
				default:
					alert (15000);
			}
		break;
	}
}