let number1 = '';
let number2 = '';
let calculation = {
    operation: false,
};

const roundOff = (num, places) => {
    const x = Math.pow(10,places);
    return Math.round(num * x) / x;
  }

// operators
const multiply = (a, b) => {
    console.log(a*b)
    return a * b;
}

const divide = (a, b) => {
    console.log(roundOff(a / b, 2))
    return roundOff(a / b, 2)
}

const subtract = (a, b) => {
    return a - b;
}

const add = (a, b) => {
    return a + b;
}

const operate = (a, b, op) => {
    return op(a, b);
}

// clear the screen
let clearBtn = document.getElementById('button-1');
clearBtn.addEventListener('click', () =>{
    document.getElementById('display-field').textContent = "";
    number1 = '';
    number2 = '';
    calculation.operation = !calculation.operation;
    console.log('cleared screen');
    console.log(number1, number2)
})

// store numbers
// 1
let oneBtn = document.getElementById('button-5');
oneBtn.addEventListener('click', () => {
    console.log('pressed 1');
    if (calculation.operation === false){
        number1 += '1';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '1';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// 2
let twoBtn = document.getElementById('button-6');
twoBtn.addEventListener('click', () => {
    console.log('pressed 2');
    if (calculation.operation === false){
        number1 += '2';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '2';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// 3
let threeBtn = document.getElementById('button-7');
threeBtn.addEventListener('click', () => {
    console.log('pressed 3');
    if (calculation.operation === false){
        number1 += '3';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '3';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// multiply
let multBtn = document.getElementById('button-8');
multBtn.addEventListener('click', () => {
    console.log('pressed *');
    calculation.operation = true;
    calculation.operator = multiply;
    console.log(calculation.operation, calculation.operator);
});

// equal sign
let equalBtn = document.getElementById('button-19');
equalBtn.addEventListener('click', () => {
    console.log('pressed =');
    calculation.operation = true;
    let endResult = operate(number1, number2, calculation.operator);
    document.getElementById('display-field').textContent = endResult;
    number1 = endResult;
    number2 = '';
    console.log(endResult, number1, number2);
});




