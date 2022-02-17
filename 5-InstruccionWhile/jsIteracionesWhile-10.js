/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let cantidadPares;
	let promedioPositivos;
	let promedioNegativos;
	numero = prompt("Ingrese un numero o S para salir")
	while (numero != "S") {
		parseInt(numero)
		if (numero >= 0) {
			sumaPositivos = sumaPositivos + numero;
			contadorPositivos = contadorPositivos + 1;
		} else {
			sumaNegativos = sumaNegativos + numero;
			contadorNegativos = contadorNegativos + 1;
		}
	}
	document.write("la suma de negativos es :" + sumaNegativos);
}