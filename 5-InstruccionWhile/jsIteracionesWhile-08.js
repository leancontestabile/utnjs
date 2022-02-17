/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let contador;
	let acumulador;
	let numero;
	let multiplicacion;
	contador = 0;
	acumulador = 0;
	multiplicacion = 0;
	numero = prompt("Ingrese un numero o escriba salir");
	while (numero != "salir") {
		if (numero >= 0) {
			acumulador = acumulador + parseInt(numero);
		} else if (multiplicacion == 0) {
			multiplicacion = parseFloat(numero)
		} else {
			multiplicacion = multiplicacion * parseFloat(numero)
		}
		numero = prompt("Ingrese un numero o escriba salir");
	}
	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdProducto").value = multiplicacion
}