// // No1

let i = 50;
while (i <= 200) {
    console.log(i);
    i = i + 2;
}

//  /No2

let dice;
let count = 0;
do {
    dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    count++;
    console.log(dice);
}
while (dice != 6);
console.log("count : " + count);

// // No3

let ussainBolt = 0;
let tysonGay = 0;
let min; 1;
let max; 10;

while (ussainBolt < 100 || tysonGay < 100) {
    let num1 = Math.floor(Math.random() * (max - min + 1) + min);
    let num2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt = ussainBolt + num1;
    tysonGay = tysonGay + num2;

    console.log("UssainBolt", ussainBolt);
    console.log("TysonGay", tysonGay);
}

if (ussainBolt > tysonGay) {
    console.log("The winner is UssainBolt");
} else if (tysonGay > ussainBolt) {
    console.log("The winner is TysonGay");
} else {
    console.log("same");
}

// No4
// corrections
// let box1 = 12;
// let box2 = 5;
// while (box1 > 0) {
//     console.log(box2);
//     box1 -= 10;
//     console.log(box1);
// }

console.log(5);
console.log(2);
console.log(5);
console.log(-8);


// No5
// corrections

// let i = 0;
// let box1 = 7;
// while (i > 0) {
//     i++;
//     console.log(box1 + i);
// }
// console.log(i);
// console.log(box1);

console.log(0);
console.log(7);