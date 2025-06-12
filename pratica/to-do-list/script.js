// 1. Seleciona os elementos do DOM que vamos usar
const inputNovaTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

// 2. Função para criar um <li> com texto + botão de remover
const criarElementoTarefa = (texto) =>{

    // Cria o <li> e o <span> para o texto
    const li = document.createElement('li');
    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;

    // Cria o botão de remover
    const btnRemover = document.createElement('button');
    btnRemover.textContent = "X";
    btnRemover.classList.add('btn-remover');

    // Quando clicar no botão de remover, apaga o <li> inteiro
    btnRemover.addEventListener('click', () => {
        li.remove();
    });

    // Quando clicar em qualquer lugar do item (li), marca como concluído
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Monta o <li>: [ <span>texto</span> ] [ botão X ]
    li.appendChild(spanTexto);
    li.appendChild(btnRemover);

    return li;
};

// 3. Função que lê o valor do input e adiciona à lista
const adicionarTarefa = () => {
    const texto = inputNovaTarefa.value.trim(); 
    if(texto === '')return; // evitar adicionar vazio

    // Cria o <li> usando a função acima
    const tarefaLi = criarElementoTarefa(texto);
    listaTarefas.appendChild(tarefaLi);

     // Limpa o campo de input e devolve foco
     inputNovaTarefa.value = '';
     inputNovaTarefa.focus();
};

// 4. Ouvinte de clique no botão "Adicionar" (arrow function)
btnAdicionar.addEventListener('click', () => {
    adicionarTarefa();
});

// 5. Também vamos adicionar a tarefa quando apertar Enter dentro do input
inputNovaTarefa.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        adicionarTarefa();
    }
})

    /*
        Ao usar .trim(), você garante que:

        " Olá mundo ".trim() vire "Olá mundo".

        " ".trim() vire "" (string vazia).
    */ 
