let n = document.getElementById("num");
let re = document.getElementById("result");

function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

function computeData() {
    let num = parseFloat(n.value);
    let ans = 0;

    if (isNaN(num) || num < 1) {
        ans = "Please enter a valid number greater than 0";
    } else if (num == 1) {
        ans = 0;
    } else if (num == 2) {
        ans = 1;
    } else {
        ans = fibonacci(num - 2) + fibonacci(num - 1);
    }

    re.innerHTML = "ans = " + ans;
}

function resetData() {
    n.value = "";
    re.innerHTML = "";
}
