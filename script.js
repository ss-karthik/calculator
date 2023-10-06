function operate (firstNum, secondNum, operation) {
    if (operation === '+') {
        let sum = add(firstNum, secondNum);
        console.log("The sum is " + sum);
    } else if (operation === '-') {
        let difference = subtract(firstNum, secondNum);
        console.log("The difference is " + difference);
    } else if (operation === '*') {
        let product = multiply(firstNum, secondNum);
        console.log("The product is " + product);
    } else if (operation === '/') {
        let division = divide(firstNum, secondNum);
        console.log("The division is " + division);
    }

}



function add (a, b) {
    return a+b;
}

function subtract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b) {
    return a/b;
}

function add (a, b) {
    return a+b;
}