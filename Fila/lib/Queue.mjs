export default class Queue {

    #data; //vetor private

    constructor(){
        this.#data = [];
    }

    // metodo de inserção na fila
    enqueue(valor) {
        this.#data.push(valor);
    }

    //metodo de remoção da fila
    dequeue() {
        return this.#data.shift(); //shift remove da posição 0
    }

    //metodo para consultar o inicioda fila sem remover o elemento
    peek() {
        return this.#data[0];
    }

    get isEmpty() {
        return this.#data.length === 0;
    }

    //metodo para imprimir a fila (efeitos de depuração)
    print() {
        let output = "[ ";
        for(let i = 0; i < this.#data.length; i++) {
            if(output !== "{ ") {
                output += ", "
            }
            output += `(${i}): ${this.#data[1]}`;
        }
        
        return output + " ]";
    }

}