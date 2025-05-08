// Ejercicio: Crear una calculadora simple que realice operaciones básicas (Suma, resta, multiplicación y divisións)

const { ask } = require('../helpers/input');

async function main() 
{
    const num1 = Number(await ask('Ingresa el primer número: '));
    const num2 = Number(await ask('Ingresa el segundo número: '));

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multi = num1 * num2;
    const div = num1 / num2;

    console.log("La suma de: ", num1, "+", num2, "=", suma);
    console.log("La resta de: ", num1, "-", num2, "=", resta);
    console.log("La multiplicación de: ", num1, "*", num2, "=", multi);
    console.log("La división de :", num1, "/", num2, "=", div);
}

main();
