// Variaveis
let SenhadoSistema = 8;
let PainelSenha = prompt("Digite um numero de 0 a 10");

// Se digitar a senha
if (PainelSenha == SenhadoSistema) {
    alert(`Acertou o Numero - ${SenhadoSistema}`);
    console.log("tudo correto");
} else {
    alert("Você errou!!!");
    console.log("senha errada");
}

