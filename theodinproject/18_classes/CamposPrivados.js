class ContaBancaria {
  #saldo = 0; // variável privada

  depositar(valor) {
    this.#saldo += valor;
    console.log(`Saldo: ${this.#saldo}`);
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saldo: ${this.#saldo}`);
    } else {
      console.log('Saldo insuficiente');
    }
  }
}

const conta = new ContaBancaria();
conta.depositar(100); // Saldo: 100
conta.sacar(50);      // Saldo: 50
// conta.#saldo -> erro! não pode acessar fora

// Começar o nome da propriedade com # → deixa privada, só acessível dentro da classe.
