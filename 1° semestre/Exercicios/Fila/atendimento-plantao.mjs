/*
    1. O Professor Alexandre estava com febre e decidiu ir ao plantão médico.
    Quando ele chegou, havia 10 (dez) pessoas na sua frente:
    José, Sérgio, Joaquim, Maria, João, Samuel, Vicente, Terezinha, Firmino e Toninho
    
    2. Para que as pessoas sejam atendidas de forma correta e por ordem de chegada, como uma fila,
    o primeiro passo é importar a classe apropriada da pasta "lib" e depois criar o nosso "objeto" atendimento.
*/

import Queue from "./Queue.mjs";

let fila = new Queue();

/*
    3. Utilizando os conceitos e os arquivos de "FILA" feitos em sala, faça com que essa fila esteja na sequência a seguir
    para que o atendimento do plantão possa começar:
    
    1. José
    2. Sérgio
    3. Joaquim
    4. Maria
    5. João
    6. Samuel
    7. Vicente
    8. Terezinha
    9. Firmino
    10. Toninho
    11. Alexandre
*/

fila.enqueue("José");
fila.enqueue("Sérgio");
fila.enqueue("Joaquim");
fila.enqueue("Maria");
fila.enqueue("João");
fila.enqueue("Samuel");
fila.enqueue("Vicente");
fila.enqueue("Terezinha");
fila.enqueue("Firmino");
fila.enqueue("Toninho");
fila.enqueue("Alexandre");

/*
    4. Imprima a fila na ordem correta (Utilize o comando correto).
*/

console.log(fila.print());

/*
    5. O médico pediu ao atendente que chamasse a pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/

let atendida = fila.dequeue();

/*
    6. Mostre a pessoa que foi atendida e logo em seguida Imprima como ficou a fila depois do atendimento (Utilize o comando correto).
*/

console.log(atendida);
console.log(fila.print());


/*
    7. Equanto todos aguardavam o atendimento, chegaram mais 3 (três) pessoas na seguinte sequência (Utilize o comando correto):
    - Rafael
    - Isabela
    - Cauã
    Adicione eles na ordem da fila
*/

fila.enqueue("Rafael");
fila.enqueue("Isabela");
fila.enqueue("Cauã");


/*
    8. Imprima a fila na ordem correta depois das alterações (Utilize o comando correto).
*/

console.log(fila.print());

/*
    9. O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida:
    Mostre o comando a ser executado e qual o nome da próxima pessoa que será atendida.
*/

console.log(fila.peek());

/*
    10. O médico pediu ao atendente que chamasse essa pessoa que estava na frente da fila.
    Logo ela foi removido da fila (Utilize o comando correto).
*/

atendida = fila.dequeue();


/*
    11. Imprima a fila na ordem correta depois de todas as alterações (Utilize o comando correto).
*/

console.log(fila.print());