const data = new Date("1987-04-21 00:00:00");
let diaSemana = data.getDay();
diaSemana = 10;
let diaSemanaTexts;

switch (diaSemana) {
  case 0:
    diaSemanaTexts = "segunda";
    break;
  case 1:
    diaSemanaTexts = "terça";
    break;
  case 2:
    diaSemanaTexts = "quarta";
    break;
  case 3:
    diaSemanaTexts = "quinta";
    break;
  case 4:
    diaSemanaTexts = "sexta";
    break;
  case 5:
    diaSemanaTexts = "sabado";
    break;
  case 6:
    diaSemanaTexts = "Domingo";
    break;
  default:
    diaSemanaTexts = "ERRO";
    break;
}

console.log(`O dia 21 de abril de 1987 foi uma ${diaSemanaTexts}.`);
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
