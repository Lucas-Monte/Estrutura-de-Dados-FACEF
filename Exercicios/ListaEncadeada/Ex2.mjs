import LinkedList from "./Lib/LinkedList.mjs";

let lista = new LinkedList();

lista.insert(0, "Item1");
lista.insert(1, "Item2");
lista.insert(2, "Item3");
lista.insert(3, "Item4");
lista.insert(4, "Item5");
lista.insert(5, "Item6");
console.log(lista.print());

lista.reverse();

console.log(lista.print());