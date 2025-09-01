// callback é uma função passada como argumento em outra função

function exibir(num){
    console.log("A operação resultou em: " + num);
}

// callback síncrono
function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

// callback síncrono
function multiplicacao(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir); // passando a função exibir como um argumento
multiplicacao(2, 4, exibir);

// callback assíncrono

function tratarRespostaAPI(resposta){
    sessionStorage.setItem('RespostaAPI', JSON.stringify(resposta));
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => tratarRespostaAPI(json))