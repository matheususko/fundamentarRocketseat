/**
 * # Sistema de gastos familiar
 * 
 * Crie um objeto que possuirá 2 propriedade, ambas do tipo array:
 *  - receitas: []
 *  - despesas: []
 *  
 * Agora, crie uma função que irá calcular o total de receitas
 * e despesas e irá mostrar uma mensagem se a família está com 
 * saldo positivo ou negativo, seguido do valor do saldo
 * 
 */

let family = {
    incomes: [2500, 3200, 250.34, 360.23],
    expenses: [320.23, 123.42, 123, 1500.00, 5000]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calcuteIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calcuteIncomes - calculateExpenses
    
    const itsOk = total >= 0
    
    let balanceText = "negativo"
    
    if(itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()