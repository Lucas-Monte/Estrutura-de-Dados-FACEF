import { objMotoristas } from "../../Data/motoristas-obj-desord.mjs"

function mergeSortObj(vetor, fnComp) {
    if(vetor.length < 2) return vetor;
    let meio = Math.floor(vetor.length/2);

    let vetEsq = vetor.slice(0, meio);
    let vetDir = vetor.slice(meio);

    vetEsq = mergeSortObj(vetEsq, fnComp);
    vetDir = mergeSortObj(vetDir, fnComp);

    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];

    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        if(fnComp(vetEsq[posEsq], vetDir[posDir])) {
            vetRes.push(vetEsq[posEsq])
            posEsq++;
        } else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }

    let sobra;
    if(posEsq < posDir) {
        sobra = vetEsq.slice(posEsq)
    } else{
        sobra = vetDir.slice(posDir)
    }

    return [...vetRes, ...sobra]
}

let merge = mergeSortObj(objMotoristas, (e1, e2) => e1.nome_motorista < e2.nome_motorista);
console.log(merge)