// Estruturas Condicionais

const idade = 10;

if(idade >= 18){
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade")
}

//Se media >= 7, Aprovado
//Se media < 7 e media >= 5, Reprovado
// Se media < 5, Reprovado

let media = 10;

if(media >= 7){
    console.log("Aprovado(a)")
}else if(media >= 5){
    console.log("Recuperação") 
}else {
    console.log("Reprovado(a)")
}