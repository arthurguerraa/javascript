function Book(title, author, pages, read){
    if(!new.target){
        throw Error("Você deve usar o operador 'new' para chamar o construtor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        if(this.read === false){
            return `${this.title} de ${this.author}, ${this.pages} páginas, ainda não lido`;
        }else{
            return `${this.title} de ${this.author}, ${this.pages} páginas, já lido`;
        }
    }    
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(book1.info());
//nesse caso eu consegui trazer o método porém é uma cópia e não o mesmo método, consome mais memória

// -----------------------------------------------------------------------------------------------------------

// Versão moderna usando Class

class Livro{
    constructor(titulo, autor, paginas, lido){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    informacao(){
         if(this.lido === false){
            return `${this.titulo} de ${this.autor}, ${this.paginas} páginas, ainda não lido`;
        }else{
            return `${this.titulo} de ${this.autor}, ${this.paginas} páginas, já lido`;
        }
    }    
}

const livro1 = new Livro("Harry Potter", "J.K. Rowling", 200, false);
console.log(livro1.informacao());
//nesse caso eu consegui trazer o método e é o mesmo da class prototipo Livro, consome menos memória