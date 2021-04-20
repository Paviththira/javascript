let numbers = [];
let total = 0;
for (let i = 0; i < 50; i++) {
    numbers[i] = Math.floor(Math.random() * (100 - 0 + 1));
}
for (i = 0; i < 50; i++) {
    total = total + numbers[i];
}
console.log("total : " + total);

// No2
let maxNumber = 50;
for (let i = 0; i < 50; i++) {
    numbers[i] = Math.floor(Math.random() * (200 - 50 + 1) + 50);
}
for (i = 0; i < 50; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log("Max : " + maxNumber);

// No3
// var numbers = [];
// var randomNumber = 0;

// for (var i = 0; i <= 10; i++) {

//     randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);

//     numbers.push(randomNumber);
// }

// No4

/*let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let countO = 0;
let tempArray = [];

for (let i = 0; i <= words.length - 1; i++) {
    tempArray = words[i].split(" ").join("").split("");
    console.table(tempArray);

    for (let j = 0; j <= tempArray.length - 1; j++) {
        if (tempArray[j] == "o") {
            countO = countO + 1;
        }
    }
}

console.log("end result", countO);*/

let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let countO = 0;
let tempArray = [];
for (let i = 0; i <= words.length - 1; i++) {
    tempArray[i] = words[i].split();
    console.table(tempArray);
    for (let j = 0; j <= tempArray[i].length - 1; j++) {
        if (tempArray[i][j] == "o") {
            countO = countO + 1;
        }
    }
}
console.log("end result", countO);
