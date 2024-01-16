let cars = ["Toyota","Honda","BMW"];
let score = [80,75,90,100];
let item = [];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);







console.log("---old---");

console.log(score[0]);
console.log(score[1]);
console.log(score[2]);
console.log(score[3]);

// console.log(item[0]);

console.log("---new---")
score[1] = 50;
console.log(score[1]);
console.log(score.length);

console.log("---cars---")

for(let i = 0 ; i < cars.length ; i++){
    console.log(i,cars[i]);
}

console.log("---score---")

for(let i = 0 ; i < score.length ; i++){
    console.log(i,score[i]);
}

console.log("--- for of car ---")

for(let item of cars){
    console.log(item);
}


console.log("--- for in car ---")

for(let item in cars){
    console.log(item);
}


console.log("--- new for of car ---")
cars.push("VOlvo");

for(let item of cars){
    console.log(item);
}


console.log("--- new for of car ---")
cars.unshift("VOlvo");

for(let item of cars){
    console.log(item);
}


let remove = cars.pop();
console.log("remove = " ,remove)

console.log("--- lastest for of car ---")

for(let item of cars){
    console.log(item);
}

console.log("---shift---")
remove = cars.shift();
console.log("remove = " ,remove)

for(let item of cars){
    console.log(item);
}
