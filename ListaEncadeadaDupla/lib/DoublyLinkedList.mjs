class Node {
    constructor(valor) {
        this.prev = null;
        this.data = valor;
        this.next = null;
    }
}

export default class DoublyLinkedList {
    #head;
    #tail;
    #count;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty() {
        return this.#count === 0;
    }

    get count() {
        return this.#count;
    }

    //método PRIVADO que encontra um nodo por sua posição
    #findNode(pos) {
        let node;
        if(pos < this.#count / 2) {
            node = this.#head;
            for(let i = 0; i < pos; i++) node = node.next;
        } else {
            node = this.#tail;
            for(let i = this.#count - 1; i > pos; i--) node = node.prev;
        }
    }  
    
    insert(pos, valor) {
        let inserted = new node(valor);

        //1° caso: lista vazia;
        if(this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        }

        //2° caso: inserção na primeira posição (0)
        else if(pos === 0) {
            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#head = inserted;
        }

        //3° caso: inserção na ultima posição
        else if(pos >= this.#count) {
            this.#tail.next = inserted;
            inserted.prev = this.#tail;
            this.#tail = inserted;
        }

        //4° caso: inserção em posição intermediaria
        
    }
} 