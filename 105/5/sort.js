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
let i = document.getElementById('Input');
let r = document.getElementById("result");
let data = [];
let mySort = new Sort(); 

function pushData() {
    let input = i.value;
    if (input == "") {
        r.innerHTML = "Please Input Again";
    } else {
        data.push(input);
        displayData();
        i.value = "";
    }
}

function displayData() {
    r.innerHTML = "Data = " + mySort.display(data);
}

function bubbleSort() {
    mySort.bubbleSort(data);
    displayData();
}

function insertionSort() {
    mySort.insertionSort(data);
    displayData();
}

function shellSort() {
    mySort.shellSort(data);
    displayData();
}
