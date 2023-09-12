
// Criando um objeto com métodos.
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,

    ligar: function () {
      console.log("O carro está ligado.");
    },
    desligar: function () {
      console.log("O carro está desligado.");
    },
  };
  
  // Neste código, criamos um objeto chamado 'carro' com várias propriedades, incluindo 'marca', 'modelo' e 'ano'.
  // Além disso, também definimos métodos para o objeto 'carro'. Métodos são funções associadas a objetos.
  
  // O método 'ligar' imprime uma mensagem dizendo que o carro está ligado quando é chamado.
  // O método 'desligar' imprime uma mensagem dizendo que o carro está desligado quando é chamado.
  
  // Adicionando um método ao objeto.
  carro.trocarMarcha = function () {
    console.log("Trocando de marcha.");
  };
  
  // Aqui, adicionamos um novo método chamado 'trocarMarcha' ao objeto 'carro'.
  // Esse método também imprime uma mensagem quando é chamado, indicando que está trocando de marcha.
  
  // Agora, o objeto 'carro' contém tanto propriedades (marca, modelo, ano) quanto métodos (ligar, desligar, trocarMarcha).
  