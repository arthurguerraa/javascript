const botao = document.getElementById('botao-funcao');

//funcção normal
function alerteUsuario(){
    alert('Botão foi clicado pelo usuário');
}

// ideal para eventos DOM, e para casos em que a função não será reutilizada
//função anônima, definir a função dentro do próprio evento sem colocar um nome pra ela
botao.addEventListener('click', function(){
    alert('Botão foi clicado pelo usuário');
});