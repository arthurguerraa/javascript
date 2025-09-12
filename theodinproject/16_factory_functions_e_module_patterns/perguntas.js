/* 1- Como funciona o escopo em JavaScript?
Escopo define onde suas variáveis estão acessíveis.

Escopo global: variáveis acessíveis em qualquer lugar.

Escopo de função: variáveis só existem dentro daquela função.

Escopo de bloco (let/const): variáveis só existem dentro de {}. */

let global = 'sou global';

function minhaFuncao() {
    let local = 'sou local';
    console.log(global); // ok
    console.log(local);  // ok
}
// console.log(local); erro! fora do escopo


/* 2- O que são closures e como ajudam a criar variáveis privadas?
Uma closure é quando uma função “lembra” das variáveis do seu escopo mesmo depois que a função externa termina. Isso permite criar variáveis privadas. */

function contador() {
    let count = 0; // variável privada
    return function() {
        count++;
        console.log(count);
    };
}

const c = contador();
c(); // 1 
c(); // 2
c(); // 3


/* 3- Problemas comuns com construtores

- Esquecer de usar new → this não funciona como esperado.
- Métodos duplicados para cada instância (consome mais memória).
- Dificuldade de criar variáveis privadas diretamente. */


/* 4- Variáveis privadas em factory functions e sua utilidade
Factory functions permitem esconder dados internos usando closures. Útil para proteger informações que não devem ser acessadas externamente, como senhas, contadores internos, ou estado interno de um módulo. */

const criarPessoa = (nome) => {
    let idade = 0; // privada
    return {
        crescer() { idade++; },
        mostrarIdade() { console.log(idade); }
    };
};
const p = criarPessoa('Ana');
p.mostrarIdade(); // 0 



/* 5- Como implementar herança prototípica com factory functions?
Você pode criar objetos base e “decorar” com funções adicionais: */

const animal = (nome) => ({
    nome,
    comer() { console.log(`${nome} está comendo`); }
});

const cachorro = (nome) => {
    const obj = animal(nome);
    obj.latir = () => console.log(`${nome} está latindo`);
    return obj;
};

const rex = cachorro('Rex');
rex.comer(); // Rex está comendo
rex.latir(); // Rex está latindo 



/* 6- Como funciona o module pattern?
O module pattern é um padrão que cria um módulo isolado com estado privado, retornando apenas métodos públicos. Normalmente é feito com IIFE: */

const Modulo = (function() {
    let privado = 0;
    function incrementar() { privado++; }
    function mostrar() { console.log(privado); }
    return { incrementar, mostrar };
})();

Modulo.incrementar();
Modulo.mostrar(); // 1 



/* 7- O que significa IIFE e para que serve?
IIFE = Immediately Invoked Function Expression.
É uma função que se executa assim que é criada. Serve para criar escopo privado imediatamente, evitando poluir o escopo global. */

(function() {
    let segredo = 'só aqui';
    console.log('executando IIFE');
})(); 



/* 8- Conceito de namespacing e como factory functions ajudam na encapsulação
Namespacing significa colocar seu código dentro de “espaços nomeados” para evitar conflitos. Factory functions ajudam porque cada objeto criado é isolado e pode ter estado próprio sem poluir o global. */