let globalVar = "Eu sou global"; // Variável global

function funcaoLocal() {
  let localVar = "Eu sou local"; // Variável local
  console.log(localVar);
}

funcaoLocal(); // Chamando a função
console.log(globalVar); // Acessando a variável global
