let operatorPressed = false;
let resultDisplayed = false;

let display = document.querySelector(".display");
let buttons = document.querySelector(".button-section");
buttons.addEventListener("click", function(event) {
    if (event.target.className == 'cell') {
        if (resultDisplayed) {
            display.textContent = '';
            resultDisplayed = false;
        }
      display.textContent += event.target.textContent;
    }

    if (event.target.className == 'cellop') {
        if(!operatorPressed) {
            operatorPressed = true;
            display.textContent += event.target.textContent;
        }
        else if (operatorPressed) {
            evaluate();
            resultDisplayed = false;
            display.textContent += event.target.textContent;
        }
    }
    if(event.target.id == 'equals') {
        evaluate();
    }
    if(event.target.id == "allclear") {
        display.textContent = '';
        operatorPressed = false;
        resultDisplayed = false;
    }
});

function evaluate() {
    let string = display.textContent;
    const arr = string.split(" ");
    if(arr.length === 3) {
        let num1 = parseInt(arr[0]);
        let opp = arr[1];
        let num2 = parseInt(arr[2]);
        const result = operate(num1, num2, opp);
        display.textContent = result;
        console.log(result);
        resultDisplayed = true;
    }
    else {
        console.log("Too many operators");
    }
}


function operate (firstNum, secondNum, operation) {
    if (operation === '+') {
        let sum = add(firstNum, secondNum);
        console.log("The sum is " + sum);
        return sum;
    } else if (operation === '-') {
        let difference = subtract(firstNum, secondNum);
        console.log("The difference is " + difference);
        return difference;
    } else if (operation === '*') {
        let product = multiply(firstNum, secondNum);
        console.log("The product is " + product);
        return product;
    } else if (operation === '/') {
        let division = divide(firstNum, secondNum);
        console.log("The division is " + division);
        return division;
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