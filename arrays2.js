let n =document.getElementById("num");
let r =document.getElementById("result"); 
let a =document.getElementById("ans");

let item = [];

function addData(){
    item.unshift(parseFloat(n.value));
    r.innerHTML=""
    for (let i in item) {
        r.innerHTML = r.innerHTML + i +" , " + item[i] + "<br>";
    }
    n.value = "";
}

function sumData(){
    let sum = 0;
    for (let data of item){
        if(data%2==0){
            sum=sum+data;
        }    
   }
    a.innerHTML = " sum = "+sum;
}
