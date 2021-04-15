// NO1
var integer = 102;
var float = 13.2;
console.log(integer);
console.log(float);

// NO2

var basic = 34;
var stringified = basic.toString();
console.log(stringified);

// NO3

var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

// NO4

var test = 12;
var bis = 5;
// console.log(test + bis);
// console.log(test - bis);
// console.log(test * bis);
// console.log(test / bis);
// console.log(test ** bis);
// console.log(test % bis);

console.log("Addition:", test + bis);
console.log("Soustraction:", test - bis);
console.log("Multiplication:", test * bis);
console.log("Division:", test / bis);
console.log("Puissance:", test ** bis);
console.log("Reste:", test % bis);

// NO5

var test = 143;
var bis = 219;
// console.log(test > bis);
// console.log(test < bis);
// console.log(test >= bis);
// console.log(test <= bis);
// console.log(test == bis);
// console.log(test === bis);
// console.log(test != bis);
// console.log(test !== bis);

console.log("> :", test > bis);
console.log("< :", test < bis);
console.log(">= :", test >= bis);
console.log("<= :", test <= bis);
console.log("== :", test == bis);
console.log("=== :", test === bis);
console.log("!= :", test != bis);
console.log("!== :", test !== bis);



// // NO6

var limit = 50;
var score = 64;
if (score > limit) {
    console.log('ok good');
}
else {
    console.log('oh no');
}

// NO7

var password = "azerty";

if (password.length > 5) {
    console.log("The password is secure");
}


// No8

var limit = 50;
var score = 49;
var password = "azert";

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

// No9

let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);
if (random == 6) {
    console.log("Yes I win!");
} else {
    console.log("So close...");
}
console.log("random :" + random);


// NO10

let month = "January";
switch (month) {
    case "January":
    case "February":
    case "March":
        console.log("Winter");
        break;
    case "April":
    case "May":
    case "June":
        console.log("Spring");
        break;
    case "July":
    case "August":
    case "September":
        console.log("Summer");
        break;
    case "October":
    case "November":
    case "December":
        console.log("Autumn");
        break;
}



