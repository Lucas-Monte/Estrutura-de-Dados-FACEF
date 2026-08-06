import Stack from "../Pilha/Stack.mjs";

// Grafo Conexo e Acíclico (Árvore)
const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

// Grafo Conexo com Ciclo
const grafoComCiclo = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B", "E"], // Conexão extra D-E que fecha um ciclo
  E: ["B", "D"],
  F: ["C"]
};

const grafoDesconexo = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
  E: [] // Nó totalmente isolado
};

//implementação da busca profundidade (DFS)
function dfs(grafo, inicio) {
  const visitados = new Set();

  //cria uma nova instância da Pilha (LIB)
  const pilha = new Stack();

  pilha.push({inicio});

  while (!pilha.isEmpty) {
    const no = pilha.pop();

    if (!visitados.has(no)) {
      console.log(no);
      visitados.add(no);

      //guarda o vetor de vizinhos do nó atual em uma variável para facilitar o acesso por índice
      const vizinho = grafo[no];

      //Faz um laço FOR decrescente (começa na última posição e vai até a posição 0)
      //Issso server para colocar o primeiro vizinho no topo da pilha por último (LIFO)
      for (let i = vizinho.length - 1; i >= 0; i--) {
        //checa se o zinho daquela posição específica (i) ainda não foi visitado
        if (!visitados.has(vizinho[i])) {
          //empilha o vizinho na estrutura para que ele seja o próximo a ser explorado
          pilha.push(vizinho[i]);
        }
      }
    }
  }
}

//dfs(grafo, "A");

function detectarCiclo(grafo, inicio) {
  const visitados = new Set();
  const pilha = new Stack();
  pilha.push({no: inicio, pai: null});
  while (!pilha.isEmpty) {
    const {no, pai} = pilha.pop();
    if (!visitados.has(no)) {
      visitados.add(no);
      const vizinho = grafo[no];
      for (let i = vizinho.length - 1; i >= 0; i--) {

        if (visitados.has(vizinho[i]) && vizinho[i] !== pai) {
          return true;
        }
        
        if (!visitados.has(vizinho[i])) {
          pilha.push({no: vizinho[i], pai: no});
        }
        
        
      }
    }
  }
  return false;
}


console.log("\n--- TESTANDO EXERCÍCIO 2 (DFS - Ciclo) ---");
console.log("Grafo Árvore tem ciclo?", detectarCiclo(grafoArvore, "A")); // Saída esperada: false
console.log("Grafo com Ciclo tem ciclo?", detectarCiclo(grafoComCiclo, "A")); // Saída esperada: true

function contarComponentesConexos(grafo) {
  const visitados = new Set();

  //cria uma nova instância da Pilha (LIB)
  const pilha = new Stack();
  let componentesConexos = 0;

  for(const elemento of Object.keys(grafo)){
    if (!visitados.has(elemento)) {
      componentesConexos++;
      pilha.push(elemento);
    }
    
    while (!pilha.isEmpty) {
      const no = pilha.pop();
      if (!visitados.has(no)) {
        
        visitados.add(no);

        //guarda o vetor de vizinhos do nó atual em uma variável para facilitar o acesso por índice
        const vizinho = grafo[no];

        //Faz um laço FOR decrescente (começa na última posição e vai até a posição 0)
        //Issso server para colocar o primeiro vizinho no topo da pilha por último (LIFO)
        for (let i = vizinho.length - 1; i >= 0; i--) {
          //checa se o zinho daquela posição específica (i) ainda não foi visitado
          if (!visitados.has(vizinho[i])) {
            //empilha o vizinho na estrutura para que ele seja o próximo a ser explorado
            pilha.push(vizinho[i]);
          }
        }
      }
    }
  }
  return componentesConexos;
}


console.log("\n--- TESTANDO EXERCÍCIO 3 (Componentes Conexos) ---");
console.log("Qtd Componentes grafoArvore:", contarComponentesConexos(grafoArvore)); // Saída esperada: 1
console.log("Qtd Componentes grafoDesconexo:", contarComponentesConexos(grafoDesconexo)); // Saída esperada: 3