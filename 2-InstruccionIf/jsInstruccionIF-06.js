function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value)
	if (edad > 18) {
		alert("persona mayor de edad");
	} else if (edad >= 13 & edad <= 17) {
		alert("persona adolescente");
	} else{
		alert("persona menor de edad");
	}
}