let n1 =document.getElementById("num1");
// console.log(n1);
let n2= document.getElementById("num2");
// console.log(n2);
let re = document.getElementById("result");
// console.log(re);
function computeData(){
    let num1 =parseFloat(n1.value);
    // console.log("n1 =",num1);
    // console.log(typeof(num1));
    let num2 =parseFloat(n2.value);
    // console.log("n2 = ",num2);
    // console.log(typeof(num2));
    let ans = num1/num2;
    // document.write("ans= ",ans );
    re.innerHTML = "ans = "+ans;
}

function resetData(){
    n1.value="";
    n2.value="";
    re.innerHTML="";
}