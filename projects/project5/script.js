let x = Number(prompt("Digite 1, 2 ou 3"));
let A = Number(prompt("Digite quaisquer valores reais:"));
let B = Number(prompt("Digite quaisquer valores reais:"));
let C = Number(prompt("Digite quaisquer valores reais:"));

switch (x) {
  case 1:
    let crescente = [A, B, C].sort((a, b) => a - b);
    alert("Ordem crescente: " + crescente);
    break;

  case 2:
    let decrescente = [A, B, C].sort((a, b) => b - a);
    alert("Ordem decrescente: " + decrescente);
    break;

  case 3:
    let valores = [A, B, C].sort((a, b) => a - b);

    let maiorNoMeio = [valores[0], valores[2], valores[1]];
    alert("Maior no meio: " + maiorNoMeio);
    break;

  default:
    alert("O valor de X não corresponde a nenhuma das condições acima");
}
