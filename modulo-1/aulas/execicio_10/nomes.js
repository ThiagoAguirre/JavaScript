/*function criapessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa1 = criapessoa('thiago', 'aguirre', 21)

console.log(pessoa1)*/

const pessoa2 = {
  nome: "Thiago",
  sobrenome: "aguirre",
  idade: 21,

  fala() {
    console.log(`Eu sou ${this.nome}${this.sobrenome} e tenho ${this.idade}`);
  },
  incrementeIdade() {
    this.idade++;
  },
};

pessoa2.fala();
pessoa2.incrementeIdade();
pessoa2.fala();
pessoa2.incrementeIdade();
pessoa2.fala();
