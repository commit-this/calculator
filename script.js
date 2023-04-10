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

function numButtonClicked(e) {
    num = e.target.id;
}

const numButtons = document.querySelectorAll(".num-btn");
numButtons.forEach(numButton => numButton.addEventListener(click, numButtonClicked));
