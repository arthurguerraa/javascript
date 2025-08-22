/* ----------------------
  script.js - lógica da calculadora (tratamento dos gotchas)
------------------------*/

// --- Funções matemáticas básicas ---
function soma(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}

/*
  calcular: converte entradas, valida e retorna:
    - número (resultado)
    - null (erro genérico)
    - "DIV_ZERO" (caso específico de divisão por zero)
*/
function calcular(n1, operador, n2) {
  const a = parseFloat(n1);
  const b = parseFloat(n2);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return null;
  }

  if ((operador === "/" || operador === "÷") && b === 0) {
    // devolvemos um código especial para ser tratado na UI
    return "DIV_ZERO";
  }

  switch (operador) {
    case "+":
      return soma(a, b);
    case "-":
      return subtrair(a, b);
    case "×":
    case "*":
      return multiplicar(a, b);
    case "÷":
    case "/":
      return dividir(a, b);
    default:
      return null;
  }
}

// --- Estado da calculadora ---
const calculadora = {
  displayValue: "0",      // texto atual no display (string)
  primeiroOperando: null, // número (ou null)
  operador: null,         // operador atual (string) ou null
  esperandoSegundo: false,// se true, o próximo dígito substitui o display
  resultadoMostrado: false// se true, o display mostra um resultado recém-calculado
};

// --- Seletores DOM ---
const elementoDisplay = document.getElementById("display");
const teclasEl = document.querySelector(".keys");

// Atualiza o display na tela com displayValue
function atualizarDisplay() {
  elementoDisplay.textContent = calculadora.displayValue;
}

/*
  formataResultado:
  - limita o comprimento máximo do texto do display (MAX_CHARS)
  - reduz casas decimais dinamicamente para caber
  - usa notação exponencial curta se o número inteiro for enorme
*/
function formatarResultado(value) {
  if (value === null) return "Erro";
  if (value === "DIV_ZERO") return "Erro: divisão por 0 — boa tentativa 😉";

  const MAX_CHARS = 12; // tamanho máximo razoável para o display

  // garante que seja número
  const num = Number(value);
  if (!isFinite(num)) return "Erro";

  // formato inicial com até 10 casas decimais
  let str = String(parseFloat(num.toFixed(10)));

  // se já cabe, return
  if (str.length <= MAX_CHARS) return str;

  // se houver parte inteira muito grande, usar exponencial com 6 dígitos significativos
  const intPart = Math.trunc(Math.abs(num)).toString();
  if (intPart.length >= MAX_CHARS) {
    // notação exponencial com 6 dígitos significativos
    return num.toExponential(6);
  }

  // caso haja parte decimal, reduzimos as casas para caber
  const availableForDecimals = MAX_CHARS - intPart.length - (num < 0 ? 1 : 0) - 1; // -1 para o ponto
  const decimals = Math.max(0, availableForDecimals);
  str = String(parseFloat(num.toFixed(decimals)));

  // se ainda não coube (improvável), usa exponencial
  if (str.length > MAX_CHARS) {
    return num.toExponential(6);
  }

  return str;
}

// Quando o usuário clica em um dígito
function inserirDigito(digito) {
  if (calculadora.esperandoSegundo) {
    // começando o segundo operando
    calculadora.displayValue = digito;
    calculadora.esperandoSegundo = false;
  } else if (calculadora.resultadoMostrado) {
    // resultado foi mostrado; digitar um número inicia novo cálculo
    calculadora.displayValue = digito;
    calculadora.resultadoMostrado = false;
    calculadora.primeiroOperando = null;
    calculadora.operador = null;
  } else {
    // anexar dígito (evita zeros à esquerda)
    calculadora.displayValue = calculadora.displayValue === "0" ? digito : calculadora.displayValue + digito;
  }
}

// Tratamento do ponto decimal
function inserirDecimal() {
  if (calculadora.esperandoSegundo) {
    calculadora.displayValue = "0.";
    calculadora.esperandoSegundo = false;
    return;
  }
  if (!calculadora.displayValue.includes(".")) {
    calculadora.displayValue += ".";
  }
}

// Limpa tudo (C)
function resetarCalculadora() {
  calculadora.displayValue = "0";
  calculadora.primeiroOperando = null;
  calculadora.operador = null;
  calculadora.esperandoSegundo = false;
  calculadora.resultadoMostrado = false;
}

// Backspace: remove último caractere
function retroceder() {
  if (calculadora.resultadoMostrado) {
    resetarCalculadora();
    return;
  }
  if (calculadora.displayValue.length === 1) {
    calculadora.displayValue = "0";
  } else {
    calculadora.displayValue = calculadora.displayValue.slice(0, -1);
  }
}

// Porcentagem: converte o valor atual em porcentagem (divide por 100)
function porcentagem() {
  const val = parseFloat(calculadora.displayValue);
  if (Number.isNaN(val)) return;
  calculadora.displayValue = String(val / 100);
}

// Quando o usuário clica num operador (+ - × ÷)
function tratarOperador(proximoOperador) {
  const valorAtual = calculadora.displayValue;

  // Se não tivermos primeiro operando, setamos
  if (calculadora.primeiroOperando === null && !calculadora.esperandoSegundo) {
    calculadora.primeiroOperando = parseFloat(valorAtual);
  } else if (calculadora.operador && !calculadora.esperandoSegundo) {
    // Há um operador definido e usuário já digitou o segundo operando: calcular primeiro
    const resultado = calcular(calculadora.primeiroOperando, calculadora.operador, valorAtual);

    if (resultado === "DIV_ZERO") {
      // mensagem sarcástica de erro: não trava a calculadora
      calculadora.displayValue = "Erro: divisão por 0 — boa tentativa 😉";
      calculadora.primeiroOperando = null;
      calculadora.operador = null;
      calculadora.esperandoSegundo = false;
      calculadora.resultadoMostrado = true;
      atualizarDisplay();
      return;
    }

    if (resultado === null) {
      calculadora.displayValue = "Erro";
      calculadora.primeiroOperando = null;
      calculadora.operador = null;
      calculadora.esperandoSegundo = false;
      calculadora.resultadoMostrado = true;
      atualizarDisplay();
      return;
    }

    const formatado = formatarResultado(resultado);
    calculadora.displayValue = formatado;
    calculadora.primeiroOperando = parseFloat(formatado);
    calculadora.resultadoMostrado = true;
  }

  // Se o usuário pressionou operadores consecutivos, apenas atualizamos o operador (não avaliamos)
  calculadora.operador = proximoOperador;
  calculadora.esperandoSegundo = true; // o próximo dígito começa o segundo operando
}

// Quando o usuário pressiona '='
function tratarIgual() {
  if (calculadora.operador === null) {
    // nada a fazer se não há operador
    return;
  }

  if (calculadora.esperandoSegundo) {
    // usuário apertou operador e em seguida '=' sem digitar segundo número: ignorar
    return;
  }

  const resultado = calcular(calculadora.primeiroOperando, calculadora.operador, calculadora.displayValue);

  if (resultado === "DIV_ZERO") {
    calculadora.displayValue = "Erro: divisão por 0 — boa tentativa 😉";
    calculadora.primeiroOperando = null;
    calculadora.operador = null;
    calculadora.esperandoSegundo = false;
    calculadora.resultadoMostrado = true;
    atualizarDisplay();
    return;
  }

  if (resultado === null) {
    calculadora.displayValue = "Erro";
    calculadora.primeiroOperando = null;
    calculadora.operador = null;
    calculadora.esperandoSegundo = false;
    calculadora.resultadoMostrado = true;
    atualizarDisplay();
    return;
  }

  const formatado = formatarResultado(resultado);
  calculadora.displayValue = formatado;
  calculadora.primeiroOperando = parseFloat(formatado);
  calculadora.operador = null;
  calculadora.esperandoSegundo = false;
  calculadora.resultadoMostrado = true;
}

// --- Delegação de eventos para as teclas ---
teclasEl.addEventListener("click", (evento) => {
  const alvo = evento.target.closest("button");
  if (!alvo) return;

  if (alvo.classList.contains("clear")) {
    resetarCalculadora();
    atualizarDisplay();
    return;
  }

  if (alvo.id === "btn-back") {
    retroceder();
    atualizarDisplay();
    return;
  }

  if (alvo.id === "btn-percent") {
    porcentagem();
    atualizarDisplay();
    return;
  }

  if (alvo.classList.contains("operator")) {
    const op = alvo.textContent.trim();
    tratarOperador(op);
    atualizarDisplay();
    return;
  }

  if (alvo.classList.contains("equals")) {
    tratarIgual();
    atualizarDisplay();
    return;
  }

  if (alvo.id === "btn-dot") {
    inserirDecimal();
    atualizarDisplay();
    return;
  }

  // caso seja dígito (0-9)
  const digito = alvo.textContent.trim();
  if (/^\d$/.test(digito)) {
    inserirDigito(digito);
    atualizarDisplay();
    return;
  }
});

// --- Suporte teclado físico ---
document.addEventListener("keydown", (e) => {
  // números
  if (e.key >= "0" && e.key <= "9") {
    inserirDigito(e.key);
    atualizarDisplay();
    return;
  }

  // ponto decimal
  if (e.key === "." || e.key === ",") {
    inserirDecimal();
    atualizarDisplay();
    return;
  }

  // operadores básicos
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    const mapa = { "*": "×", "/": "÷" };
    const op = mapa[e.key] || e.key;
    tratarOperador(op);
    atualizarDisplay();
    return;
  }

  // Enter / = para calcular
  if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    tratarIgual();
    atualizarDisplay();
    return;
  }

  // Backspace
  if (e.key === "Backspace") {
    retroceder();
    atualizarDisplay();
    return;
  }

  // Escape -> clear
  if (e.key === "Escape") {
    resetarCalculadora();
    atualizarDisplay();
    return;
  }
});

// Inicializa display na carga
atualizarDisplay();
