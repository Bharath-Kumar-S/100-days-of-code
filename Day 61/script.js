let currentOperand = "";
let previousOperand = "";
let operation = null;

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculate();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = null;
  previousOperand = "";
  updateDisplay();
}

function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentOperand;
}
