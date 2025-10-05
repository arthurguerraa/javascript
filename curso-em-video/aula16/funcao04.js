// 5! = 5 x 4 x 3 x 2 x 1

function fatorial(n){
    var fat = 1
    for(var i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(fatorial(5))