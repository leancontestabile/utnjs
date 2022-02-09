function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value)
	if (edad > 18) {
		alert("persona mayor de edad");
	} else {
		alert("persona menor de edad")
	}
}