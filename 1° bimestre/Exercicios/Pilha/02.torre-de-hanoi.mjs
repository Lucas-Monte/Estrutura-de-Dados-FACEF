/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import StackTorre from "./StackTorre.mjs";

let pilhaA = new StackTorre;
let pilhaB = new StackTorre;
let pilhaC = new StackTorre;

pilhaB.iniciarJogo();

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaC);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaA);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaC.moverDisco(pilhaA);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaC);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaA.moverDisco(pilhaB);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaA.moverDisco(pilhaC);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaC);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaA);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaC.moverDisco(pilhaB);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaC.moverDisco(pilhaA);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaC);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaA.moverDisco(pilhaB);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaC.moverDisco(pilhaB);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaC.moverDisco(pilhaA);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaC);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaB.moverDisco(pilhaA);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");

pilhaC.moverDisco(pilhaA);

console.log(pilhaA.print());
console.log(pilhaB.print());
console.log(pilhaC.print() + "\n");