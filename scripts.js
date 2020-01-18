class calculator
{
    constructor(previousOperandTextElement,currentOperandTextElement)
    {
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear();
    }
}

clear()
{
this.currentOperand=''
this.previousOperand=''
this.operation=undefined
}

deleteNumber()
{

}
appendNumber()
{

}
chooseOprand()
{

}

compute()
{

}

updateDisplay()
{

}




const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new calculator(previousOperandTextElement,currentOperandTextElement)
