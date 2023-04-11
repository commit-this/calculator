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
}

const display = document.querySelector(".display");

const signButton = document.querySelector("#sign");
signButton.addEventListener("click", onSignClick)

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearDisplay);

const numButtons = document.querySelectorAll(".num-btn");
numButtons.forEach(numButton => numButton.addEventListener("click", onNumClick));
