/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = parseInt(prompt("Ingrese un numero del 0 al 9"));
	while (numero > 9 || numero < 0) {
		alert("Numero equivocado, ingrese un numero nuevamente");
		numero = parseInt(prompt("Ingrese un numero del 0 al 9"));
	}
	document.getElementById("txtIdNumero").value = numero;
}