 // 1- Quais são as três palavras-chave para declarar variáveis?
// - As três palavras-chave são: var, let, const

var nome = "Maria";   // Pode ser redeclarada e tem escopo de função
let idade = 25;       // Escopo de bloco (mais moderno e seguro)
const cidade = "SP";  // Constante (não pode ser reatribuída)

console.log(nome, idade, cidade);

// ------------------------------------------------------------------------

// 2- Qual das três declarações deve ser evitada e por quê?
// - Deve-se evitar 'var', pois ela permite redeclaração e tem escopo solto, o que pode gerar bugs

var x = 10;
var x = 20; // Não dá erro!
console.log(x); // Resultado: 20
// Isso pode causar confusão e sobrescrever variáveis sem perceber

// --------------------------------------------------------------------------

// 3- Quais regras seguir ao nomear variáveis?
// Regras:
// - Não começar com números
// - Não usar espaços ou caracteres especiais (exceto _ e $)
// - Evitar palavras reservadas
// - Usar camelCase por padrão

// let 2nome = "João"; // Inválido: começa com número
let nome2 = "João";     // Correto
console.log(nome2);

// ---------------------------------------------------------------------------
// 4- O que acontece ao somar números e strings?
// - Quando você soma número + string, o número vira string (concatenação)

console.log(5 + "5");     // "55" -> número vira string
console.log("5" + 5);     // "55" -> mesma coisa
console.log(5 + 5 + "5"); // "105" -> soma os dois primeiros (números), depois concatena
console.log("5" + 5 + 5); // "555" -> tudo vira string

// -------------------------------------------------------------------------------------------

// 5- Como funciona o operador de módulo (%)?
// - Ele retorna o *resto da divisão*

console.log(10 % 3); // 1 -> 10 dividido por 3 = 3, sobra 1
console.log(15 % 4); // 3 -> 15 dividido por 4 = 3, sobra 3
console.log(8 % 2);  // 0 -> 8 é divisível por 2

// -----------------------------------------------------------------------------------------------

// 6- Qual a diferença entre == e ===?
// == compara valor (ignora o tipo)
// === compara valor *e* tipo

console.log(5 == "5");  // true  -> compara valor apenas
console.log(5 === "5"); // false -> tipos diferentes (número vs string)

// ------------------------------------------------------------------------------------------------
// 7- Quando você recebe um resultado NaN?
// NaN = Not a Number -> quando uma operação matemática falha com valores não numéricos

console.log("abc" * 2);    // NaN -> string inválida para multiplicação
console.log(0 / 0);        // NaN -> indefinido matematicamente
console.log(10 / "2");     // 5 -> string numérica é convertida
console.log("abc" - 5);    // NaN -> string não pode ser subtraída

// ------------------------------------------------------------------------------------------------

// 8- Como incrementar e decrementar um número?
let n = 10;
n++; // incremento = n + 1
n--; // decremento = n - 1
console.log(n); // 10 (voltou ao valor original)

// -------------------------------------------------------------------------------------------------

// 9- Qual a diferença entre prefixo e sufixo (++x vs x++)?
let x = 5;
let y = x++; // y recebe 5, depois x vira 6
let z = ++x; // x vira 7 primeiro, depois z recebe 7

console.log(x); // 7
console.log(y); // 5
console.log(z); // 7

// --------------------------------------------------------------------------------------------------

// 10- O que é precedência de operadores?
// - Operadores têm prioridade. Multiplicação vem antes da adição.

console.log(2 + 3 * 4);     // 14 -> 3*4 = 12 + 2 = 14
console.log((2 + 3) * 4);   // 20 -> Parênteses vêm primeiro

// ---------------------------------------------------------------------------------------------------

// 11- Como acessar ferramentas de desenvolvedor e console?
// - Acesse com F12 ou Ctrl+Shift+I (ou Option+Cmd+I no Mac)
// - Vá na aba "Console" e digite:

console.log("Olá, mundo!"); // Mostra mensagem no console

// ----------------------------------------------------------------------------------------------------

// 12- Como exibir informações no console?
let nome1 = "Arthur";
let idade1 = 20;

console.log("Nome:", nome1);
console.log("Idade:", idade1);
// console.log é usado para depuração, testes e mensagens

// -----------------------------------------------------------------------------------------------------

// 13- O que o operador + faz em uma string com número?
// - O operador + sozinho converte string numérica em número

console.log("10" + 5);   // "105" -> concatenação (string)
console.log(+"10" + 5);  // 15    -> +"10" vira número
console.log(+"abc");     // NaN   -> não é número








