function mostrar() {
	/*
	1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
	nombre, altura, peso y sexo.
	a)informar la cantidad de personas de sexo femenino.
	b)la altura promedio en total
	c)el nombre del hombre con menos peso(si lo hay)
	Pedir datos por prompt y mostrar por document.write
	*/
	let nombre;
	let altura;
	let peso;
	let sexo;
	let contF = 0;
	let acumAltura = 0;
	let contAltura = 0;
	let promedioAltura;
	let minPeso = 1000;
	let nminPeso;
	for (let i = 0; i < 5; i++) {
		nombre = prompt("Ingrese su nombre");
		do {
			altura = parseFloat(prompt("Ingrese su altura"));
		} while (altura <= 0 || altura > 4 || Number.isNaN(altura) == true);
		do {
			peso = parseFloat(prompt("Ingrese su peso"));
		} while (peso <= 0 || peso > 1000 || Number.isNaN(peso) == true);
		do {
			sexo = prompt("Ingrese su sexo m/f");
			sexo.toLowerCase;
		} while (sexo != "m" && sexo != "f");
		if (sexo == "f") {
			contF = contF + 1;
		}
		acumAltura = acumAltura + altura;
		contAltura = contAltura + 1;
		if (peso < minPeso && sexo == "m") {
			minPeso = peso;
			nminPeso = nombre;
		}
	}
	promedioAltura = acumAltura / contAltura;
	document.write("La cantidad de personas de sexo femenino es " + contF + "<br>" +
		"La altura promedio es " + promedioAltura + "<br>" +
		"El nombre del hombre con menos peso es " + nminPeso + "<br>");
}