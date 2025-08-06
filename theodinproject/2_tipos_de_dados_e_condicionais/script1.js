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


