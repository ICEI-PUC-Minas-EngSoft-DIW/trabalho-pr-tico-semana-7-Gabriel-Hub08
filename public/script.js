let nome = prompt("Digite seu nome:");

let rendaMensal = Number(prompt("Digite sua renda mensal:"));
while (isNaN(rendaMensal)) {
  rendaMensal = Number(prompt("Valor inválido. Digite sua renda mensal novamente:"));
}

let quantidadeDespesas = Number(prompt("Quantas despesas você deseja informar? (1 a 5)"));
while (isNaN(quantidadeDespesas)) {
  quantidadeDespesas = Number(prompt("Valor inválido. Digite a quantidade de despesas novamente (1 a 5):"));
}

if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = Number(prompt("Digite o valor da despesa " + i + ":"));

  while (isNaN(despesa)) {
    despesa = Number(prompt("Valor inválido. Digite novamente o valor da despesa " + i + ":"));
  }

  totalDespesas += despesa;
}

let sobra = rendaMensal - totalDespesas;
let mensagem = "";

if (totalDespesas > rendaMensal) {
  mensagem = " Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= rendaMensal * 0.3) {
    mensagem = "Ótimo: boa margem de sobra.";
  } else {
    mensagem = "Ok: dá para melhorar a sobra.";
  }
}

let resultado =
  "Nome: " + nome + "\n" +
  "Renda mensal: R$ " + rendaMensal.toFixed(2) + "\n" +
  "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n" +
  "Classificação: " + mensagem;

alert(resultado);

console.log("===== SIMULADOR DE ORÇAMENTO PESSOAL =====");
console.log("Nome: " + nome);
console.log("Renda mensal: R$ " + rendaMensal.toFixed(2));
console.log("Total de despesas: R$ " + totalDespesas.toFixed(2));
console.log("Sobra: R$ " + sobra.toFixed(2));
console.log("Classificação: " + mensagem);
console.log("==========================================");