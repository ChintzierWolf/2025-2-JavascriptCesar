// Ejercicio: Simulador de clima

// Crear un programa que simule un clima basado en la temperatura actual.
// El programa debe pedir al usuario la temperatura actual y mostrar un mensaje indicando si hace frío, calor o si está templado.
// La lógica es la siguiente:

const { ask } = require('../helpers/input');

async function main() 
{
  const temp = Number(await ask("¿Cuál es la temperatura actual?: "));
  // se declaran las constantes necesarias para la tarea de la simulación de la temperatura

  if (temp < 10) 
  { // - Si la temperatura es menor a 10 grados, mostrar "Hace frío"
    console.log("Con tu temperatura de: ", temp, "Hace frío");
  }

  else if (temp >= 10 && temp < 20)
  {  // - Si la temperatura está entre 10 y 20 grados, mostrar "Está templado"
    console.log("Con tu temperatura de: ", temp, "Está templado");
  }  
  
  else if (temp >= 20 && temp < 30)
  {  // - Si la temperatura está entre 20 y 30 grados, mostrar "Hace calor"
    console.log("Con tu temperatura de: ", temp, "Hace calor");
  }  
  
  else (temp <= 30)
  {  // - Si la temperatura es mayor a 30 grados, mostrar "Hace mucho calor"
    console.log("Con tu temperatura de: ", temp, "Hace mucho calor, apágale al sol :'c");
  }

  // TODO: Implementar la lógica para temperaturas entre 10 y 20 grados
  // TODO: Implementar la lógica para temperaturas entre 20 y 30 grados
  // TODO: Implementar la lógica para temperaturas superiores a 30 grados

}

main();