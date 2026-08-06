import LinkedList from "./Lib/LinkedList.mjs";

let lista = new LinkedList();

lista.insert(0, "Item1");
lista.insert(1, "Item2");
lista.insert(2, "Item3");
lista.insert(3, "Item3");
lista.insert(4, "Item3");
lista.insert(5, "Item3");
console.log(lista.print());
console.log(lista.history());

console.log("Ocorrências de Item3: " + lista.countOccurrences("Item3"));

lista.removeAll("Item5");
console.log(lista.print());

let listaArray = lista.toArray();

console.log(listaArray);