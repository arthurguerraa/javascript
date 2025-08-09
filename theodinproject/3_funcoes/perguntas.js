// 1- O que as funções são úteis para?
// Funções encapsulam lógica reutilizável, ajudam a organizar código, evitar repetição (DRY) e separar responsabilidades.

// Exemplo: função reutilizável para formatar nome completo
function formatNome(nome, sobrenome) {
  return `${nome} ${sobrenome}`.trim();
}

console.log(formatNome("Ana", "Silva")); // "Ana Silva"


// 2- Como você invoca (chama) uma função?
// Você chama uma função pelo nome seguido de parênteses; passe argumentos dentro dos parênteses se houver parâmetros.

function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Pedro")); // invocação -> "Olá, Pedro!"


// 3- O que são funções anônimas?
// Funções sem nome. Normalmente usadas como function expressions (atribuídas a variáveis) ou passadas como callback.
// São funções sem nome. Normalmente ficam guardadas dentro de variáveis ou usadas só uma vez (como callback). É como uma ferramenta descartável — você usa e pronto.

// atribuída a uma variável (anônima)
const dobrar = function(x) {
  return x * 2;
};

console.log(dobrar(4)); // 8

// passada como callback (anônima, arrow aqui)
setTimeout(() => {
  console.log("Executou após 1s");
}, 1000);


// 4- O que é escopo de função?
// Variáveis declaradas dentro de uma função só existem dentro dela (escopo local). Variáveis fora são globais (ou de escopo de bloco se usar let/const).

function exemplo() {
  let local = "sou local";
  console.log(local); // funciona aqui
}
exemplo();
// console.log(local); // ERRO: local is not defined (não existe fora da função)


// Também: funções criam fechamentos (closures) quando retornam funções que referenciam variáveis internas:

function contador() {
  let i = 0;
  return function() {
    i++;
    return i;
  };
}

const c = contador();
console.log(c()); // 1
console.log(c()); // 2  (mantém o estado interno)


// 5- O que são valores de retorno (return values)?
// É o valor que a função devolve quando usa return. Se não usar return, a função retorna undefined.

function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3)); // 5

function semRetorno() {
  let x = 1;
}
console.log(semRetorno()); // undefined


// 6- O que são arrow functions?
//É apenas uma forma mais curta de escrever funções, com =>. Para iniciantes, trate como atalho — faz a mesma coisa que uma função normal na maioria dos casos.

//Exemplo:

// função normal
const soma = function(a, b) {
  return a + b;
};

// arrow function (mais curta)
const soma2 = (a, b) => a + b;

console.log(soma2(2,3)); // 5
// Observação simples: arrow functions se comportam de forma diferente em casos avançados (com this), mas só precisa se preocupar com isso depois.


// 7- Diferença entre function declaration e function expression?

//Function declaration: você escreve function nome() {}. Pode chamar antes de declarar (é mais “flexível”).

//Function expression: você coloca a função dentro de uma variável, tipo const nome = function() {} ou const nome = () => {}. Não dá pra chamar antes de criar a variável.

//Exemplo:

// Declaration
console.log(f1()); // funciona mesmo antes
function f1() { return "declaration"; }

// Expression
// console.log(f2()); // ERRO se descomentar (a variável ainda não existe)
const f2 = function() { return "expression"; };
//Analogia: declaration é como uma placa na parede que já existe quando a casa abre; expression é como um objeto que você só coloca na mesa quando monta.