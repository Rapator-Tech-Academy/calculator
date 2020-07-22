// Variables
let digit1 = '';
let digit2 = '';
let operator = '';
let result = '';

/*
 a + b = c
 a - b = c
 a * b = c
 a / b = c
*/

// Helper Functions
function handleDigits(d) {
    if(digit1 === '') {
        digit1 = d;
    } else {
        digit2 = d;
    }
    displayButton(d);
}

function handleOperator(o) {
    if(operator === '') {
        operator = o;
    } else {
        handleResult();
        operator = o;
    }
}

function handleResult() {
    switch (operator) {
        case '+':
            result = parseInt(digit1) + parseInt(digit2);
            displayButton(result);
            break;
        case '-':
            result = parseInt(digit1) - parseInt(digit2);
            displayButton(result);
            break;
        case 'X':
            result = parseInt(digit1) * parseInt(digit2);
            displayButton(result);
            break;
        case '/':
            result = parseInt(digit1) / parseInt(digit2);
            displayButton(result);
            break;
    }
    updateDigits();
}

function updateDigits() {
    digit1 = result;
    digit2 = '';
}

// jQuery function

$('.calc-on').on('click', () => {
    digit1 = '';
    digit2 = '';
    operator = '';
    result = '';
});

function displayButton(btn) {
    $('.calc-result-input').text(btn);
}

$(document).ready(() => {

    $('button').on('click', (e) => {
        
        let btn = e.target.innerHTML;

        if( btn >= '0' && btn <= '9') {
            handleDigits(btn);
        } else {
            handleOperator(btn);
        }
    }
    );
    
});