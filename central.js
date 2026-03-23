let escolha = parseInt(prompt("Digite conforme: \n 1-Calculadora de Consumo\n2-Calculadora de Resistores\n3-Calculadora Mul&Sub\n4-Calculadora de Ohms\n5-Calculadora de Resistores em Série e Paralelo"))

switch(escolha){
case 1:
    calculadoraDeConsumo()
    break
case 2:
    calculadoraDeResistores()
    break
case 3:
    calculadoraMultSub()
    break
case 4:
    calculadoraDeOhms()
    break
case 5:
    calculadoraResistoresSerieParalelo()
    break
}
