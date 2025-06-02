//setTimeout - é uma função nativa do javascript que é executada após o tempo determinado

console.log('Antes do setTimeout');

setTimeout(function(){
    console.log('Testando o setTimeout');
}, 2000); // 2 segundos

console.log('Depois do setTimeout');


//setInterval - é uma função nativa do javascript que é executada toda hora de acordo com o intervalo de tempo determinado

setInterval(function(){
    console.log('Testando setInterval');
}, 1000); // 1 segundo