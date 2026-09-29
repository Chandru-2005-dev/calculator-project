let inputValue = document.getElementById("inputValue");

let expression = "";


// Number
function number(value) {
    expression += value;
    inputValue.value = expression;
}


// Operator
function operation(value) {

    if (expression === "") {
        return;
    }

    expression += value;
    inputValue.value = expression;
}


// Calculate
function calculate() {

    if (expression === "") {
        return;
    }

    try {
        let result = eval(expression);

        inputValue.value = result;

        expression = String(result);

    } catch {
        inputValue.value = "Error";
        expression = "";
    }
}


// Delete
function deleteNumber() {

    expression = expression.slice(0, -1);

    inputValue.value = expression;
}


// Clear
function clearDisplay() {

    expression = "";

    inputValue.value = "";
}


// Percentage
function percentage() {

    if (expression === "") {
        return;
    }

    expression = String(eval(expression) / 100);

    inputValue.value = expression;
}


// Decimal
function decimal() {

    expression += ".";

    inputValue.value = expression;
}