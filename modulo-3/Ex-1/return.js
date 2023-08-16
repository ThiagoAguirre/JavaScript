function criaMultiplicador(mutiplicador){
    return function(n){
        return n * mutiplicador;
    }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2),triplica(2),quadriplica(2))