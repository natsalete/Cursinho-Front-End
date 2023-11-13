//FUNÇÕES

function saudacao() {
    console.log('Olá seja bem-vindo(a) ao nosso curso de JavaScript!')
}

saudacao() 

console.clear()

//Como enviar parâmentros para as funções?

function saudacao(nome, curso) {
    console.log(`Olá ${nome}! seja bem-vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Natalia', 'HTML && CSS')

function saudacao(nome, curso='JavaScript') {
    console.log(`Olá ${nome}!seja bem-vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Natalia')

console.clear()

// Retorno da Função

function soma(numero1, numero2) {
    return numero1 + numero2
}

const resultado = soma(10,20)

console.log(resultado)