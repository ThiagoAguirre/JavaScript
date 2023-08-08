const h1 = document.querySelector(".container h1");
const data = new Date();
// h1.innerHTML = data.toString();
/*
function getDiaSemana(diaSemana) {
  let diaSemanaTexts;

  switch (diaSemana) {
    case 0:
      diaSemanaTexts = "Domingo";
      return diaSemanaTexts;
    case 1:
      diaSemanaTexts = "segunda";
      return diaSemanaTexts;
    case 2:
      diaSemanaTexts = "terça";
      return diaSemanaTexts;
    case 3:
      diaSemanaTexts = "quarta";
      return diaSemanaTexts;
    case 4:
      diaSemanaTexts = "quinta";
      return diaSemanaTexts;
    case 5:
      diaSemanaTexts = "sexta";
      return diaSemanaTexts;
    case 6:
      diaSemanaTexts = "sabado";
      return diaSemanaTexts;
    default:
      diaSemanaTexts = "ERRO";
      return diaSemanaTexts;
  }
}
function getNomeMes(NumeroDoMes) {
  let nomeMes;

  switch (NumeroDoMes) {
    case 0:
      nomeMes = "janeiro";
      return nomeMes;
    case 1:
      nomeMes = "fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "março";
      return nomeMes;
    case 3:
      nomeMes = "abril";
      return nomeMes;
    case 4:
      nomeMes = "maio";
      return nomeMes;
    case 5:
      nomeMes = "julho";
      return nomeMes;
    case 6:
      nomeMes = "junho";
      return nomeMes;
    case 7:
      nomeMes = "agosto";
      return nomeMes;
    case 8:
      nomeMes = "setembro";
      return nomeMes;
    case 9:
      nomeMes = "outubro";
      return nomeMes;
    case 10:
      nomeMes = "novembro";
      return nomeMes;
    case 11:
      nomeMes = "desembro";
      return nomeMes;
    default:
      return "Não existe nenhum mes aqui";
  }
}
*/

function getDiaSemana(diaSemana) {
  const dias = [
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo",
  ];
  return dias[diaSemana];
}

function getNomeMes(NumeroDoMes) {
  const mes = [
    "janeiro",
    "fevereiro",
    "abril",
    "março",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return mes[NumeroDoMes];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const NumeroDoMes = data.getMonth();

  const nomeDia = getDiaSemana(diaSemana);
  const nomeMes = getNomeMes(NumeroDoMes);

  return (
    `${nomeDia}, ${data.getDay()} de ${nomeMes} ` +
    `de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(
      data.getMinutes()
    )}`
  );
}
h1.innerHTML = criaData(data);

// h1.innerHTML = getDiaSemana(data.getDay(), data.getMonth());
