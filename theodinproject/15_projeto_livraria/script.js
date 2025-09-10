function Livro(titulo, autor, paginas, lido = false) {
      if (!new.target) {
        throw Error("Você deve usar o operador 'new' para chamar o construtor");
      }
      this.identificador = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = Number(paginas);
      this.lido = Boolean(lido);

      // (não colocamos o método info dentro do construtor — usaremos o prototype,
      // mas para ficar igual ao exemplo original mostramos também como seria dentro:)
      // this.info = function() { ... }  // escolha do curso: preferimos prototype abaixo
    }

    // método no prototype (economiza memória, disponível para todas as instâncias)
    Livro.prototype.info = function() {
      const textoLido = this.lido ? "lido" : "não lido";
      return `${this.titulo} de ${this.autor}, ${this.paginas} páginas, ${textoLido}`;
    };

    Livro.prototype.alternarLido = function() {
      this.lido = !this.lido;
      return this.lido;
    };

    // ----- Armazenamento dos livros (array) -----
    const minhaBiblioteca = [];

    function adicionarLivroNaBiblioteca({ titulo, autor, paginas, lido }) {
      const livro = new Livro(titulo, autor, paginas, lido);
      minhaBiblioteca.push(livro);
      return livro;
    }

    // ----- Renderizar a biblioteca no DOM -----
    const containerBiblioteca = document.getElementById('biblioteca');

    function renderizarBiblioteca() {
      containerBiblioteca.innerHTML = '';
      minhaBiblioteca.forEach(livro => {
        const card = document.createElement('article');
        card.className = 'cartao-livro';
        card.dataset.identificador = livro.identificador;

        card.innerHTML = `
          <h4>${livro.titulo}</h4>
          <p>Autor: ${livro.autor}</p>
          <p>Páginas: ${livro.paginas}</p>
          <p>Status: <span class="status-lido">${livro.lido ? 'Lido' : 'Não lido'}</span></p>
          <div class="controles">
            <button class="botao-alternar-lido">Alternar Leitura</button>
            <button class="botao-remover">Remover</button>
          </div>
        `;

        const btnAlternar = card.querySelector('.botao-alternar-lido');
        const btnRemover = card.querySelector('.botao-remover');

        btnAlternar.addEventListener('click', () => alternarLeituraLivro(livro.identificador));
        btnRemover.addEventListener('click', () => removerLivro(livro.identificador));

        containerBiblioteca.appendChild(card);
      });
    }

    // ----- Remover e alternar status -----
    function removerLivro(identificador) {
      const indice = minhaBiblioteca.findIndex(b => b.identificador === identificador);
      if (indice === -1) return;
      minhaBiblioteca.splice(indice, 1);
      renderizarBiblioteca();
    }

    function alternarLeituraLivro(identificador) {
      const livro = minhaBiblioteca.find(b => b.identificador === identificador);
      if (!livro) return;
      livro.alternarLido();
      renderizarBiblioteca();
    }

    // ----- Formulário / diálogo -----
    const botaoNovoLivro = document.getElementById('botaoNovoLivro');
    const dialogoLivro = document.getElementById('dialogoLivro');
    const formLivro = document.getElementById('formLivro');
    const botaoCancelar = document.getElementById('botaoCancelar');

    botaoNovoLivro.addEventListener('click', () => dialogoLivro.showModal());
    botaoCancelar.addEventListener('click', () => dialogoLivro.close());

    formLivro.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(formLivro);
      const dados = {
        titulo: formData.get('titulo').trim(),
        autor: formData.get('autor').trim(),
        paginas: formData.get('paginas'),
        lido: formData.get('lido') === 'on'
      };
      adicionarLivroNaBiblioteca(dados);
      formLivro.reset();
      dialogoLivro.close();
      renderizarBiblioteca();
    });

    // ----- Inicialização com exemplos -----
    document.addEventListener('DOMContentLoaded', () => {
      adicionarLivroNaBiblioteca({ titulo: 'The Hobbit', autor: 'J.R.R. Tolkien', paginas: 295, lido: false });
      adicionarLivroNaBiblioteca({ titulo: 'Clean Code', autor: 'Robert C. Martin', paginas: 464, lido: true });
      renderizarBiblioteca();
    });