// Avaliador de entregas

// Para estruturar decisões no código utilizamos a famil        ia if else.
// if = se
// else = senão
// else if = senão se
// O if pede uma condição e se ela for atendida, executa o código que esta entre{}
// Já o else serve para atender os casos que não contemplam as codições anteriores.
// Se tivermos mais de uma condição, como no exemplo abaixo, é necessario utilizar o else if. que nega o if anterior e propõe uma nova condição
// Por exemplo, se não for nota 5, mas for nota 4, o programa escreve "Dahora po" na tela

let nota = 98

if (nota == 5){
    console.log("Top");
}
else if (nota == 4){
    console.log("Dahora po");
}
else if (nota == 3){
    console.log("Tem que ta veno");
}
else if (nota == 2){
    console.log("Reaprende");
}
else if (nota == 1){
    console.log("Andando seria melhor");
}
else{
    console.log("INSIRA UMA NOTA VÁLIDA DE 1 A 5");
}