const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operationInput = document.getElementById("operation");

const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");
const resultDisplay = document.getElementById("result");


function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}


function subtractNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}


function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}


function divideNumbers(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


function calculateResult() {
    const firstValue = firstNumberInput.value.trim();
    const secondValue = secondNumberInput.value.trim();

    if (firstValue === "" || secondValue === "") {
        resultDisplay.textContent = "Please enter both numbers.";
        return;
    }

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);
    const operation = operationInput.value;

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        resultDisplay.textContent = "Please enter valid numbers.";
        return;
    }

    if (operation === "divide" && secondNumber === 0) {
        resultDisplay.textContent = "Cannot divide by zero.";
        return;
    }

    let result;

    switch (operation) {
        case "add":
            result = addNumbers(firstNumber, secondNumber);
            break;

        case "subtract":
            result = subtractNumbers(firstNumber, secondNumber);
            break;

        case "multiply":
            result = multiplyNumbers(firstNumber, secondNumber);
            break;

        case "divide":
            result = divideNumbers(firstNumber, secondNumber);
            break;

        default:
            resultDisplay.textContent = "Please select an operation.";
            return;
    }

    resultDisplay.textContent = `Result: ${result}`;
}


function resetCalculator() {
    firstNumberInput.value = "";
    secondNumberInput.value = "";
    operationInput.value = "add";
    resultDisplay.textContent = "Your answer will appear here";
}


calculateButton.addEventListener("click", calculateResult);

resetButton.addEventListener("click", resetCalculator);