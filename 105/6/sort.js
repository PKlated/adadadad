class Sort {
    bubbleSort(arr) {
        let temp;
        let size = arr.length;
        for (let i = 0; i < size - 1; i++) {
            for (let j = 0; j < (size - i) - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    insertionSort(arr) {
        let key, j;
        for (let i = 1; i < arr.length; i++) {
            key = arr[i];
            j = i - 1;
            while (j >= 0 && key < arr[j]) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    shellSort(arr) {
        let gap = arr.length / 2;
        let temp, j;

        while (gap > 0) {
            for (let i = gap; i < arr.length; i++) {
                temp = arr[i];
                j = i;
                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j = j - gap;
                }
                arr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
    }

    display(arr) {
        let str = "";
        for (let i = 0; i < arr.length; i++) {
            str = str + arr[i] + " ";
        }
        return str;
    }

    copyArray(arr) {
        let copy = [];
        for (let i = 0; i < arr.length; i++) {
            copy.push(arr[i]);
        }
        return copy;
    }
}

// Main
let data = [];
let mySort = new Sort();

for (let i = 0; i < 10; i++) {
    data.push(Math.floor(Math.random() * 100));
}

console.log("Original Array: ", mySort.display(data));

// Bubble Sort
let bubbleSortData = mySort.copyArray(data);
console.log("Before Bubble Sort: ", mySort.display(bubbleSortData));
console.time("Bubble Sort");
mySort.bubbleSort(bubbleSortData);
console.timeEnd("Bubble Sort");
console.log("After Bubble Sort: ", mySort.display(bubbleSortData));

// Insertion Sort
let insertionSortData = mySort.copyArray(data);
console.log("Before Insertion Sort: ", mySort.display(insertionSortData));
console.time("Insertion Sort");
mySort.insertionSort(insertionSortData);
console.timeEnd("Insertion Sort");
console.log("After Insertion Sort: ", mySort.display(insertionSortData));

// Shell Sort
let shellSortData = mySort.copyArray(data);
console.log("Before Shell Sort: ", mySort.display(shellSortData));
console.time("Shell Sort");
mySort.shellSort(shellSortData);
console.timeEnd("Shell Sort");
console.log("After Shell Sort: ", mySort.display(shellSortData));
