function calculadoraDeOhms(){

let descobrir = parseInt(prompt("Digite o valor que deseja descobrir (1-Voltagem, 2-Corrente,3-Resistência): "))

if(descobrir == 1){
   let corrente = parseFloat(prompt("Digite o valor da corrente:  "))
   let resistencia = parseFloat(prompt("Digite o valor da resistência: "))
   let voltagem = corrente * resistencia
   console.log("------------RESULTADO------------\nO valor da voltagem é de: ", voltagem)
}else if(descobrir == 2){
    let voltagem = parseFloat(prompt("Digite o valor da voltagem: "))
    let resistencia = parseFloat(prompt("Digite o valor da resistência: "))
    let corrente = voltagem / resistencia
    console.log("------------RESULTADO------------\nO valor da corrente é de: ", corrente)
}else if(descobrir == 3){
    let voltagem = parseFloat(prompt("Digite o valor da voltagem: "))
    let corrente = parseFloat(prompt("Digite o valor da corrente:  "))
    let resistencia = voltagem / corrente
    console.log("------------RESULTADO------------\nO valor da resistência é de: ", resistencia)
    }
}