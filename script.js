function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function operate(a, b, operator) {
    return operator === "+" ? add(a, b)
         : operator === "-" ? subtract(a, b)
         : operator === "x" ? multiply(a, b)
         : operator === "÷" ? divide(a, b)
         : "Error";
}

function onNumClick(e) {
    num = e.target.id;
    
    if (currentOperator === null) {
        if (display.textContent.trim() === "0") {
            display.textContent = num;
        } else {
            display.textContent += num;    
        }
    } else {
        if (!firstNumPressed) {
            display.textContent = num;
            firstNumPressed = true;
        } else {
            display.textContent += num;
        }
    }
}

function onSignClick(e) {
    let displayValue;

    if (display.textContent === "0") return;
    displayValue = Number(display.textContent) * -1;
    display.textContent = displayValue.toString();
}

function clearDisplay(e) {
    display.textContent = "0";
    operand1 = null;
    operand2 = null;
    currentOperator = null;
    firstNumPressed = false;
}

function onDecimalClick(e) {
    if (display.textContent.includes(".")) return;
    display.textContent += ".";
}

function onEqualsClick(e) {
    operand2 = Number(display.textContent);
    let answer = operate(operand1, operand2, currentOperator);
    display.textContent = answer.toString();
    firstNumPressed = false;
}

let operand1 = null;
let operand2 = null;
let currentOperator = null;
let firstNumPressed = false;

const display = document.querySelector(".display");

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", (e) => {
    if (currentOperator !== null) {
        operand2 = Number(display.textContent);
        let answer = operate(operand1, operand2, currentOperator);
        display.textContent = answer.toString();
        operand1 = answer;
        firstNumPressed = false;
    } else {
        operand1 = Number(display.textContent);
    }
    currentOperator = e.target.textContent;
}));

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", onSignClick);

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", onDecimalClick);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearDisplay);

const numButtons = document.querySelectorAll(".num");
numButtons.forEach(numButton => numButton.addEventListener("click", onNumClick));

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", onEqualsClick);
