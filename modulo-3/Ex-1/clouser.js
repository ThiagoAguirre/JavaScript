function retornaFuncao() {
    const nome = 'Thiago';
    return function (){
        return nome;
    }
}

const funcao = retornaFuncao('Arroz');
console.dir(funcao())