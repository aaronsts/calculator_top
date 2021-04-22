let number1 = '';
let number2 = '';
let calculation = {
    operation: false,
};

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

// percent
let percentBtn =  document.getElementById('button-3');
percentBtn.addEventListener('click', () => {
    console.log('pressed %');
    number1 /= 100;
    document.getElementById('display-field').textContent = number1 + '\%';

});

// divide
const roundOff = (num, places) => {
    const x = Math.pow(10,places);
    return Math.round(num * x) / x;
  }
  
const divide = (a, b) => {
    console.log(roundOff(a / b, 2))
    return roundOff(a / b, 2)
}

let divBtn = document.getElementById('button-4');
divBtn.addEventListener('click', () => {
    console.log('pressed /');
    calculation.operation = true;
    calculation.operator = divide;
    console.log(calculation.operation, calculation.operator);
});

// one
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

// two
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

// three
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
const multiply = (a, b) => {
    console.log(a*b)
    return a * b;
}

let multBtn = document.getElementById('button-8');
multBtn.addEventListener('click', () => {
    console.log('pressed *');
    calculation.operation = true;
    calculation.operator = multiply;
    console.log(calculation.operation, calculation.operator);
});

// four
let fourBtn = document.getElementById('button-9');
fourBtn.addEventListener('click', () => {
    console.log('pressed 4');
    if (calculation.operation === false){
        number1 += '4';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '4';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// five
let fiveBtn = document.getElementById('button-10');
fiveBtn.addEventListener('click', () => {
    console.log('pressed 5');
    if (calculation.operation === false){
        number1 += '5';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '5';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// six
let sixBtn = document.getElementById('button-11');
sixBtn.addEventListener('click', () => {
    console.log('pressed 6');
    if (calculation.operation === false){
        number1 += '6';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '6';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// subtract
const subtract = (a, b) => {
    return a - b;
}

let subBtn = document.getElementById('button-12');
subBtn.addEventListener('click', () => {
    console.log('pressed -');
    calculation.operation = true;
    calculation.operator = subtract;
    console.log(calculation.operation, calculation.operator); 
    console.log(number1, number2);
});

// seven
let sevenBtn = document.getElementById('button-13');
sevenBtn.addEventListener('click', () => {
    console.log('pressed 7');
    if (calculation.operation === false){
        number1 += '7';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '7';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// eight
let eightBtn = document.getElementById('button-14');
eightBtn.addEventListener('click', () => {
    console.log('pressed 8');
    if (calculation.operation === false){
        number1 += '8';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '8';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// nine
let nineBtn = document.getElementById('button-15');
nineBtn.addEventListener('click', () => {
    console.log('pressed 9');
    if (calculation.operation === false){
        number1 += '9';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '9';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
});

// add
const add = (a, b) => {
    return parseInt(a) + parseInt(b);
}

let addBtn = document.getElementById('button-16');
addBtn.addEventListener('click', () => {
    console.log('pressed +');
    calculation.operation = true;
    calculation.operator = add;
    console.log(calculation.operation, calculation.operator); 
    console.log(number1, number2);
});

// zero
let zeroBtn = document.getElementById('button-17');
zeroBtn.addEventListener('click', () => {
    console.log('pressed 0');
    if (calculation.operation === false){
        number1 += '0';
        document.getElementById('display-field').textContent = number1;
    } else {
        number2 += '0';
        document.getElementById('display-field').textContent = number2;
    }  
    console.log(number1, number2);
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




