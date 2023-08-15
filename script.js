let display = document.getElementById('display');
let expression = "";

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = "";
    display.value = expression;
}

function backspace() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        expression = eval(expression).toString();
        display.value = expression;
    } catch (error) {
        display.value = "Error";
    }
}
