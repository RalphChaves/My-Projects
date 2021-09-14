const prompt = require("prompt-sync")();

var pergunta = "sim";

var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var nulo = 0;
var branco = 0;

//Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado, "Opcional"  ou "Obrigatório"; (2,0 pontos)

function autorizaVoto(anoNascimento) {
  const ano = 2021;
  let idade = ano - anoNascimento;
  if (idade < 16) {
    return "Negada";
  } else if (idade >= 16 && idade < 18) {
    return "Opcional";
  } else {
    return "Obrigatorio";
  }
}

//Ter uma função chamada votacao 2pts
function votacao(autorizacao, voto) {
  autorizacao = autorizaVoto(anoNascimento);
  // Verifica se a pessoa pode votar
  if (autorizacao === "Negada") {
    console.log("Voce nao pode votar.");
    return autorizaVoto();
  } else {
    console.log("Você pode votar.");
  }

  console.log(`
    Escolha um numero entre 1 e 5 para:
    1 = Candidato 1
    2 = Candidato 2
    3 = Candidato 3
    4 = Voto Nulo
    5 = Voto em Branco`);
  var voto = +prompt("Digite o numero: ");
  console.log(`Você escolheu o numero ${voto}`);

  //Contabilizar os votos de acordo com os significados 3 pontos
  if (voto == 1) {
    console.log("Você escolheu o Candidado 1");
    candidato1++;
  } else if (voto == 2) {
    console.log("Você escolheu o Candidado 2");
    candidato2++;
  } else if (voto == 3) {
    console.log("Você escolheu o Candidado 3");
    candidato3++;
  } else if ((nulo = voto == 4)) {
    console.log("Você escolheu votar Nulo");
    nulo++;
  } else if (voto == 5) {
    console.log("Você votou em Branco");
    branco++;
  } else {
    console.log("Você escolheu algo errado");
  }
}

//Ter uma função chamada de exibirResultados() 2 pontos
function exibirResultados() {
  console.log(`O Total de votos no Candidato 1 foi: ${candidato1}.`);
  console.log(`O Total de votos no Candidato 2 foi: ${candidato2}.`);
  console.log(`O Total de votos no Candidato 3 foi: ${candidato3}.`);
  console.log(`O Total de votos Nulos foi: ${nulo}.`);
  console.log(`O Total de votos Brancos: ${branco}.`);
  if (candidato1 > candidato2 && candidato1 > candidato3) {
    console.log("O Candidato 1 foi o grande vencedor!");
  } else if (candidato2 > candidato1 && candidato2 > candidato3) {
    console.log("O Candidato 2 foi o grande vencedor!");
  } else if (candidato3 > candidato2 && candidato3 > candidato2) {
    console.log("O Candidato 3 foi o grande vencedor!");
  } else {
    console.log("Ouvi um empate!");
  }
}

console.log(`Você escolheu: SIM....Começando a contagem de Voto`);

pergunta = prompt("Voce gostaria de votar digite sim ou não: ");

//Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)

while (pergunta === "sim") {
  var anoNascimento = +prompt(
    `Digite o ano de Nascimento com 4 Digitos, Exemplo: 2003! `
  );
  votacao();
  pergunta = prompt("Voce gostaria de votar novamente digite sim ou não: ");
}
exibirResultados();
