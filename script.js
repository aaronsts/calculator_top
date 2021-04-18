const roundOff = (num, places) => {
    const x = Math.pow(10,places);
    return Math.round(num * x) / x;
  }

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

const operate = (num1, num2, op) => {
    return op(num1, num2);
}

const clear = () => {
    document.getElementById('display-field').textContent = "";
    console.log('cleared')
}
// document.getElementById('button-1').onclick = clear