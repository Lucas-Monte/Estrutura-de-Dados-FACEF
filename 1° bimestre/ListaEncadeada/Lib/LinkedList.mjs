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
  remove(pos) {
    //1º caso: a lista está vazia ou a posição informada está fora dos limites da lista
    if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
      return undefined;
    }

    let removed;

    //2º caso: remoção do início da lista
    if (pos === 0) {
      removed = this.#head;

      this.#head = this.#head.next;

      if (this.#count === 1) {
        this.#tail = null;
      }
    }

    //3º caso: remoção de nodo intermediário ou final
    else {
      let before = this.#head;

      for (let i = 1; i < pos; i++) {
        before = before.next;
      }
      removed = before.next;
      let after = removed.next;

      before.next = after;
      if (pos === this.#count - 1) {
        this.#tail = before;
      }
    }
    this.#count--;
    return removed.data
  }

  removeHead(){
    return this.remove(0)
  }

  removeTail(){
    return this.remove(this.#count - 1)
  }

  indexOf(val){
    //1º caso: lista vazia
    if(this.isEmpty) {
      return -1
    }

    let node = this.#head

    for(let i = 0; i < this.#count; i++){
      if(node.data === val){
        return i
      }
      node = node.next
    }
    return -1
  }

  //Método que retorna (sem remover) um nodo da lista, de acordo com a sua posição
  peek(pos) {
    //1° caso: Lista vazia ou posição fora dos limites
    if(this.isEmpty || pos < 0 || pos > this.#count - 1) {
        return undefined;
    }

    //2° caso: busca sequencial
    let node = this.#head;

    for(let i = 0; i < pos; i++) {
        node = node.next;
    }

    return node.data;
  }

  peekHead() {
    return this.peek(0);
  }

  peekTail() {
    return this.peek(this.#count - 1);
  }

  //metodo para exibição da lista encadeada
  print() {
    let output = '( ';
    let node = this.#head;
    for(let i = 0; i < this.#count; i++) {
        if(output !== '( '){
            output += ', '
        }
        output += `[${i}]: ${node.data}`
        node = node.next;
    }
    output += ` ), count: ${this.#count}`;
    return output;
  }


}