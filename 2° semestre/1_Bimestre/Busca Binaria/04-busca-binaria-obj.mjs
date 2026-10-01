import {objNomes} from "../Data/vetor-obj-nomes.mjs"

function buscaBinariaObjeto(vetor, fnComp) {
    let inicio = 0;
    let fim = vetor.length - 1;
    while(fim >= inicio) {
        let meio = Math.floor((inicio+fim)/2); //traz o inteiro da divisão

        switch(fnComp(vetor[meio])){
            case 0:
                return meio;
                
            case 1:
                inicio = meio + 1;
                break;

            default:
                fim = meio - 1;
        }

    }
    
    return -1
}

function compararValor(valorMeio, valorBusca = "LUCAS") {
  if(valorBusca === valorMeio.first_name) return 0
  else if(valorBusca > valorMeio.first_name) return 1
  else return -1
}
console.log(buscaBinariaObjeto(objNomes, compararValor))