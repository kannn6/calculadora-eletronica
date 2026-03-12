let resultado
let valorBase
let faixas = parseInt(prompt("Digite a quantidade de faixas do resistor, 4 ou 5."));
let coresEscolhidas = [];
for(i = 0;i < faixas;i++){
let cor = parseInt(prompt("Digite a cor das faixas em ordem, \n 0-Preto\n1-Marrom\n2-Vermelho\n3-Laranja\n4-Amarelo\n5-Verde\n6-Azul\n7-Violeta\n8-Cinza\n9-Branco\n10-Ouro\n11-Prata:"));
coresEscolhidas.push(cor);
}
if(faixas == 4){
 valorBase = (coresEscolhidas[0] * 10) + coresEscolhidas[1];
 resultado = valorBase * Math.pow(10 , coresEscolhidas[2]);
}else{
 valorBase = (coresEscolhidas[0] * 100)+(coresEscolhidas[1] * 10) + coresEscolhidas[2];
 resultado = valorBase * Math.pow(10 , coresEscolhidas[3]);
}

