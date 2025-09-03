// 4- Crie uma função chamada lastLetter: Receba uma string e retorne a última letra dessa string.

function lastLetter(str){
    return str.charAt(str.length - 1);
}

console.log(lastLetter('abcd'));

// O charAt() é um método do JavaScript que retorna o caractere de uma string na posição que você indicar.
// Ele recebe como parâmetro o índice (posição) do caractere, lembrando que o índice começa do 0.