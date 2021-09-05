const prompt = require("prompt-sync")();

console.log(
  "Vamos jogar dados na sorte e descobriremos quem é o grande vencedor"
);

//quantas rodadas você quer fazer
var qtdsrodadas = +prompt("Quantas rodadas você quer jogar? ");

//quantos jogadores vão jogar
var qtdjogadores = +prompt("Teremos quantos jogadores? ");
var lista = []; // Guardado

console.log(`Vamos jogar ${qtdsrodadas} rodadas`);
console.log(`Opa! esse é o numero de jogadores:  ${qtdjogadores}`);

//Quantas rodadas
for (let i = 1; i <= qtdsrodadas; i++) {
  console.log(`Rodadas ${i}`);

  //Criar um objeto pra cada jogador
  for (let i = 0; i < qtdjogadores; i++) {
    var nome = prompt("Qual o nome do jogador? ");
    let jogador = {
      nome: nome,
      dado: Math.floor(Math.random() * 6) + 1,
    };
    console.log(`O ${jogador.nome} tirou ${jogador.dado}`);
    console.log("============================================");

    //Guardar os objetos
    lista.push(jogador);

    //ordena os objetos
    lista.sort((a, b) => {
      if (b.dado < a.dado) {
        return -1;
      } else {
        return true;
      }
    });
  }
}
console.log("De acordo com o nosso quadro a Seguir");
console.log("============================================");

console.log(lista);

console.log("============================================");

//Mostrar no final qual jogador ganhou
console.log(`O jogador ${lista[0].nome} é a pessoa vencedora`);
