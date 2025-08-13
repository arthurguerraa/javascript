function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

//Mesma solução usando .filter, .map e .reduce
function sumOfTripledEvens1(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

/*
array.filter((num) => num % 2 === 0)

- filter percorre o array e cria um novo array com apenas os elementos que passam no teste.
- (num) => num % 2 === 0 é uma arrow function (função rápida). Para cada num:

    num % 2 é o resto da divisão por 2.
    === 0 verifica se o resto é zero → número par.

- Resultado: de [1,2,3,4,5] vira [2,4].

.map((num) => num * 3)

- map cria um novo array transformando cada elemento pelo que a função manda.
- (num) => num * 3 pega cada num e multiplica por 3.
- Resultado (seguindo o exemplo): de [2,4] vira [6,12].

.reduce((acc, curr) => acc + curr)
- reduce pega o array e reduz a um único valor usando a função passada.
- A função recebe dois parâmetros:
    acc = acumulador (o resultado parcial até agora).
    curr = item atual do array.
-(acc, curr) => acc + curr soma acc com curr.

Então [6,12] vira 18.
Atenção: aqui você não passou um initialValue para reduce. Isso significa:
    Se o array tiver pelo menos um elemento: acc começa como o primeiro elemento e curr como o segundo.
    Se o array ficar vazio (por exemplo, você passou [] ou nenhum número par), chamar reduce sem initialValue lança um erro. Por segurança, costuma-se passar 0 como initialValue: .reduce((acc,curr) => acc + curr, 0).
*/ 

console.log(sumOfTripledEvens(vetor));
console.log(sumOfTripledEvens1(vetor));

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



