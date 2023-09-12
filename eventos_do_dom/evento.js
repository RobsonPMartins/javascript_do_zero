// script.js

// Selecionando o elemento botão e o elemento de mensagem pelo ID
let botao = document.getElementById("meuBotao");
let mensagemElement = document.getElementById("mensagem");

// Adicionando um ouvinte de evento de clique ao botão
botao.addEventListener("click", function () {
    // Atualizando o conteúdo do elemento de mensagem
    mensagemElement.textContent = "Você clicou no botão!";
});
