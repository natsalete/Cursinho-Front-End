// ARRAYS PARTE 2 - MÉTODOS DE ARRAYS

let arrl = [30, 12, 45, 34, 29]
let arr2 = []

//Fatiamento: slice

console.log(arrl.slice(0, 1))
console.log(arrl.slice(2))

console.clear()

//Adicionando elementos : push | unshift

console.log('Antes de adicionar: ', arr2)

arr2.push(10, 20, 30)
arr2.push(40)

console.log('Depois de adicionar: ', arr2)

console.log('Antes de adicionar com unshift: ', arr2)

arr2.unshift(0)

console.log('Depois de adicionar: ', arr2)

console.clear()

//Remover elementos : pop | shift

console.log('Antes de eliminar com pop: ', arr2)

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop: ', arr2)
console.log("O elemento removido foi ", elementoRemovido)

console.log('Antes de eliminar com shift: ', arr2)

arr2.shift()

console.log('Depois de remover com o shift: ', arr2)

console.clear()

//Concatenando arrays: concat

console.log('arrl', arrl)
console.log('arr2', arr2)

console.log(arrl.concat(arr2))
console.log(arr2.concat(arrl))

console.clear()

//Buscando elementos: indexOf | lastIndexOf

console.log(arrl)

let indiceDoElemento34 = arrl.indexOf(34)

console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3))

console.clear()

//Descobrindo a existencia de um elemento: includes

console.log(arrl)
console.log(arrl.includes(12))

console.clear()

// Invertindo arrays: reverse

console.log('arrl normal :', arrl)

const arrlInvertido = arrl.reverse()

console.log('arrl invertido:', arrlInvertido)

