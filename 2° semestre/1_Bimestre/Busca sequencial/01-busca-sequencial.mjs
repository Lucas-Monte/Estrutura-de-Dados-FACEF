const frutas = ['laranja', 'maçã', 'uva', 'pera', 'limão', 'mamão', 'tangerina', 'jabuticaba']

const numeros = [5,7,1,3,2,9,15,23,12]


function buscasequencial(vetor, valorBusca) {
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] === valorBusca) {
            return i;
        }
    }

    return -1; //valorBusca não encontrado ou não existe no vetor
}

console.log(buscasequencial(frutas, "tangerina"))
console.log(buscasequencial(frutas, "uva"))
console.log(buscasequencial(frutas, "abacaxi"))
console.log(buscasequencial(numeros, 1))
console.log(buscasequencial(numeros, 50))