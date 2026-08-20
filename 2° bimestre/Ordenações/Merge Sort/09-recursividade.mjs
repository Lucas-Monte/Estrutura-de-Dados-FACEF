/*
    Fatorial iterativo

    5! = 5*4*3*2*1

*/

function fatorial(n) {
    let resultado = 1;
    for(let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(`Fatorial iterativo de 5 = ${fatorial(5)}`);

/*
    Fatorial recursivo

    5! = 5*4!
    4! = 4*3!
    3! = 3*2!
    2! = 2*1!
    1! = 1
    0! = 1
*/

function fatorialRecursivo(n) {
    if((n) == 1) {
        return 1
    }

    return n * fatorialRecursivo(n-1);
}

console.log(`Fatorial recursivo de 5 = ${fatorialRecursivo(5)}`);