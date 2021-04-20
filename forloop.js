// No1

for (var counter = 5; counter <= 10; counter = counter + 1) {
    console.log(counter * counter);
}

// No2

let no = 0;
for (let i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        no++;
    }
}
console.log(no)

// No3

let sum = 0;
let min = 1;
let max = 6;

for (let i = 1; i <= 20; i++) {
    let dice = Math.floor(Math.random() * (max - min + 1) + min);
    if (dice >= 5) {
        sum += dice;
    }
}
console.log(sum);

// No4
var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);

// No5

var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);

// No6

var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);
