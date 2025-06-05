//Exemplo 1 - Criar array do tipo objeto

console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])
console.log()

//Array

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados);
console.log()

//Acessar cada índice

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

console.log(aprovados[3])
console.log()

//Inserindo pessoa

aprovados.push('Abia')
console.log(aprovados)
console.log()

//Retornar tamanho do Array

console.log(aprovados.length)
console.log()

//Inserir um nome na poisção x no Array

aprovados[9] = 'Jonas'
console.log(aprovados)
console.log()

//Verificando posição x

console.log(aprovados[8] === undefined)
console.log()

//Verifiacando posição x usando null

console.log(aprovados[8] === null)
console.log()

//Alterar Array

aprovados.sort()
console.log(aprovados)
console.log()

//Deletar conteúdo posição x

delete aprovados[1]
console.log(aprovados)
console.log()

//Trabalhando com splice

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados, '\n')

aprovados.splice(1, 1)
console.log(aprovados)

aprovados.splice(1, 1)
console.log(aprovados, '\n')

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados)
aprovados.splice(1, 2)
console.log(aprovados, '\n')

//Acrescentar itens

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados, '\n')

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados, '\n')




