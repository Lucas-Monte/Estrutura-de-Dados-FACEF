import Stack from "../lib/Stack.mjs";

let acoes = new Stack();

acoes.push("Teste");
acoes.push("Teste");
acoes.push("Teste");

console.log(acoes.print())

acoes.push("Teste");
acoes.push("Teste");

console.log(acoes.print())