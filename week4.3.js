let m1 =document.getElementById("monney");
let re = document.getElementById("result");
function computeData(){
    let monney1 =parseFloat(m1.value);
    let tax=0;
    if(monney1<15000){
        tax=monney1*0.03
    }
    else if(monney1>=15000<100000){
        tax=monney1*0.05
    }
    else{
        tax=monney1*0.1
    }
    let monney2=monney1-tax
    re.innerHTML = "เงินก่อนหักภาษี = "+monney1 + "เงินหลังหักภาษี = "+ monney2;
}

function resetData(){
    m1.value="";
    re.innerHTML="";
}