function selectionSort(vetor) {
    for(let i = 0; i < vetor.length-1; i++) {
        let posicaoMenor = i+1;
        
        for(let j = posicaoMenor+1; j < vetor.length; j++) {
            if(vetor[j] < vetor[posicaoMenor]) {
                posicaoMenor = j;
            }
        }
        if(vetor[posicaoMenor] < vetor[i]) {
            [vetor[i], vetor[posicaoMenor]] = [vetor[posicaoMenor], vetor[i]]
        }
    }
}

// let nums = [77,44,22,33,99,55,88,0,66,11]
// selectionSort(nums)

// console.log(nums)

import {nomes} from "../../Data/nomes-desord.mjs"

selectionSort(nomes);

console.log(nomes)