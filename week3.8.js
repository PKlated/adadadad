let b1 =document.getElementById("bottle");
let re = document.getElementById("result");
function computeData(){
    let bottle =parseFloat(b1.value);
    if (bottle>12){
        let x=bottle/12
        if (x-Math.round(x)=0){
            bottle-(Math.round)
        }
    }
    re.innerHTML = "ans = "+ans;
}

function resetData(){
    n1.value="";
    re.innerHTML="";
}