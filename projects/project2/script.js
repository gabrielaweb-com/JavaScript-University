let valorTotal = Number(prompt("Digite o valor total da compra:"));
let formaPagamento = prompt("Digite a forma de pagamento:").toLowerCase();
let tipoPagamento = prompt("O pagamento é à vista ou a prazo?:").toLowerCase();
let parcelas = 0;

if (tipoPagamento === "prazo") {
  parcelas = Number(prompt("Em quantas vezes será feito o pagamento?"));
}

if (tipoPagamento === "vista" && formaPagamento === "dinheiro") {
  let valorComDesconto = valorTotal * 0.9;
  alert(
    "Pagamento à vista em Dinheiro. Desconto de 10% aplicado. Valor final: R$ " +
      valorComDesconto.toFixed(2)
  );
} else if (tipoPagamento === "vista" && formaPagamento === "débito") {
  let valorComDesconto = valorTotal * 0.92;
  alert(
    "Pagamento à vista no Débito. Desconto de 8% aplicado. Valor final: R$ " +
      valorComDesconto.toFixed(2)
  );
} else if (tipoPagamento === "vista" && formaPagamento === "crédito") {
  let valorComDesconto = valorTotal * 0.95;
  alert(
    "Pagamento à vista no Crédito. Desconto de 5% aplicado. Valor final: R$ " +
      valorComDesconto.toFixed(2)
  );
} else if (tipoPagamento === "prazo" && parcelas <= 3) {
  let valorParcela = valorTotal / parcelas;
  alert(
    "Pagamento a prazo em " +
      parcelas +
      "x. Sem desconto. Valor total: R$ " +
      valorTotal.toFixed(2) +
      ". Valor das parcelas: R$ " +
      valorParcela.toFixed(2)
  );
} else if (tipoPagamento === "prazo" && parcelas > 3) {
  let valorComAcrescimo = valorTotal * 1.04;
  let valorParcela = valorComAcrescimo / parcelas;
  alert(
    "Pagamento a prazo em " +
      parcelas +
      "x. Acréscimo de 4% aplicado. Valor total: R$ " +
      valorComAcrescimo.toFixed(2) +
      ". Valor das parcelas: R$ " +
      valorParcela.toFixed(2)
  );
} else {
  alert("Dados de pagamento inválidos. Tente novamente.");
}
