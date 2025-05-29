//Exemplo 1 - Validação do sexo

do{
    let texto = 'Therian'
    var sexo = texto.charAt(0)

    if (sexo != 'T' && sexo != 'M'){
        console.log("Erro!")
    }

} while (sexo != 'T' && sexo != 'M')

console.log("Sexo validado!")