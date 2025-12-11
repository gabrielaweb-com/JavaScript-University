let anoMolde = prompt("Digite um ano com 4 dígitos:");
let ano = Number(anoMolde);

if (isNaN(ano) || anoMolde.length !== 4) {
  alert("Por favor, insira um ano válido com 4 dígitos.");
} else if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
  alert("O ano " + ano + " é bissexto!");
} else {
  alert("O ano " + ano + " não é bissexto.");
}
