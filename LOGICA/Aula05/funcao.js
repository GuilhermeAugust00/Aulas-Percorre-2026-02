// Declaração de variavéis
let nome = "Guilherme"
let soma = 5 + 5

// Exibição de valor armazenado das varivéis
console.log(nome);
console.log(soma);

// Estrutura de decisão
if (soma > 5) {
    console.log("A soma é maior que 5");
}

else{
    console.log("A soma é menor que 5");
}

// Laço de repetição
for (let i = 0; i < 10; i++) {
    console.log("O valor de i é: " + i);
}

// Função se refere a uma logica que é repetida mais de uma vez mas diferente de um laço de repetiçao a funçao é para ser invocada quando o programador escolher, independente de um contador.
function somador(a, b) {
    return a + b
}

// A funçao pode ser invocada para passar valor a uma variavel, como no exemplo abaixo. Observe que a e b da criação da funçao foram substituidos pelos valores a ser somados, assim como variaveis da matemática
let total = somador(5, 4)
console.log(total);

let total = somador(6, 7)
console.log(total2);

// A função tambem pode ser invocada dentro de outras funcoes oi metodos, como no exemplo abaixo, onde invocamos a funcao somador dentro do console.log()
console.log(somador(15 , 25));
