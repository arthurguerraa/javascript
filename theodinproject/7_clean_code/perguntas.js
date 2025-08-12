/* 1- Por que é importante escrever código limpo?
Porque código limpo é mais fácil de ler, entender e modificar no futuro — tanto por você quanto por outras pessoas. Isso evita confusão, erros e perda de tempo quando precisar dar manutenção.


2. Quais são alguns bons princípios para manter o código limpo?

- Nomes claros para variáveis, funções e classes (deixe óbvio o que fazem).
- Funções curtas que fazem apenas uma coisa.
- Organização lógica do código, separando partes relacionadas.
- Evitar repetição (DRY – Don’t Repeat Yourself).
- Usar espaçamento e indentação para deixar mais legível.


3. Qual é a diferença entre bons comentários e maus comentários?
- Bom comentário: explica o porquê de algo ser feito, ou algum detalhe importante que não é óbvio só olhando o código.
- Mau comentário: explica algo óbvio que já está claro no código, ou serve para “mascarar” código confuso em vez de melhorar ele.
*/

// código sujo
  const x = function (z) {
  const w = "Hello ";
  return w + z;
}

x("John");

// código limpo
  const generateUserGreeting = function (name) {
  const greeting = "Hello ";
  return greeting + name;
};
generateUserGreeting("John");

// Use vocabulário consistente
// Variáveis do mesmo tipo devem seguir um sistema de nomenclatura consistente.

// consistente
function getPlayerScore();
function getPlayerName();
function getPlayerTag();

// inconsistente
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();

// Nomes pesquisáveis e compreensíveis
// Evite valores “mágicos” no código, como números ou strings diretos.

// ruim
setTimeout(stopTimer, 3600000);

// melhor
const ONE_HOUR = 3600000; // ou 60 * 60 * 1000
setTimeout(stopTimer, ONE_HOUR);





