// updateDisplay
// clearCalculator
// inputDigit
// inverseNumber
// handleOperator
// performCalculation

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

function tampilAngka(){
    document.getElementById('displayNumber').innerHTML = calculator.displayNumber;
}

function hapusAngka(){
    calculator.displayNumber = '0';
    calculator.firstNumber = null;
    calculator.operator = null;
    calculator.waitingForSecondNumber = false;
}

function inputAngka(digit){
    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
        calculator.displayNumber = digit;
    } else{
        if (calculator.displayNumber === '0') {
            calculator.displayNumber = digit;
        } else {
            calculator.displayNumber += digit;
        }
    }
}

function handleOperator(operator){
    calculator.firstNumber = calculator.displayNumber;
    calculator.waitingForSecondNumber = true;
    calculator.operator = operator;
}

function perhitungan(){
    let hasil = 0;
    if (calculator.operator === "+"){
        hasil = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else if (calculator.operator === "-") {
        hasil = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    } else {
        hasil = parseInt(calculator.firstNumber)*parseInt(calculator.displayNumber);
    }
    calculator.displayNumber = hasil;
}

var buttons = document.querySelectorAll('.button')
for(let button of buttons){
    button.addEventListener('click', function(){ 
    
        if (button.classList.contains('clear')) {
            hapusAngka();
            tampilAngka();
            return;
        }

        if (button.classList.contains('operator')) {
            handleOperator(button.innerText);
            return;
        }

        if (button.classList.contains('equals')) {
            perhitungan()
            tampilAngka()
            return;
        }

        inputAngka(button.innerText)
        tampilAngka()
    })
}