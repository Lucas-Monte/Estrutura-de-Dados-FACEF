import {objMotoristas} from "../../Data/motoristas-obj-desord.mjs"

let pass = 0;
let comps = 0;
let trocas = 0;
function bubbleSort(vetor, fnComp) {
   
    let swap;

    do {
        pass++;
        swap = false;

        for(let i = 0; i < vetor.length - 1; i++) {
            comps ++;
            if(fnComp(vetor[i], vetor[i+1])) {
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                swap = true;
                trocas++
            }
        }
    } while(swap)
}


bubbleSort(objMotoristas, (elemento1, elemento2) => elemento1.nome_motorista > elemento2.nome_motorista)
console.log(objMotoristas)
console.log({pass, comps, trocas})
