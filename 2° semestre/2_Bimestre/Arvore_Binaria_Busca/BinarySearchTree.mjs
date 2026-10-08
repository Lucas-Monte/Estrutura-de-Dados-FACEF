//Classe que representa a unidade de informação da arvore binaria de busca

class Node{
    constructor(val) {
        this.data = val; //armazena a informação relevante para o user
        this.left = null; //Ponteiro para sub-arvore esquerda
        this.right = null; //Ponteiro para sub-arvore direita
    }
}

export default class BinarySearchTree {
    #root;
    constructor() {
        this.#root = null;
    }

    //método para efetuar inserção no ABB
    insert(val) {

        const inserted = new Node(val);

        //1°caso: arvore vazia
        //o primeiro nodo é o root, a raiz

        if(this.#root === null) {
            this.#root = inserted;
        }
        //2°caso: inserção recursiva, percorrendo a arvore toda
        else{
            this.#insertNode(inserted, this.#root);
        }
        
    }
    //método privado que insere um novo nó na arvore
        
    #insertNode(inserted, root) {
        //1° CASO: o valor a ser inserido é menor que o valor da raiz
        //inserção para a esquerda
        if(inserted.data < root.data) {
            //se a posição a esquerda da raiz está desocupada, faz a inserção
            if(root.left === null) {
                root.left = inserted;
            }
            //senão,reinicia o processo de inserçã, recursivamente, com a sub-arvore esquerda como raiz
            else {
                this.#insertNode(inserted, root.left);
            }
        } 
        else if (inserted.data > root.data) {
            // if(root.right === null) {
            //     root.right = inserted;
            // }
            // else {
            //     this.#insertNode(inserted,root.right);
            // }
            root.right === null ? root.right = inserted : this.#insertNode(inserted, root.right);
        }
        else {
            this.#insertNode(inserted, root.left);
        }
    }

    //PERCURSOS 
    //método que executa o percurso em ordem(in-order traversal) na arvore
    //Ordem do percurso
    //1 °-> esquerda, raiz, direita. Percorre recursivamente a subarvore esquerda
    //2° -> visita a raiz
    //3° -> percorre recursivamente a subarvore direita

    inOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.inOrderTraversal(fnCallback, root.left); //1°
            fnCallback(root.data); //2°
            this.inOrderTraversal(fnCallback, root.right); //3°
        }
    }
}