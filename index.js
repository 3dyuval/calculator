class Calculator {
  constructor(previousLine, currentLine) {
    this.previousLine = previousLineTextElement;
    this.currentLine = currentLineTextElement;
    this.clear();
  }

  clear() {
    this.previousLine = "";
    this.currentLine = "";
    this.updateDisplay();
  }

  delete() {
    this.currentLine = this.currentLine.slice(0, -1);
    this.updateDisplay();
  }

  appendNumber(number) {
    if (number === "." && this.currentLine.includes(".")) return;
    this.currentLine = this.currentLine.toString() + number.toString();
  }

  choosOperation(operation) {
    if (this.currentLine === "") return;
    if (this.previousLine != "") {
      this.compute();
    }
    this.operation = operation;
    this.appendNumber(this.operation);
    this.previousLine = this.currentLine;
    this.currentLine = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousLine, 10);
    const current = parseFloat(this.currentLine, 10);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        result = prev + current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      case "-":
        result = prev - current;
        break;
      default:
        return;
    }
    this.previousLine = "";
    this.operation = undefined;
    this.currentLine = result.toString();
  }

  getDisplayNumber(number) {
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return "";
    return floatNumber.toLocaleString("en");
  }

  updateDisplay() {
    currentLineTextElement.innerHTML = this.getDisplayNumber(this.currentLine);
    previousLineTextElement.innerHTML = this.getDisplayNumber(
      this.previousLine
    );
  }
}

const operationButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-number]");
const previousLineTextElement = document.querySelector("[data-previous]");
const currentLineTextElement = document.querySelector("[data-current]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

const calculator = new Calculator(
  previousLineTextElement,
  currentLineTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calculator.appendNumber(event.currentTarget.dataset["number"]);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    calculator.choosOperation(event.currentTarget.dataset["operation"]);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
