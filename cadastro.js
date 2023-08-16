var nome = prompt("Digite seu nome: ");
var anos = prompt("Digite sua idade: ");
var linguagemProgramacao = prompt("Diga qual é sua linguagem de programação: ");




alert("Olá " + nome + " você tem " + anos + " anos e já está aprendendo " + " " + 
linguagemProgramacao);


var segundaPergunta = prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda 
com o número 1 para SIM ou 2 para NÃO.`);


if (segundaPergunta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}


