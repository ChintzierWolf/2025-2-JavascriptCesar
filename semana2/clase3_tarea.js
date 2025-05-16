// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() 
{
    let opcion = '';
    let pedirEdades = [];
    // son variables que se van a construir a lo largo del programa, por eso van primero.

    console.log('Escribe una cantidad de edades y te digo quienes puede votar?');

    while (opcion !== '3')
    {
        opcion = await ask ('¿Qué deseas hacer?: \n 1 = Agregar edad \n 2 = Ver lista de edades \n 3 = salir \n --> ');
    
        if (opcion === '1') //1. crear arreglo, agregar edades
        {
            let edadNueva = await ask ('Escribe una edad: ')
            pedirEdades.push (edadNueva);

            console.log(`La edad '${edadNueva}' ha sido agregada al registro`);
            console.log(`Edades escritas: `, pedirEdades);
        }

        else if (opcion === '2') // lista de edades
        {
            if (pedirEdades.lenght !== 0)
            {                
                for (let index = 0; index < pedirEdades.lenght; index ++)
                {
                    const contEdades = pedirEdades[index];

                    if (contEdades >= 18)
                    {
                        console.log (`${pedirEdades[index]} puede votar`);
                    }
                }
                console.log (`El total de personas que pueden votar es: ${contEdades[index]}`);
            }

            else (pedirEdades.lenght === 0)
            {
                console.log('No hay edades escritas, vuelve a intentarlo');
                continue;
            }
        }

        else if (opcion === '3') // 3 salir del programa
        {
            console.log('Gracias por usar el porgrama. c:')
        }

        else
        {
            console.log('Esa opción´no es válida.')
        }
    } 
}

main();
