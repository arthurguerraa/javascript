/* 1- Translate border-left-width to borderLeftWidth
Importância: 5
Escreva a função camelize(str) que transforma palavras separadas por hífen como "my-short-string" em camelCase, ou seja, em "myShortString".
Isto é: remove todos os hífens; cada palavra após um hífen tem sua primeira letra transformada para maiúscula.

Exemplos:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition'; */

function camelize(str) {
  return str
    .split('-') // quebra em partes pelo hífen
    .map((part, i) => i === 0 ? part : (part.charAt(0).toUpperCase() + part.slice(1)))
    .join(''); // junta tudo sem separador
}

// Testes:
console.log(camelize("background-color"));    // "backgroundColor"
console.log(camelize("list-style-image"));    // "listStyleImage"
console.log(camelize("-webkit-transition"));  // "WebkitTransition"
console.log(camelize("my-short-string"));     // "myShortString"
console.log(camelize("a--b"));                // "aB"  (comportamento razoável para hífens consecutivos)


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


