import Stack from "./Stack.mjs";
/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)x
    push(9)x
    pop()x
    push(3)x
    push(8)x
    pop()x
    pop()x
    push(6)x
    push()x
    push(2)x
    pop()x
    push(10)x
    push(1)x
    pop()x
    pop()x
    push(15)x
    pop()x
    pop()x
    
*/

let pilha = new Stack();

console.log(pilha.print());
pilha.push(5);

console.log(pilha.print());
pilha.push(9);

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());
pilha.push(3);

console.log(pilha.print());
pilha.push(8);

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());
pilha.push(6);

console.log(pilha.print());
pilha.push();

console.log(pilha.print());
pilha.push(2);

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());
pilha.push(10);

console.log(pilha.print());
pilha.push(1);

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());
pilha.push(15);

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());
pilha.pop();

console.log(pilha.print());

