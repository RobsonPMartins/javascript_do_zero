let pessoa = {
    nome: "Alice",
    idade: 30,
    profissao: "Programadora",
    cidade: "São Paulo",
    hobbies: ["Leitura", "Esportes", "Música"],
    
    saudacao: function () {
      console.log("Olá! Meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    },
  };
  
  // O objeto 'pessoa' contém várias propriedades, incluindo nome, idade, profissão, cidade e hobbies.
  // Também possui um método chamado 'saudacao' que imprime uma mensagem de saudação com base nas propriedades do objeto.
  
  // Podemos acessar as propriedades e chamar o método da seguinte forma:
  console.log("Nome: " + pessoa.nome);
  console.log("Idade: " + pessoa.idade);
  console.log("Profissão: " + pessoa.profissao);
  console.log("Cidade: " + pessoa.cidade);
  console.log("Hobbies: " + pessoa.hobbies.join(", ")); // Usamos 'join' para converter a matriz de hobbies em uma string separada por vírgulas.
  
  // Chamando o método 'saudacao' para imprimir uma mensagem de saudação personalizada.
  pessoa.saudacao();
  