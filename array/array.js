// Criando um array com alguns elementos.
let frutas = ["Maçã", "Banana", "Laranja"];

// Acessando elementos do array por índice.
let primeiraFruta = frutas[0]; // Retorna "Maçã"
console.log(primeiraFruta);

// Modificando elementos do array.
frutas[1] = "Pera"; // Substitui "Banana" por "Pera"
console.log(frutas);

// Adicionando elementos ao final do array.
frutas.push("Uva"); // Adiciona "Uva" ao final do array
console.log(frutas);

// Removendo o último elemento do array.
let ultimaFruta = frutas.pop(); // Remove e retorna "Uva"
console.log(ultimaFruta);
console.log(frutas);

// Adicionando elementos no início do array.
frutas.unshift("Limão"); // Adiciona "Limão" no início do array
console.log(frutas);

// Removendo o primeiro elemento do array.
let primeiraFrutaRemovida = frutas.shift(); // Remove e retorna "Limão"
console.log(primeiraFrutaRemovida);
console.log(frutas);

// Obtendo uma parte do array usando 'slice'.
let frutasSelecionadas = frutas.slice(1, 3); // Retorna ["Pera", "Laranja"]
console.log(frutasSelecionadas);

// Removendo elementos de uma posição específica usando 'splice'.
frutas.splice(1, 1); // Remove o elemento na posição 1 (Pera)
console.log(frutas);

// Obtendo o índice de um elemento no array.
let indiceLaranja = frutas.indexOf("Laranja"); // Retorna o índice 1
console.log(indiceLaranja);
