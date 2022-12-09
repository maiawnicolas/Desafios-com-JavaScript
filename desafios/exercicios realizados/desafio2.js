/* PROGRAMAR PARA CALCULAR O GASTO DE UMA VIAGEM, PODENDO ESCOLHER O TIPO DE COMBUSTIVEL QUE O VEICULO UTILIZA*/

const precoEtanol = 4.85;
const precoGasolina = 6.50;
const kmPorLitro = 10;
const distanciaemKm = 100;
const tipodeCombustiveldoCarro ='Gasolina';

const litrosPelaDistancia = distanciaemKm / kmPorLitro;

if (tipodeCombustiveldoCarro === 'Etanol'){
    const valorGasto = litrosPelaDistancia * precoEtanol;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosPelaDistancia * precoGasolina;
    console.log(valorGasto.toFixed(2))
}


