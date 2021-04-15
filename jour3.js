// No1

var fruits = ["mango", "lemon", "blueberry"];
console.table(fruits);
console.log(fruits);

// No2
var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));


// No3
var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
// console.log(objects);
console.table(objects);

// var newlength = objects.unshift("chair");
objects.pop();
console.log(objects);

objects.push("laptop");
console.table(objects);

objects.shift("");
console.log(objects);

// No4

var numbers = [4, 10, 8, 12, 6];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

numbers.reverse();
console.log(numbers);

// NO5

var total = 0;
var limit = 10;
for (var i = 0; i <= limit; i++) {
    total += i;

    console.log("total partiel:", total);
}

console.log(total);

// N06

console.log("ex06");
var sentence = "Hello Konexio !";
var newSentence = '';
var s = sentence.length - 1;
console.log(s);
while (s >= 0) {
    newSentence = newSentence + sentence[s];
    s--
}
console.log(newSentence);

// bonus1
var total = 0;
var limit = 10;

var i = 0;

while (i <= limit) {
    total += i;

    i++;
}

console.log(total);

// Bonus2

// var students = ["Wen-Tzu", "Bharati", "Pavi", "Anna", "Aneta", "Fadela", "Fanny", "Sara", "Lucie", "Destine", "Ophélie", "Malika", "Zaineb", "Sarah",];












