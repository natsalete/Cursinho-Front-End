// COERÇÃO (CONVERSÃO) DE TIPOS

// - 1. Coerção Explicita (Manual)

const numero = 10

console.log(numero, typeof numero)

const numeroEmFormaDeString = String(numero)

console.log(numeroEmFormaDeString, typeof numeroEmFormaDeString)

console.log(Number('12239'))
console.log(parseFloat('353869.9067'))
console.log(parseInt('23457.908'))
console.log(Boolean(1))

// console.clear()

// - 2.Coerção Implicita (Automatica)

console.log(10+1)

console.log('10' + 1)   //O Java fara a conversão automatica para texto ou seja string

console.log('10' - 1) //O Java consegue entender que a conversão deve ser para numero ou seja number

console.log('10' * 3)

// console.log(10 - 'aaa')

// console.clear()

//Outros exemplos

//Qual será a saída desse código?
let n = 1 + "1";

n = n - 1;

console.log(n);

//Qual será a saída desse código?
console.log(2 + 3 + 4 + "5");

//Qual será a saída desse código?
console.log("5" + 2 + 3 + 4);

//Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5");


