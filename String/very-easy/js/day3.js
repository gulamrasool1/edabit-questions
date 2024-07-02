// 32 Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Examples

// function countSyllables(str) {
//     return str.length / 2;
// }

function countSyllables(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result++;
    }
    return result / 2;
}

// console.log(countSyllables("Hehehehehehe"));   //➞ 6
// console.log(countSyllables("bobobobobobobobo"));   //➞ 8
// console.log(countSyllables("NANANA"));   //➞ 3



// 33 Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.

// Examples

function ctoa(str) {
    // return str.charCodeAt("");

    return str.codePointAt();
}

// console.log(ctoa("A"));   //➞ 65
// console.log(ctoa("m"));   //➞ 109
// console.log(ctoa("["));   //➞ 91
// console.log(ctoa("d"));   //➞ 100



// 34 Reverse Psychology
// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

// Examples

function reversePsychology(str) {
    // return "Do not " + str + ".";

    return `Do not ${str}.`;
}

// console.log(reversePsychology("wash the dishes"));   //➞ "Do not wash the dishes."
// console.log(reversePsychology("eat your lunch"));  //➞ "Do not eat your lunch."
// console.log(reversePsychology("go to school"));  //➞ "Do not go to school."




// 35 Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples

// function match(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase();
// }

function match(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    }
    return false;
}

// console.log(match("hello", "hELLo"));  //➞ true
// console.log(match("motive", "emotive"));  //➞ false
// console.log(match("venom", "VENOM"));  //➞ true
// console.log(match("mask", "mAskinG"));  //➞ false



// 36 Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

// Examples

function repeatString(str, n) {
    if (typeof str !== "string" ) {
        return "Not A String"
    }
    return str.repeat(n)
}

// console.log(repeatString("Mubashir", 2));   //➞ "MubashirMubashir" //
// console.log(repeatString("Matt", 3));   //➞ "MattMattMatt"
// console.log(repeatString(1990, 7));   //➞ "Not A String !!"



// 37 String or Integer?
// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

// Examples

// function intOrString(str) {
//     if (typeof str !== "string") {
//         return "int";
//     }else{
//         return "str";
//     }
// }

function intOrString(str) {
    return typeof str === "string" ? "str" : "int";
}

// console.log(intOrString(8));   //➞ "int"
// console.log(intOrString("Hello"));  //➞ "str"
// console.log(intOrString(9843532));   //➞ "int"



// 38 Hello; Hello World; World
// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Examples

// function helloWorld(number) {
//     if (number === 3) {
//         return "Hello";
//     }else if (number === 5) {
//         return "World";
//     }else{
//         return "Hello World";
//     }
// }

function helloWorld(number) {
    return number === 3 ? "Hello" : number === 5 ? "World" : "Hello World";
}

// console.log(helloWorld(3));  //➞ "Hello"
// console.log(helloWorld(5));  //➞ "World"
// console.log(helloWorld(15));   //➞ "Hello World"



// 39 String to Integer and Vice Versa
// Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
// Examples

// function toInt(str) {
    // return Number(str);

    // return parseInt(str);
// }

function toStr(num) {
    // return num.toString()

    return "" + num;
}

// console.log(toInt("77"));   //➞ 77
// console.log(toInt("532"));   //➞ 532
// console.log(toStr(77));   //➞ "77"
// console.log(toStr(532));   //➞ "532"



// 40 Burrrrrrrp
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

// Examples

// function longBurp(num) {
//     return "Bu" + "r".repeat(num) + "p";
// }

function longBurp(num) {
    let result = "Bu";
    for (let i = 0; i < num; i++) {
        result += "r";
    }
    result += "p";
    return result;
}

console.log(longBurp(3));  //➞ "Burrrp"
console.log(longBurp(5));  //➞ "Burrrrrp"
console.log(longBurp(9));  //➞ "Burrrrrrrrrp"