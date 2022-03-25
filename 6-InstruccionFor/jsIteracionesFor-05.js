function mostrar()
{
	let i;
	i = parseInt(prompt("Ingrese un numero"));
	for ( ; i != 9 ; ) {
		alert(i);
		i = parseInt(prompt("Ingrese un numero"));
	}
}