function CalcularIMC(peso, altura) {
    return peso / (altura * altura)
}

let peso = 51
let altura = 1.64
let imc = CalcularIMC(peso, altura)

console.log(imc(peso, altura));

// Abaixo do peso <= 18.4
// Peso normal de 18.5 a 24.9
// Sobrepeso >= 25

if (imc <= 18.4) {
    console.log("Você está no peso");
}

else if (imc >= 24.9) {
    console.log("Você está no peso ideal");
}

else {
    console.log("Você está acima do peso");
}
    
