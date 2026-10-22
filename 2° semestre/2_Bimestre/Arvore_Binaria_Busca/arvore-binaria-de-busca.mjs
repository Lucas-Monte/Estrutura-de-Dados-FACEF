import BinarySearchTree from "./Arvore_Binaria_Busca/BinarySearchTree.mjs";

const arvore = new BinarySearchTree();

arvore.insert(48);
arvore.insert(71);
arvore.insert(15);
arvore.insert(29);
arvore.insert(57);
arvore.insert(1);
arvore.insert(80);
arvore.insert(13);
arvore.insert(19);
arvore.insert(37);
arvore.insert(23);
arvore.insert(22);
arvore.insert(25);
arvore.insert(51);
arvore.insert(64);

let percurso = [];
arvore.inOrderTraversal(val => percurso.push(val));
console.log(percurso);

percurso = [];
arvore.preOrderTraversal(val => percurso.push(val));
console.log(percurso);

percurso = [];
arvore.postOrderTraversal(val => percurso.push(val));
console.log(percurso);

//Teste de remoção
percurso = [];
arvore.inOrderTraversal(val => percurso.push(val));
console.log("Antes da remoção " + percurso);

//Remoção de um nodo de grau 0
arvore.remove(64);
percurso = [];
arvore.inOrderTraversal(val => percurso.push(val));
console.log("Depois da remoção " + percurso);

//Remoção de um nodo de grau 1
arvore.remove(1);
percurso = [];
arvore.inOrderTraversal(val => percurso.push(val));
console.log("Depois da remoção " + percurso);

//Remoção de um nodo de grau 2
arvore.remove(15);
percurso = [];
arvore.inOrderTraversal(val => percurso.push(val));
console.log("Depois da remoção " + percurso);

//TESTE DE BUSCA
const ex13 = arvore.search(13);
const ex22 = arvore.search(22);
const ex40 = arvore.search(40);
const ex57 = arvore.search(57);

console.log({ex13, ex22, ex40, ex57})