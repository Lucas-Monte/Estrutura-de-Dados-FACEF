export default function selectionSort(vetor, fnComp) {
    for(let i = 0; i < vetor.length - 1; i++) {
        let menorPosicao = i+1;

        for(let j = menorPosicao+1; j < vetor.length; j++) {
            if(fnComp(vetor[j], vetor[menorPosicao])) {
                menorPosicao = j
            }
        }

        if(fnComp(vetor[menorPosicao], vetor[i])) {
            [vetor[i], vetor[menorPosicao]] = [vetor[menorPosicao], vetor[i]]
        }
    }
}