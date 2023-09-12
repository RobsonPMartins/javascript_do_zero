// Criando um objeto simples com propriedades.
let pessoa = {
    nome: "Robson",
    idade: 30,

    saudacao: function() {
      console.log("Ola meu nome e: " + this.nome + " tenho " + this.idade + " anos, " + "e sou " + this.profissao + ".");
    },
  };
  
  // O código acima cria um objeto chamado 'pessoa' com duas propriedades: 'nome' e 'idade'.
  // O objeto é definido com chaves {} e as propriedades são definidas no formato "chave: valor".
  
  // Adicionando uma propriedade ao objeto.
  pessoa.profissao = "Programador";
  
  // Aqui, adicionamos uma terceira propriedade chamada 'profissao' ao objeto 'pessoa'.
  // Para isso, usamos a sintaxe objeto.propriedade = valor, onde 'pessoa' é o objeto,
  // 'profissao' é a nova propriedade que estamos adicionando, e "Programadora" é o valor atribuído a essa propriedade.
  
  // Agora, o objeto 'pessoa' possui três propriedades: 'nome', 'idade' e 'profissao'.
  pessoa.saudacao();