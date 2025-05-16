var pessoa = {
    nome: 'Messi',
    idade: 28
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area: function(lado){ //método do objeto
        return lado * lado;
    },
    perimetro: function(lado){ //método do objeto
        return lado + lado + lado + lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));