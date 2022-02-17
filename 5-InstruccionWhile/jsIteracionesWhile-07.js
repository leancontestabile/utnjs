/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	contador = 0;
	acumulador = 0;
	numero = prompt("Ingrese un numero o escriba salir");
	while (numero != "salir") {
		acumulador = acumulador + parseInt(numero);
		contador = contador + 1;
		numero = prompt("Ingrese un numero o escriba salir");
	}
	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = (acumulador / contador)
}