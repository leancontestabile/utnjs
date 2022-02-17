/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f ó m .");
	while (sexo != "f" && sexo != "m") {
		alert("sexo incorrecto, ingrese el sexo nuevamente")
		sexo = prompt("ingrese f o m .")
	}
	document.getElementById("txtIdSexo").value = sexo
}