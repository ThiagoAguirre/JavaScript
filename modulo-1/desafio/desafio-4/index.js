const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML += ' ';
texto.innerHTML += `<p>A raiz quadrada de seu número é : <strong>${numero ** 0.5}</strong><br> </p>`;
texto.innerHTML += `<p>O ${numero} inteiro: ${Number.isInteger(numero)}<br> </p>`;
texto.innerHTML += `<P>O ${numero} inteiro é ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<P>Arrendondando para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<P>Arrendondando para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais${numero.toFixed(2)}</p>`;
