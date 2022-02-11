/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    sumaTotal = precio1 + precio2 + precio3
    alert("La suma total es $" + sumaTotal)
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedioTotal = (precio1 + precio2 + precio3) / 3
    alert("El promedio total es $" + promedioTotal)
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    sumaTotal = precio1 + precio2 + precio3
    totalFinal = sumaTotal + (sumaTotal * 21 / 100)
    alert("El total mas iva es $" + totalFinal)
}