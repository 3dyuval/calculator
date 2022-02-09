export default class Calculator {
  constructor(previousLineTextElement, currentLineTextElement) {
    this.previousLineTextElement = previousLineTextElement
    this.currentLineTextElement = currentLineTextElement
    this.previousLine = ""
    this.currentLine = ""
    this.clear()
  }

  clear() {
    this.previousLine = ""
    this.currentLine = ""
    this.updateDisplay()
  }

  appendNumber(number) {
    if (number === "." && this.currentLine.includes(".")) return
    this.currentLine = this.currentLine.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentLine === "") return
    if (this.previousLine != "") {
      this.compute()
    }
    this.operation = operation
    this.appendNumber(this.operation)
    this.previousLine = this.currentLine
    this.currentLine = this.operation
  }

  compute() {
    let result
    const prev = parseFloat(this.previousLine, 10)
    const current = parseFloat(this.currentLine, 10)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case "+":
        result = prev + current
        break
      case "*":
        result = prev * current
        break
      case "/":
        result = prev / current
        break
      case "-":
        result = prev + current
        break
      default:
        return
    }
    this.previousLine = ""
    this.operation = undefined
    this.currentLine = result.toString()
  }

  delete() {
    this.currentLine = this.currentLine.slice(0, -1)
    this.updateDisplay()
  }

  updateDisplay() {
    this.currentLineTextElement.innerHTML = this.getDisplayNumber(
      this.currentLine
    )
    this.previousLineTextElement.innerHTML = this.getDisplayNumber(
      this.previousLine
    )
  }

  getDisplayNumber(number) {
    const floatNumber = parseFloat(number)
    if (isNaN(floatNumber)) return ""
    return floatNumber.toLocaleString("en")
  }
}
