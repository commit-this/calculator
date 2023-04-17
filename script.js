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
    return a / b;
}

function operate(a, b, operator) {
    return operator === "+" ? add(a, b)
         : operator === "-" ? subtract(a, b)
         : operator === "*" ? multiply(a, b)
         : operator === "/" ? divide(a, b)
         : "Error";
}

function onNumClick(e) {
    num = e.target.id;
    if (display.textContent === "0") {
        display.textContent = num;
    } else {
        display.textContent += num;    
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
}

function onDecimalClick(e) {
    if (display.textContent.includes(".")) return;
    display.textContent += ".";
}

let operand1 = null;
let operand2 = null;
let operator = null;

const display = document.querySelector(".display");

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", (e) => {
    operand1 = Number(display.textContent);
    operator = e.target.textContent;
}));

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", onSignClick);

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", onDecimalClick);

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearDisplay);

const numButtons = document.querySelectorAll(".num");
numButtons.forEach(numButton => numButton.addEventListener("click", onNumClick));
