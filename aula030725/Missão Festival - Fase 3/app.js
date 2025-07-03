const bandas = [

  { nome: 'Sepultura', genero: 'rock', popularidade: 8 },

  { nome: 'Michael Jackson', genero: 'pop', popularidade: 10 },

  { nome: 'Angra', genero: 'jazz', popularidade: 6 },

  { nome: 'The Doors', genero: 'rock', popularidade: 9 },

  { nome: 'Mc Pipokinha', genero: 'pop', popularidade: 9 },

  { nome: 'Miles Davis', genero: 'jazz', popularidade: 7 },

  { nome: 'Queen', genero: 'rock', popularidade: 10 },

  { nome: 'Calcinha Preta', genero: 'pop', popularidade: 8 }

];

let dia1 = []
let dia2 = []
let dia3 = []

for (let banda of bandas) {
  switch (banda.genero) {
    case 'rock':
      dia1.push(banda)
      break
    case 'pop':
      dia2.push(banda)
      break
    case 'jazz':
      dia3.push(banda)
      break

  }

}

let totalIngressos = 0

for (let banda of bandas) {
  totalIngressos += banda.popularidade

}

console.log("Dia 1 - Rock:")
console.table(dia1)
console.log()

console.log("Dia 2 - Pop:")
console.table(dia2)
console.log()

console.log("Dia 3 - Jazz:")
console.table(dia3)
console.log()

console.log("Total de ingressos esperados:" + totalIngressos)