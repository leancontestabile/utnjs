/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeConDescuento;
	importe = parseInt(document.getElementById("txtIdImporte").value);
	importeConDescuento = importe - (importe * 25 / 100)
	document.getElementById("txtIdResultado").value = importeConDescuento
}