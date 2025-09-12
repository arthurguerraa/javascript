class Pessoa {
  constructor(nome, idade) { // chamado quando criamos o objeto
    this.nome = nome;       // propriedade pública
    this.idade = idade;     // propriedade pública
  }

  dizerOi() {               // método público
    console.log(`Oi, meu nome é ${this.nome}`);
  }
}

const arthur = new Pessoa('Arthur', 25);
arthur.dizerOi(); // Oi, meu nome é Arthur


class Funcionario extends Pessoa { // Funcionario herda Pessoa
  constructor(nome, idade, cargo) {
    super(nome, idade); // chama o constructor da classe pai
    this.cargo = cargo;
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando como ${this.cargo}`);
  }
}

const maria = new Funcionario('Maria', 30, 'Engenheira');
maria.dizerOi();   // Oi, meu nome é Maria
maria.trabalhar(); // Maria está trabalhando como Engenheira
