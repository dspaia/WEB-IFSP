function verificarNumero() {
    const input = document.getElementById('inputNumero')
    const mensagem = document.getElementById('mensagem')
    const valor = input.value
  
    
    mensagem.className = ''
  
    if (valor === '') {
      mensagem.textContent = 'Por favor, insira um número.'
      mensagem.classList.add('vermelho')
    } else {
      const numero = parseFloat(valor)
  
      if (numero > 10) {
        mensagem.textContent = 'O número é maior que 10.'
        mensagem.classList.add('verde')
      } else if (numero > 5) {
        mensagem.textContent = 'O número é maior que 5, mas menor ou igual a 10.'
        mensagem.classList.add('laranja')
      } else {
        mensagem.textContent = 'O número é 5 ou menor.'
        mensagem.classList.add('azul')
      }
    }
  }