import Deque from "../lib/Deque.mjs";

let carrinho = new Deque;

carrinho.insertBack("Banana");
carrinho.insertBack("Leite");
carrinho.insertFront("Sabão em pó");

console.log(carrinho.print())

carrinho.insertBack("Sabão em pó");

console.log(carrinho.print())