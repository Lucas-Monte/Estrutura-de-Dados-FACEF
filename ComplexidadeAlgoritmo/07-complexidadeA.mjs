/* O(1), porque a operação de acesso ao primeiro elemento do array é feita em tempo constante, independente do tamanho do array*/

const array = Array.from({length: 10}, (_, i) => Math.floor(Math.random()*1000))

function exempleO1 (array) {
    const inicio = performance.now();
    if (array.length === 0) return null;
    const elemento = array[3];
    const fim = performance.now();

    const memoriaPilhaMB = (array.length*4) / (1024 * 1024) //cada dado equivale a 4 bytes // convertendo para mega bytes

    let memoriaTotalMB = "N/A";
    if(typeof process !== "undefined" && process.memoryUsage) {
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024;
    }
    console.clear();
    console.log("--- Analise de complexidade interativa O(1) ---")
    console.log("Tamanho da entrada: ", array.length);
    console.log("Resultado: ", elemento);
    console.log("Tempo de execução: ", fim - inicio, " ms");
    console.log("Memoria estimada da pilha de chamadas: ", memoriaPilhaMB, " mb");
    console.log("Memoria total usada pelo processo: ", 
        typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) + " mb" : memoriaTotalMB    
    );
}

//exempleO1(array)

/* O(log n), porque a cada iteração, valor de i é multiplicado por 2, que significa que o numero de iterações necessarias para que i atinaja "n" é logaritmico em relação a n */

function exempleLogN(n) {
    let i = 1;
    while(i < n) {
        console.log(i);
        i*= 2;
    }
}

//exempleLogN(array.length);

/*O(n), porque a função percorre todos os elementos do array uma vez, realizando uma operação constante para cada elemento*/
function exemploOn(array) {
    const inicio = performance.now()
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    const fim = performance.now();

    const memoriaPilhaMb = (array.length*4) / (1024*1024)
    let memoriaTotalMb = "N/A";
    if(typeof process !== "undefined" && process.memoryUsage) {
        memoriaTotalMb = process.memoryUsage().heapUsed / 1024 / 1024
    }

    console.clear();
    console.log("--- Analise de complexidade interativa O(n) ---")
    console.log("Tamanho da entrada: ", array.length);
    console.log("Tempo de execução: ", fim - inicio, " ms");
    console.log("Memoria estimada da pilha de chamadas: ", memoriaPilhaMb, " mb");
    console.log("Memoria total usada pelo processo: ", 
        typeof memoriaTotalMb === "number" ? memoriaTotalMb.toFixed(6) + " mb" : memoriaTotalMb    
    );
}

//exemploOn(array);

/*
O (n log n)
*/

function exempleNlogN(array) {
    array.sort((a, b) => a - b)
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

//exempleNlogN(array)


// O(n^2)
function exempleN_2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}
//exempleN_2(array);

//O(2^n)
function exemple2_N(n) {
    if(n === 0) return 1
    return exemple2_N(n - 1) + exemple2_N(n - 1)
}

//fatorial recursivo
function factorial(n) {
    const inicio = performance.now()
    if(n === 0) return 1 // precisa ter uma saida, senão será um loop infinito
    
    const fim = performance.now()

    console.log("Tempo de execução: ", fim - inicio, " ms");
    return n * factorial(n-1);
}

// Recursividade é muito mais rápido do que uma estrutura de repetição comum

console.log(factorial(5));

function fatorialIterativo(n) {
    const inicio = performance.now()
    let resultado = 1;
    for(let i = n; i > 1 ; i--) {
        resultado = resultado * i;
    }
    console.log(resultado);
    const fim = performance.now()

    console.log("Tempo de execução: ", fim - inicio, " ms");
}

fatorialIterativo(5);