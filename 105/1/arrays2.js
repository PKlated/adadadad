let n = document.getElementById("num");
let r = document.getElementById("result");
let Odd = document.getElementById("ansOdd");
let Even = document.getElementById("ansEven");

let item = [];

function addData() {
    item.unshift(parseFloat(n.value));
    r.innerHTML = "";
    for (let i in item) {
        r.innerHTML = r.innerHTML + i + " , " + item[i] + "<br>";
    }
    n.value = "";
}

function sumData() {
    let sumOdd = 1;
    let sumEven = 1;
    for (let data of item) {
        if (data % 2 == 0) {
            sumEven *= data;
        }
        else { 
            sumOdd *= data;
        }
    }
    
    Odd.innerHTML = "Sum of odd numbers = " + sumOdd + "<br>";
    Even.innerHTML = "Sum of even numbers = " + sumEven + "<br>";
}
