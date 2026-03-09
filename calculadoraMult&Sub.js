let unidade = prompt("Digite a unidade do valor que deseja converter(A, V, W, Ohm): ");
let medidaAtual = parseInt(prompt("Digite qual a medida atual(1-G, 2-MG, 3-K, 4-BS, 5-ML, 6-MC, 7-NN, 8-PC): ")) - 1;
let converterPara = parseInt(prompt("Digite para qual unidade deseja converter(1-G, 2-MG, 3-K, 4-BS, 5-ML, 6-MC, 7-NN, 8-PC): ")) - 1;
let valor = parseFloat(prompt("Digite o valor desejado: "));

const escalas = [10**9, 10**6, 10**3, 1, 10**-3, 10**-6, 10**-9, 10**-12];
const nomes = ["G", "MG", "K", "BS", "ML", "MC", "NN", "PC"];

let resultado = valor * (escalas[medidaAtual] / escalas[converterPara]);

console.log("O resultado é: ", resultado)