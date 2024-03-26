class nodeData {
    constructor(elem) {
        this.element = elem;
        this.nextleft = null;
        this.nextright = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    addRecursive(current, elem) {
        if (current == null) {
            return new nodeData(elem);
        }
        if (elem < current.element) {
            current.nextleft = this.addRecursive(current.nextleft, elem);
        } else if (elem > current.element) {
            current.nextright = this.addRecursive(current.nextright, elem);
        }
        return current;
    }

    add(elem) {
        this.root = this.addRecursive(this.root, elem);
    }

    inOrder(n, str) {
        if (n != null) {
            str = this.inOrder(n.nextleft, str);
            str = str + n.element + " ";
            str = this.inOrder(n.nextright, str);
        }
        return str;
    }

    postOrder(n) {
        if (n != null) {
            this.postOrder(n.nextleft);
            this.postOrder(n.nextright);
            console.log(n.element);
        }
    }

    preOrder(n, str) {
        if (n != null) {
            str = str + n.element + " ";
            str = this.preOrder(n.nextleft, str);
            str = this.preOrder(n.nextright, str);
        }
        return str;
    }
    clear() {
        this.root = null;
    }
}

// Create an instance of the BST
let bst = new binarySearchTree();

// Function to add elements to the BST
function addElement() {
    const i = document.getElementById("input");
    const value = parseInt(i.value);
    if (!isNaN(value)) {
        bst.add(value);
        i.value = ''; // Clear the input field
    }
}

// Function to perform in-order traversal and display the result
function inOrder() {
    const result = bst.inOrder(bst.root, "");
    const r = document.getElementById("result");
    r.innerHTML = "In-Order: " + result;
}

// Function to perform pre-order traversal and display the result
function preOrder() {
    const result = bst.preOrder(bst.root, "");
    const r = document.getElementById("result");
    r.innerHTML = "Pre-Order: " + result;
}

// Function to perform post-order traversal and display the result
function postOrder() {
    const output = document.getElementById("result");
    output.innerHTML = "";
    let result = ""; // Variable to store the post-order traversal result
    const originalConsoleLog = console.log;
    console.log = function(message) {
        result += message + " ";
    };

    bst.postOrder(bst.root);
    console.log = originalConsoleLog;

    output.innerHTML = "Post-Order: " + result.trim();
}

function clearTree() {
    bst.clear();
    const output = document.getElementById("result");
    output.innerHTML = "Tree cleared!";
}