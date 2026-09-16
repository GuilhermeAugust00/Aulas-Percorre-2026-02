// Enquanto cliente quer comprar sorvete, mas para comprar sorvete preciso ter dinheiro suficiente caso eu tenha dinheiro suficiente, gostaria de receber uma casquinha de chocolate.
let Casquinha = 2.99
let valorDoCliente = 10.00

if (valorDoCliente <= Casquinha) {
    console.log("Você tem 2.99 reais ou mais, pode comprar a casquinha");
}

else {
    console.log("Você não tem 2.99 reais, não pode comprar a casquinha");
}