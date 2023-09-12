/* 
   Async/Await:
     O async é uma palavra-chave usada antes de uma função para indicar que ela 
     contém operações assíncronas.
     O await é usado dentro de funções async para esperar a conclusão de uma Promise
     antes de continuar a execução do código.
     Torna o código assíncrono mais semelhante à aparência de código síncrono, 
     tornando-o mais legível e fácil de entender.
*/

// Função assíncrona que busca e processa dados da API
async function buscarEProcessarDados() {
    try {
        await new Promise(function (resolve) {
            setTimeout(function () {
                console.log("Dados da API obtidos.");
                resolve();
            }, 2000);
        });
        console.log("Dados processados com sucesso!");
    } catch (erro) {
        console.error(erro);
    }
}

// Chamando a função assíncrona
buscarEProcessarDados();
