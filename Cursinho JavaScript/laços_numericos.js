//LaÇO NUMÉRICO: FOR

const input = require('readline-sync')

// O problema 
// const nota1 = Number(input.question('Informe a nota 1: '))

// const nota2 = Number(input.question('Informe a nota 2: '))

// const nota3 = Number(input.question('Informe a nota 3: '))

//Acumulador

let acumulador = 0;

acumulador += 10

console.log(acumulador)

//Estrutur For

for (let i = 0; i < 10; i++){
    console.log('REPETIÇÃO', i)
}

//Reslovendo o problema inicial

let nota;
let soma = 0;

for(let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno:`))

    soma += nota
}

console.log('A soma das notas é ', soma)
console.log(`A media das notas é  ${soma/3}`)