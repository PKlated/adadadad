let fhar =document.getElementById("fha");
let re = document.getElementById("result");
function computeData(){
    let fha =parseFloat(fhar.value);
    let ans = (5.0/9.0)*(fha-32.0)
    re.innerHTML = "Celcius = "+ans;
    console.log(ans);
}

function resetData(){
    fhar.value="";
    re.innerHTML="";
}