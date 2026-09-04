import readline from "readline"
import bubbleSort from "./bubble-sort.mjs"
import mergeSort from "./merge-sort.mjs";
import selectionSort from "./selection-sort.mjs";
//import alunos from "./alunos.mjs"

//Caso queira testar informando os dados por conta propria, basta comentar a linha 5 do import alunos e descomentar as linhas 14 e 62

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alunos = []

function pergunta(pergunta) {
    return new Promise((resposta) => {
        rl.question(pergunta,resposta)
    })
}

async function cadastrarAluno() {
    for(let i = 0; i < 10; i++) {
        const nome = await pergunta("Digite o nome do aluno: ");

        const ra = await pergunta("Digite o RA do aluno: ");

        const idade = Number(await pergunta("Digite a idade do aluno: "));

        const sexo = await pergunta("Digite o sexo do aluno: ");

        let media = Number(await pergunta("Digite a media do aluno: "));

        while(media < 0 || media > 10) {
            media = Number(await pergunta("A média tem que ser entre 0 e 10, digite novamente: "));
        }

        let resultado;
        
        if (media >= 6) {
            resultado = "Aprovado";
        } 
        else {
            resultado = "Reprovado"
        }

        alunos.push({
            nome,
            ra,
            idade,
            sexo,
            media,
            resultado
        });

    }

    console.log({alunos});

}

await cadastrarAluno();

let opcao = Number(await pergunta("Qual relarório você quer: \n1-Ordem Crescente por Nome\n2-Ordem decrescente por RA\n3-Ordem crescente por Nome, apenas dos aprovados: \n"));

while(opcao < 1 || opcao > 3) {
    opcao = Number( await pergunta("Escolha entre 1 e 3, apenas: \n1-Ordem Crescente por Nome\n2-Ordem decrescente por RA\n3-Ordem crescente por Nome, apenas dos aprovados: \n"));
}

let opcao2 = Number(await pergunta("Escolha qual método de ordenação gostaria:\n1 - Bubble Sort\n2- Merge Sort\n3- Selection Sort:\n"))
while(opcao2 < 1 || opcao2 > 3 ) {
    opcao2 = Number(await pergunta("Escolha entre 1 e 3, apenas:\n1 - Bubble Sort\n2- Merge Sort\n3- Selection Sort\n"))
}

let alunosOrdenado = alunos;
const alunosAprovados = alunos.filter(a => a.resultado === "Aprovado");
let alunosAprovadosOrdenado = alunosAprovados;
switch(opcao) {
    case 1: 
        if(opcao2 === 1) {
            bubbleSort(alunosOrdenado, (e1,e2) => e1.nome > e2.nome);
        }
        else if(opcao2 === 2) {
            alunosOrdenado = mergeSort(alunosOrdenado, (e1,e2) => e1.nome < e2.nome);
        }
        else {
            selectionSort(alunosOrdenado, (e1,e2) => e1.nome < e2.nome);
        }
        break;
    case 2:
        if(opcao2 === 1) {
            bubbleSort(alunosOrdenado, (e1,e2) => e1.ra < e2.ra);
        }
        else if(opcao2 === 2) {
            alunosOrdenado = mergeSort(alunosOrdenado, (e1,e2) => e1.ra > e2.ra);
        }
        else {
            selectionSort(alunosOrdenado, (e1,e2) => e1.ra > e2.ra);
        }
        break;
    case 3:
        if(opcao2 === 1) {
            bubbleSort(alunosAprovadosOrdenado, (e1,e2) => e1.nome > e2.nome);
        }
        else if(opcao2 === 2) {
            alunosAprovadosOrdenado = mergeSort(alunosAprovadosOrdenado, (e1,e2) => e1.nome < e2.nome);
        }
        else {
            selectionSort(alunosAprovadosOrdenado, (e1,e2) => e1.nome < e2.nome);
        }
        break;
  
}

if(opcao === 3) {
    console.log({alunosAprovadosOrdenado})
}
else {
    console.log({alunosOrdenado});
}

rl.close();




