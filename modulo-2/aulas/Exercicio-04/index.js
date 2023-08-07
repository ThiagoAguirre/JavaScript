const data = new Date("1987-04-21 00:00:00");
let diaSemana = data.getDay();
diaSemana = 10;
let diaSemanaTexts;

if (diaSemana === 0) {
  diaSemanaTexts = "seguda";
} else if (diaSemana === 1) {
  diaSemanaTexts = "terça";
} else if (diaSemana === 2) {
  diaSemanaTexts = "quarta";
} else if (diaSemana === 3) {
  diaSemanaTexts = "quinta";
} else if (diaSemana === 4) {
  diaSemanaTexts = "sexta";
} else if (diaSemana === 5) {
  diaSemanaTexts = "sabado";
} else if (diaSemana === 6) {
  diaSemanaTexts = "domingo";
} else {
  diaSemanaTexts = "Digite um numero de 0 até 6";
}

console.log(diaSemana, diaSemanaTexts);
