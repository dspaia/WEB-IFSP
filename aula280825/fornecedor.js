/*class Fornecedor {
    constructor (nome, telefone){
        this.nome = nome
        this.telefone = telefone

    }
}*/

// depois continuo minha versão, porque a professora está passando bem diferente...

// versão da professora:

// criando classe Fornecedor
class Fornecedor{
    let nome;
    let telefone;

    constructor (nome = "sem nome", telefone = "(00) 00000-0000"){
        nome = this.nome
        telefone = this.nome

    }

    SetNome (nome){
        this.nome = nome
    }

    SetTelefone (telefone){
        this.telefone = telefone
    }

    getNome(){
        return this.nome
    }

    getTelefone(){
        return this.telefone
    }
}

// testando classe Fornecedor

console.log("Testando a Classe Fornecedor")

// criando um objeto (instância) com dados

// criar a variável

const f1 = new Fornecedor ("Tecidos" & cia","11 33333-4444 )


