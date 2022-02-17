/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let maximo;
	let minimo;
	let numero;
	maximo = -999
	minimo = 999
	numero = prompt("Ingrese un numero o escriba salir");
	while (numero != "salir") {
		parseInt(numero)
	if (numero > maximo) {
			maximo = numero;
		} else if (numero < minimo) {
			minimo = numero;
		}
		numero = prompt("Ingrese un numero o escriba salir");
	}
	document.getElementById("txtIdMaximo").value = maximo
	document.getElementById("txtIdMinimo").value = minimo
}