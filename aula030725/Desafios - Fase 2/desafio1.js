function calculaMedia(array) {
    if (array.length === 0) {
        return 'Não é possível calcular a média.';
    }
    
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    
    return soma / array.length;
}

console.log(calculaMedia([1, 2, 3, 4, 5])); 
console.log(calculaMedia([])); 
