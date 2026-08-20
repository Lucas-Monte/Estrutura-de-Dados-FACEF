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
    vetRes = [];
    while(posEsq < vetEsq.length && posDir < vetDir.length7) {
        if(vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq]);
            posEsq++;
        }
    }
}

let num = [77,44,22,33,99,55,88,0,66,11]
let num2 = [5,7,9,2,1,10,11]