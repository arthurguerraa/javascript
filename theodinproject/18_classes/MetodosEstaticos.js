class Matematica {
  static somar(a, b) {
    return a + b;
  }
}

console.log(Matematica.somar(2, 3)); // 5
// Não precisa criar instância para usar

// static → método pertence à classe, não ao objeto criado.