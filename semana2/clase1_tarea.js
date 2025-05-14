// Práctica para casa:
// Imprimir números pares del 1 al 100

const { ask } = require('../helpers/input');

async function main() 
{
 for (let i = 2; i <= 100; i += 2 )
 {
    console.log (i);
 }
}

main();
