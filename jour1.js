console.log("Hello World !");



var text = 'my name is pavi';
console.log(text);



var name = "dila";
console.log('Nice to meet you ' + name);



var testLength = 'I am very long !';
console.log(testLength);


var food = 'croissant is meh';
food = food.replace('meh', 'so good');
console.log(food);


var basic = 'This is cool';
var basicUp = basic.toUpperCase();
var basicDown = basic.toLocaleLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);



var word = "banana";
var letters = word.split('');
console.log(letters);



var age = '26';
var template = `I'm ${age} years old`;
console.log(template);


var bisou = "bisou";
var phrase1 = "casse toi pov'con";
var phrase2 = "bisou mon chérie";
var doesPhrase1IncludesBisou = phrase1.includes(bisou);
var doesPhrase2IncludesBisou = phrase2.includes(bisou);
console.log(doesPhrase1IncludesBisou, doesPhrase2IncludesBisou);


var nombre1 = 11;
console.log(nombre1.toString().padStart(4, "0"));
var nombre2 = 999;
console.log(nombre2.toString().padStart(4, "0"));
var nombre3 = 2.2;
console.log(nombre3.toString().padEnd(4, "0"));
var nombre4 = 10.9;
console.log(nombre4.toString().padEnd(5, "0"));


// var phrase = '@g3v0@l03d0oil8j0ts31c0sim@0s3l0t8l@S';
// phrase = phrase.replaceAll('3', 'e');
// console.log(phrase);
// phrase = phrase.replaceAll('@', 'a');
// console.log(phrase);
// phrase = phrase.replaceAll('8', 'u');
// console.log(phrase);
// phrase = phrase.replaceAll('0', ' ');

// phrase = phrase.replaceAll('1', '\'');
// console.log(phrase);
// console.log(phrase.split('').reverse().join(''));







