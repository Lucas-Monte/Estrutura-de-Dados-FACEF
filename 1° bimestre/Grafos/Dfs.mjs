import Stack from "../Pilha/lib/Stack.mjs"

const grafro = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
}

function dfs(grafo, inicio) {
    //O Set é uma estrutura de dados nativa do JSn (como array), mas com duas regras:
    //Não permite elementos duplicados
    //Busca instantânea com o método .has()
    const visitados = new Set();

    const pilha = new Stack();

    pilha.push(inicio);

    while(!pilha.isEmpty){
        const no = pilha.pop();

        if(!visitados.has(no)) {
            console.log(no)
            visitados.add(no);

            const vizinhos = grafo[no];

            for(let i = vizinhos.length - 1; i >= 0; i--) {
                if(!visitados.has(vizinhos[i]));
                pilha.push(vizinhos[i])
            }
        }    
    }
}

dfs(grafro, "A");