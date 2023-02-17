/******************************************************
 * Objetivo: Tabuada
 * Autor: Dwovanna Santos
 * Data: 17/02/2023
 * Versão: 1.0
*****************************************************/

const calcularTabuada = function (inicial, final, minimo, maximo) {
    let tabuadaInicial = inicial;
    let tabuadaFinal = final;
    let minimoMultiplicador = minimo;
    let maximoMultiplicador = maximo;
    let resultado;


if (tabuadaInicial == '' || tabuadaFinal == '' || minimoMultiplicador == '' || maximoMultiplicador == '') {
    console.log('ERRO: Digite um número!');
} else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(minimoMultiplicador) || isNaN(maximoMultiplicador)) {
    console.log('ERRO: Digite um número');
} else if (tabuadaInicial < 2 || tabuadaFinal > 100) {
    console.log('ERRO: Apenas números entre 2 e 100');
} else if (minimoMultiplicador < 1 || maximoMultiplicador > 100) {
    console.log('ERRO: Apenas números entre 1 e 100');
} else {
    while (tabuadaInicial <= tabuadaFinal) {
        console.log('Tabuada do' + tabuadaInicial)
        let contador = minimoMultiplicador

        while (contador <= maximoMultiplicador) {
            resultado = tabuadaFinal * contador

            console.log(tabuadaInicial + 'x' + contador + '=' + resultado)

            contador ++
        }
        tabuadaInicial++
    }
}



}

module.exports = {
    calcularTabuada
}