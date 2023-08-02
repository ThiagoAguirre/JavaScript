/* Nome: Thiaog de Oliveira Aguirre
   peso: 109kg
   altura: 1,80cm
   Data de nascimento
*/ 

let nome = "Thiago";

nome = "Thiago de Oliveira";

const sobrenome = "Aguirre";
const peso = 109;
const alturaEmCm = 1.8;
const AnodeNascimento = 2002

let IMC = peso / (alturaEmCm *alturaEmCm);
let idade = 2023 - AnodeNascimento;

console.log("meu nome é",nome,sobrenome,"tenho",idade,"anos,peso",peso);
console.log("e tenho",alturaEmCm,"cm  e o seu Seu IMC é de :", IMC)