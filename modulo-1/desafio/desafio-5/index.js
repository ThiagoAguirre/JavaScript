function MeuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  // form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //     alert(1);
  //     console.log('foi enviado');
  // };
  // let contador = 1;
  // function recebeEventoform(evento) {
  //     evento.preventDefault();
  //     console.log(`Form não foi enviado ${contador}`);
  //     contador++;
  // }
  function recebeEventoform(evento) {
    evento.preventDefault();

    const nome = document.querySelector(".nome");
    const sobrenome = document.querySelector(".sobrenome");
    const peso = document.querySelector(".peso");
    const altura = document.querySelector(".altura");

    console.log(nome.value, sobrenome.value, peso.value, altura.value);
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    resultado.innerHTML += `<p> nome da pessoa ${nome.value}  ${sobrenome.value} tem um peso de ${peso.value} Kg e mede ${altura.value}de altura</p>`;
  }

  const pessoas = [];

  form.addEventListener("submit", recebeEventoform);
}

MeuEscopo();
