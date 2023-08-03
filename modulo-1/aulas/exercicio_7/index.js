const nome = 'thiago';
const nomesdosAlunos = ['Thiago', 'diego', 'jão', 'ferdinando', 'guilherme'];
nomesdosAlunos[4] = 'felipe';

delete nomesdosAlunos[2];
const removido = nomesdosAlunos.pop(); // remove do fim da lista de arrays
const removidoDoComeco = nomesdosAlunos.shift(); // remove do começo da lista de arrays
console.log(removido);
console.log(removidoDoComeco);

nomesdosAlunos.unshift('yuri'); // adiciona do começo

nomesdosAlunos.push('Alice'); // adiciona do fim
nomesdosAlunos.push('Ivan');

console.log(nomesdosAlunos);
console.log(nomesdosAlunos.length);

console.log(nomesdosAlunos[1])
console.log(nomesdosAlunos.slice(0, -2));

console.log(nomesdosAlunos instanceof Array);