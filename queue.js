class Queue{
    constructor(){
        this.myList = []; 
    }
    isEmty(){
        return this.myList.length == 0;
    }
    enQueue(value){
        this.myList.push(value);
    }
    deQueue(){
        if(this.isEmty()){
            return "";
        }
        else{
            return this.myList.shift();
        }
    }
    getSize(){
        return this.myList.length;
    }
    display(){
        for(let i =0;i<this.myList.length;i++){
            console.log(this.myList[i]);
        }
    }
}

//main//
let myQueue = new Queue();
console.log(myQueue);
console.log(myQueue.isEmty());
myQueue.enQueue("a");
myQueue.enQueue("b");
myQueue.enQueue("c");
myQueue.display();
console.log(myQueue.isEmty());
let data = myQueue.deQueue();
console.log("data to dequeue = ",data);
myQueue.display();
console.log("number of data in Queue = ",myQueue.getSize());