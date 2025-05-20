//Tarea: Análisis de calificaciones
//Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) 
// que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente 
// información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function analizarCalificaciones(numeros) 
{
    const aprobado = obtenerAprobados(numeros);
    const reprobado = obtenerReprobados(numeros); 
    const mayor =  obtenerMayor(numeros); 
    const menor = obtenerMenor(numeros)
    const promedio = obtenerPromedio(numeros);

    return {aprobado, reprobado, mayor, menor, promedio};
}

function obtenerPromedio(numeros) 
{   
    let total = 0;
    
    for (let i = 0; i < numeros.length; i++) 
    {   
        total = total + numeros[i];
    }

    const promedio = total / numeros.length;
    
    return promedio;
}

function obtenerMayor(numeros) 
{   let mayor = numeros[0];
    
    for (let i = 0; i < numeros.length; i++) 
    {   
        if (numeros[i] > mayor)
        {
            mayor = numeros[i];
        }
    }
    
    return mayor;
}

function obtenerMenor(numeros) 
{
    let menor = numeros[0];
  
    for (let i = 0; i < numeros.length; i++) 
    {
        if (numeros[i] < menor)
        {
            menor = numeros[i];
        }
    }
    
    return menor;
}

function obtenerAprobados(numeros) 
{
    let aprobado = numeros[0];
  
    for (let i = 0; i < numeros.length; i++) 
    {
        if (numeros[i] < 70)
        {
            menor = numeros[i];
        }
    }
    
    return aprobado;
}

function obtenerReprobados(numeros) 
{
    let reprobado = numeros[0];
  
    for (let i = 0; i < numeros.length; i++) 
    {
        if (numeros[i] < 70)
        {
            menor = numeros[i];
        }
    }
    
    return reprobado;
}

async function main() 
{
    let calif = [];
    let opcion = [];

    const estadistica = analizarCalificaciones(calif);

    while (opcion !== '3') 
    {
        opcion = await ask('1. Agrega una calificación real (de 1 al 100) \n2. Obtener un resumen estadístico \n3. Salir \n-->>');
        if (opcion === '1') 
        {//Agregar una calificación
            
            let califNueva = await ask('Agrega otra calificación?: ');
            
            calif.push(califNueva);
            
            console.log(`Calificación agregada: ${califNueva}`);
            console.log('Calificaciones registradas: ', calif);
        } 

        else if (opcion === '2') 
        {   //Realizar muestra de aprobados, reprobados y promedio general
            //Calificación más alta y más baja
            if (calif.length === 0)
            {
                console.log('No hay calificaciones disponibles');
                continue;
            }

            else 
            {
                console.log(`El resumen de análisis de las calificaciones de: ${calif}  es el siguiente: `);
                //Resumen
                console.log(`Las calificaciones aprobadas de ${calif} son: ${estadistica.aprobado}`);
                //aprobados
                console.log(`Las calificaciones reprobadas de ${calif} son: ${estadistica.reprobado}`);
                //reproabdos
                console.log(`El promedio total de todas las calificaciones de ${calif} es: ${estadistica.promedio}`);
                //promedio
                console.log(`La calificación mas alta de: ${calif} es: ${estadistica.mayor}`);
                //calificación mas alta
                console.log(`La calificación mas baja de: ${calif} es: ${estadistica.menor}`);
                //calificiacion mas baja
            }

        }

        else if (opcion === '3') 
        {//Salir
            console.log('Gracias por usar el programa');
        } 
        
        else 
        {
            console.log('Opción no válida');
        }
    }
}

main();
