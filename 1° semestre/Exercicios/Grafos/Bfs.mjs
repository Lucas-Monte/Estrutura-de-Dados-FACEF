import Queue from "../Fila/Queue.mjs"

const grafoArvore = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B"],
  F: ["C"]
};

// implementação da busca em largura (BFS)

function bfs(grafo, inicio){

    //O set é uma estrutura de dados nativa do JS (como se fosse um array), mas com duas regras:
    //Não permite elementos duplicados: Se você tentar adicionar o valor "A" 3 vezes, ele guarda apenas uma.
    //Busca instantânea: o método .has() desconbre se um elemento está lá desntro muito mais rápido do que fazer um indexOf ou includes
    const visitados = new Set();

    //Cria uma nova instância da fila em LIB
    const fila = new Queue();

    //insere o nó de partida (nó inicial) no final da fila
    fila.enqueue(inicio)

    //criar um laço que vai rodar enquanto a fila NÃO estiver vazia 
    while(!fila.isEmpty){
        // remove o primeiro elemento da fila (o mais antigo) e guarda na variável 'no'
        const no = fila.dequeue()

        //o método .has() checa se o nó atula NÂO (!) está dentro do concjunto de visitados
        if(!visitados.has(no)){
            
            //imprime o nó no console
            console.log(no)

            // método de adicionar o nó atual no conjunto para marcar que ele já foi processado
            visitados.add(no)
            
            //percorre cada um dos vizinhos do nó atual da lista de adjacência do grafo
            for (const vizinho of grafo[no]){
                //checa se o vizinho em questão ainda não foi visitado
                if(!visitados.has(vizinho)){
                    //se não foi visitado, coloca esse vizinho no final da fila para ser processado depois
                    fila.enqueue(vizinho)
                }
            }
        }
    }
}

//bfs(grafo, "A")

function obterDistanciasEBFS(grafo, inicio) {
    const distancia = {};
    const caminho = {};
    const visitados = new Set();
    const fila = new Queue();
    distancia[inicio] = 0;
    caminho[inicio] = [inicio];
    fila.enqueue(inicio);
    while(!fila.isEmpty) {
        const no = fila.dequeue();
        if(!visitados.has(no)){
            visitados.add(no);
            for(const vizinho of grafo[no]) {
                if(!visitados.has(vizinho)) {
                    distancia[vizinho] = distancia[no] + 1;
                    caminho[vizinho] = [...caminho[no], vizinho];
                    fila.enqueue(vizinho)
                
                }
            }
        }
    }
    return {distancia, caminho}
}

console.log(obterDistanciasEBFS(grafoArvore, "A"));