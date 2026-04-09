import DoublyLinkedList from "./lib/DoublyLinkedList.mjs";

let lista = new DoublyLinkedList();

console.log("A lista esta vazia?" , lista.isEmpty ? "Sim" : "Não");

console.log(lista.print());

lista.insert(0, "Fiat 147");

console.log("A lista esta vazia?" , lista.isEmpty ? "Sim" : "Não");

console.log(lista.print());

lista.insert(0, "Fusca");

console.log(lista.print());

lista.insert(3, "Brasilia");

console.log(lista.print());

lista.insert(2, "Chevete");

console.log(lista.print());

lista.insertHead("Passat");

console.log(lista.print());

let removido = lista.remove(4);
console.log({removido}, lista.print());

let pos0 = lista.peek(0);
let pos3 = lista.peek(3);
console.log({pos0, pos3});

let posFusca = lista.indexOf("Fusca");
let posPassat = lista.indexOf("Passat");
console.log({posFusca, posPassat})