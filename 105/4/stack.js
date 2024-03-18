class Stack{
    constructor(){
        this.mylist = [];
    }
    isEmty(){
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
        if(this.isEmty()){
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
    r.innerHTML = "result = " +result;
}
// let result = infixToPostfix("((a+b)*c/d+e^f)/g")
// console.log("result = ",result)
function infixToPostfix(str){
    let ch;
    let output =""
    let mystack = new Stack();
    for(let i =0;i<str.length;i++){
        ch = str.charAt(i);
        // console.log(ch);
        if(ch =="("){
            mystack.push(ch);
            mystack.stackDisplay();
        }
        else if(checkOperator(ch)){
            while(!mystack.isEmty()&&checkPriority(ch)<=checkPriority(mystack.peek())){
                output = output+mystack.pop();
            }
            mystack.push(ch);
            mystack.stackDisplay();
        }
        else if(ch==")"){
            while(!mystack.isEmty()&&mystack.peek()!="("){
                output = output+mystack.pop();
            }
            mystack.pop();
            mystack.stackDisplay();
        }
        else{
            output = output+ch;
            console.log("output = ",output);
        }
    }
    while(!mystack.isEmty()){
        output = output+mystack.pop();
    }
    return output;
}

function checkOperator(c){
    if(c=="+"||c=="-"||c=="*"||c=="/"||c=="^"){
        return true;
    }
    else{
        return false;
    }
}

function checkPriority(c){
    if(c=="+"||c=="-"){
        return 1;
    }
    else if(c=="*"|c=="/"){
        return 2;
    }
    else if(c=="^"){
        return 3;
    }
    else{
        return 0;
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