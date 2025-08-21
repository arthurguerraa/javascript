const n1 = undefined;
const operador = undefined;
const n2 = undefined;

function soma(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

function calcular(n1, operador, n2){
    switch(operador){
        case "+":
            soma(n1, n2);
            break;
        case "-":
            subtrair(n1, n2);
            break;
        case "*":
            multiplicar(n1, n2);
            break;
        case "/":
            dividir(n1, n2);
            break;
        default:
            console.log("Operador inválido")        

    }
}