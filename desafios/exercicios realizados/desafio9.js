 /* 
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atriutos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamda Jose que tenha 70kg e 1,75 de altura e peça para Jose dizer o valor do seu IMC. 
 */

    class Pessoa {
        nome;
        peso;
        altura;

        constructor(nome,peso,altura){
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;
        }

        calcularIMC(){
           return this.peso / (this.altura * this.altura);
        }
        classificarIMC(){
            const imc = this.calcularIMC();
            if(imc < 18.5){
                return('abaixo do peso')
            } else if(imc >=18.5 && imc <= 25){
                return('Peso Normal')
            } else if(imc >= 25 && imc <=30 ){
                return('Acima do Peso')
            } else if(imc >= 30 && imc <= 40){
                return('Obeso')
            } else{
                return('Obesidade Grave')
            }
            
        }
    }

    const jose = new Pessoa ('jose',70,1.75);         
    console.log(jose.classificarIMC());
    const nicolas = new Pessoa ('nicolas',130,1.93);
    console.log(nicolas.classificarIMC());