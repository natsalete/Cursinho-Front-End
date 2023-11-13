// OBJETOS

//Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Natalia',
    idade: 26,
}

console.log(pessoa)
console.log(pessoa['idade'])
console.log(pessoa.nome)

//Como adicionar um par chave-valor?

pessoa.altura = 1.54

console.log(pessoa)

//Como remover um par chave-valor?

delete pessoa.altura

console.log(pessoa)

//Como Percorrer?

for(let chave in  pessoa){
    console.log(chave)
}