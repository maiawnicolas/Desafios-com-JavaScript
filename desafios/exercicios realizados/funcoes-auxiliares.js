/*  UMA SALA CONTEM 5 ALUNOS E PARA CADA ALUNO FOI SORTEADO UM NUMERO DE 1 - 100.
    FACA UM PROGRAMA QUE RECEBA OS 5 NUMEROS SORTEADOS PARA OS ALUNOS E MOSTRE O MAIOR NUMERO SORTEADO
    DADOS DE ENTRADA: 5, 50, 10, 98, 23
    DADOS DE SAIDA: 98
*/

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = {gets, print};