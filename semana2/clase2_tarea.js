// Práctica para casa: Gestor interactivo de frutas (variante)
// Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para: 
// agregar, 
// eliminar, 
// ver la lista completa 
// y salir. 
// 
// El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// Instrucciones:
//
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require('../helpers/input');

async function main() 
{
    let opcion = '';
    let frutas = [];
    // son variables con elementos vacios más no inexistentes, cada que se cree una variable, se le debe de proporcionar un valor o en su caso, ponerlo vacío.

    while (opcion !== '4') 
    {
        opcion = await ask('¿Qué deseas hacer? \n1. Agregar una fruta \n2. Eliminar una fruta \n3 Ver lista de frutas \n4. Salir \n');
        // \n es para hecer un salto de línea visual dentro del código en cuestión.

        if (opcion === '1')   // 1. Agregar fruta
        {   
            // La estructura del código para poder agregar un elemento dentro del arreglo.
            let frutaNueva = await ask('¿Qué fruta deseas agregar?: ');
            frutas.push(frutaNueva);
            console.log(`Fruta agregada: ${frutaNueva}`);
            console.log('Frutas disponibles: ', frutas);
        } 
        
        else if (opcion === '2')    // 2. Eliminar fruta
        {   
            if (frutas.length === 0)
            //elemento.lenght es para poder tomar todo el valor real del arreglo, toma de principio a fin.
            {
                console.log('No hay frutas disponibles');
                continue;
            } 
            
            else 
            {
                let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
                let index = frutas.indexOf(frutaEliminar);
                // indexOf es el comando para poder ver el índice de un arreglo  y poderlo manipular.

                if (index !== -1) 
                {
                    frutas.splice(index, 1);
                    //el comando splice es para agregar un elemento dentro del arreglo dentro de la úlitma posición del arreglo formado
                    //el comando pop es para eliminar la última posición de un arreglo como elemento, para ya no volver a tenerlo.
                    console.log(`${frutaEliminar} ha sido eliminada `)
                } 
                
                else 
                {
                    console.log('Fruta no encontrada ');
                }
                    console.log('Frutas disponibles: ', frutas);
            }
        } 
        

        else if (opcion === '3')   // 3. ver lista de frutas
        { 
            console.log ('La lista final de las frutas es: ', frutas);
        }

        else if (opcion === '4')    //4. Salir del programa
        {
            console.log('Gracias por usar el programa');
        } 
        
        else 
        {
            console.log('Opción no válida');
        }
    }
}

main();
