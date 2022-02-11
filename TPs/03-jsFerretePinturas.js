/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let farenheit;
    let celsius;
    farenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    celsius = (farenheit - 32) * 5 / 9;
    alert(farenheit + " Farenheit son " + celsius + " centigrados")
}

function CentigradosFahrenheit () 
{
    let celsius;
	let farenheit;
    celsius = parseFloat(document.getElementById("txtIdTemperatura").value);
    farenheit = (celsius * 9 / 5) + 32;
    alert(celsius + " centigrados son " + farenheit + " Farenheit");
}
