export default function mergeSort(vetor, fnComp) {
    if(vetor.length < 2) return vetor;

    let meio = Math.floor(vetor.length/2);

    let vetEsq = vetor.slice(0,meio);
    let vetDir = vetor.slice(meio);

    vetEsq = mergeSort(vetEsq, fnComp);
    vetDir = mergeSort(vetDir,fnComp);

    let posEsq = 0, posDir = 0, res = [];

    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        if(fnComp(vetEsq[posEsq], vetDir[posDir])) {
            res.push(vetEsq[posEsq])
            posEsq++;
        } 
        else{
            res.push(vetDir[posDir])
            posDir++
        }
    }

    let sobra;

    if(posEsq < posDir) {
        sobra = vetEsq.slice(posEsq)
    }
    else {
        sobra = vetDir.slice(posDir)
    }

    return [...res, ...sobra];
}