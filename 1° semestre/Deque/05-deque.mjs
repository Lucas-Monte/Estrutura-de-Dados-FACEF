import Deque from "./lib/Deque.mjs";

let listaCompras = new Deque;
console.log("Está vazia? " + listaCompras.isEmpty);
console.log(listaCompras.print());

//produtos alimenticio -> inicio

listaCompras.insertFront("Banana");
listaCompras.insertFront("Carne");
listaCompras.insertFront("Chocolate");
listaCompras.insertFront("Macarrão");
listaCompras.insertFront("Arroz");
listaCompras.insertFront("Feijão");
listaCompras.insertFront("Molho de tomate");

console.log(listaCompras.print());


//produtos higiene e limpeza -> final
listaCompras.insertBack("Sabonete");
listaCompras.insertBack("Sabão em pó");
listaCompras.insertBack("Lisoform");
listaCompras.insertBack("Desodorante");
listaCompras.insertBack("Pasta de dente");

console.log(listaCompras.print());

listaCompras.insertFront("Café");
listaCompras.insertFront("Açucar");
listaCompras.insertBack("Agua Sanitária");
listaCompras.insertBack("Papel higiênico");

console.log(listaCompras.print());



