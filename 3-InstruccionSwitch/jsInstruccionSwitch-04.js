function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value
    switch (mes) {
        case "Febrero":
            alert("tiene 28 dias");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre ":
        case "Noviembre":
            alert("tiene 30 dias");
            break;
        default:
            alert("tiene 31 dias");
            break;
    }
}