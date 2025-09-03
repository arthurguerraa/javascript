/* 2- Escreva uma função filterRange(arr, a, b) que recebe um array arr, procura por elementos com valor maior ou igual a a e menor ou igual a b e retorna o resultado como um novo array.

A função não deve modificar o array original. Deve retornar o novo array.

Por exemplo: 
alert(filtered); // 3,1 (valores que correspondem)
alert(arr); // 5,3,8,1 (não modificado) */

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
  const novoArr = arr.filter((valor) =>{
    return valor >= a && valor <= b;
  });
  return novoArr;
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered);