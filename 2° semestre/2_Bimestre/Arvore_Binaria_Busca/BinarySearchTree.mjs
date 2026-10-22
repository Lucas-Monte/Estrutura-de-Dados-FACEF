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
            return
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

    preOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            fnCallback(root.data);
            this.preOrderTraversal(fnCallback, root.left);
            this.preOrderTraversal(fnCallback, root.right);
        }
    }

    postOrderTraversal(fnCallback, root = this.#root) {
        this.postOrderTraversal(fnCallback, root.left);
        this.postOrderTraversal(fnCallback, root.right);
        fnCallback(root.data);
    }



    #minNode(root) {
        while((root!==null) && (root.left !== null)) {
            root = root.left
        }
        return root;
    }


    #maxNode(root) {
        while((root!==null) && (root.right !== null)) {
            root = root.right
        }
        return root;
    }

    //Método publico para excluir um valor da arvore

    remove(val) {
        this.#root = this.#removeNode(this.#root, val);
    }

    //Método privado para excluir um valor da arvore
    #removeNode(root, val) {
        //1°caso: arvore vazia
        if(root === null) return null;

        //2° caso: o valor a ser excluido é menor que o valor da raiz
        //Continua recrusivamente o processo de exclusão pela subarvore esquerda
        if(val < root.data) {
            root.left = this.#removeNode(root.left, val);
        }

        //3° caso: o valor a ser excluido é maior que o valor da raiz
        //Continua recrusivamente o processo de exclusão pela subarvore direita

        if(val > root.data) {
            root.right = this.#removeNode(root.right, val);
        }

        //4° caso: o valor a ser excluido é igual ao valor da raiz (olhar para o grau)
        //4.1: nodo de grau 0 (nodo folha)
        if(root.left === null && root.right === null) {
            root == null;
            return root;
        }

        //4.2: nodo de grau 1 (com subarvore a esquerda)
        if(root.left !== null && root.right === null) {
            root = root.left
            return root;
        }

        //4.3: nodo de grau 1 (com subarvore a direita)
        if(root.right !== null && root.left === null) {
            root = root.right
            return root;
        }

        //4.4: nodo de grau 2
        //precisamos encontrar:
        //1) o nodo de maior valor da subarvore esquerda; ou
        //2) o nodo de menor valor da subarvore direita
        const newRoot = this.#minNode(root.right);
        root.data = newRoot.data;
        //Excluindo o valor que ficou
        root.right = this.#removeNode(root.right, newRoot.data);
        return root;
    }

    //Metodo publico que busca por um valor dentro da arvore
    //retorna true caso o valor exista e false caso não exista

    search(val) {
        const node = this.#searchNode(this.#root, val)
        return node !== null;
    }

    #searchNode(root, val) {
        //1°caso: arvore vazia
        if(root === null) return null;

        //2°caso: o valor procurado é menor
        if(val < root.data) return this.#searchNode(root.left, val);

        //3°caso: o valor procurado é maior
        if(val > root.data) return this.#searchNode(root.right, val);

        //4°caso: o valor é igual
        return root;
    }

}