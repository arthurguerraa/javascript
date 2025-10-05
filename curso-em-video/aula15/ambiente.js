let num = [1, 2, 3, 4]
num[4] = 6 // adicionando outro valor dentro do vetor, dentro colchetes é a posição depois do igual é o valor
num.push(7) // método pra adicionar um valor na última posição do vetor
num.length // mostra o comprimento do vetor
num.sort() // ordena o vetor em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.indexOf(7) // procura o valor 7 dentro do vetor, ele vai retornar o número da posição onde o valor está armazenado, se não tiver o valor ele vai retornar -1
let pos = num.indexOf(4)
console.log(`O valor 4 está na posição ${pos}`)


for(var i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for(var i in num){ // para cada posição em num eu vou mostrar o índice i
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}


