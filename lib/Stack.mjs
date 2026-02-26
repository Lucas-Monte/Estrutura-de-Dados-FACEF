// let pilha = [];

// pilha[0] = 8;
// pilha[1] = 5;
// pilha[2] = 4;
// pilha[3] = 10;

// console.log(pilha);

//usa classe para não deixar ir no em ordem diferente do normal, para não alterar a pilha, para não deixar de ser pilha. Só consigo usar os métodos que criei
//se remover no meio deixa de ser pilha, passa a ser outra estrutura
export default class Stack {
    #data // vetor privado

    constructor() {
        this.#data = [] // quando instanciar a primeira vez, começará vazio
    }

    //método de inserção no vetor
    push(valor) {
        this.#data.push(valor);
    }

    //método para remoção do valor
    pop() {
        return this.#data.pop();
    }

    //método para consultar o topo da pilha
    peek() {
        return this.#data[this.#data.length - 1];
    }

    get isEmpty() {
        return this.#data.length === 0;
    }

    print() {
        return JSON.stringify(this.#data); //pegando toda a pilha e convertendo em string
    }
}