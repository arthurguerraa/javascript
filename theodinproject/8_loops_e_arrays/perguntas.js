/* 1- Para que servem os loops?
Loops repetem um bloco de código várias vezes — útil quando você precisa executar a mesma tarefa para muitos itens ou repetir algo N vezes.
Exemplo: imprimir números de 1 a 5 */

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Analogia: loop = repetir um passo do manual várias vezes automaticamente.


/* 2- O que faz a instrução break?
   break interrompe imediatamente o loop (sai do loop por completo).
   Exemplo: para ao encontrar 3 */ 

for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // sai do for
  console.log(i); // imprime 1, 2
}
// Uso comum: quando você já encontrou o que procurava e não precisa continuar.

/* 3- O que faz a instrução continue?
continue pula a iteração atual e vai para a próxima (não sai do loop, apenas ignora o resto do corpo naquela volta).
Exemplo: pular números pares */

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) continue; // pula pares
  console.log(i); // imprime 1, 3, 5
}
//Analogia: continue = “pular este passo e seguir para o próximo”. */


/* 4- O que é um array?
Um array é uma lista ordenada de valores guardada em uma única variável. Pode conter números, strings, objetos, etc.
Exemplo: */

const lista = ["ana", "bruno", "carla"];


/*  5- Para que servem arrays?
Servem para armazenar e organizar coleções de dados (vários valores) e facilitar operações como percorrer todos os itens, filtrar, ordenar, somar, etc.
Exemplo: guardar nomes de alunos, notas, itens do carrinho, etc. */


/* 6- Como você acessa ou altera um elemento de array?
- Acessa por índice (começa em 0): arr[0] é o primeiro item.
- Altera atribuindo: arr[1] = "novoValor". */

const arr = ["maçã", "banana", "laranja"];
console.log(arr[0]); // "maçã"
arr[1] = "uva";
console.log(arr); // ["maçã", "uva", "laranja"]
// Dica: último índice = arr.length - 1.


/* 7- Quais são alguns métodos úteis de array?
Vou listar os mais usados com 1 linha de explicação + exemplo curto.*/

// push(item) — adiciona no final.
arr.push("pera");

// pop() — remove e retorna o último.
const last = arr.pop();

unshift(item) // — adiciona no começo.
shift() // — remove do começo.

// slice(start, end) — copia parte do array (não altera o original).
arr.slice(1, 3);


// splice(start, deleteCount, ...items) — remove/insere (altera o array).
arr.splice(1, 1, "novo"); // substitui 1 item na posição 1


// forEach(cb) — executa cb para cada item (sem devolver novo array).
arr.forEach(item => console.log(item));


// map(cb) — transforma cada item e retorna um novo array.
const dobrados = [1,2,3].map(x => x * 2); // [2,4,6]


filter(cb) // — retorna novo array com itens que passam no teste.
const pares = [1,2,3,4].filter(x => x % 2 === 0); // [2,4]


reduce(cb, initial) // — reduz o array a um único valor (somatório, produto...).
const soma = [1,2,3].reduce((acc, v) => acc + v, 0); // 6


find(cb) // — retorna o primeiro item que satisfaz cb.

indexOf(value) / includes(value) // — busca por valor.

sort() // — ordena (atenção: modifica o array; para números precisa de comparator).

join(separator) // — transforma em string.

// Obs.: map, filter, reduce são poderosos e muito usados em código funcional.




