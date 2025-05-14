function subtracao(a, b){
    return a - b;
}

// Quando uma função só tem uma instrução e essa instrução é a instrução de retorno, pode apagar o return e deixar o código mais limpo
const subtracao2 = (a, b) => a - b;


function somar2(a){
    return a + 2;
}

// Quando uma função só um parâmetro, o parâmetro não precisa dos parênteses
const somar2versao2 = a => a + 2;


function diaDoMes(){
    return (new Date()).getDate();
}

// Quando uma função só tem uma instrução e essa instrução é a instrução de retorno, pode apagar o return e deixar o código mais limpo
// Função sem parâmetros continua usando o parênteses
const diaDoMesVersao2 = () => new Date().getDate();


function superFuncao(a, b){
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}

const superFuncaoVersao2 = (a, b) => {
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}


console.log(diaDoMesVersao2());

