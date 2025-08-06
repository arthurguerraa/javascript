// 1- Quais são os oito tipos de dados em JavaScript?
// 1. string
// 2. number
// 3. bigint
// 4. boolean
// 5. undefined
// 6. symbol
// 7. null
// 8. object (não primitivo)
// 9. function (subtipo de object)

let exemploString   = "texto";       // string
let exemploNumber   = 123;           // number
let exemploBigInt   = 9007199254740991n; // bigint
let exemploBoolean  = true;          // boolean
let exemploUndefined= undefined;     // undefined
let exemploSymbol   = Symbol("id");  // symbol
let exemploNull     = null;          // null
let exemploObject   = { a: 1 };      // object
function exemploFunc(){ }            // function (object)

// ---------------------------------------------------------------------

// 2- Qual tipo NÃO é primitivo?
// - object (e function, que é um objeto chamável)

console.log(typeof exemploObject); // "object"
console.log(typeof exemploFunc);   // "function" (subtipo de object)

// ----------------------------------------------------------------------

// 3- Qual a relação entre null e undefined?
// - undefined = variável declarada sem valor
// - null      = valor "intencionalmente vazio"
// Ambos indicam “ausência de valor”, mas são tipos diferentes

let a;
let b = null;

console.log(a);           // undefined
console.log(b);           // null
console.log(a == b);      // true  (valor igual, tipo diferente)
console.log(a === b);     // false (tipos diferentes)

// ----------------------------------------------------------------------

// 4- Qual a diferença entre aspas simples, duplas e backticks?
// - '' e "" são equivalentes (strings literais)
// - `` (template literals) permitem multilinha e interpolação

let s1 = 'Aspas simples';
let s2 = "Aspas duplas";
let s3 = `Backticks`; // multilinha e ${expressões}

console.log(s1, s2, s3);

// ------------------------------------------------------------------------

// 5- Qual o termo para juntar strings?
// - concatenação com +
// - template literal (interpolação)

let a1 = "Hello, ";
let b1 = "world!";

console.log(a1 + b1);              // concatenação -> "Hello, world!"
console.log(`${a1}${b1}`);         // template literal -> "Hello, world!"

// ------------------------------------------------------------------------

// 6- Qual tipo de aspas permite interpolar variáveis/expressões?
// - Aspostrófo/Backstricks
let nome = "Ana";
console.log(`Olá, ${nome}!`);    // → "Olá, Ana!"

// ------------------------------------------------------------------------

// 7- Como interpolar variáveis/expressões em uma string?
// - ${expressão} dentro de ``

let x = 5, y = 3;
console.log(`Soma: ${x + y}`);   // → "Soma: 8"

// ------------------------------------------------------------------------

// 8- Como usar caracteres de escape em strings?
// - \' ou \" para aspas dentro de mesma string
// - \n para nova linha

let texto = "Ele disse: \"Olá!\"\nTudo bem?";
console.log(texto);
/*
Saída:
Ele disse: "Olá!"
Tudo bem?
*/

// ------------------------------------------------------------------------

// 9- Diferença entre slice() e substring()?
// - slice(início, fim) aceita índices negativos
// - substring(início, fim) troca se início > fim e não aceita negativo

let str = "JavaScript";

console.log(str.slice(4,10));      // "Script"
console.log(str.slice(-6));        // "Script"
console.log(str.substring(4,10));  // "Script"
console.log(str.substring(10,4));  // "Script" (ordem trocada)

// ------------------------------------------------------------------------

// 10- Quais são os três operadores lógicos e o que significam?
// - && (AND/E)
// - || (OR/OU)
// - !  (NOT/NEGAÇÃO)

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// ------------------------------------------------------------------------

// 11- Quais são os operadores de comparação?
// Resposta: ==, ===, !=, !==, <, <=, >, >=

console.log(5 == "5");   // true
console.log(5 === 5);    // true
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(3 < 5, 3 <= 3, 7 > 2, 7 >= 8);

// ------------------------------------------------------------------------

// 12- O que são valores truthy e falsy?
// - truthy: valores que no contexto booleano viram true
// - falsy : valores que viram false

let v1 = {};       // truthy
let v2 = "";       // falsy
let v3 = 0;        // falsy
let v4 = "texto";  // truthy

if (v1) console.log("v1 é truthy");
if (!v2) console.log("v2 é falsy");
if (!v3) console.log("v3 é falsy");
if (v4) console.log("v4 é truthy");

// ------------------------------------------------------------------------

// 13- Quais são os valores falsy em JavaScript?
// Resposta: false, 0, -0, 0n, "", null, undefined, NaN

// Exemplos:
[ false, 0, -0, 0n, "", null, undefined, NaN ]
  .forEach(v => console.log(v, Boolean(v))); 

// ------------------------------------------------------------------------

// 14- O que são condicionais?
// Estruturas de controle que executam código com base em condições (verdadeiro/falso)

// ------------------------------------------------------------------------

// 15- Sintaxe de if/else:
// Exercício: Imprima se número é par ou ímpar
let num = 7;

if (num % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
// Saída: "Ímpar"

// ------------------------------------------------------------------------

// 16- Sintaxe de switch:
// Exercício: Identifique dia da semana (0–6)
let dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  // ...
  default:
    console.log("Outro dia");
}
// Saída depende do dia atual

// ------------------------------------------------------------------------

// 17- Sintaxe de operador ternário:
let idade2 = 18;
console.log(idade2 >= 18 ? "Maior de idade" : "Menor de idade");
// → "Maior de idade"

// ------------------------------------------------------------------------

// 18- O que é nesting (aninhamento)?
// Resposta: Colocar uma condicional dentro de outra

let score = 85;

if (score >= 90) {
  console.log("A");
} else {
  if (score >= 80) {
    console.log("B");
  } else {
    console.log("C");
  }
}
// Saída: "B"



