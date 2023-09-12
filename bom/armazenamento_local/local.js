// Armazenar dados no localStorage
localStorage.setItem("nome", "Alice");
localStorage.setItem("idade", "30");

// Recuperar dados do localStorage
let nome = localStorage.getItem("nome");
console.log("Nome:", nome);

// Armazenar dados no sessionStorage
sessionStorage.setItem("cidade", "Nova York");

// Recuperar dados do sessionStorage
let cidade = sessionStorage.getItem("cidade");
console.log("Cidade:", cidade);
