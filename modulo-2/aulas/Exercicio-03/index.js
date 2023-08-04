const pontuacaoUser = 100;

if (pontuacaoUser >= 1000) {
  console.log("Este jogador é VIP");
} else {
  console.log("Ele é um jogador");
}

const nivelUser = pontuacaoUser >= 1000 ? 'Usuario vip': 'Usuario normal';
console.log(nivelUser)