// 1- Crie uma função chamada add7: Receba um número e retorne esse número somado a 7.

function add7(a){
    return a + 7;
}


console.log(add7(1));

// 2- Crie uma função chamada multiply: Receba dois números e retorne o produto deles (multiplicação).

function multiply(a, b){
    return a * b;
}

console.log(multiply(2, 2));


// 3- Crie uma função chamada capitalize: Receba uma string e retorne essa string com apenas a primeira letra maiúscula, independente de a entrada estar em minúsculas, MAIÚSCULAS ou mIsTuRaDa.

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // charAt(0) pega o caractere na posição 0 da string (o primeiro caractere).
    // slice(1) pega a string a partir do índice 1 até o final.
}

console.log(capitalize("javascript")); // → "Javascript"
console.log(capitalize("JAVASCRIPT")); // → "Javascript"
console.log(capitalize("jAvAsCrIpT")); // → "Javascript"


// 4- Crie uma função chamada lastLetter: Receba uma string e retorne a última letra dessa string.

function lastLetter(str){
    return str.charAt(str.length - 1);
}

console.log(lastLetter('abcd'));

// O charAt() é um método do JavaScript que retorna o caractere de uma string na posição que você indicar.
// Ele recebe como parâmetro o índice (posição) do caractere, lembrando que o índice começa do 0.