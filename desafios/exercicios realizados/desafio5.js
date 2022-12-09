/* CALCULADORA PARA VENDA DE PRODUTOS
   FORMAS DE PAGAMENTO: 
   1- DÉBITO 10% DE DESCONTO
   2- DINHEIRO OU PIX 15% DE DESCONTO
   3- ATÉ 2X PREÇO DE ETIQUETA SEM JUROS
   4- ACIMA DE 2X PREÇO DE ETIQUETA MAIS 10% DE JUROS */

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento ===1){
    console.log(precoEtiqueta - 0.1 * precoEtiqueta  );
} else if( formaDePagamento ===2){
    console.log(precoEtiqueta - 0.15 * precoEtiqueta);
} else if(formaDePagamento ===3){
    console.log(precoEtiqueta / 2);
} else{
    console.log(precoEtiqueta + precoEtiqueta * 0.1);
}
