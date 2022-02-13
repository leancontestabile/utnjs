function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value
	switch (mes) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno.");
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
			}
}