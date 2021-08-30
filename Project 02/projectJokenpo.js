const prompt = require("prompt-sync")();

console.log(
  "Vamos jogar Jokenpô! Siga as instruções e veremos quem será o grande vencedor!"
);

var mao = ["pedra", "papel", "tesoura"];
var rodadas = 0;
var vitoriadousuario = 0;
var vitoriadoPC = 0;
let comecar = 1;

for (let i = 1; (i) => comecar; i++) {
  vitoriadousuario = 0;
  vitoriadoPC = 0;
  comecar = +prompt(
    "Gostaria de jogar? Digite: 1 - para SIM ou 0 - para NAO: "
  );
  {
    if (comecar == 0) {
      console.log("Obrigado por jogar!!");
      break;
    }
  }

  rodadas = +prompt("Digite quantas vezes você quer jogar?");
  console.log(`Tudo bem vamos jogar ${rodadas} vezes!`);
  console.log("--------------------------------------");

  for (let i = 0; i < rodadas; i++) {
    let maouser = prompt(`Escolha entre ${mao}: `);
    console.log("--------------------------------------");

    let maopc = Math.floor(Math.random() * 3);
    let maouser2 = mao.indexOf(maouser);

    if (maopc == maouser2) {
      console.log("Ops deu Empate!");
    } else if (maopc == 2 && maouser2 == 1) {
      console.log(
        "Eu escolhi Tesoura, \nVocê Papel, \nTesoura corta papel,\nEntao eu venci!\nBoa Sorte da Proxima vez!"
      );
      console.log("--------------------------------------");
      vitoriadoPC++;
    } else if (maopc == 1 && maouser2 == 0) {
      console.log(
        "Eu escolhi Papel, \nVocê Pedra, \nPapel enrola pedra,\nEntao eu venci!\nBoa Sorte da Proxima vez!"
      );
      console.log("--------------------------------------");
      vitoriadoPC++;
    } else if (maopc == 0 && maouser2 == 2) {
      console.log(
        "Eu escolhi Pedra, \nVocê Tesoura, \nPedra quebra Tesoura,\nEntao eu venci!\nBoa Sorte da Proxima vez!"
      );
      console.log("--------------------------------------");
      vitoriadoPC++;
    } else if (maopc == 1 && maouser2 == 2) {
      console.log(
        "Você escolheu Tesoura, \nEu Papel, \nTesoura corta papel,\nEntao você venceu!"
      );
      console.log("--------------------------------------");
      vitoriadousuario++;
    } else if (maopc == 0 && maouser2 == 1) {
      console.log(
        "Você escolheu Papel, \nEu Pedra, \nPapel enrola pedra,\nEntao você venceu!"
      );
      console.log("--------------------------------------");
      vitoriadousuario++;
    } else if (maopc == 2 && maouser2 == 0) {
      console.log(
        "Você escolheu Pedra, \nEu Tesoura, \nPedra quebra Tesoura,\nEntao você venceu!"
      );
      console.log("--------------------------------------");
      vitoriadousuario++;
    } else {
      console.log("Você digitou algo errado!!");
      return;
    }
  }

  console.log(
    `Você fez ${vitoriadousuario} ponto, Eu fiz ${vitoriadoPC} ponto!`
  );
  if (vitoriadousuario > vitoriadoPC && vitoriadoPC < vitoriadousuario) {
    console.log("Voce foi o grande Vencedor, Parabens!");
  } else if (vitoriadousuario == vitoriadoPC) {
    console.log("Uau, você é bom mesmo, ficamos empatados!");
  } else {
    console.log("Eba, eu venci, obrigado por ter deixado eu ganhar!");
  }
}
