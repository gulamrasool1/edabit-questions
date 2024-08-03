// 1 What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples

// function detectWord(str) {
// let lowercase = str.match(/[a-z]/g);
// let word = lowercase.join('');
// return word;


//     let charArray = str.split('')
//     let lowercase = charArray.filter(char => char >= 'a' && char <= 'z').join("");
//     return lowercase;
// }

function detectWord(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            result += char;
        }
    }
    return result;
}

// console.log(detectWord("UcUNFYGaFYFYGtNUH"));  //➞ "cat"
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));  //➞ "burglar"
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));  //➞ "embezzlement"



// 2 Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

// Examples

function potatoes(str) {
    let match = str.match(/potato/g);
    return match ? match.length : 0;
}

// console.log(potatoes("potato"));  //➞ 1
// console.log(potatoes("potatopotato"));  //➞ 2
// console.log(potatoes("potatoapple"));  //➞ 1



// 3 Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples

// function charCount(str1, str2) {
//     let result = 0
//     for (let i = 0; i < str2.length; i++) {
//         if (str2[i] === str1) {
//             result++;
//         }
//     }
//     return result
// }

function charCount(str1, str2) {
    return str2.split("").filter(char => char === str1).length;
}

// console.log(charCount("a", "edabit"));  //➞ 1
// console.log(charCount("c", "Chamber of secrets"));  //➞ 1
// console.log(charCount("b", "big fat bubble"));  //➞ 4



// 4 Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples

// function fixImport(str) {
//     let split = str.split(' ');
//     let fixedImport = `${split[2]} ${split[3]} ${split[0]} ${split[1]}`
//     return fixedImport
// }

function fixImport(str) {
    let split = str.split(' ');
    let fixedImport = split[2] + ' ' + split[3] + ' ' + split[0] + ' ' + split[1]
    return fixedImport
}

// console.log(fixImport("import object from module_name"));  //➞ "from module_name import object"
// console.log(fixImport("import randint from random"));  //➞ "from random import randint"
// console.log(fixImport("import pi from math"));  //➞ "from math import pi"



// 5 Error Messages
// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).

// Examples

function error(num) {
    let errors = {
        1: "Check the fan: e1",
        2: "Emergency stop: e2",
        3: "Pump Error: e3",
        4: "c: e4",
        5: "Temperature Sensor Error: e5"
    };
    return errors[num];
}

// console.log(error(1));  //➞ "Check the fan: e1"
// console.log(error(2));  //➞ "Emergency stop: e2"
// console.log(error(3));  //➞ "Pump Error: e3"



// 6 Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples

// function doubleChar(str) {
//     return str.split('').map(char => char + char).join('')
// }

function doubleChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

// console.log(doubleChar("String"));  //➞ "SSttrriinngg"
// console.log(doubleChar("Hello World!"));  //➞ "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ "));  //➞ "11223344!!__  "



// 7 RegEx XV : Group Ranges - Negated Character Sets
// Groups and ranges indicate groups and ranges of expression characters. Negated character sets match any characters that are NOT inside of brackets [ ]. You differentiate a negated character set from a regular character set by inserting a ^ inside of the [ ].

// "1234cba5678".match(/[^abc]/g)
// // "12345678", matches any character that are not a, b, or c.
// You can also negate ranges, but like with regular character sets, if the hyphen is at the beginning or ending of a range then it will be considered a literal hyphen.

// "excludenumbers123".match(/[^1-3]/g)
// // "excludenumbers", matches any character that are not the numbers 1, 2 or 3.
// Create a REGEXP that matches any characters except letters, digits and spaces. You must use a negated character set in your expression.

//  "alice15@gmail.com".match(/REGEXP/gi) ➞ ["@", "."]



// 8 Emotify the Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P
// Examples

// function emotify(str) {
//     let words = str.split(" ");
//     let replace = {
//         "smile": ":D",
//         "grin": ":)",
//         "sad": ":("
//     };
//     let result = words.map(word => replace[word] || word);
//     return result.join(" ")
// }

function emotify(str) {
    let words = str.split(" ");
    let replace = {
        "smile": ":D",
        "grin": ":)",
        "sad": ":("
    };

    for (let i = 0; i < words.length; i++) {
        if (replace[words[i]]) {
            words[i] = replace[words[i]]
        }
    }
    return words.join(" ")
}

// console.log(emotify("Make me smile"));  //➞ "Make me :D"
// console.log(emotify("Make me grin"));  //➞ "Make me :)"
// console.log(emotify("Make me sad"));  //➞ "Make me :("



// 9 How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples

// function countVowels(str) {
//     let vowels = ['a','e','i','o','u']
//     let vowelCount = str.split("").filter(char=> vowels.includes(char)).length;
//     return vowelCount
// }

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result++;
        }
    }
    return result;
}

// console.log(countVowels("Celebration"));  //➞ 5
// console.log(countVowels("Palm"));  //➞ 1
// console.log(countVowels("Prediction"));  //➞ 4



// 10 Recursion to Repeat a String n Number of Times
// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

// Examples

// function repetition(str, num) {
//     let result = ""
//     for (let i = 0; i < num; i++) {
//         result += str
//     }
//     return result
// }

function repetition(str, num) {
    // return str.repeat(num);
    // return Array(num + 1).join(str);

    if (num === 0) {
        return '';
    }
    return str + repetition(str, num - 1)
}

// console.log(repetition("ab", 3));  //➞ "ababab"
// console.log(repetition("kiwi", 1));  //➞ "kiwi"
// console.log(repetition("cherry", 2));  //➞ "cherrycherry"



// 11 Find the Bomb
// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

// Examples

// function bomb(str) {
//     if (str.includes("bomb")) {
//         return "Duck!!!";
//     }else{
//         return "there is no bomb, relax."
//     }
// }

function bomb(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("bomb")) {
            return "Duck!!!"
        }
    }
    return "There is no bomb. relax.";
}

// console.log(bomb("There is a bomb."));  //➞ "Duck!!!"
// console.log(bomb("Hey, did you think there is a bomb?"));  //➞ "Duck!!!"
// console.log(bomb("This goes boom!!!"));  //➞ "There is no bomb, relax."



// 12 Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

// Examples

// function removeVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }

function removeVowels(str) {
    let vowels = 'aeiouAEIOU';
    let vowelCount = str.split("").filter(char => !vowels.includes(char)).join("");
    return vowelCount;
}

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
// //➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// console.log(removeVowels("We're gonna build a wall!"));
// //➞ "W'r gnn bld  wll!"
// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"));
//➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"



// 13 Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.

// Examples

// function firstVowel(str) {
//     let vowels = 'aeiouAEIOU';
//     let indexVowel = str.split("").findIndex(char => vowels.includes(char));
//     return indexVowel;
// }

function firstVowel(str) {
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i;
        }   
    }
    return -1
}

// console.log(firstVowel("apple"));  //➞ 0
// console.log(firstVowel("hello"));  //➞ 1
// console.log(firstVowel("STRAWBERRY"));  //➞ 3
// console.log(firstVowel("pInEaPPLe"));  //➞ 1



// 14 Is it True?
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

// Examples

function isTrue(str) {
    let relation = str.replace('=', '==');
    return eval(relation);
}

console.log(isTrue("2=2"));  //➞ true
console.log(isTrue("8<7"));  //➞ false
console.log(isTrue("5=13")); //  //➞ false
console.log(isTrue("15>4"));  //➞ true



// 15 Regex Series: Even Number?
// Write a regular expression that matches only an even number. Numbers will be presented as strings.

// Examples

const regexp = /^\d*[02468]$/;

// console.log(regexp.test("2341"));   //➞ false
// console.log(regexp.test("132"));  //➞ true
// console.log(regexp.test("29")); //➞ false
// console.log(regexp.test("5578"));   //➞ true



// 16 Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

// Examples

// function sayHelloBye(str, num) {
//     let name = str.charAt(0).toUpperCase() + str.slice(1);
//     return num === 1 ? `Hello ${name}` : `Bye ${name}`;
// }

function sayHelloBye(str, num) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return num === 1 ? `Hello ${result}` : `Bye ${result}`;
}

// console.log(sayHelloBye("alon", 1));  //➞ "Hello Alon"
// console.log(sayHelloBye("Tomi", 0));  //➞ "Bye Tomi"
// console.log(sayHelloBye("jose", 0));  //➞ "Bye Jose"
