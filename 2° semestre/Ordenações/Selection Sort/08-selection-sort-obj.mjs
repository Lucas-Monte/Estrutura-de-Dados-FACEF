import {objMotoristas} from "../../Data/motoristas-obj-desord.mjs"
let pass, comps, trocas;
function selectionSort(vetor, fnComp) {

    pass = 0, comps = 0, trocas = 0;
    for(let i = 0; i < vetor.length -1; i++) {
        pass++;
        let posMenor = i+1;
        for(let j = posMenor+1; j < vetor.length; j++) {
            comps++
            if(fnComp(vetor[posMenor], vetor[j])) {
                posMenor = j;
            }
        }

        if(fnComp(vetor[i], vetor[posMenor])) {
            trocas++
            [vetor[i], vetor[posMenor]] = [vetor[posMenor], vetor[i]]
        }
    }
}

selectionSort(objMotoristas, (e1, e2) => e1.nome_motorista > e2.nome_motorista)

console.log(objMotoristas)
console.log({pass, comps, trocas})


