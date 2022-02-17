function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	let promedio;
	contador = 0
	acumulador = 0
	while (contador < 5) {
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador = contador + 1
	}
	promedio = acumulador / 5
	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio
}