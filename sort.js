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
let data =[9,5,7,4,1,3];
for(let i =0;i<10;i++){
    data.push(Math.floor(Math.random()*100));
}
let mySort = new Sort();
// console.log("Before : ",mySort.display(data));
// mySort.bubbleSort(data);
// console.log("After : ",mySort.display(data));

let data1 =[9,5,7,4,1,3];
console.log("Before : ",mySort.display(data1));
mySort.shellSort(data1);
console.log("After : ",mySort.display(data1));
