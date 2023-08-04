const hora = 100;

if (hora >= 0 && hora <= 10) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa Noite");
} else {
    console.log(`Digite um horario dentre 0 até 23 e não ${hora}`)
}
