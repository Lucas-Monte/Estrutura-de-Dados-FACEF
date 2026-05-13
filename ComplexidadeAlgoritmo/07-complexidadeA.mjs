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

exempleNlogN(array)
