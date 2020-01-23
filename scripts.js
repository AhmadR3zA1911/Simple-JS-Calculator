class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear();
    }


    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    deleteNumber() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return // Two dots are not allowed in math
        if (this.currentOperand.length > 15) return //Check the length of the number Entered by user
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''

    }

    compute() {
        let computeResult
        const firsNum = parseFloat(this.previousOperand)
        const secondNum = parseFloat(this.currentOperand)
        if (isNaN(firsNum) || isNaN(secondNum)) return
        switch (this.operation) {
            case '+':
                computeResult = firsNum + secondNum
                break
            case '-':
                computeResult = firsNum - secondNum
                break
            case '÷':
                computeResult = firsNum / secondNum
                break
            case '*':
                computeResult = firsNum * secondNum
                break
            default:
                return
        }
        this.currentOperand = computeResult
        this.operation = undefined
        this.previousOperand = ''

    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigist = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigist != null) {
            return `${integerDisplay}.${decimalDigist}`
        } else if (stringNumber.slice(-1) === '.' && this.currentOperand.indexOf('.') === 1) {
            return `${integerDisplay}.`
        } else if (this.currentOperand.length === 1 && this.currentOperand === '.') {
            return stringNumber
        } else {
            return integerDisplay
        }
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)

        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`

        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }

} //ENDCLASS


const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click', () => {
    calculator.deleteNumber()
    calculator.updateDisplay()
})