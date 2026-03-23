function calculadoraResistoresSerieParalelo(){
let resultado = 0
let conta = parseInt(prompt("Digite qual calculo deseja fazer:\n1-Série\n2-Paralelo:"))
if(conta == 1){
    let qntdResistores = parseInt(prompt("Digite a quantidade de resistores: "))
    let resistores = []
    let entrada = prompt("Digite o valor dos resistores separados por vírgula(ex:10,20,10):")
    resistores = entrada.split(",").map(Number)
    for(let contador = 0;contador < qntdResistores;contador++){
       resultado += resistores[contador]
    }
    console.log("O resultado é: ", resultado)
}else{
    let qntdResistores = parseInt(prompt("Digite a quantidade de resistores: "))
    let resistores = []
    let entrada = prompt("Digite o valor dos resistores separados por vírgula(ex:10,20,10):")
    resistores = entrada.split(",").map(Number)
    for(let contador = 0;contador < qntdResistores;contador++){
        resultado += (1 / resistores[contador])

      }
      resultado = 1/resultado
    }
    console.log("O resultado é: ", resultado)
}