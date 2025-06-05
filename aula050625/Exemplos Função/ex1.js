//Trabalhando com Função Anônima e de Seta
//function soma(a, b){}

//Criando Função Anônima

const imprimir_soma = function(a, b){

}

imprimir_soma(2, 3)

console.log()
//Função de Seta

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

console.log()
//Função de Seta implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprime1 = a => console.log(a)
imprime1('Legal!!!')

console.log()