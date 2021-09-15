const prompt = require("prompt-sync")();

//classe mae
class Ambientes {
  constructor(lugar, tempo, clima) {
    this.lugar = lugar;
    this.tempo = tempo;
    this.clima = clima;
  }

  Iniciar() {
    console.log(`Você acordou em uma ${this.lugar}, Estava ${this.tempo}...`);
  }

  Finalizar() {
    console.log("Você Morreu");
  }
}

let jogo = new Ambientes("Ilha", "Amanhecendo", "Ensolarado");

class Parte extends Ambientes {
  constructor(lugar, tempo, clima) {
    super(lugar, tempo, clima);
  }
  //Metodo Exclusivo da Classe filho
  Iniciar() {
    console.log(`Você acordou no seu ${this.lugar}`);
  }
  Finalizar() {
    console.log("Você voltou a dormir!");
  }
}

let parte = new Parte("Quarto", " Noite", "Chuvoso");

jogo.Iniciar();

sleep(2000);
function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

console.log(
  `Em um ambiente totalmente desconhecido por você, Estava bastante ${jogo.clima}!`
);
sleep(2000);

console.log("Agora você precisa arrumar uma forma de sair deste lugar!");
sleep(2000);
console.log(`
        "Mas antes de começarmos,
        eu preciso saber algumas coisas sobre você..."`);

console.log();

var correto = "sim";

function validarName() {
  var nome = prompt("Qual seu nome: ");
  console.log(`Voce me disse que seu nome é: ${nome}!`);

  correto = prompt("Está correto? ");

  if (correto == "sim") {
    console.log(`Muito bom ${nome}, vamos para a proxima pergunta.`);
  } else {
    console.log("Não pode mentir!");
  }
}

validarName();

while (correto == "nao") {
  validarName();
}

console.log();
var idade = +prompt("Qual sua idade? ");

console.log("Muito bom no momento é o suficiente!");
sleep(4000);
console.clear();

console.log(
  `Você começou a andar desesperadamente tentado sair desta ${jogo.lugar}!`
);

console.log();

var mochila = ["Lanterna", " Salgadinho", " Agua"];

console.log("Nesse percurso você encontrou uma mochila.");
sleep(1000);
console.log(`Dentro dela possue os seguintes itens:

     ${mochila}`);

console.log();

console.log("Você esta faminto, morrendo de fome e sede.");
console.log("O que gostaria de fazer com o que tem dentro da mochila.");

function escolhas() {
  let escolha1 = prompt("Escolha entre: lanterna, salgadinho, ou agua: ");
  if (escolha1 == "lanterna") {
    console.log(`Você escolheu a ${escolha1} `);
    let opt = prompt("tem certeza que deseja usar este item? sim ou nao?");
    if (opt == "sim") {
      console.log("Usando a Lanterna");
    } else {
      console.log("Largou a lanterna na mochila");
    }
  } else if (escolha1 == "salgadinho") {
    console.log(`Você escolheu o ${escolha1}.`);
    let opt1 = prompt("Comer: tudo ou pouco? ");

    if (opt1 == "tudo") {
      console.log("Nossa que salgadinho gostoso, eu estava faminto.");
    } else {
      console.log("Guardou o salgadinho pela metade na mochila.");
    }
  } else {
    console.log(`Você escolheu ${escolha1}.`);
    let opt3 = prompt("Beber: tudo ou Pouco? ");

    if (opt3 == "tudo") {
      console.log("Nossa que que agua gostosa, eu estava morrendo de sede.");
    } else {
      console.log("Guardou a agua pela metade na mochila.");
    }
  }
}

escolhas();

console.log(
  "Você continuo andando e usou todos os seus recursos, sobrando somente a lanterna"
);
sleep(4000);

console.log(
  `Já estava de ${parte.tempo}, de repente sua lanterna acaba a bateria.`
);

sleep(4000);
console.log(
  "Na situação que se encontra, Não tem muitas opções para voce agora!"
);
sleep(5000);
console.log(
  "Você tem que escolher entre continuar tentando sair deste lugar ou se entregar ao cansaço extremo"
);
let final = prompt("Entao: continuar ou desistir? ");

if (final === "continuar") {
  console.log(`

    Ao resolver continuar, você acabou caindo em um buraco no escuro,
    como você estava com muita fome e sede.
    `);
  console.log();
  jogo.Finalizar();
  console.log();
  sleep(2000);
  console.log(`Noticia do jogarnal:
        Foi encontrado essa pessoa que teve uma morte misteriosa, especula-se
        que a pessoa se encontrava em um tipo de estado de sonambulismo,
        havia algumas coisas dentro da boca da pessoa, provavelmente ela
        imaginava que estava comendo comida. Mas na realidade era resto de lixo.
        Porém sua morte foi relatada por uma queda em um boeiro da cidade,
        que estava totalmente exposto na rua.
        `);
} else {
  console.log(`Você resolveu desistir, entretanto estava de ${parte.tempo}`);
  parte.Iniciar();
  console.log(`Totalmente assustado, porem logo percebeu que nao passava de um pesadelo,
  resolveu entao ir tomar um banho, após o banho foi para a sala assistir TV e `);
  parte.Finalizar();
}
