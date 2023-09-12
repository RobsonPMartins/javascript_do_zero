// Definir um cookie
document.cookie = "username=John";

// Ler um cookie
let username = document.cookie;
console.log("Username:", username);

// Excluir um cookie definindo sua data de validade no passado
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
