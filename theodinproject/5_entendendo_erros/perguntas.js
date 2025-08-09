/*

1- Quais são três razões pelas quais você pode ver um TypeError?
TypeError acontece quando você tenta usar um valor de um jeito que não combina com o tipo dele. Três motivos comuns:

1- Tentar usar um método que não existe naquele tipo
Ex: .push() é de array, não de string.*/

const s = "olá";
s.push("!"); // TypeError: s.push is not a function


/* 2- Chamar algo que não é uma função
Se você faz x() mas x não é uma função, dá TypeError.*/

const x = 5;
x(); // TypeError: x is not a function


/* 3- Acessar/usar propriedades de null ou undefined
Tentar ler ou chamar algo dentro de undefined/null gera TypeError.*/

const obj = undefined;
console.log(obj.name); // TypeError: Cannot read properties of undefined (reading 'name')
/*


2- Qual é a diferença principal entre erro e aviso?
Erro: interrompe o programa — algo deu errado e o código não continua (pensa num semáforo vermelho).

Aviso (warning): indica algo potencialmente problemático, mas o programa ainda roda (semáforo amarelo: atenção, mas pode seguir).

Na prática: erros aparecem em vermelho no console e normalmente travam a execução; avisos aparecem em amarelo e servem pra você melhorar algo (ex.: código deprecated, más práticas).


3) Qual é um método que você pode usar para resolver um erro?
Usar console.log() para inspecionar valores — é o método mais simples e imediato.

Passos simples:

1- Leia a mensagem de erro e veja a linha indicada.
2- Na linha ou antes dela, coloque console.log(variavelSuspeita) para ver o valor real.
3- Ajuste o código com base no que você descobriu.

Exemplo prático: você tem um erro ao acessar user.name.*/

function showName(user) {
  console.log(user);        // 1) inspeciona o que chegou aqui
  console.log(user.name);   // 2) vê o valor específico
}

showName(); // se nada foi passado, o primeiro console mostra undefined -> você vê a causa
//Se console.log não for suficiente, o próximo passo é usar o debugger (colocar debugger; no código e abrir as DevTools) para pausar a execução e checar variáveis passo a passo.
