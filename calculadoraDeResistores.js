let faixas = parseInt(prompt("Quantidade de faixas (4 ou 5):"));
let cores = [];

for (let i = 0; i < faixas; i++) {
    let cor = parseInt(prompt(`Cor da ${i + 1}ª faixa:\n0-Preto, 1-Marrom, 2-Vermelho, 3-Laranja, 4-Amarelo, 5-Verde, 6-Azul, 7-Violeta, 8-Cinza, 9-Branco, 10-Ouro, 11-Prata`));
    cores.push(cor);
}

const multiplicadores = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01];
const tolerancias = {
    1: "1%", 2: "2%", 5: "0.5%", 6: "0.25%", 7: "0.1%", 8: "0.05%", 10: "5%", 11: "10%"
};

let valorBase, ohm, mult, tol;

if (faixas === 4) {
    valorBase = (cores[0] * 10) + cores[1];
    mult = multiplicadores[cores[2]];
    tol = tolerancias[cores[3]] || "20%";
} else {
    valorBase = (cores[0] * 100) + (cores[1] * 10) + cores[2];
    mult = multiplicadores[cores[3]];
    tol = tolerancias[cores[4]] || "20%";
}

ohm = valorBase * mult;

let leitura = ohm >= 1000000 ? `${ohm / 1000000} MΩ` : 
             ohm >= 1000 ? `${ohm / 1000} kΩ` : 
             `${ohm} Ω`;

console.log(`Resistência: ${leitura}`);
console.log(`Tolerância: ${tol}`);
alert(`Resultado: ${leitura} com tolerância de ${tol}`);