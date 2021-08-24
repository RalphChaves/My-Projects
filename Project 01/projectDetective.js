/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As
perguntas são:
1. "Telefonou para a vítima?"
2. "Esteve no local do crime?"
3. "Mora perto da vítima?"
4. "Devia para a vítima?"
5. "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da
pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada
como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso
contrário, ele será classificado como "Inocente".*/

/* OBS: usarei o alert ao inves do console.log pra ficar algo mais dinamico quando rodado pelo browser!*/

alert("Sou o Detetive, Sherlock! \nEstou aqui para te fazer algumas perguntas?"); 

let nome = prompt("Por favor, informe o seu nome: ");

alert("Vamos começar, Digite: \n1- para SIM\n0- para NÃO");

let resp1 = +prompt("1. Você: Telefonou para a vítima?");
let resp2 = +prompt("2. Você: Esteve no local do crime?");
let resp3 = +prompt("3. Você: Mora perto da vítima?");
let resp4 = +prompt("4. Você: Devia para a vítima?");
let resp5 = +prompt("5. Você: Já trabalhou com a vítima?");

let result = (resp1+resp2+resp3+resp4+resp5);

if ((result >=6 || Number.isNaN(result))) {
  alert(`${nome}! Por favor, lembre-se, você so pode escolher entre o numero: 1 - Sim e 0 - Não, como resposta!`);

} else if (result === 2) {
  alert(`${nome} você é classificado como Supeito`);

} else if (result >=3 && result <= 4) {
  alert(`${nome} você é classificado como Cúmplice`);

} else if (result === 5) {
  alert(`${nome} você é classificado como Assassino`);

} else {
  alert(`${nome} você é classificado como Inocente`);
}
