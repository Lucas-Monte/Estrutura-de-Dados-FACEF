export default class Deque {
    #data;

    constructor() {
        this.#data = [];
    }

    //método para inserir dados no inicio da estrutura
    insertFront(valor) {
        this.#data.unshift(valor);
    }

    //método para inserir dados no fim da estrutura
    insertBack(valor) {
        this.#data.push(valor);
    }

    //método para remover dados no inicio da estrutura
    removeFront() {
        return this.#data.shift();
    }

    //método para remover dados no fim da estrutura
    removeBack() {
        return this.#data.pop();
    }

    //método para consultar o inicio da estrutura
    peekFront(){
        return this.#data[0];
    }

    //método para consultar o final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1];
    }

    get isEmpty() {
        return this.#data.length === 0 ? "Sim, está vazia" : "Não está vazia";
    }

    //metodo para imprimir (efeitos de depuração)
    print() {
        let output = "[ ";
        for(let i = 0; i < this.#data.length; i++) {
            if(output !== "[ ") {
                output += ", "
            }
            output += `(${i+1}°): ${this.#data[i]}`;
        }
        
        return output + " ]";
    }


}