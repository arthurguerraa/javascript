// 3- Crie uma função chamada capitalize: Receba uma string e retorne essa string com apenas a primeira letra maiúscula, independente de a entrada estar em minúsculas, MAIÚSCULAS ou mIsTuRaDa.

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    // charAt(0) pega o caractere na posição 0 da string (o primeiro caractere).
    // slice(1) pega a string a partir do índice 1 até o final.
}

console.log(capitalize("javascript")); // → "Javascript"
console.log(capitalize("JAVASCRIPT")); // → "Javascript"
console.log(capitalize("jAvAsCrIpT")); // → "Javascript"


