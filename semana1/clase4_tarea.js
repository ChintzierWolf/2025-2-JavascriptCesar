// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate)
{
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (86400000))
    //Para obtener el resultado de la fecha completa, se debe de multiplicar por 10000, 60 60 y 24
    // ya que la variable diff contiene el valor del resultado en milisegundos de la fecha que se quiere lograr.

    return edadEnDias;
}

async function main() 
{
    const actualDate = new Date();

    const birthDateDay = await ask("¿Cuál es día de tu fecha de nacimiento?: ");
    const birthDateMonth = await ask("¿Cuál es el mes de tu fecha de nacimiento?: ");
    const birthDateYear = await ask("¿Cuál es el año de tu fecha de nacimiento?: ");    

    //const birthDate = await ask("¿Cuál es el año de tu fecha de nacimiento?: YYYY - MM - DD");

    const birthDate = new Date (`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

    console.log ("Haz vivido aproximádamente: ");
    console.log(`${diffDays(actualDate, birthDate)} días`)

    //console.log (actualDate)
    //console.log (birthDate)
    //console.log(diff);
}
main();
