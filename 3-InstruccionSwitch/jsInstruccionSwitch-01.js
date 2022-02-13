function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value
	switch (mes) {
		case "Enero":
			alert("que comiences bien el año!!!.")
			break;
		case "Marzo":
			alert("a clases!!!.")
		case "Julio":
			alert("se vienen las vacaciones!!!.")
		case "Diciembre":
			alert("Felices fiesta!!!.")
	}
}