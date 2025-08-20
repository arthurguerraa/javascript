 // ---------- Configurações ----------
    const TAMANHO_PADRAO = 16; // NxN inicial
    const TAMANHO_MAXIMO = 100; // limite para o prompt

    const elementoGrade = document.getElementById('grade');
    const botaoRedimensionar = document.getElementById('btn-redimensionar');
    const botaoLimpar = document.getElementById('btn-limpar');

    let tamanhoAtual = TAMANHO_PADRAO;

    // ---------- Funções principais ----------

    // Cria a grade NxN dentro do elemento 'grade'
    function criarGrade(tamanho) {
      // limpa grade antiga (útil para recriar)
      elementoGrade.innerHTML = '';

      // dimensões do container em pixels
      const larguraContainer = elementoGrade.clientWidth;
      const alturaContainer = elementoGrade.clientHeight;

      // usamos o menor valor para manter células quadradas
      const areaUsavel = Math.min(larguraContainer, alturaContainer);

      // tamanho de cada célula (inteiro)
      const tamanhoCelula = Math.floor(areaUsavel / tamanho);

      const total = tamanho * tamanho;
      for (let i = 0; i < total; i++) {
        const celula = document.createElement('div');
        celula.classList.add('celula');

        // define dimensão exata para evitar diferenças entre navegadores
        celula.style.width = `${tamanhoCelula}px`;
        celula.style.height = `${tamanhoCelula}px`;

        // atributo para depuração (opcional)
        celula.dataset.indice = i;

        // quando o mouse entra na célula, "pinta" ela
        celula.addEventListener('mouseenter', () => {
          pintarCelula(celula);
        });

        elementoGrade.appendChild(celula);
      }
    }

    // Pinta (marca) uma célula adicionando a classe 'pintada'
    function pintarCelula(celula) {
      celula.classList.add('pintada');
    }

    // Limpa a pintura de todas as células (remove a classe 'pintada')
    function limparGrade() {
      const celulas = elementoGrade.querySelectorAll('.celula');
      celulas.forEach(c => c.classList.remove('pintada'));
    }

    // Pergunta ao usuário quantos quadrados por lado e recria a grade
    function pedirTamanhoERecriar() {
      let entrada = prompt(`Quantos quadrados por lado? (máx ${TAMANHO_MAXIMO})`, tamanhoAtual);
      if (entrada === null) return; // usuário cancelou

      entrada = entrada.trim();
      if (entrada === '') {
        alert('Digite um número válido.');
        return;
      }

      const n = Number(entrada);
      if (Number.isNaN(n) || !Number.isInteger(n) || n <= 0) {
        alert('Digite um número inteiro positivo.');
        return;
      }

      if (n > TAMANHO_MAXIMO) {
        alert(`Escolha no máximo ${TAMANHO_MAXIMO}.`);
        return;
      }

      tamanhoAtual = n;
      criarGrade(tamanhoAtual);
    }

    // ---------- Inicialização ----------

    document.addEventListener('DOMContentLoaded', () => {
      criarGrade(tamanhoAtual);
      console.log('Grade inicial criada:', `${tamanhoAtual}x${tamanhoAtual}`);
    });

    // ---------- Botões e eventos ----------

    botaoLimpar.addEventListener('click', () => {
      limparGrade();
    });

    botaoRedimensionar.addEventListener('click', () => {
      pedirTamanhoERecriar();
    });

    // Recria a grade ao redimensionar a janela (debounce simples)
    let temporizadorRedimensionar = null;
    window.addEventListener('resize', () => {
      clearTimeout(temporizadorRedimensionar);
      temporizadorRedimensionar = setTimeout(() => {
        // recria com o mesmo número de células por lado
        criarGrade(tamanhoAtual);
      }, 200);
    });