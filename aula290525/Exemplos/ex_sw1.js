//Exemplo 1 - Criando menu para estado civil

let opcao = 'c'

//Criar menu

console.log("Escolha:\n")
console.log("Solteiro --> (s)")
console.log("Casado --> (c)")
console.log("Divorciado --> (d)")
console.log("Viúvo --> (v)\n")

//Comparar

switch(opcao){
    case 's': console.log("eita garanhão"); break
    case 'c': console.log("tadinho"); break
    case 'd': console.log("A VIDA É BELA"); break
    case 'v': console.log("sinto muito"); break
    default: console.log("outros"); break
}