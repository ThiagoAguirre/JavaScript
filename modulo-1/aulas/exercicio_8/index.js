function saudacao(nome) {
  return `Bom dia ${nome}`;
}
const variavel = saudacao("Luiz");
console.log(variavel);

function soma(x = 1, y = 1) {
  const soma = x + y;
  return soma;
}

console.log(soma(10, 10));
console.log(soma(10, 11));
console.log(soma(10, 15));

const raiz = function (n) {
  return n ** 0.5;
};
console.log(raiz(9));

const subtracao = (Z) => {
  return Z - 10;
};

console.log(subtracao(11));
