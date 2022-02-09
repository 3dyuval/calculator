import Calculator from "./Calculator.js"

export default function calculate() {
    const operationButtons = document.querySelectorAll("[data-operation]")
    const numberButtons = document.querySelectorAll("[data-number]")
    const previousLineTextElement = document.querySelector("[data-previous]")
    const currentLineTextElement = document.querySelector("[data-current]")
    const equalsButton = document.querySelector("[data-equals]")
    const deleteButton = document.querySelector("[data-delete]")
    const allClearButton = document.querySelector("[data-all-clear]")

    const calculator = new Calculator(
        previousLineTextElement,
        currentLineTextElement
    )

    numberButtons.forEach(button => {
        button.addEventListener("click", event => {
            calculator.appendNumber(event.currentTarget.dataset["number"])
            calculator.updateDisplay()
        })
    })

    operationButtons.forEach(button => {
        button.addEventListener("click", event => {
            calculator.chooseOperation(event.currentTarget.dataset["operation"])
            calculator.updateDisplay()
        })
    })

    allClearButton.addEventListener("click", () => {
        calculator.clear()
    })

    deleteButton.addEventListener("click", () => {
        calculator.delete()
    })

    equalsButton.addEventListener("click", () => {
        calculator.compute()
        calculator.updateDisplay()
    })



}
