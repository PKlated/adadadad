let b1 =document.getElementById("bottle");
let re = document.getElementById("result");
function computeData(){
    let bottle =parseFloat(b1.value);
    if (bottle>12){
        let x = bottle/12
        if (x - Math.ceil(x) != 0){
            let y = bottle-(Math.floor(x)*12) 
            ans = (Math.floor(x)*100)+(y*10.7)
        }
        else {
            ans = x*100
        }
    }
    else {
        ans = bottle*10.7  
    }
    re.innerHTML = "ans = "+ans;
}

function resetData(){
    b1.value="";
    re.innerHTML="";
}