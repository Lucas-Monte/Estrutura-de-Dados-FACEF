import Queue from "../lib/Queue.mjs";

let listaAtendimento = new Queue();

console.log(listaAtendimento.getOperationCount());

listaAtendimento.enqueue(1);
listaAtendimento.enqueue(6);
listaAtendimento.enqueue(5);
listaAtendimento.enqueue(9);
listaAtendimento.enqueue(4);
listaAtendimento.enqueue(0);

console.log(listaAtendimento.print())

listaAtendimento.dequeue(5);

console.log(listaAtendimento.print())

console.log(listaAtendimento.getOperationCount());