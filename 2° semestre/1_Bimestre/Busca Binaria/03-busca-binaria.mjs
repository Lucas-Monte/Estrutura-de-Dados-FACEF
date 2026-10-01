function buscaBinaria(vetor, valorBusca) {
    let inicio = 0;
    let fim = vetor.length - 1;
    while(fim >= inicio) {
        let meio = Math.floor((inicio+fim)/2); //traz o inteiro da divisão

        if(vetor[meio] === valorBusca) {
            return meio;
        } else if(vetor[meio] < valorBusca) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }

    }
    
    return -1
}

let nums = [0,11,22,33,44,55,66,77,88,99];

//console.log(buscaBinaria(nums, 66))

import {nomes} from "../Data/vetor-nomes.mjs"

//console.log(buscaBinaria(nomes, "LUCAS"))

