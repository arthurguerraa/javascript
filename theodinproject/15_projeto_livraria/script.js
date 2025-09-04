function Livro(titulo, autor, paginas, genero, lido){
    if(!new.target){
        throw Error("Você deve usar o operador 'new' para chamar o construtor")
    }
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

    
}