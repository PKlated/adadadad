let n = document.getElementById("num");
let re = document.getElementById("result");

function computeData() {
        let num = parseFloat(n.value);
        let sum = computeSum(num);
        re.innerHTML = "ans = " + sum;
    }

function computeSum(num) {
        if (num >= 1) {
                return num + computeSum(num - 1);
        } else if (num == 0) {
                return 0;
        } else {
                return "Please Enter a Number that is 0 or Greater";
        }
    }

function resetData() {
        n.value = "";
        re.innerHTML = "";
    }