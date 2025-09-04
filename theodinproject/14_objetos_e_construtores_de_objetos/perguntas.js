/* 1) Como você escreve um construtor de objetos e instancia o objeto?

Um construtor é uma função regular que, por convenção, recebe inicial maiúscula. Dentro dele você atribui propriedades ao this: */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

//Para instanciar (criar) um objeto a partir desse construtor, usa-se new:

const player = new Player('steve', 'X');
console.log(player.name); // 'steve'



/* 2) Como você pode evitar que um construtor de objeto seja chamado sem usar a palavra-chave new?

Use a metapropriedade new.target dentro do construtor para detectar se ele foi chamado com new. Se não foi, lance um erro: */

function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
}

//Assim você evita chamadas acidentais que não criariam corretamente a instância.



/* 3) O que é um protótipo e como ele pode ser usado?

Protótipo (prototype) é outro objeto associado a um objeto original — o original herda propriedades e métodos do seu protótipo.
No caso de um construtor Player, o protótipo acessível é Player.prototype. Propriedades/métodos definidos ali ficam disponíveis a todas as instâncias: */

Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
};

player1.sayHello(); // funciona mesmo não estando sayHello diretamente em player1

//Para ver o protótipo de um objeto use Object.getPrototypeOf(obj); evite usar .__proto__ (não recomendado/obsoleto).



/* 4) O que é herança prototipal?

Herança prototipal é o mecanismo pelo qual objetos “herdam” propriedades e métodos seguindo a cadeia de protótipos:
    - Uma instância aponta para Constructor.prototype.
    - Esse Constructor.prototype por sua vez pode apontar para outro protótipo (por exemplo Object.prototype), formando uma cadeia.
A busca por uma propriedade faz o motor percorrer essa cadeia até encontrar a propriedade ou até atingir null (fim da cadeia).

Vantagens explicadas no texto:
    - Economia de memória — métodos/valores comuns ficam em um lugar só (prototype) em vez de serem duplicados em cada instância.
    - Permite reuso através da cadeia (instâncias acessam métodos definidos em protótipos mais altos). */



/* 5) Quais são as regras básicas do que fazer e do que não fazer em herança prototipal?

Faça:
    - Defina métodos e propriedades compartilhadas no Constructor.prototype para reaproveitamento e economia de memória.
    = Use Object.setPrototypeOf() se precisar configurar explicitamente a cadeia de protótipos (faça isso antes de criar as instâncias).

Não faça:
        - Não atribua Player.prototype = Person.prototype; — isso faz ambos apontarem para o mesmo objeto protótipo (referência compartilhada) e provoca efeitos colaterais quando editar um deles.
        - Não use .__proto__ para manipular protótipos (é não-padrão / obsoleto).
        - Evite usar Object.setPrototypeOf() depois de já ter criado muitas instâncias — pode causar problemas/performance.
        - Evite mutações inesperadas no protótipo que afetem todas as instâncias de forma não intencional.    */



/* 6) Como this se comporta em diferentes situações?

No contexto mostrado no artigo:
    - Dentro de um construtor, this refere-se à instância que está sendo criada (quando chamado com new).
    - Em métodos definidos no protótipo (ex.: Player.prototype.sayName = function() { ... }), quando chamados como player1.sayName() o this refere-se ao objeto player1.

O artigo também avisa que o comportamento de this muda conforme a forma de chamada da função (por exemplo: chamada direta, chamada com .call/.apply, arrow functions, ou ausência de new) e recomenda ler o artigo específico sobre this para entender armadilhas e variações.

Observação prática do texto: por isso é útil usar new.target para garantir construtores e ficar atento à forma como funções/métodos são invocados para saber o que this vai referenciar.      */  









