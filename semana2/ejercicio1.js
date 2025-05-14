const { ask } = require('../helpers/input');

function saludar(nombre) 

{
  console.log(`Hola estimado(a): ${nombre}, espero tengas un buen día...`);
}

async function main() 
{
  let limite = Number(await ask("¿Hasta que número quieres contar?: "));
  let i = 0;

  while (i <= limite)
  {
    console.log(i);
    i++; // Es igual a: (i = i + 1);
  }
  
  console.log("Ahora hacia abajo",);
  
  i = limite
  while (i >= 0)
  {
    console.log(i);
    i--; // Es igual a: (i = i - 1);
  }

  const personas = ["Pedro","Juan","Maria","Ana","Karla","Sofía","Carlos","Esteban","Diego","Laura","Fernando","Karolina","Luis","Diego"];
  
  console.log("Ascendente");
  
  for (let i = 0; i < personas.length; i++) 
  {
    saludar(personas[i]);
  }
  console.log("Descendente");
  
  for (let i = personas.length - 1; i >= 0; i--) 
  {
    saludar(personas[i]);
  }
  console.log("foreach");
  
  personas.forEach((persona) => saludar(persona));

  const frutas = ["Fresas", "Mango", "Kiwi", "Manzana", "Uvas", "Naranjas", "Toronjas", "Plátanos"]
  const cajon = Number(await ask("¿Qué cajón quieres abrir? (1-8): "));

  for (let j = 1; j <= 8; j++) 
  {
    if (j === cajon) 
    {
      console.log("En el cajón hay: ", frutas[j - 1]);
    }
  }
}

main();
