class Node {
    constructor(elem) {
        this.element = elem;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.firstNode == null) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.length++;
        return this;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (this.firstNode == null) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let currentNode = this.firstNode;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            document.getElementById('result').textContent = "Please try again.";
            return false;
        }
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }
        const newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        this.length++;
        return this;
    }

}

let d = document.getElementById("data");
let r = document.getElementById("result");
let i = document.getElementById("index");
let v = document.getElementById("value");
let mylist = new LinkedList();

function pushData() {
    mylist.push(d.value);
    d.value = "";
}

function insertData() {
    let indexInput = i.value;
    let valueInput = v.value;
    const index = parseInt(indexInput);
    
    if (isNaN(index) || index < 0 || index > mylist.length) {
        r.innerHTML = "Please enter a index.";
        return;
    }

    mylist.insert(index, valueInput);
    d.value = "";
    r.innerHTML = "Data inserted";
}

function popData() {
    if (mylist.length === 0) {
        r.innerHTML = "List is empty";
        return;
    }

    let current = mylist.firstNode;
    let previous = null;

    while (current.next) {
        previous = current;
        current = current.next;
    }

    const poppedElement = current.element;

    if (!previous) {
        mylist.firstNode = null;
    } else {
        previous.next = null;
    }

    mylist.length--;

   r.innerHTML = "Popped = " + poppedElement;
}

function shiftData() {
    if (mylist.length === 0) {
       r.innerHTML = "List is empty";
        return;
    }

    const shifted = mylist.firstNode.element;
    mylist.firstNode = mylist.firstNode.next;
    mylist.length--;

    r.innerHTML = "Shifted = " + shifted;
}

function removeData() {
    let removeIndex = parseInt(i.value);

    if (isNaN(removeIndex) || removeIndex < 0 || removeIndex >= mylist.length) {
        r.innerHTML = "Please enter index ";
        return;
    }

    let current = mylist.firstNode;
    let previous = null;
    let currentIndex = 0;

    while (currentIndex !== removeIndex) {
        previous = current;
        current = current.next;
        currentIndex++;
    }

    const removed = current.element;

    if (!previous) {
        mylist.firstNode = current.next;
    } else {
        previous.next = current.next;
    }

    mylist.length--;

    r.innerHTML = "Removed at index " + removeIndex + ": " + removed;
}

function setData() {
    let setDataInput = d.value;
    let setIndex = parseInt(i.value);

    if (isNaN(setIndex) || setIndex < 0 || setIndex >= mylist.length) {
        r.innerHTML = "Please enter index";
        return;
    }

    let current = mylist.firstNode;
    let currentIndex = 0;

    while (currentIndex !== setIndex) {
        current = current.next;
        currentIndex++;
    }

    current.element = setDataInput;

    r.innerHTML = "Data at index " + setIndex + " set to = " + setDataInput;
}


function getData() {
    let index = parseInt(i.value);
    let data = mylist.get(index);

    if (data) {
        r.innerHTML = "Data at index " + index + " = " + data.element;
    } else {
        r.innerHTML = "No data found at index " + index + ".";
    }
}

function showListData() {
    let current = mylist.firstNode;
    let output = ""; 
    let index = 0;

    while (current) {
        output += "(" + index + ", " + current.element + ")<br>";
        current = current.next;
        index++;
    }

    r.innerHTML = output;
}
