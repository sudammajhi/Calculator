const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')


let calculation = []
let accumulativeCalculation

function calculator(button){
    const value = button.textContent
    if(value=="Clear"){
        calculation = []
        screenDisplay.textContent = '.'
    }else if (value == '='){
        screenDisplay.textContent = eval(accumulativeCalculation)
    }else{calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculator(button)))