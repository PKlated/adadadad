let n = document.getElementById("num");
let re = document.getElementById("result");

function computeData() {
    let num = parseFloat(n.value);
    let sum = 0;

    if (num >= 1) {
        for (let i = 0; i <= num; i++) {
            sum += i;
        }
    }
    else if(num == 0){
        sum = 0
    }
    else {
        ans = "Please Enter Number that More than 0"
    }

    re.innerHTML = "ans = " + sum;
}

function resetData() {
    n.value = "";
    re.innerHTML = "";
}
