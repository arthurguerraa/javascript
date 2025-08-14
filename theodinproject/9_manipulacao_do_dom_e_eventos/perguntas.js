/* 1- O que é o DOM?
O DOM (Document Object Model) é uma representação em árvore do HTML da página — cada tag vira um nó da árvore. É a "visão" que o navegador cria do seu HTML e que o JavaScript pode ler e mudar.

Analogia: o HTML é o manuscrito; o DOM é a maquete que o navegador monta para você manipular.

Como você direciona os nós com os quais quer trabalhar?
Usando seletores ou propriedades de relacionamento. Exemplos comuns: */

document.querySelector("#meuId");        // primeiro elemento com id
document.querySelector(".minhaClasse");  // primeiro com a classe
document.querySelectorAll("button");     // todos os botões (NodeList)
document.getElementById("meuId");        // equivalente antigo

// Também dá para navegar pela árvore: parentNode, children, firstElementChild, nextElementSibling etc.


// 2 - Como você cria um elemento no DOM?
// Com document.createElement(tagName) — ele cria o elemento na memória, não mostra ainda na página.

const el = document.createElement("div");


/* 3- Como você adiciona um elemento ao DOM?
Depois de criar, anexa ao pai com appendChild, append, ou insertBefore: */

const container = document.querySelector("#container");
const el2 = document.createElement("p");
el2.textContent = "Olá!";
container.appendChild(el2); // adiciona como último filho
// ou
container.prepend(el2);    // adiciona no começo
// ou
container.insertBefore(el2, container.firstElementChild); // insere antes de um nó de referência


/* 4- Como você remove um elemento do DOM?
- Método moderno: element.remove()
- Método clássico: parent.removeChild(child) */

const p = document.querySelector("p");
p.remove(); // remove diretamente
// ou
const parent = document.querySelector("#container");
parent.removeChild(p);



/* 5- Como você pode alterar um elemento no DOM?
- Você altera via propriedades do objeto:
- Texto: el.textContent = "novo texto"
- HTML: el.innerHTML = "<span>x</span>"
- Atributos: el.setAttribute("id","meuId") / el.getAttribute("id")
- Classes: el.classList.add("ativo"), .remove(), .toggle()
- Estilos inline: el.style.backgroundColor = "red"

Exemplo: */

const box = document.querySelector(".box");
box.classList.add("highlight");
box.style.border = "1px solid black";
box.setAttribute("data-role", "card");


/* 6- Quando usar textContent ou innerHTML para adicionar texto? Por quê?
- Use textContent para inserir texto simples — seguro (não interpreta HTML) e rápido.
- Use innerHTML só se precisar inserir HTML (tags) — atenção: pode abrir brecha para XSS se inserir conteúdo vindo do usuário.

Exemplo seguro: */
el.textContent = "<b>não será renderado em negrito</b>";

// Exemplo com HTML (cuidado com origem do conteúdo):
el.innerHTML = "<b>será renderado em negrito</b>";


/* 7- Onde colocar a tag <script> no HTML quando trabalhar com DOM?
Duas opções seguras:
- Colocar no final do <body>, logo antes de </body>, assim o DOM já existe quando o script rodar.
- Ou no <head> usando defer: <script src="app.js" defer></script> — também garante que o script execute depois do parse do HTML.
Evite rodar código que acessa nós antes do DOM existir. */



/* 8- Como “events” e “listeners” funcionam?
Um evento é uma ação (clique, tecla, submit etc.). Um listener (ou handler) é uma função que você registra para “ouvir” esse evento e executar código quando ele ocorrer. */

const btn = document.querySelector("button");
btn.addEventListener("click", function(e) {
  console.log("clicou!", e.target);
});

// O navegador cria um objeto Event e o passa como argumento (e) para o listener.

/* 9- Quais são três maneiras de usar eventos no seu código?
- Inline no HTML (não recomendado): <button onclick="alert('hi')">
- Propriedade DOM: btn.onclick = handler (só permite 1 handler por evento)
- Event listeners (recomendado): btn.addEventListener("click", handler) — permite múltiplos handlers e mais flexibilidade. */


/* 10- Por que event listeners são o método preferido para lidar com eventos?
Porque:
- Mantêm JS separado do HTML (separation of concerns).
- Permitem vários listeners no mesmo elemento.
- Oferecem opções avançadas (capturing, once, passive).
- Tornam fácil adicionar/remover listeners dinamicamente.

*/


/* 11- Quais são os benefícios de usar funções nomeadas em seus listeners?
- Reuso: mesma função pode ser usada em vários elementos.
- Clareza: o código fica mais legível (btn.addEventListener("click", openModal) em vez de função anônima).
- Remoção: só dá para remover um listener com removeEventListener se você passar a mesma função (precisa ser nomeada ou referenciada). */

function onClick(e) { /* ... */ }
btn.addEventListener("click", onClick);
// depois
btn.removeEventListener("click", onClick);


/* 12- Como você anexa listeners a grupos de nós?
Pegar todos (NodeList) e iterar — normalmente com forEach: */

const buttons = document.querySelectorAll("button"); // NodeList
buttons.forEach(btn => {
  btn.addEventListener("click", () => console.log(btn.id));
});

//Alternativa (delegation) mais eficiente: anexar um único listener no pai e verificar e.target — útil para muitos elementos dinâmicos.


/* 13- Qual é a diferença entre os valores de retorno de querySelector e querySelectorAll?
- querySelector(selector) → retorna o primeiro Element que casa com o seletor (ou null se não achar).
- querySelectorAll(selector) → retorna um NodeList com todos os elementos que casam (pode ser vazio). */


/* 14- O que um “NodeList” contém?
- Um NodeList é uma coleção indexada de nós (tipicamente elementos). Parece com um array (tem length, pode acessar por [0]), mas não é um array completo — faltam alguns métodos. Você pode transformar em array com Array.from(nodeList) ou [...nodeList]. */


/* 15- Explique a diferença entre “capture” e “bubbling”
Quando um evento acontece em um nó, ele passa por três fases:
- Capture (captura) — o evento desce da raiz (document) até o elemento alvo.
- Target — o evento alcança o elemento alvo e dispara listeners do próprio alvo.
- Bubbling (borbulhamento) — o evento sobe do alvo de volta até a raiz, acionando listeners nos ancestrais.

Por padrão, addEventListener registra listeners para a fase de bubbling. Você pode registrar para capture passando um terceiro argumento { capture: true }.

Exemplo com nested divs: */

<div id="pai">
  <div id="filho">
    <button id="botao">Clique</button>
  </div>
</div>

document.querySelector("#pai").addEventListener("click", () => console.log("pai - bubble"));
document.querySelector("#filho").addEventListener("click", () => console.log("filho - bubble"));
document.querySelector("#botao").addEventListener("click", (e) => {
  console.log("botao - target");
  // e.stopPropagation(); // impede que o evento suba (bloqueia bubbling)
});

// Capture example:
document.querySelector("#pai").addEventListener("click", () => console.log("pai - capture"), { capture: true });


/* Fluxo quando clicar no botão (sem stopPropagation):
- Capture: pai (capture) → filho (capture)
- Target: botão (target)
- Bubbling: filho (bubble) → pai (bubble)

Usar stopPropagation() impede o evento de continuar sua subida. preventDefault() previne o comportamento padrão (ex.: submit de form, seguir link). */