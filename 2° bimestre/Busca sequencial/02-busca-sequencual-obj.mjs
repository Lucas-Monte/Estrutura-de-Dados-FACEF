import {objNomes} from "./vetor-obj-nomes.mjs"


function buscaSequencial(vetor, fnComp) {
    for(let i = 0; i < vetor.length; i++) {
        if(fnComp(vetor[i])) return i
    }
}

function compararNome(obj) {
    return obj.first_name === "PAULINHO"
}


console.log(buscaSequencial(objNomes, compararNome)) 