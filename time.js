let data=[];
console.time();
for(let i=0;i<50000;i++){
    data.push(Math.floor(Math.random()*100));
}
console.timeEnd();

function summation1(n){
    let total =0;
    for(let i=1;i<n;i++){
        total = total +i;
    }
    return total
}

function summation2(n){
    return (n*(n+1))/2;
}

function summation3(n){
    if(n=1){
        return 1;
    }
    else{
        return n+summation3(n-1);
    }
}

let s1,s2,s3;
console.log("---- call Sumation1 ----");
console.time();
s1=summation1(50000);
console.timeEnd();
console.log("s1 = ",s1);

console.log("---- call Sumation2 ----");
console.time();
s2=summation2(50000);
console.timeEnd();
console.log("s2 = ",s2);

console.log("---- call Sumation3 ----");
console.time();
s3=summation3(50000);
console.timeEnd();
console.log("s3 = ",s3);