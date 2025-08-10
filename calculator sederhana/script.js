// CALCULATOR PROGAM

const display = document.getElementById('display')

function appendToDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}

function squareRoot() {
    let currentValue = parseFloat(display.value)

    if (currentValue < 0) {
        display.value = "Error"
    } 
    display.value = Math.sqrt(currentValue)
}