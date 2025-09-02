// Exercícios com map
// 1- Dado um array de números, crie um novo array com cada número ao quadrado.
const numeros = [2, 4, 6, 8];
// resultado esperado: [4, 16, 36, 64]

const numerosAoQuadrado = numeros.map((n) =>{
    return n ** 2;
});
console.log(numerosAoQuadrado);


// 2- Transforme um array de nomes em letras maiúsculas.
const nomes = ["ana", "joão", "maria"];
// resultado esperado: ["ANA", "JOÃO", "MARIA"]

const nomesUp = nomes.map((nomes) =>{
    return nomes.toUpperCase();
});
console.log(nomesUp);


// 3- A partir de um array de objetos, crie um novo array apenas com os nomes.
const pessoas = [
  { nome: "Carlos", idade: 20 },
  { nome: "Marina", idade: 25 }
];
// resultado esperado: ["Carlos", "Marina"]

const apenasNomes = pessoas.map((n) =>{
    return n.nome;
});
console.log(apenasNomes);


// 4- Dado um array de números, crie um novo array com o triplo de cada número.
const numeros3 = [1, 2, 3, 4];
// resultado esperado: [3, 6, 9, 12]

const triplo = numeros3.map((n) => {
    return n *= 3;
});
console.log(triplo);


// 5- Dado um array de preços, adicione 10% de imposto em cada valor.
const precos = [100, 200, 300];
// resultado esperado: [110, 220, 330]

const imposto = precos.map((p) =>{
   return p = (p * (10 / 100)) + p;
});
console.log(imposto);


// Exercícios com filter
// 1- Dado um array de idades, filtre apenas as maiores de 18.
const idades = [12, 22, 17, 30, 15];
// resultado esperado: [22, 30]

const maior = idades.filter((m) => {
    return m >= 18;
})
console.log(maior);


// 2- Dado um array de palavras, filtre apenas as que têm mais de 5 letras.
const palavras = ["sol", "computador", "lua", "javascript"];
// resultado esperado: ["computador", "javascript"]

const maisDeCinco = palavras.filter((m) =>{
    return m.length > 5;
});
console.log(maisDeCinco);


// 3- Filtre apenas os objetos que possuem ativo: true.
const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Paulo", ativo: false },
  { nome: "Clara", ativo: true }
];
// resultado esperado: [{nome: "Ana", ativo: true}, {nome: "Clara", ativo: true}]

const apenasVerdadeiro = usuarios.filter((v) =>{
    return v.ativo === true;
});
console.log(apenasVerdadeiro);


// 4- Dado um array de números, filtre apenas os que são múltiplos de 3.
const numeros4 = [3, 7, 9, 12, 14];
// resultado esperado: [3, 9, 12]

const mult3 = numeros4.filter((m) =>{
  return m % 3 === 0;
});
console.log(mult3);


// 5-Dado um array de nomes, filtre apenas os que começam com a letra "A".
const nomes2 = ["Ana", "João", "Amanda", "Carlos"];
// resultado esperado: ["Ana", "Amanda"]

const nomesA = nomes2.filter((n) =>{
    return n.startsWith('A');
});
console.log(nomesA);


// Exercícios com reduce
// 1- Some todos os números de um array.
const numeros1 = [10, 20, 30, 40];
// resultado esperado: 100

const numeros1Soma = numeros1.reduce((soma, n) =>{
    return soma + n;
}, 0);
console.log(numeros1Soma);


// 2- Conte quantas vezes cada letra aparece no array.
const letras = ["a", "b", "a", "c", "b", "a"];
// resultado esperado: { a: 3, b: 2, c: 1 }

const contagem = letras.reduce((acumulador, letra) => {
  // se a chave já existe, soma +1, senão começa em 1
  acumulador[letra] = (acumulador[letra] || 0) + 1;
  return acumulador;
}, {}); // acumulador inicial é um objeto vazio
console.log(contagem); // { a: 3, b: 2, c: 1 }


// 3- Calcule a média das idades de um array de objetos.
const pessoas2 = [
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 40 }
];

const mediaIdade = pessoas.reduce((acumulador, pessoa) => {
  return acumulador + pessoa.idade;
}, 0) / pessoas.length; // soma total dividido pelo nº de pessoas
console.log(mediaIdade); // 30


// 4- Dado um array de números, calcule o maior valor usando reduce.
const numeros5 = [10, 25, 8, 99, 37];
// resultado esperado: 99

const maiorNumero = numeros5.reduce((ac, n) =>{
      if(n > ac) ac = n;
      return ac;
}, 0);
console.log(maiorNumero);
