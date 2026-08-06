export default class StackTorre {
    #data;

    constructor () {
        this.#data = [];
    }

    push(valor) {
        this.#data.push(valor);
    }

    pop() {
        return this.#data.pop();
    }

    peek() {
        return this.#data[this.#data.length - 1]
    }

    print() {
        return JSON.stringify(this.#data);
    }

    get isEmpty() {
        return this.#data.length === 0;
    }

    moverDisco(torreEscolhida) {
        if(torreEscolhida.peek() < this.peek() || torreEscolhida.isEmpty) {
            return torreEscolhida.push(this.#data.pop());
        } else {
            throw new Error("Não é possível adicionar um bloco maior em cima de um menor!")
        }
        
    }

    iniciarJogo() {
        this.#data = [];
        this.#data.push(1);
        this.#data.push(2);
        this.#data.push(3);
        this.#data.push(4);
        return this.#data;
    }
}