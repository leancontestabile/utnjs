function mostrar() {
	let ingreso;
	let nombre;
	let edad;
	let sexo;
	let civil;
	let temperatura;
	let maxTemperatura = 0;
	let nmaxTemperatura;
	let contMayoresViudos = 0;
	let contHombreViudosSolteros = 0;
	let contTerceraTreintayocho = 0;
	let contHombres = 0;
	let acumHombres = 0;
	let promedio;
	ingreso = prompt("Ingrese s para salir");
	while (ingreso != "s") {
		nombre = prompt("Ingrese su nombre");
		do {
			edad = parseInt(prompt("Ingrese su edad"));
		} while (edad <= 0 || Number.isNaN(edad) == true);
		do {
			sexo = prompt("Ingrese su sexo");
		} while (sexo != "f" && sexo != "m");
		do {
			civil = prompt("Ingrese su estado civil soltero/casado/viudo");
		} while (civil != "soltero" && civil != "casado" && civil != "viudo");
		do {
			temperatura = parseFloat(prompt("Ingrese su temperatura corporal"));
		} while (temperatura <= 20 || Number.isNaN(edad) == true);
		if (temperatura > maxTemperatura) {
			maxTemperatura = temperatura;
			nmaxTemperatura = nombre;
		}
		if (edad >= 18 && civil == "viudo") {
			contMayoresViudos = contMayoresViudos + 1;
		}
		if (sexo == "m") {
			if (civil == "viudo" || civil == "soltero") {
				contHombreViudosSolteros = contHombreViudosSolteros + 1;
			}
		}
		if (edad >= 60 && temperatura > 38) {
			contTerceraTreintayocho = contTerceraTreintayocho + 1;
		}
		if (sexo == "m" && civil == "soltero") {
			contHombres = contHombres + 1;
			acumHombres = acumHombres + edad;
		}
		ingreso = prompt("Ingrese s para salir");
	}
	promedio = acumHombres / contHombres;
	alert("La persona con mas temperatura se llama " + nmaxTemperatura);
	alert("La cantidad de mayores de edad estan viudos es " + contMayoresViudos);
	alert("La cantidad de hombres que hay solteros o viudos es " + contHombreViudosSolteros);
	alert("La cantidad de personas de la tercera edad con mas de 38 de temperatura es " + contTerceraTreintayocho);
	alert("El promedio de edad entre los hombres solteros " + promedio);
}