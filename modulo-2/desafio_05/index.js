function mostrahora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostrahora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5000); // Parar o timer após 5 segundos (5000 milissegundos)

setTimeout(function() {
    console.log('Olá Mundo');
}, 6000); // Aguardar 6 segundos e então exibir 'Olá Mundo'
