/*
El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/
function mostrar() {
    let nombre;
    let carrera;
    let estado;
    let sexo;
    let edad;
    let nota;
    let ingreso;
    let contProgramacion = 0;
    let contPsicologia = 0;
    let contDiseñoGrafico = 0;
    let contMujeresProgramacion = 0;
    let contNoBinario = 0;
    let acumFinalizantes = 0;
    let contFinalizantes = 0;
    let promedioFinalizantes = 0;
    let maxEdad = 0;
    let nmaxEdad;
    let smaxEdad;
    let maxNota = 0;
    let nmaxNota;
    let emaxNota;
    ingreso = prompt("Ingrese s para salir");
    while (ingreso != "s") {
        nombre = prompt("Ingrese su nombre");
        do {
            carrera = prompt("Ingrese su carrera");
        } while (carrera != "Programación" && carrera != "Psicología" && carrera != "Diseño gráfico");
        do {
            estado = prompt("Ingrese el estado de su carrera");
        } while (estado != "en curso" && estado != "abandono" && estado != "finalizado");
        do {
            sexo = prompt("Ingrese su sexo");
        } while (sexo != "femenino" && sexo != "masculino" && sexo != "nobinario");
        do {
            edad = parseInt(prompt("Ingrese su edad"));
        } while (edad < 18 || Number.isNaN(edad) == true);
        do {
            nota = parseFloat(prompt("Ingrese su nota"))
        } while (nota <= 0 || Number.isNaN(nota) == true);
        switch (carrera) {
            case "Programación":
                contProgramacion = contProgramacion + 1;
                break;
            case "Psicología":
                contPsicologia = contPsicologia + 1;
                break;
            default:
                contDiseñoGrafico = contDiseñoGrafico + 1;
        }
        if (sexo == "femenino" && carrera == "Programación") {
            contMujeresProgramacion = contMujeresProgramacion + 1;
        } else if (sexo == "nobinario") {
            contNoBinario = contNoBinario + 1;
        } else if (estado == "finalizado") {
            acumFinalizantes = acumFinalizantes + nota;
            contFinalizantes = contFinalizantes + 1;
        }
        if (edad > maxEdad && carrera == "Psicología") {
            maxEdad = edad;
            nmaxEdad = nombre;
            smaxEdad = sexo;
        }
        if (nota > maxNota && sexo == "nobinario") {
            maxNota = nota;
            nmaxNota = nombre;
            emaxNota = estado;
        }
        ingreso = prompt("Ingrese s para salir");
    }
    promedioFinalizantes = acumFinalizantes / contFinalizantes;
    if (contProgramacion > contPsicologia && contProgramacion > contDiseñoGrafico) {
        mayorCantidad = "La carrera que tiene más alumnos es programacion";
    } else if (contPsicologia > contDiseñoGrafico) {
        mayorCantidad = "La carrera que tiene más alumnos es psicologia";
    } else {
        mayorCantidad = "La carrera que tiene más alumnos es diseño grafico";
    }
    document.write("Cantidad total de alumnos de programacion es " + contProgramacion + ", la cantidad total de alumnos de psicologia es " + contPsicologia + " y la cantidad total de alumnos de diseño grafico es " + contDiseñoGrafico + "<br>" + 
    "La cantidad total de mujeres que cursan la carrera de programación es " + contMujeresProgramacion + "<br>" + 
    "La cantidad de alumnos no binarios es "+ contNoBinario + "<br>" + 
    "El promedio de notas de los alumnos finalizantes " + promedioFinalizantes + "<br>" + 
    "El alumno mas viejo en la carrera de psicología se llama " + nmaxEdad + ", es " + smaxEdad + " y tiene " + maxEdad + "<br>" + 
    "El mejor alumno no binario que estudia psicología se llama " + nmaxNota + ", su nota es " + maxNota + " y el estado de la carrera es " + emaxNota + "<br>" + 
    mayorCantidad);
}