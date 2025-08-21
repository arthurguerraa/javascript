const n1 = "1";
const operador = "+";
const n2 = "1";

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
    // converte as entradas para número (aceita "1", "1.5", etc.)
    const a = parseFloat(n1);
    const b = parseFloat(n2);

    // valida números
    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.error("Entrada inválida: n1 ou n2 não é um número.");
        return null;
    }

    // evita divisão por zero
    if (operador === "/" && b === 0) {
        console.error("Erro: divisão por zero.");
        return null;
    }

    switch(operador){
        case "+":
            return soma(n1, n2);
            break;
        case "-":
            return subtrair(n1, n2);
            break;
        case "*":
            return multiplicar(n1, n2);
            break;
        case "/":
            return dividir(n1, n2);
            break;
        default:
            console.log("Operador inválido");   
            return null;     
    }
}