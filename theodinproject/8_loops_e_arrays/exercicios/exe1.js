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





