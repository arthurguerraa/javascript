const biblioteca = [];

function Livro(titulo, autor, paginas, genero, lido){
    if(!new.target){
        throw Error("Você deve usar o operador 'new' para chamar o construtor")
    }
    this.id = crypto.randomUUID;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.genero = genero;
    this.lido = lido;

    this.info = function(){
        if(this.read === false){
            return `${this.title} de ${this.author}, ${this.pages} páginas, gênero ${genero} e ainda não lido`;
        }else{
            return `${this.title} de ${this.author}, ${this.pages} páginas, gênero ${genero} e já foi lido`;
        }
    }

    this.adicionaLivro = function(livro){
        biblioteca.push(livro);
    }
}

const livro1 = new Livro('A Metamorfose', 'Franz Kafka', 200, 'Ficção', false);
livro1.adicionaLivro(livro1);
console.log(biblioteca);