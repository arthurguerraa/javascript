let biblioteca = [];

function Livro(titulo, autor, paginas, genero, lido){
    if(!new.target){
        throw Error("Você deve usar o operador 'new' para chamar o construtor")
    }
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.genero = genero;
    this.lido = lido;
}

    Livro.prototype.info = function(){
        if(this.lido === false){
            return `${this.titulo} de ${this.autor}, ${this.paginas} páginas, gênero ${this.genero} e ainda não lido`;
        }else{
            return `${this.titulo} de ${this.autor}, ${this.paginas} páginas, gênero ${this.genero} e já foi lido`;
        }
    }

    function adicionaLivro(titulo, autor, paginas, genero, lido){
        const livro = new Livro(titulo, autor, paginas, genero, lido);
        biblioteca.push(livro);
    }

    function displayBooks(){
        const container = document.querySelector("#books-container");
        container.innerHTML = "";

        biblioteca.forEach(livro => {
            const card = document.createElement("div");
            card.classList.add("book-card");

            card.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p>Autor: ${livro.autor}</p>
                <p>Páginas: ${livro.paginas}</p>
                <p>Status: ${livro.lido ? "lido" : "não lido"}
            `
            container.appendChild(card);
        });
    }

adicionaLivro("Harry Potter", "J.K. Rowling", "200", "Ficção", false);
console.log(biblioteca);