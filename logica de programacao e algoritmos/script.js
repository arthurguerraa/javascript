function contagem(n) {
  if (n === 0) { // <-- caso base (quando parar)
    console.log("Fim!");
    return;
  }
  console.log(n);
  contagem(n - 1); // <-- chamada recursiva
}

contagem(5);

function contagemRegressiva(n){
    if(n === 0){
        return "Fim!";
    }
    console.log(n);
    contagemRegressiva(n - 1);
}

contagemRegressiva(3);

function somaAteUm(n){
    if(n === 1){
        return 1;
    }
    return n + somaAteUm(n - 1);
}

console.log(somaAteUm(5));