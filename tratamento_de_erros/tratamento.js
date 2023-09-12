/* 

    O tratamento de erros em JavaScript envolve:

    1. Try-Catch: O uso de blocos `try` e `catch` para identificar e lidar com exceções
     durante a execução do código. O bloco `try` envolve o código que pode gerar uma 
     exceção, e o bloco `catch` captura e lida com a exceção, permitindo que o programa
     continue a ser executado em vez de quebrar.

    2. Finally: O bloco `finally` (opcional) é usado para definir código que será executado,
     independentemente de ocorrer ou não uma exceção no bloco `try`.
     É útil para ações de limpeza ou liberação de recursos.

    3. Lançamento de Exceções: Os desenvolvedores podem lançar exceções manualmente 
    (ou "throw") para sinalizar erros personalizados ou categorizar problemas específicos
     no código.

   Em resumo, o tratamento de erros em JavaScript permite que os desenvolvedores controlem 
   e gerenciem exceções durante a execução do programa, mantendo-o em funcionamento e evitando
   falhas inesperadas.
*/

try {
    // Código que pode gerar um erro
    let resultado = 10 / 0; // Tentativa de divisão por zero
    console.log("Resultado:", resultado);
  } catch (erro) {
    // Bloco de código executado se ocorrer um erro
    console.error("Ocorreu um erro:", erro);
  } finally {
    // Bloco de código opcional executado sempre, independentemente de erro ou não
    console.log("Bloco 'finally' sempre é executado.");
  }
  
  console.log("Programa continua após o tratamento de erro.");
  