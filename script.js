let operatorPressed = false;
let resultDisplayed = false;
let decimalDisplayed = false;

function defaults() {
    display.textContent = '';
    operatorPressed = false;
    resultDisplayed = false;
    decimalDisplayed = false;
}


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
    if (event.target.id == 'decimal' && !decimalDisplayed) {
        display.textContent += event.target.textContent;
        decimalDisplayed = true;
    }
    if(event.target.id == 'equals') {
        evaluate();
    }
    if(event.target.id == "allclear") {
        defaults();
    }
    if(event.target.id == "backspace") {
        display.textContent = display.textContent.slice(0,-1);
    }
});

let backspace = document.querySelector(".bi-backspace");
backspace.addEventListener("click", function(){
    display.textContent = display.textContent.slice(0,-1);
});

document.addEventListener("keydown", function(event) {
    if (event.key == '/') {
        event.preventDefault();
    }
    switcher(event.key);
});

function switcher(key) {
    switch(key) {
        case "1":
            display.textContent += '1';
        break;

        case "2":
            display.textContent += '2';
        break;

        case "3":
            display.textContent += '3';
            break;
        case "4":
            display.textContent += '4';
            break;
        case "5":
            display.textContent += '5';
            break;
        case "6":
            display.textContent += '6';
            break;
        case "7":
            display.textContent += '7';
            break;
        case "8":
            display.textContent += '8';
            break;
        case "9":
            display.textContent += '9';
            break;
        case "0":
            display.textContent += '0';
            break;
        case "+":
            if(!operatorPressed) {
                operatorPressed = true;
                display.textContent += ' + ';
            }
            else if (operatorPressed) {
                evaluate();
                resultDisplayed = false;
                display.textContent += ' + ';
            }
            break;
        case "-":
            if(!operatorPressed) {
                operatorPressed = true;
                display.textContent += ' - ';
            }
            else if (operatorPressed) {
                evaluate();
                resultDisplayed = false;
                display.textContent += ' - ';
            }
            break;
        case "*":
            if(!operatorPressed) {
                operatorPressed = true;
                display.textContent += ' * ';
            }
            else if (operatorPressed) {
                evaluate();
                resultDisplayed = false;
                display.textContent += ' * ';
            }
            break;
        case "/":
            
            if(!operatorPressed) {
                operatorPressed = true;
                display.textContent += ' / ';
            }
            else if (operatorPressed) {
                evaluate();
                resultDisplayed = false;
                display.textContent += ' / ';
            }
            break;
        case ".":
            if (!decimalDisplayed) {
                display.textContent += '.';
                decimalDisplayed = true;
            }
            break;
        case "Enter":
            evaluate();
            break;
        case "Backspace":
            display.textContent = display.textContent.slice(0,-1);
            break;
        case "Space":
            defaults();
    }
}

function evaluate() {
    let string = display.textContent;
    const arr = string.split(" ");
    if(arr.length === 3) {
        let num1 = parseFloat(arr[0]);
        let opp = arr[1];
        let num2 = parseFloat(arr[2]);
        const result = operate(num1, num2, opp);
        if (isNaN(result)) {
            display.textContent = "Invalid Input";
            resultDisplayed = true;
            return;
        }
        if (result === Infinity) {
            display.textContent = "Cannot divide by 0!";
            resultDisplayed = true;
            return;
        }
        display.textContent = result;
        console.log(result);
        resultDisplayed = true;
        return;
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