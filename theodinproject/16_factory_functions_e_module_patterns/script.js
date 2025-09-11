function criarContador(){
    let count = 0;

    return {
        incrementar: function(){
            count++;
            console.log(count);
        },
         resetar: function(){
            count = 0;
            console.log(count);
        }
    }
   
}

const contadorAA = criarContador();
const contadorBB = criarContador();

contadorAA.incrementar();
contadorAA.resetar();


function criarContador2(){
    let count = 0;
    return {
        incrementar: function(){
            count++;
            console.log(count);
        },
         resetar: function(){
            count = 0;
            console.log(count);
        }
    }
}

const contadorC1 = criarContador2();

contadorC1.incrementar;
contadorC1.resetar;



// Factory Function: função que cria e retorna um módulo independente
function criarModuloContador() {
    // Closure: variável privada 'count' acessível apenas pelas funções internas
    let count = 0;

    // Função interna que acessa a variável count
    // Closure protege 'count' mesmo após a função externa terminar
    function incrementar() {
        count++;
        console.log(count);
    }

    function resetar() {
        count = 0;
        console.log(count);
    }

    function mostrar() {
        console.log(`Valor atual: ${count}`);
    }

    // Module Pattern: retornamos apenas os métodos públicos
    // 'count' não é acessível fora do módulo
    return {
        incrementar,
        resetar,
        mostrar
    };
}

// Criando contadores independentes (Factory Function produz múltiplas instâncias)
const contadorA = criarModuloContador();
const contadorB = criarModuloContador();
const contadorC = criarModuloContador();

// Testando cada contador
contadorA.incrementar(); // 1
contadorA.incrementar(); // 2
contadorB.incrementar(); // 1
contadorA.resetar();     // 0
contadorB.incrementar(); // 2
contadorC.mostrar();     // Valor atual: 0

// Tentativa de acessar 'count' diretamente
console.log(contadorA.count); // undefined → protegido pelo Module Pattern + Closure

/* Resumo dos conceitos aplicados:

- Closure: count continua acessível às funções internas mesmo depois que a função externa terminou.
- Factory Function: criarModuloContador() cria instâncias independentes de contadores.
- Module Pattern: só retornamos os métodos públicos (incrementar, resetar, mostrar), escondendo o estado interno (count). */