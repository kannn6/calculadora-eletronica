
let unidade = prompt("Digite a unidade do valor que deseja converter(A, V, W, Ohm): ")
let converter = parseInt(prompt("Digite para qual unidade deseja converter(1-G, 2-MG, 3-K,4-BS,5-ML,6-MC,7-NN,8-PC): "))
let medidaAtual = parseInt(prompt("Digite qual a medida atual(1-G, 2-MG, 3-K,4-BS,5-ML,6-MC,7-NN,8-PC): "))
let valor = parseFloat(prompt("Digite o valor desejado: "))
converter = [10**9, 10**6,10**3,10**1,10**(-9),10**(-6),10**(-3),10**(-1)< G, MG, K, BS, ML, MC, NN, PC ]
