import LinkedList from "./Lib/LinkedList.mjs";

let lista = new LinkedList();

lista.insert(0, "Item1");
lista.insert(1, "Item2");
lista.insert(2, "Item3");
console.log(lista.print());
console.log(lista.history());

lista.remove(1);

console.log(lista.print());
console.log(lista.history());