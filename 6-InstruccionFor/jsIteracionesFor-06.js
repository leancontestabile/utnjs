function mostrar()
{
	let numero;
	let pares = 0;
	numero = parseInt(prompt("Ingrese un numero"));
	for (let i = 1 ; i < numero ; i++) {
		if (i % 2 == 0) {
			alert(i);
			pares = pares + 1;
		}
	}
	alert("pares: " + pares);
}