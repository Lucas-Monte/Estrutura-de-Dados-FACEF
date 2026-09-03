function mergeSort(vetor) {
    //condição de saida
    if(vetor.length < 2) {
        return vetor;
    }

    let meio = Math.floor(vetor.length/2);

    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    vetEsq = mergeSort(vetEsq);
    vetDir = mergeSort(vetDir);

    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];
    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        if(vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq]);
            posEsq++;
        } else {
            vetRes.push(vetDir[posDir])
            posDir++;
        }
    }

    let sobra;
    if(posEsq < posDir) {
        sobra = vetEsq.slice(posEsq);
    } else {
        sobra = vetDir.slice(posDir);
    }


    return [...vetRes, ...sobra];
}

let num = [77,44,22,33,99,55,88,0,66,11]
let num2 = [5,7,9,2,1,10,11]

let numsOrdenado = mergeSort(num)
console.log(numsOrdenado);

let num2Ordenado = mergeSort(num2)
console.log(num2Ordenado);