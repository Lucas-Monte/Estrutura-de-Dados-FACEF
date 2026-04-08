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
        else {
            let nodePos = this.#findNode(pos);
            let before = nodePos.prev;

            before.next = inserted;

            inserted.prev = before;

            inserted.next = nodePos;

            nodePos.prev = inserted;
        }

        this.#count ++;
    }

    insertHead(val) {
        this.insert(0, val);
    }

    insertTail(val){
        this.insert(this.#count, val);
    }

    //metodo para remover um nodo de qualquer posição
    remove(pos) {
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined;

        let removed;

        //2° caso: remoção do primeiro nodo
        if(pos === 0) {
            removed = this.#head;
            this.#head = removed.next;
            if(this.#head) {
                this.#head.prev = null;
            }
            if(this.count === 1) {
                this.#tail = null;
            }

            //3³ caso: remoçãodo ultimo nodo
            else if(pos === this.#count - 1) {
                removed = this.#tail;
                this.#tail = removed.prev;

                if(this.#tail) this.#tail.next = null;

                if(this.#count === 1) this.#head = null;
            }

            //4° caso: remoção em posição intermediaria
            else {
                removed = this.#findNode(pos);
                let before = removed.prev;
                let after = removed.next;

                before.next = after;
                after.prev = before;
            }

            this.#count --
            
            return removed.data;
        }

        
    }

    removeHead() {
        return this.remove(0);
    }

    removeTail() {
        return this.remove(this.#count -1);
    }

    peek(pos) {
        
    }
} 