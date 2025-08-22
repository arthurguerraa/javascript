/* ----------------------
  script.js - lógica da calculadora
  Implementa: passo 5 (popular display) e passo 6 (operar)
------------------------*/

// --- Funções matemáticas básicas (usadas por calcular) ---
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

// calcular recebe strings ou números; converte internamente e retorna número ou null em erro
function calcular(n1, operador, n2) {
  const a = parseFloat(n1);
  const b = parseFloat(n2);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Entrada inválida: n1 ou n2 não é um número.");
    return null;
  }

  if (operador === "/" && b === 0) {
    // mensagem engraçada/amorosa, mas não trava
    console.error("Erro: divisão por zero. O universo não permite isso — resultado indefinido.");
    return null;
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
      console.error("Operador inválido");
      return null;
  }
}

// --- Estado da calculadora ---
const calculator = {
  displayValue: "0",      // o texto atual no display (string)
  firstOperand: null,     // número (ou null)
  operator: null,         // operador atual (string) ou null
  waitingForSecond: false,// se true, o próximo dígito substitui o display
  resultShown: false      // se true, o display mostra um resultado recém-calculado
};

// --- Seletores DOM ---
const displayEl = document.getElementById("display");
const keysEl = document.querySelector(".keys");

// Atualiza o display na tela com displayValue (formatando)
function updateDisplay() {
  displayEl.textContent = calculator.displayValue;
}

// formata número para exibição: limite de casas e remoção de zeros finais
function formatResult(value) {
  if (value === null) return "Erro";
  // evita problemas de ponto flutuante mostrando até 10 casas significativas
  const rounded = parseFloat(Number(value).toFixed(10));
  // converte para string e remove ".0" desnecessário
  return String(rounded);
}

// Quando o usuário clica em um dígito
function inputDigit(digit) {
  if (calculator.waitingForSecond) {
    // começando o segundo operando
    calculator.displayValue = digit;
    calculator.waitingForSecond = false;
  } else if (calculator.resultShown) {
    // resultado foi mostrado; digitar um número inicia novo cálculo
    calculator.displayValue = digit;
    calculator.resultShown = false;
    calculator.firstOperand = null;
    calculator.operator = null;
  } else {
    // anexar digito (evita zeros à esquerda)
    calculator.displayValue = calculator.displayValue === "0" ? digit : calculator.displayValue + digit;
  }
}

// Tratamento do ponto decimal
function inputDecimal() {
  if (calculator.waitingForSecond) {
    // se acabamos de apertar operador, iniciar segundo número com "0."
    calculator.displayValue = "0.";
    calculator.waitingForSecond = false;
    return;
  }
  if (!calculator.displayValue.includes(".")) {
    calculator.displayValue += ".";
  }
}

// Limpa tudo (C)
function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingForSecond = false;
  calculator.resultShown = false;
}

// Backspace: remove último caractere
function backspace() {
  if (calculator.resultShown) {
    // se resultado mostrado, backspace deveria limpar resultado e voltar a zero
    resetCalculator();
    return;
  }
  if (calculator.displayValue.length === 1) {
    calculator.displayValue = "0";
  } else {
    calculator.displayValue = calculator.displayValue.slice(0, -1);
  }
}

// Percent: converte o valor atual em porcentagem (divide por 100)
function percent() {
  const val = parseFloat(calculator.displayValue);
  if (Number.isNaN(val)) return;
  calculator.displayValue = String(val / 100);
}

// Quando o usuário clica num operador (+ - × ÷)
function handleOperator(nextOperator) {
  const inputValue = calculator.displayValue;

  // Se não tivermos primeiro operando, setamos
  if (calculator.firstOperand === null && !calculator.waitingForSecond) {
    calculator.firstOperand = parseFloat(inputValue);
  } else if (calculator.operator && !calculator.waitingForSecond) {
    // Há um operador definido e usuário já digitou o segundo operando: calcular primeiro
    const result = calcular(calculator.firstOperand, calculator.operator, inputValue);
    if (result === null) {
      // erro (por ex. divisão por zero) -> mostra mensagem e zera estado
      calculator.displayValue = "Erro";
      calculator.firstOperand = null;
      calculator.operator = null;
      calculator.waitingForSecond = false;
      calculator.resultShown = true;
      updateDisplay();
      return;
    }
    const formatted = formatResult(result);
    calculator.displayValue = formatted;
    calculator.firstOperand = parseFloat(formatted);
    calculator.resultShown = true;
  }

  // Se o usuário pressionou operadores consecutivamente, apenas atualizamos o operador
  calculator.operator = nextOperator;
  calculator.waitingForSecond = true; // o próximo dígito começa o segundo operando
}

// Quando o usuário pressiona '='
function handleEquals() {
  if (calculator.operator === null) {
    // nada a fazer
    return;
  }

  if (calculator.waitingForSecond) {
    // usuário apertou operador e em seguida '=' sem digitar segundo número: ignorar
    return;
  }

  const result = calcular(calculator.firstOperand, calculator.operator, calculator.displayValue);
  if (result === null) {
    calculator.displayValue = "Erro";
    calculator.firstOperand = null;
    calculator.operator = null;
    calculator.waitingForSecond = false;
    calculator.resultShown = true;
    updateDisplay();
    return;
  }

  const formatted = formatResult(result);
  calculator.displayValue = formatted;
  calculator.firstOperand = parseFloat(formatted);
  calculator.operator = null;
  calculator.waitingForSecond = false;
  calculator.resultShown = true;
}

// --- Event delegation para as teclas ---
keysEl.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  // identifica tipo por classes ou id/texto
  if (target.classList.contains("clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  if (target.id === "btn-back") {
    backspace();
    updateDisplay();
    return;
  }

  if (target.id === "btn-percent") {
    percent();
    updateDisplay();
    return;
  }

  if (target.classList.contains("operator")) {
    // operador (pega símbolo visível no botão)
    const op = target.textContent.trim();
    handleOperator(op);
    updateDisplay();
    return;
  }

  if (target.classList.contains("equals")) {
    handleEquals();
    updateDisplay();
    return;
  }

  if (target.id === "btn-dot") {
    inputDecimal();
    updateDisplay();
    return;
  }

  // caso seja dígito (0-9)
  const digit = target.textContent.trim();
  if (/^\d$/.test(digit)) {
    inputDigit(digit);
    updateDisplay();
    return;
  }
});

// --- Suporte teclado físico ---
document.addEventListener("keydown", (e) => {
  // números
  if (e.key >= "0" && e.key <= "9") {
    inputDigit(e.key);
    updateDisplay();
    return;
  }

  // ponto decimal
  if (e.key === "." || e.key === ",") { // aceita vírgula do teclado numérico também
    inputDecimal();
    updateDisplay();
    return;
  }

  // operadores básicos
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    // mapear * e / para símbolos exibidos (ou aceitar os mesmos)
    const map = { "*": "×", "/": "÷" };
    const op = map[e.key] || e.key;
    handleOperator(op);
    updateDisplay();
    return;
  }

  // Enter / = para calcular
  if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    handleEquals();
    updateDisplay();
    return;
  }

  // Backspace
  if (e.key === "Backspace") {
    backspace();
    updateDisplay();
    return;
  }

  // Escape -> clear
  if (e.key === "Escape") {
    resetCalculator();
    updateDisplay();
    return;
  }
});

// Inicializa display na carga
updateDisplay();
