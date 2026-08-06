// 1 - 1.000.000 × 10.000 = 10.000.000.000 posições
// 10.000.000.000 × 4 = 40.000.000.000 bytes
// 40.000.000.000 ÷ 1024 ÷ 1024 ÷ 1024
// ≈ 37,25 GB
// Seriam necessários aproximadamente 37,25 GB para armazenar a matriz no formato denso.


// 2 - 1.000.000 × 100 = 100.000.000 registros
// São 3 números de 4 bytes cada:
// 3 × 4 = 12 bytes por registro
// 100.000.000 × 12 = 1.200.000.000 bytes
// 1.200.000.000 ÷ 1024 ÷ 1024 ÷ 1024
// ≈ 1,12 GB
// Seriam necessários aproximadamente 1,12 GB para armazenar a matriz no formato esparso (COO).

// 3 - ((37,25 - 1,12) / 37,25) × 100 ≈ 96,99%
// A economia real de memória é de aproximadamente 97%.

function multiplicarRecomendacao(matrizEsparsa, pesos) {
    const resultado = new Array(5).fill(0);
    for(let i = 0; i < matrizEsparsa.length; i++) {
        resultado[matrizEsparsa[i].linha] += matrizEsparsa[i].valor * pesos[matrizEsparsa[i].coluna]
    }

    return resultado;
}

const avaliacoes = [
    { linha: 0, coluna: 1, valor: 5 },
    { linha: 1, coluna: 3, valor: 2 },
    { linha: 3, coluna: 0, valor: 4 }
];

const pesos = [10, 20, 30, 40, 50];

console.log("Seu resultado: ", multiplicarRecomendacao(avaliacoes, pesos));

/*
Este algoritmo é mais rápido porque percorre apenas os valores existentes
na matriz esparsa, evitando processar os zeros. Isso reduz a quantidade de
iterações, memória utilizada e tempo de execução.
*/