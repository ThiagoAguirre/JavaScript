// new Data(0);

function createSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}
console.log(createSeconds(10));

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function ininciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = createSeconds(segundos);
  }, 1000);
}

iniciar.addEventListener("click", function (event) {
  clearInterval(timer);
  ininciaRelogio();
});

pausar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.classList.add("pausado");
});

zerar.addEventListener("click", function (event) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
});
