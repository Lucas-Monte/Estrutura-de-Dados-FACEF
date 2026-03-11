class Node {
    constructor(valor) {
        this.data = valor;
        this.next = null;
    }
}

export default class LinkedList {
    #head //inicio da lista
    #tail //final da lista
    #count //quantidade de nós/nodos da lista

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }


    //getter que retorna se a lista esta vazia ou nao
    get isEmpty(){
        return this.#count === 0;
    }

    //getter que retorna a quantidade de elementos da lista
    get count() {
        return this.#count;
    }

    //Método para inserção na lista em qualquer posição
    insert(posicao, valor){
        //cria o nó/nodo para armazenar o valor pretendido
        const inserted = new Node(valor);

        //1° caso: Lista esta vazia
        if(this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }

        this.#count ++;
    }
}