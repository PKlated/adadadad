let n = document.getElementById("num");
let re = document.getElementById("result");

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function computeData() {
    let num = parseFloat(n.value);
    let ans = 0;

    if (num == 1) {
        ans = 0;
    } else if (num == 2) {
        ans = 1;
    } else if (num < 1) {
        ans = "Please enter a number greater than 0";
    } else {
        ans = fibonacci(num - 2) + fibonacci(num - 1);
    }

    re.innerHTML = "ans = " + ans;
}

function resetData() {
    n.value = "";
    re.innerHTML = "";
}
