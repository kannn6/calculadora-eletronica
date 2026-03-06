⚡ Calculadora de Consumo ElétricoUma ferramenta simples e eficiente em JavaScript para estimar o consumo de energia de aparelhos domésticos e o impacto financeiro na conta de luz mensal.

📖 Sobre o ProjetoO script foi desenvolvido para resolver uma dor comum: entender quanto cada aparelho (como ar-condicionado, geladeira ou computador) custa no final do mês. Ele permite a entrada de dados tanto em Watts (W) quanto em Kilowatts-hora (kWh), tornando-o versátil para diferentes tipos de etiquetas técnicas.

🚀 FuncionalidadesConversão Automática: Transforma Watts em kWh para facilitar o cálculo.Projeção Mensal: Calcula o gasto baseado em 30 dias de uso.Estimativa Financeira: Multiplica o consumo pela tarifa média de energia.Interface Interativa: Utiliza diálogos de entrada (prompt) para interagir com o usuário.

📑 Regras de CálculoO sistema opera baseado nas seguintes premissas matemáticas:Para aparelhos em Watts:O valor é dividido por 1000 para encontrar o kWh.Fórmula:$$Consumo = \frac{Potência \times Horas}{1000}$$Custo Financeiro:Considera uma tarifa padrão de R$ 0,90 por kWh.

🛠️ Como UtilizarAbra o console do seu navegador (F12) ou um ambiente Node.js.Responda ao primeiro prompt com o nome do aparelho.Escolha a unidade de medida (1 para Watts, 2 para kWh).Insira a potência do equipamento.Informe por quantas horas ele fica ligado por dia.Confira o resultado detalhado no console!

📈 Exemplo de Resultado no ConsoleAparelho: GeladeiraConsumo Diário: 1.2 kWhConsumo Mensal: 36 kWhCusto Estimado: R$ 32,40

🎨 CustomizaçãoPara adaptar o script à sua realidade, você pode editar o valor da tarifa diretamente no código (atualmente fixado em 0.90) para o valor cobrado pela distribuidora da sua região.