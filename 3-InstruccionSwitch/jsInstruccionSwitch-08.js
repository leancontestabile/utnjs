function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
			break;
		}
}