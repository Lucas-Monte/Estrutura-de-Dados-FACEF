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

        //2° caso: inserção na primeira posição
        else if (posicao === 0) {
            inserted.next = this.#head;
            this.#head = inserted;
        }

        //3° caso: inserção no final da lista
        else if(posicao >= this.#count) {
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        //4° caso: inserção no meio da lista/ intermediária
        else {
            let before = this.#head; //criando uma variavel para poder percorrer pelo next

            for(let i = 1; i < posicao /*preciso saber quem é o anterior de quem quero colocar*/; i++) {
                before = before.next;
            }

            let after = before.next;

            inserted.next = after;
            before.next = inserted;
        }

        
        
        this.#count ++;
    }

    //método para inserção na primeira posição (atalho)
    insertHead(valor) {
        this.insert(0, valor);
            
    }

    //método para inserção na ultima posição (atalho)
    insertTail(valor) {
        this.insert(this.#count, valor);
    }

    //método para remoção de um nodo na lista
    remove(posicao) {
        //1° caso: a lista esta vazia ou a posição informada esta fora dos limites da lista
        if(this.isEmpty || posicao < 0 || posicao > this.#count - 1) {
            return undefined;
        }

        let removed;

        // 2° caso: remoção no inicio da lista (head)
        if(posicao === 0) {
            
        }
    }


}