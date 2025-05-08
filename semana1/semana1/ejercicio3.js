// const { ask } = require('../helpers/input');

const { ask } = require('../helpers/input');

async function main() 
{
    const number = Number(await ask ('Ingresa un número: '));

/*  // Ejemplo 1
    if (number % 3 === 0 && number % 5 === 0)
    {// La condición se cumple si el residuo de la división de un multiplo de 3 y 5 es cero y es igual en cada uno de los casos
        console.log("Es multiplo de 3 y de 5");
    }

    else if (number % 3 === 0)
    {// La condición se cumple si el residuo de la división de un multiplo solamente de 3   
        console.log("multiplo de 3");
    }

    else if (number % 5 === 0)
    {// La condición se cumple si el residuo de la división de un multiplo solamente de 5
        console.log("Multiplo de 5");
    }

    else
    {// La condición se cumple si el residuo de la división no es multiplo ni de 3 y 5
        console.log("No es multiplo de 3 y 5");
    }
*/

/*  //Ejenlpo 2
if (number % 3 !== 0 && number % 5 !== 0)
    {// La condición se cumple si el residuo de la división de un multiplo de 3 y 5 es cero y es igual en cada uno de los casos
        console.log("Es multiplo de 3 y de 5");
    }

    else if (number % 3 === 0 && number %  5 !== 0)
    {// La condición se cumple si el residuo de la división de un multiplo solamente de 3   
        console.log("multiplo de 3");
    }

    else if (number % 5 === 0 && number %  3 !== 0)
    {// La condición se cumple si el residuo de la división de un multiplo solamente de 5
        console.log("Multiplo de 5");
    }

    else
    {// La condición se cumple si el residuo de la división no es multiplo ni de 3 y 5
        console.log("No es multiplo de 3 y 5");
    }
*/

switch (true) // Ejemplo 3
{
    case number % 3 !== 0 && number % 5 !== 0:
        console.log("Es múltiplo de 3 y 5");    
    break;

    case number % 3 !== 0 :
        console.log("Es múltiplo de 3");    
    break;

    case number % 5 !== 0:
        console.log("Es múltiplo de 5");    
    break;

    default:
        console.log("No es múltiplo de 3 o 5");
    break;
}

}

main();