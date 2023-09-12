/* 
  Promises:
   As Promises são objetos que representam o resultado de uma operação assíncrona,
   podendo ser resolvidas (sucesso) ou rejeitadas (erro).
   Facilitam o tratamento de código assíncrono, tornando-o mais legível e evitando a "callback hell".
   Permitem encadear operações assíncronas usando os métodos .then() e .catch().
*/

// Função que retorna uma Promise
function buscarDadosAPIPromise() {
    return new Promise(function (resolve, reject) {
        // Simulando uma operação assíncrona com setTimeout
        setTimeout(function () {
            console.log("Dados da API obtidos.");
            // Resolvendo a Promise com uma mensagem de sucesso
            resolve("Dados processados com sucesso!");
        }, 2000); // Espera 2 segundos
    });
}

// Chamando a função com uma Promise
buscarDadosAPIPromise()
    .then(function (resultado) {
        // Quando a Promise é resolvida com sucesso, este trecho é executado
        console.log(resultado); // Exibe a mensagem de sucesso no console
    })
    .catch(function (erro) {
        // Se a Promise for rejeitada (erro), este trecho é executado
        console.error(erro); // Exibe o erro no console
    });
