// Exercícios com reduce
// 1- Some todos os números de um array.
debugger
const numeros1 = [10, 20, 30, 40];
// resultado esperado: 100

const numeros1Soma = numeros1.reduce((soma, n) =>{
    return soma + n;
}, 0);
console.log(numeros1Soma);