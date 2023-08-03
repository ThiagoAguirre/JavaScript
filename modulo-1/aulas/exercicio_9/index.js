const pessoa1 = {
  nome: "Thiago",
  sobreNome: "Aguirre",
  idade: 21,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobreNome);
console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa2 = criaPessoa("Ferdinando", "arroz", 23);
console.log(pessoa2);
