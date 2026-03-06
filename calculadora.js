let gasto = 0;
let mes = 0;
let diario = 0;
let porHora = 0;
let total = 0;
let eletrodomestico = prompt("Digite qual o nome do Eletrodómestico: ");
let calculo = parseFloat(prompt("Digite '1' para fazer o calculo em Watts e '2' para fazer o calculo em Khw: "));
let valor = parseFloat(prompt("Digite o valor da pôtencia em Watts ou KWh: "));
let tempoDeuso = parseFloat(prompt("Digite o tempo de uso diário do eletrodómestico: "));
let taxa = parseFloat(prompt("Digite o valor da taxa do Kwh: "));

if(calculo == 1){
    porHora = valor*tempoDeuso/1000;
    diario = valor*tempoDeuso/1000;
    mes = diario*30;
    gasto = mes * taxa;
    console.log("----------RESULTADO----------------");
    console.log("O(a),", eletrodomestico, "consome ", diario, "Kwh por dia\n"  );
    console.log("O(a),", eletrodomestico, "consome ", mes, "Kwh por Mês\n"  );
    console.log("O total gasto por Mês em reais é: ", gasto);
}else if(calculo == 2){
    mes = valor*30*tempoDeuso;
    gasto = mes*taxa;
    
    
    console.log("-----------RESULTADO--------------");
    console.log("O(a),", eletrodomestico, "consome ", valor, "Kwh por dia\n"  );
    console.log("O(a),", eletrodomestico, "consome ", mes, "Kwh por Mês\n"  );
    console.log("O total gasto por Mês em reais é: ", gasto);
}else{
    console.log("Número invalido!");

}