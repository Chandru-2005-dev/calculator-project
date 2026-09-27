let inputValue = document.getElementById("inputValue");

let num1 = "";
let operator = "";
let num2 = "";


// Number
function number(value) {

    if (operator === "") {
        num1 += value;
    }
    else {
        num2 += value;
    }

    inputValue.value = num1 + operator + num2;
}


// Operator
function operation(value) {

    // First operator
    if (num1 !== "" && num2 === "") {
        operator = value;
    }

    inputValue.value = num1 + operator + num2;
}


// Calculate
function calculate() {

    let a = Number(num1);
    let b = Number(num2);
    let result;

    switch (operator) {

        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;

        default:
            return;
    }

    inputValue.value = result;

    num1 = String(result);
    operator = "";
    num2 = "";
}


// Delete
function deleteNumber() {

    if (operator === "") {
        num1 = num1.slice(0, -1);
    }
    else {
        num2 = num2.slice(0, -1);
    }

    inputValue.value = num1 + operator + num2;
}


// Clear
function clearDisplay() {

    inputValue.value = "";

    num1 = "";
    operator = "";
    num2 = "";
}


// Percentage
function percentage() {

    if (operator === "") {
        num1 = String(Number(num1) / 100);
    }
    else {
        num2 = String(Number(num2) / 100);
    }

    inputValue.value = num1 + operator + num2;
}


// Decimal
function decimal() {

    if (operator === "") {

        if (!num1.includes(".")) {
            num1 += ".";
        }

    }
    else {

        if (!num2.includes(".")) {
            num2 += ".";
        }
    }

    inputValue.value = num1 + operator + num2;
}