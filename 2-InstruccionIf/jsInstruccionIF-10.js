function mostrar()
{
	nota = Math.floor(Math.random() * 10) + 1;
	if (nota >= 9) {
		alert("EXCELENTE");
	} else if (nota >= 4) {
		alert("APROBÓ");
	} else {
		alert("Vamos, la proxima se puede");
	}
}