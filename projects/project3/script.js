let lado1 = Number(prompt("Primeiro lado do triângulo:"));
let lado2 = Number(prompt("Segundo lado do triângulo:"));
let lado3 = Number(prompt("Terceiro lado do triângulo:"));

//lados Iguais = equilátero
//dois Iguais Um Diferente = isósceles
//lados Diferentes= escaleno

if (
  isNaN(lado1) ||
  isNaN(lado2) ||
  isNaN(lado3) ||
  lado1 <= 0 ||
  lado2 <= 0 ||
  lado3 <= 0
) {
  alert("Digite medidas para todos os lados (positivas):");
} else if (lado1 === lado2 && lado2 === lado3) {
  alert("Triângulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  alert("Triângulo isósceles");
} else {
  alert("Triângulo escaleno");
}
