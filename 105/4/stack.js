class Stack{
    constructor(){
        this.mylist = [];
    }
    isEmpty(){
        return this.mylist.length==0
        // if(this.mylist.length==0){
        //     return true;
        // }
        // else{
        //     return false;
        // }
    }
    push(value){
        this.mylist.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return "";
        }
        else{
            return this.mylist.pop();
        }
    }
    peek(){
        return this.mylist[this.mylist.length-1];
    }
    stackDisplay(){
        for(let i = this.mylist.length-1;i>=0;i--){
            console.log(this.mylist[i]);
        }
    }
}

// main
let e = document.getElementById("exe")
let r = document.getElementById("result")
function displayResult(){
    let result = infixToPostfix(e.value);
    let ans = evaluatePostfix(result);
    r.innerHTML = "Postfix = " +result + "</br>"+ " Answer = " + ans;
}
// let result = infixToPostfix("((a+b)*c/d+e^f)/g")
// console.log("result = ",result)
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

function checkOperator(c) {
    return c == "+" || c == "-" || c == "*" || c == "/" || c == "^" || c == "**";
}

function checkPriority(c) {
    if (c == "**") {
        return 3; // Exponentiation has the highest priority
    } else if (c == "*" || c == "/") {
        return 2;
    } else if (c == "+" || c == "-") {
        return 1;
    } else {
        return 0;
    }
}

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
            } else if (operand2 === 0 && ch === '/') {
                res = "Please input again"; // Handle division by zero
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

function isOperator(ch) {
    return ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch === '**'; // Include '**' as an operator
}

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