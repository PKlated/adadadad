class Stack {
    constructor() {
        this.mylist = [];
    }

    isEmpty() {
        return this.mylist.length == 0;
    }

    push(value) {
        this.mylist.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return "";
        } else {
            return this.mylist.pop();
        }
    }

    peek() {
        return this.mylist[this.mylist.length - 1];
    }

    stackDisplay() {
        for (let i = this.mylist.length - 1; i >= 0; i--) {
            console.log(this.mylist[i]);
        }
    }
}

// Main
let e = document.getElementById("exe");
let r = document.getElementById("result");

function displayResult() {
    let result = infixToPostfix(e.value);
    let ans = evaluatePostfix(result);
    r.innerHTML = "Postfix = " + result + "</br>" + " Answer = " + ans;
}

// Modify the checkOperator function to include '**' as a single operator
function checkOperator(c) {
    return c == "+" || c == "-" || c == "*" || c == "/" || c == "^" || c == "**";
}

// Modify the infixToPostfix function to handle '**' as a single operator
function infixToPostfix(str) {
    let ch;
    let output = "";
    let mystack = new Stack();
    for (let i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        if (ch == "(") {
            mystack.push(ch);
        } else if (checkOperator(ch)) {
            while (!mystack.isEmpty() && checkPriority(ch) <= checkPriority(mystack.peek())) {
                output = output + mystack.pop();
            }
            mystack.push(ch);
        } else if (ch == ")") {
            while (!mystack.isEmpty() && mystack.peek() != "(") {
                output = output + mystack.pop();
            }
            mystack.pop();
        } else {
            output = output + ch;
        }
    }
    while (!mystack.isEmpty()) {
        output = output + mystack.pop();
    }
    return output;
}

// Define the checkPriority function to determine operator precedence
function checkPriority(c) {
    if (c == "+" || c == "-") {
        return 1;
    } else if (c == "*" || c == "/") {
        return 2;
    } else if (c == "^" || c == "**") {
        return 3;
    } else {
        return 0;
    }
}

// Modify the evaluatePostfix function to correctly handle '**' as an operator
function evaluatePostfix(postfix) {
    const stack = new Stack();

    for (let i = 0; i < postfix.length; i++) {
        let ch = postfix.charAt(i);

        if (!isNaN(ch)) {
            stack.push(parseInt(ch));
        } else if (isOperator(ch)) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let res;

            if (ch == '**') {
                res = Math.pow(operand1, operand2);
            } else {
                res = applyOperator(operand1, operand2, ch);
            }

            stack.push(res);
        } else {
            return "Please input a number only"; // Return error message for invalid input characters
        }
    }

    if (stack.isEmpty()) {
        return "Please input a number only"; // Return error message if the stack is empty (input was incomplete)
    }

    return stack.pop();
}

// Include '**' as an operator in the isOperator function
function isOperator(ch) {
    return ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch === '^' || ch === '**'; // Include '**' as an operator
}

// Modify the applyOperator function to handle '**' as an operator
function applyOperator(operand1, operand2, operator) {
    if (operator === '+') {
        return operand1 + operand2;
    } else if (operator === '-') {
        return operand1 - operand2;
    } else if (operator === '*') {
        return operand1 * operand2;
    } else if (operator === '/') {
        if (operand2 !== 0) {
            return operand1 / operand2;
        } else {
            return "Please input again"; // Return the error message as a string
        }
    } else if (operator === '**') { // Handle exponentiation
        return Math.pow(operand1, operand2);
    } else {
        throw new Error("Invalid operator: " + operator); // Throw an Error object for invalid operators
    }
}

// let mystack = new Stack();
// console.log(mystack);
// console.log(mystack.isEmty());
// mystack.push("a");
// mystack.push("b");
// mystack.push("c");
// mystack.stackDisplay();
// console.log(mystack.isEmty());
// let data = mystack.pop();
// console.log("data to delete = ",data );
// mystack.stackDisplay();
// console.log("top of stack = ",mystack.peek());