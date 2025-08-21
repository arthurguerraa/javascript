/* 1) Qual é a diferença entre objetos e arrays?
- Arrays são usados para listas ordenadas de valores.
- Acesso por índice numérico (arr[0]).
- Têm a propriedade length e métodos úteis para listas (push, pop, map, filter, reduce, etc.).
    Ex.: uma lista de nomes, uma sequência de números.

- Objetos são usados para pares chave → valor (dicionários).
- A chave normalmente é uma string (ou Symbol) e você acessa por obj.chave ou obj["chave"].
- Ótimo para representar uma entidade com propriedades (por exemplo, um usuário com nome, idade, email).
    Ex.: { nome: "Ana", idade: 25 }.

Observação prática: Arrays são, na verdade, um tipo de objeto em JavaScript, mas têm comportamento especial (índices numéricos, length, métodos de array) que os torna ideais para listas.
Exemplos: */

// array (lista ordenada)
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]); // "banana"

// objeto (mapa de propriedades)
const usuario = { nome: "João", idade: 30 };
console.log(usuario.nome); // "João"


/* 2) Como você acessa propriedades de um objeto?
Duas formas principais:

- Dot notation (mais comum, mais limpa) */

const pessoa = { nome: "Lara", idade: 22 };
console.log(pessoa.nome); // "Lara"
pessoa.idade = 23;        // altera propriedade

// Bracket notation (útil quando a chave vem como string variável ou tem caracteres não válidos para dot)

const key = "idade";
console.log(pessoa[key]); // 23

const obj = { "nome-completo": "Lara Silva" };
console.log(obj["nome-completo"]); // precisa ser bracket notation

//Também dá para adicionar e remover propriedades:

pessoa.email = "lara@example.com"; // adiciona
delete pessoa.idade;               // remove


/* 3) Como primitivos e objetos diferem quando você os atribui ou passa para funções?
- Primitivos (number, string, boolean, null, undefined, symbol, bigint) são copiados por valor.
    - Ao atribuir uma variável primitiva a outra, você obtém uma cópia do valor.
    - Ao passar uma primitiva para uma função, a função recebe uma cópia — modificar essa cópia não muda a variável original.

- Objetos (incluindo arrays e funções) são manipulados por referência (na prática: a variável guarda uma referência).
    - Ao atribuir um objeto a outra variável, ambas apontam para o mesmo objeto.
    - Modificar o objeto por uma das variáveis afeta todas que referenciam esse objeto.
    - Se você reatribuir a variável para outro objeto, isso não altera as outras referências.

Exemplos que mostram a diferença: */

// Primitivo: cópia por valor
let a = 10;
let b = a; // b recebe uma cópia de 10
b = 20;
console.log(a); // 10  (a não mudou)
console.log(b); // 20

// Objeto: referência compartilhada
const obj1 = { valor: 10 };
const obj2 = obj1; // obj2 referencia o mesmo objeto
obj2.valor = 20;
console.log(obj1.valor); // 20  (mudou porque é o mesmo objeto)

// Reatribuição não afeta outras referências
let x = { nome: "A" };
let y = x;
x = { nome: "B" }; // x agora aponta para outro objeto
console.log(y.nome); // "A"  (y continua apontando para o objeto original)


// Passando para funções:

function incPrimitive(n) {
  n = n + 1;
}
let num = 1;
incPrimitive(num);
console.log(num); // 1 (não mudou)

function incObjeto(o) {
  o.count = (o.count || 0) + 1;
}
let data = { count: 0 };
incObjeto(data);
console.log(data.count); // 1 (mudou)


// Observação fina (terminologia): JavaScript sempre passa argumentos por valor — mas no caso de objetos o valor passado é uma referência ao objeto. Por isso parece “passar por referência”, porque a função pode usar essa referência para mutar o objeto original.