let num1 = 9.49;
let num2 = Math.floor(num1); // arrendondar para baixo
let num3 = Math.ceil(num1); // arrendondar para cima
let num4 = Math.round(num1); // Arredodar de forma automatica

console.log(`O numero não arredondado é ${num1} e o arredondado é ${num2}`);
console.log(`Teste do numero ${num3} e o teste do ${num4}`);

console.log(Math.max(1,2,3,4,5,7,6,10,-10,-30));// o maior numero
console.log(Math.min(1,2,3,4,5,7,6,10,-10,-30));// o menor numro
console.log(Math.random()) // numero aleatorio 

let Randomizar = Math.random() * (21 - 1) + 1;
let numeroRandom = Math.floor(Randomizar);

console.log(Randomizar);
console.log(numeroRandom);

console.log(Math.pow(2, 10))