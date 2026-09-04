// Vetor de objetos de alunos (dados fictícios, gerados aleatoriamente, ordem embaralhada)
// Total de alunos: 150

const alunos = [
  {
    "nome": "Larissa Ribeiro Almeida",
    "ra": 39022,
    "idade": 21,
    "sexo": "F",
    "media": 0.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Lucas Costa Nascimento",
    "ra": 76371,
    "idade": 14,
    "sexo": "M",
    "media": 2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Fabiana Oliveira Barbosa",
    "ra": 59479,
    "idade": 16,
    "sexo": "F",
    "media": 5.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Julio Cardoso Gomes",
    "ra": 54766,
    "idade": 14,
    "sexo": "M",
    "media": 2.6,
    "resultado": "Reprovado"
  },
  {
    "nome": "Isabela Rodrigues Almeida",
    "ra": 28503,
    "idade": 15,
    "sexo": "F",
    "media": 1.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Nicolas Ribeiro Martins",
    "ra": 85848,
    "idade": 16,
    "sexo": "M",
    "media": 0.9,
    "resultado": "Reprovado"
  },
  {
    "nome": "Eduarda Rocha Souza",
    "ra": 44484,
    "idade": 14,
    "sexo": "F",
    "media": 8.8,
    "resultado": "Aprovado"
  },
  {
    "nome": "Carlos Rocha Santos",
    "ra": 74216,
    "idade": 16,
    "sexo": "M",
    "media": 2.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Ana Alves Moreira",
    "ra": 25915,
    "idade": 19,
    "sexo": "F",
    "media": 6.9,
    "resultado": "Aprovado"
  },
  {
    "nome": "Isabela Gomes Martins",
    "ra": 81455,
    "idade": 22,
    "sexo": "F",
    "media": 5.6,
    "resultado": "Reprovado"
  },
  {
    "nome": "Debora Soares Lopes",
    "ra": 13365,
    "idade": 18,
    "sexo": "F",
    "media": 7.2,
    "resultado": "Aprovado"
  },
  {
    "nome": "Julia Carvalho Nascimento",
    "ra": 70121,
    "idade": 17,
    "sexo": "F",
    "media": 2.7,
    "resultado": "Reprovado"
  },
  {
    "nome": "Carlos Fernandes Monteiro",
    "ra": 36439,
    "idade": 14,
    "sexo": "M",
    "media": 5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Karina Soares Dias",
    "ra": 56172,
    "idade": 18,
    "sexo": "F",
    "media": 5.7,
    "resultado": "Reprovado"
  },
  {
    "nome": "Carlos Cardoso Carvalho",
    "ra": 87884,
    "idade": 18,
    "sexo": "M",
    "media": 5.7,
    "resultado": "Reprovado"
  },
  {
    "nome": "Guilherme Costa Pereira",
    "ra": 94572,
    "idade": 19,
    "sexo": "M",
    "media": 4.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Carlos Dias Rocha",
    "ra": 40806,
    "idade": 17,
    "sexo": "M",
    "media": 7.6,
    "resultado": "Aprovado"
  },
  {
    "nome": "Eduardo Ferreira Costa",
    "ra": 47077,
    "idade": 17,
    "sexo": "M",
    "media": 7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Caio Alves Cardoso",
    "ra": 80439,
    "idade": 22,
    "sexo": "M",
    "media": 5.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Julio Martins Gomes",
    "ra": 27413,
    "idade": 22,
    "sexo": "M",
    "media": 5.1,
    "resultado": "Reprovado"
  },
  {
    "nome": "Julia Silva Fernandes",
    "ra": 75513,
    "idade": 19,
    "sexo": "F",
    "media": 3.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Raquel Ribeiro Rocha",
    "ra": 60143,
    "idade": 20,
    "sexo": "F",
    "media": 7.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Gabriela Rocha Soares",
    "ra": 83310,
    "idade": 16,
    "sexo": "F",
    "media": 6.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Julio Soares Ribeiro",
    "ra": 59780,
    "idade": 19,
    "sexo": "M",
    "media": 0.3,
    "resultado": "Reprovado"
  },
  {
    "nome": "Rafael Almeida Carvalho",
    "ra": 26456,
    "idade": 18,
    "sexo": "M",
    "media": 9.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Mariana Fernandes Pereira",
    "ra": 68397,
    "idade": 17,
    "sexo": "F",
    "media": 3.7,
    "resultado": "Reprovado"
  },
  {
    "nome": "Olivia Araujo Ferreira",
    "ra": 46665,
    "idade": 18,
    "sexo": "F",
    "media": 2.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Bruna Nascimento Almeida",
    "ra": 29477,
    "idade": 21,
    "sexo": "F",
    "media": 7.6,
    "resultado": "Aprovado"
  },
  {
    "nome": "Vitoria Soares Lopes",
    "ra": 80530,
    "idade": 15,
    "sexo": "F",
    "media": 3.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Diego Ribeiro Araujo",
    "ra": 98987,
    "idade": 17,
    "sexo": "M",
    "media": 5.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "André Andrade Lima",
    "ra": 92580,
    "idade": 15,
    "sexo": "M",
    "media": 6.8,
    "resultado": "Aprovado"
  },
  {
    "nome": "Juliana Rocha Lima",
    "ra": 64514,
    "idade": 21,
    "sexo": "F",
    "media": 6.3,
    "resultado": "Aprovado"
  },
  {
    "nome": "Matheus Souza Andrade",
    "ra": 36759,
    "idade": 14,
    "sexo": "M",
    "media": 4.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Camila Gomes Gomes",
    "ra": 32964,
    "idade": 17,
    "sexo": "F",
    "media": 7.1,
    "resultado": "Aprovado"
  },
  {
    "nome": "Eduardo Lopes Rocha",
    "ra": 55431,
    "idade": 18,
    "sexo": "M",
    "media": 0.3,
    "resultado": "Reprovado"
  },
  {
    "nome": "Giovanna Almeida Monteiro",
    "ra": 93284,
    "idade": 19,
    "sexo": "F",
    "media": 5.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Vitoria Gomes Barbosa",
    "ra": 55555,
    "idade": 20,
    "sexo": "F",
    "media": 8.9,
    "resultado": "Aprovado"
  },
  {
    "nome": "Thiago Santos Martins",
    "ra": 35474,
    "idade": 17,
    "sexo": "M",
    "media": 5.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Guilherme Costa Castro",
    "ra": 95065,
    "idade": 14,
    "sexo": "M",
    "media": 8.8,
    "resultado": "Aprovado"
  },
  {
    "nome": "Larissa Carvalho Araujo",
    "ra": 72194,
    "idade": 16,
    "sexo": "F",
    "media": 5.3,
    "resultado": "Reprovado"
  },
  {
    "nome": "Karina Reis Moreira",
    "ra": 13359,
    "idade": 20,
    "sexo": "F",
    "media": 1.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Tatiana Rodrigues Ribeiro",
    "ra": 74973,
    "idade": 21,
    "sexo": "F",
    "media": 6.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Natalia Lopes Martins",
    "ra": 51054,
    "idade": 15,
    "sexo": "F",
    "media": 9.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Matheus Costa Barbosa",
    "ra": 39358,
    "idade": 17,
    "sexo": "M",
    "media": 0.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Matheus Moreira Gomes",
    "ra": 12448,
    "idade": 18,
    "sexo": "M",
    "media": 8.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Matheus Ribeiro Castro",
    "ra": 54901,
    "idade": 19,
    "sexo": "M",
    "media": 7.2,
    "resultado": "Aprovado"
  },
  {
    "nome": "Bruno Pereira Vieira",
    "ra": 62221,
    "idade": 15,
    "sexo": "M",
    "media": 2.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Wesley Carvalho Silva",
    "ra": 75909,
    "idade": 16,
    "sexo": "M",
    "media": 0.7,
    "resultado": "Reprovado"
  },
  {
    "nome": "Eduardo Oliveira Andrade",
    "ra": 57007,
    "idade": 18,
    "sexo": "M",
    "media": 10,
    "resultado": "Aprovado"
  },
  {
    "nome": "Carla Santos Alves",
    "ra": 43766,
    "idade": 18,
    "sexo": "F",
    "media": 4.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Olivia Oliveira Reis",
    "ra": 64193,
    "idade": 18,
    "sexo": "F",
    "media": 6.8,
    "resultado": "Aprovado"
  },
  {
    "nome": "Eduarda Monteiro Castro",
    "ra": 41986,
    "idade": 14,
    "sexo": "F",
    "media": 2.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Giovanna Araujo Silva",
    "ra": 32925,
    "idade": 17,
    "sexo": "F",
    "media": 8.1,
    "resultado": "Aprovado"
  },
  {
    "nome": "Helena Ferreira Pereira",
    "ra": 63120,
    "idade": 15,
    "sexo": "F",
    "media": 3.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Camila Lima Costa",
    "ra": 20702,
    "idade": 18,
    "sexo": "F",
    "media": 6.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Eduardo Gomes Soares",
    "ra": 73111,
    "idade": 19,
    "sexo": "M",
    "media": 9.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Gabriel Cardoso Martins",
    "ra": 27689,
    "idade": 18,
    "sexo": "M",
    "media": 10,
    "resultado": "Aprovado"
  },
  {
    "nome": "Rodrigo Souza Carvalho",
    "ra": 11833,
    "idade": 17,
    "sexo": "M",
    "media": 7.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Caio Alves Costa",
    "ra": 61318,
    "idade": 22,
    "sexo": "M",
    "media": 9.2,
    "resultado": "Aprovado"
  },
  {
    "nome": "Fernanda Rodrigues Oliveira",
    "ra": 10064,
    "idade": 15,
    "sexo": "F",
    "media": 7.8,
    "resultado": "Aprovado"
  },
  {
    "nome": "Otavio Reis Oliveira",
    "ra": 17262,
    "idade": 19,
    "sexo": "M",
    "media": 4.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Camila Reis Nascimento",
    "ra": 86182,
    "idade": 19,
    "sexo": "F",
    "media": 9.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Vitoria Castro Ribeiro",
    "ra": 63261,
    "idade": 21,
    "sexo": "F",
    "media": 4.6,
    "resultado": "Reprovado"
  },
  {
    "nome": "Raquel Silva Dias",
    "ra": 42497,
    "idade": 22,
    "sexo": "F",
    "media": 6.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Elisa Cardoso Barbosa",
    "ra": 44524,
    "idade": 19,
    "sexo": "F",
    "media": 1,
    "resultado": "Reprovado"
  },
  {
    "nome": "Rodrigo Martins Monteiro",
    "ra": 94645,
    "idade": 17,
    "sexo": "M",
    "media": 3.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Patricia Barbosa Araujo",
    "ra": 86606,
    "idade": 15,
    "sexo": "F",
    "media": 8.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Ana Vieira Fernandes",
    "ra": 42240,
    "idade": 16,
    "sexo": "F",
    "media": 8.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Rodrigo Ribeiro Monteiro",
    "ra": 22376,
    "idade": 18,
    "sexo": "M",
    "media": 6.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Amanda Nascimento Almeida",
    "ra": 83387,
    "idade": 21,
    "sexo": "F",
    "media": 4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Vinicius Castro Martins",
    "ra": 59308,
    "idade": 20,
    "sexo": "M",
    "media": 6.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Vinicius Reis Moreira",
    "ra": 87391,
    "idade": 21,
    "sexo": "M",
    "media": 3.1,
    "resultado": "Reprovado"
  },
  {
    "nome": "Julio Lima Gomes",
    "ra": 13849,
    "idade": 17,
    "sexo": "M",
    "media": 2.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Fernando Moreira Lopes",
    "ra": 63449,
    "idade": 18,
    "sexo": "M",
    "media": 2.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Sofia Rodrigues Costa",
    "ra": 89674,
    "idade": 16,
    "sexo": "F",
    "media": 5.7,
    "resultado": "Reprovado"
  },
  {
    "nome": "Carla Barbosa Soares",
    "ra": 29557,
    "idade": 21,
    "sexo": "F",
    "media": 0.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Nicolas Alves Alves",
    "ra": 19084,
    "idade": 19,
    "sexo": "M",
    "media": 7.1,
    "resultado": "Aprovado"
  },
  {
    "nome": "Mariana Rocha Fernandes",
    "ra": 78436,
    "idade": 20,
    "sexo": "F",
    "media": 3.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Eduarda Santos Rocha",
    "ra": 59944,
    "idade": 18,
    "sexo": "F",
    "media": 9,
    "resultado": "Aprovado"
  },
  {
    "nome": "Julio Rocha Pereira",
    "ra": 97868,
    "idade": 21,
    "sexo": "M",
    "media": 4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Raquel Nascimento Andrade",
    "ra": 75238,
    "idade": 17,
    "sexo": "F",
    "media": 2.1,
    "resultado": "Reprovado"
  },
  {
    "nome": "Rodrigo Reis Castro",
    "ra": 59027,
    "idade": 22,
    "sexo": "M",
    "media": 7.1,
    "resultado": "Aprovado"
  },
  {
    "nome": "Maria Alves Silva",
    "ra": 89307,
    "idade": 20,
    "sexo": "F",
    "media": 4.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Carlos Martins Rocha",
    "ra": 48939,
    "idade": 21,
    "sexo": "M",
    "media": 6.1,
    "resultado": "Aprovado"
  },
  {
    "nome": "Carla Lopes Santos",
    "ra": 41378,
    "idade": 15,
    "sexo": "F",
    "media": 4.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Bruno Cardoso Nascimento",
    "ra": 33721,
    "idade": 19,
    "sexo": "M",
    "media": 0.3,
    "resultado": "Reprovado"
  },
  {
    "nome": "Julio Pereira Nascimento",
    "ra": 50831,
    "idade": 21,
    "sexo": "M",
    "media": 6.6,
    "resultado": "Aprovado"
  },
  {
    "nome": "Rafael Lopes Carvalho",
    "ra": 27236,
    "idade": 15,
    "sexo": "M",
    "media": 3.9,
    "resultado": "Reprovado"
  },
  {
    "nome": "João Lima Barbosa",
    "ra": 71818,
    "idade": 18,
    "sexo": "M",
    "media": 6.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Pedro Araujo Costa",
    "ra": 83455,
    "idade": 18,
    "sexo": "M",
    "media": 2.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Eduardo Souza Cardoso",
    "ra": 89103,
    "idade": 16,
    "sexo": "M",
    "media": 8.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Matheus Souza Castro",
    "ra": 71708,
    "idade": 18,
    "sexo": "M",
    "media": 7.3,
    "resultado": "Aprovado"
  },
  {
    "nome": "Maria Moreira Araujo",
    "ra": 58908,
    "idade": 14,
    "sexo": "F",
    "media": 8.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Daniela Reis Moreira",
    "ra": 74077,
    "idade": 21,
    "sexo": "F",
    "media": 9.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Camila Soares Almeida",
    "ra": 70763,
    "idade": 16,
    "sexo": "F",
    "media": 0.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Bruno Souza Fernandes",
    "ra": 35189,
    "idade": 16,
    "sexo": "M",
    "media": 2.1,
    "resultado": "Reprovado"
  },
  {
    "nome": "João Cardoso Cardoso",
    "ra": 41834,
    "idade": 21,
    "sexo": "M",
    "media": 5.6,
    "resultado": "Reprovado"
  },
  {
    "nome": "Mariana Nascimento Lopes",
    "ra": 45013,
    "idade": 15,
    "sexo": "F",
    "media": 7.1,
    "resultado": "Aprovado"
  },
  {
    "nome": "Natalia Ribeiro Lima",
    "ra": 28306,
    "idade": 17,
    "sexo": "F",
    "media": 4.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "João Lima Oliveira",
    "ra": 21847,
    "idade": 20,
    "sexo": "M",
    "media": 4.6,
    "resultado": "Reprovado"
  },
  {
    "nome": "Fernanda Almeida Gomes",
    "ra": 58167,
    "idade": 14,
    "sexo": "F",
    "media": 4.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Karina Souza Rodrigues",
    "ra": 84042,
    "idade": 14,
    "sexo": "F",
    "media": 1,
    "resultado": "Reprovado"
  },
  {
    "nome": "Eduardo Almeida Santos",
    "ra": 20272,
    "idade": 16,
    "sexo": "M",
    "media": 8.6,
    "resultado": "Aprovado"
  },
  {
    "nome": "Julio Barbosa Araujo",
    "ra": 75902,
    "idade": 15,
    "sexo": "M",
    "media": 6.2,
    "resultado": "Aprovado"
  },
  {
    "nome": "Paulo Fernandes Nascimento",
    "ra": 38218,
    "idade": 22,
    "sexo": "M",
    "media": 0.1,
    "resultado": "Reprovado"
  },
  {
    "nome": "Camila Monteiro Lopes",
    "ra": 80198,
    "idade": 17,
    "sexo": "F",
    "media": 8.6,
    "resultado": "Aprovado"
  },
  {
    "nome": "Julia Rocha Costa",
    "ra": 79863,
    "idade": 21,
    "sexo": "F",
    "media": 5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Vinicius Souza Alves",
    "ra": 96566,
    "idade": 16,
    "sexo": "M",
    "media": 7.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Karina Santos Ribeiro",
    "ra": 40173,
    "idade": 21,
    "sexo": "F",
    "media": 9.3,
    "resultado": "Aprovado"
  },
  {
    "nome": "Amanda Dias Ferreira",
    "ra": 79699,
    "idade": 21,
    "sexo": "F",
    "media": 8.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Gabriela Soares Dias",
    "ra": 17931,
    "idade": 20,
    "sexo": "F",
    "media": 6.1,
    "resultado": "Aprovado"
  },
  {
    "nome": "Julia Alves Ribeiro",
    "ra": 71462,
    "idade": 20,
    "sexo": "F",
    "media": 2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Debora Dias Oliveira",
    "ra": 98386,
    "idade": 15,
    "sexo": "F",
    "media": 9.3,
    "resultado": "Aprovado"
  },
  {
    "nome": "Beatriz Carvalho Lopes",
    "ra": 71657,
    "idade": 18,
    "sexo": "F",
    "media": 1.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Debora Rocha Andrade",
    "ra": 50920,
    "idade": 16,
    "sexo": "F",
    "media": 6.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Gabriela Reis Alves",
    "ra": 46718,
    "idade": 22,
    "sexo": "F",
    "media": 0.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Igor Martins Fernandes",
    "ra": 64555,
    "idade": 18,
    "sexo": "M",
    "media": 9.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Karina Souza Costa",
    "ra": 68118,
    "idade": 21,
    "sexo": "F",
    "media": 6.9,
    "resultado": "Aprovado"
  },
  {
    "nome": "Pedro Lopes Gomes",
    "ra": 61597,
    "idade": 19,
    "sexo": "M",
    "media": 2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Carla Martins Alves",
    "ra": 67289,
    "idade": 19,
    "sexo": "F",
    "media": 2.9,
    "resultado": "Reprovado"
  },
  {
    "nome": "Fernando Reis Cardoso",
    "ra": 13807,
    "idade": 22,
    "sexo": "M",
    "media": 7.2,
    "resultado": "Aprovado"
  },
  {
    "nome": "Rafael Andrade Almeida",
    "ra": 19330,
    "idade": 19,
    "sexo": "M",
    "media": 9.8,
    "resultado": "Aprovado"
  },
  {
    "nome": "Raquel Nascimento Santos",
    "ra": 34186,
    "idade": 22,
    "sexo": "F",
    "media": 3.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Wesley Ferreira Lopes",
    "ra": 74453,
    "idade": 22,
    "sexo": "M",
    "media": 5.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Fernanda Soares Cardoso",
    "ra": 46016,
    "idade": 20,
    "sexo": "F",
    "media": 6.6,
    "resultado": "Aprovado"
  },
  {
    "nome": "Maria Fernandes Alves",
    "ra": 73041,
    "idade": 21,
    "sexo": "F",
    "media": 3.3,
    "resultado": "Reprovado"
  },
  {
    "nome": "Bruno Fernandes Dias",
    "ra": 16493,
    "idade": 17,
    "sexo": "M",
    "media": 8.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Eduardo Vieira Santos",
    "ra": 49140,
    "idade": 18,
    "sexo": "M",
    "media": 6.9,
    "resultado": "Aprovado"
  },
  {
    "nome": "Lucas Ferreira Ribeiro",
    "ra": 64755,
    "idade": 19,
    "sexo": "M",
    "media": 2.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Pedro Cardoso Nascimento",
    "ra": 22281,
    "idade": 17,
    "sexo": "M",
    "media": 4.3,
    "resultado": "Reprovado"
  },
  {
    "nome": "Mariana Ribeiro Nascimento",
    "ra": 15455,
    "idade": 14,
    "sexo": "F",
    "media": 2.2,
    "resultado": "Reprovado"
  },
  {
    "nome": "Lucas Martins Santos",
    "ra": 60683,
    "idade": 20,
    "sexo": "M",
    "media": 9.3,
    "resultado": "Aprovado"
  },
  {
    "nome": "Isabela Ferreira Moreira",
    "ra": 67466,
    "idade": 14,
    "sexo": "F",
    "media": 8,
    "resultado": "Aprovado"
  },
  {
    "nome": "Tatiana Lima Ribeiro",
    "ra": 95555,
    "idade": 14,
    "sexo": "F",
    "media": 7.4,
    "resultado": "Aprovado"
  },
  {
    "nome": "Guilherme Oliveira Pereira",
    "ra": 97779,
    "idade": 22,
    "sexo": "M",
    "media": 1.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Igor Oliveira Moreira",
    "ra": 44828,
    "idade": 14,
    "sexo": "M",
    "media": 0.4,
    "resultado": "Reprovado"
  },
  {
    "nome": "Giovanna Fernandes Martins",
    "ra": 97389,
    "idade": 16,
    "sexo": "F",
    "media": 3.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Daniel Castro Pereira",
    "ra": 92680,
    "idade": 14,
    "sexo": "M",
    "media": 0,
    "resultado": "Reprovado"
  },
  {
    "nome": "Diego Moreira Castro",
    "ra": 47661,
    "idade": 16,
    "sexo": "M",
    "media": 2.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Olivia Oliveira Almeida",
    "ra": 68419,
    "idade": 20,
    "sexo": "F",
    "media": 9.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Beatriz Costa Castro",
    "ra": 50880,
    "idade": 17,
    "sexo": "F",
    "media": 3.6,
    "resultado": "Reprovado"
  },
  {
    "nome": "Marcelo Santos Rodrigues",
    "ra": 68381,
    "idade": 17,
    "sexo": "M",
    "media": 0,
    "resultado": "Reprovado"
  },
  {
    "nome": "Larissa Ribeiro Dias",
    "ra": 12968,
    "idade": 19,
    "sexo": "F",
    "media": 4.8,
    "resultado": "Reprovado"
  },
  {
    "nome": "Fabiana Carvalho Rodrigues",
    "ra": 75341,
    "idade": 17,
    "sexo": "F",
    "media": 7.2,
    "resultado": "Aprovado"
  },
  {
    "nome": "Otavio Souza Araujo",
    "ra": 30980,
    "idade": 16,
    "sexo": "M",
    "media": 8.5,
    "resultado": "Aprovado"
  },
  {
    "nome": "Thiago Fernandes Silva",
    "ra": 26880,
    "idade": 21,
    "sexo": "M",
    "media": 4.7,
    "resultado": "Reprovado"
  },
  {
    "nome": "Fabiana Alves Vieira",
    "ra": 26436,
    "idade": 14,
    "sexo": "F",
    "media": 9,
    "resultado": "Aprovado"
  },
  {
    "nome": "Carlos Fernandes Alves",
    "ra": 13683,
    "idade": 21,
    "sexo": "M",
    "media": 9.7,
    "resultado": "Aprovado"
  },
  {
    "nome": "Vitoria Rodrigues Ribeiro",
    "ra": 83687,
    "idade": 22,
    "sexo": "F",
    "media": 5.5,
    "resultado": "Reprovado"
  },
  {
    "nome": "Rafael Dias Lima",
    "ra": 74649,
    "idade": 21,
    "sexo": "M",
    "media": 3.8,
    "resultado": "Reprovado"
  }
];

export default alunos;
