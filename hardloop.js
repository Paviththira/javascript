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

