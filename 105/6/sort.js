class Sort{
    bubbleSort(arr){
        let temp;
        let size = arr.length;
        for(let i = 0;i<size-1;i++){
            for(let j=0;j<(size-i)-1;j++){
                if(arr[j]>arr[j+1]){
                    temp =arr[j];

                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    }

    insertionSort(arr){
        let key,j;
        for(let i=1;i<arr.length;i++){
            key =arr[i];
            j=i-1;
            while(j>=0&&key<arr[j]){
                arr[j+1]=arr[j];
                j=j-1;
            }
            arr[j+1]=key;
        }
    }

    shellSort(arr){
        let gap = arr.length/2;
        let temp,j;

        while(gap>0){
            for(let i = gap;i<arr.length;i++){
                temp = arr[i]
                j= i ;
                while(j>=gap&&arr[j-gap]>temp){
                    arr[j]=arr[j-gap];
                    j=j-gap;
                }
                arr[j]=temp;
            }
            gap = Math.floor(gap/2);
        }
    }

    display(arr){
        let str = "";
        for(let i=0;i<arr.length;i++){
            str = str+arr[i]+"";
        }
        return str;
    }
    
}

// main

let data =[];

let mySort = new Sort();

for(let i =0;i<10;i++){
    data.push(Math.floor(Math.random()*100));
}

console.log("Before BB : ",mySort.display(data));
console.time();
mySort.bubbleSort(mySort);
console.timeEnd();
console.log("After BB : ",mySort.display(data));

console.log("Before IS : ",mySort.display(data));
console.time();
mySort.insertionSort(mySort);
console.timeEnd();
console.log("After IS : ",mySort.display(data));

console.log("Before SS: ",mySort.display(data));
console.time();
mySort.shellSort(mySort);
console.timeEnd();
console.log("After SS : ",mySort.display(data));