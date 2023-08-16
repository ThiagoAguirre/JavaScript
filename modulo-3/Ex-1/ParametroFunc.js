// function funcao(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

// function soma(a,b){
//     console.log(a+b);
// }
// soma(2)

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
}

conta("+", 0, 20, 30, 40, 50);
