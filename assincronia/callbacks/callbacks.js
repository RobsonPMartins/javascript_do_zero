
/* 
 Callbacks:
  Os callbacks são funções passadas como argumentos para outras funções.
  São usados para controlar a execução de código assíncrono.
  Permite que uma função seja executada após a conclusão de uma operação assíncrona, 
  como uma requisição AJAX.
*/

// Função assíncrona que simula uma chamada de API
function buscarDadosAPI(callback) {
    setTimeout(function () {
        console.log("Dados da API obtidos.");
        callback();
    }, 2000);
}

// Função de callback
function processarDados() {
    console.log("Dados processados com sucesso!");
}

// Chamando a função com um callback
buscarDadosAPI(processarDados);
