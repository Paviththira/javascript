// NO1

function sortLetters(string) {
    let temp = string.split('');
    temp.sort();
    return temp.join("");
}
console.log(sortLetters("konexio"));

// No2
function countEach(string) {
    let count_x = 0;
    let count_o = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'x') {
            count_x++;
        }
        if (string[i] === 'o') {
            count_o++;
        }
    }
    if (count_x == count_o) {
        console.log("True");
    } else {
        console.log("False");
    }
}
countEach("xxxoooox");



// No4
function swap(string) {
    let stringNew = [];
    for (i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            stringNew[i] = string[i].toLowerCase();
        } else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
            stringNew[i] = string[i].toUpperCase();
        } else {
            stringNew[i] = string[i];
        }
    }
    return stringNew.join("");
}
console.log(swap("Hello World"));


// No5
// 01Convert Age to Days

function calcAge(age) {
    return age * 365
}

//02Area of a Triangle
function triArea(base, height) {
    return ((base * height) / 2);
}

// 03Convert Hours into Seconds
function howManySeconds(hours) {
    return (hours * 60 * 60);
}

// 04Find the Perimeter of a Rectangle

function findPerimeter(length, width) {
    return ((length + width) * 2);
}

// 05Basketball Points

function points(twoPointers, threePointers) {
    return (twoPointers * 2 + threePointers * 3);
}
