/* O DOM, ou Document Object Model (Modelo de Objetos do Documento),
  é uma representação estruturada e hierárquica de um documento HTML ou XML.
  Ele é uma interface de programação que permite que os programadores acessem
  e manipulem os elementos, conteúdo e estrutura de uma página da web de forma dinâmica,
  usando linguagens de programação como JavaScript.
*/

// Exemplo de acesso a elementos do DOM por ID
let meuElemento = document.getElementById("meuId");
console.log(meuElemento);

// Exemplo de acesso a elementos do DOM por classe
let meusElementos = document.getElementsByClassName("minhaClasse");
console.log(meusElementos);

// Exemplo de acesso a elementos do DOM por tag
let paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

// Exemplo de acesso a elementos do DOM por seletor CSS
let elementoSelecionado = document.querySelector(".minhaClasse");
console.log(elementoSelecionado);

// Exemplo de acesso a elementos do DOM por seletor CSS (múltiplos elementos)
let elementosSelecionados = document.querySelectorAll("p");
console.log(elementosSelecionados);

// Exemplo de criação de um novo elemento e adição ao DOM
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo parágrafo";
document.body.appendChild(novoParagrafo);
console.log(novoParagrafo);

// Exemplo de remoção de um elemento do DOM
let elementoParaRemover = document.getElementById("elementoParaRemover");
elementoParaRemover.parentNode.removeChild(elementoParaRemover);
console.log("Elemento removido:", elementoParaRemover);

// Exemplo de modificação de elementos do DOM
let elementoParaModificar = document.getElementById("elementoParaModificar");
elementoParaModificar.textContent = "Novo texto";
console.log("Elemento modificado:", elementoParaModificar);

// Exemplo de trabalhar com formulários
let formulario = document.getElementById("meuFormulario");
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    let input = document.getElementById("meuInput");
    let valorInput = input.value;
    console.log("Valor do input: " + valorInput);
});

