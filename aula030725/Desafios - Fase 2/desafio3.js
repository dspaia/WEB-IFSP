let numImpar = '';

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; 
    }
    numImpar += i; 
}

console.log(numImpar); 
