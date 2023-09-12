/*
  Manipulação de strings é o processo de realizar operações em texto (strings)
  em um programa de computador. Isso pode incluir a concatenação (juntar) de strings,
  dividir uma string em partes menores, substituir partes de uma string, converter letras
  maiúsculas em minúsculas e vice-versa, e muito mais. 
  É uma parte essencial da programação para lidar com dados de texto de maneira eficaz.
*/

// Criando duas strings
let string1 = "Olá,";
let string2 = "mundo!";

// Concatenação de strings usando o operador '+'
let resultadoConcatenacao = string1 + " " + string2;
console.log(resultadoConcatenacao); // Saída: "Olá, mundo!"

// Método 'split' divide uma string em um array de substrings com base em um separador
let frase = "Esta é uma frase de exemplo";
let palavras = frase.split(" ");
console.log(palavras); // Saída: ["Esta", "é", "uma", "frase", "de", "exemplo"]

// Método 'replace' substitui uma substring por outra em uma string
let texto = "Olá, [nome]!";
let novoTexto = texto.replace("[nome]", "Robson");
console.log(novoTexto); // Saída: "Olá, Robson!"

// Método 'toUpperCase' converte todos os caracteres da string para maiúsculas
let maiuscula = "texto em maiúsculas";
console.log(maiuscula.toUpperCase()); // Saída: "TEXTO EM MAIÚSCULAS"

// Método 'toLowerCase' converte todos os caracteres da string para minúsculas
let minuscula = "Texto em Minúsculas";
console.log(minuscula.toLowerCase()); // Saída: "texto em minúsculas"
