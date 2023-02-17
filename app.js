/******************************************************
 * Objetivo: Tabuada
 * Autor: Dwovanna Santos
 * Data: 17/02/2023
 * Versão: 1.0
*****************************************************/



//Import da biblioteca da tabuada
var tabuada = require('./modulo/tabuada.js');

//Import da biblioteca de entrada de dados
var readline = require('readline');

// Cria um objeto para manipular as entradas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o número da Tabuada Incial \n', function(tabuadaInicial){
    tabuadaInicial = inicioTabuada;

    entradaDados.question('Digite o número da Tabuada Final \n', function(tabuadaFinal){
        tabuadaFinal = finalTabuada;

        entradaDados.question('Digite o mínimo multiplicador: \n', function(minimoMultiplicador){
             minimoMultiplicador = multiplicadorMinimo;

            entradaDados.question('Digite o máximo multiplicador: \n', function(maximoMultiplicador){
                maximoMultiplicador = multiplicadorMaximo;

                let resultado = tabuada.calcularTabuada(inicial, final, minimo, maximo);
            });
        });
    });
});