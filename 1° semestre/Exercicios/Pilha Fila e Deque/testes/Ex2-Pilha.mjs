import Stack from "../lib/Stack.mjs";

let lista = new Stack;

lista.push(1);
lista.push(2);
lista.push(5);
lista.push(3);

lista.pop();
lista.pop();

console.log(lista.showHistory())