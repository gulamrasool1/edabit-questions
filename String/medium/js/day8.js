// 71 Enharmonic Equivalents
// In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.

// C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

// Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.

// Examples

// function getEquivalent(str) {
//     const enharmonics = {
//         "C#": "Db", "Db": "C#",
//         "D#": "Eb", "Eb": "D#",
//         "F#": "Gb", "Gb": "F#",
//         "G#": "Ab", "Ab": "G#",
//         "A#": "Bb", "Bb": "A#"
//     };

//     return enharmonics[str] || str;
// }

function getEquivalent(str) {
    if (str === "C#") {
        return "Db"
    } else if (str === "Db") {
        return "C#"
    } else if (str === "D#") {
        return "Eb";
    } else if (str === "Eb") {
        return "D#";
    } else if (str === "F#") {
        return "Gb";
    } else if (str === "Gb") {
        return "F#";
    } else if (str === "G#") {
        return "Ab";
    } else if (str === "Ab") {
        return "G#";
    } else if (str === "A#") {
        return "Bb";
    } else if (str === "Bb") {
        return "A#";
    } else {
        return str;
    }
}

// console.log(getEquivalent("D#"));  //➞ "Eb"
// console.log(getEquivalent("Gb"));  //➞ "F#"
// console.log(getEquivalent("Bb"));  //➞"A#"



// 72 Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

// Examples

// function flipEndChars(str) {
//     if (str.length < 2) {
//         return "Incompatible."
//     } else if (typeof str !== "string") {
//         return "Incompatible."
//     }else if (str[0] === str[str.length -1]) {
//         return "Two's a pair."
//     }
//     return str[str.length -1] + str.slice(1, -1) + str[0]
// }

function flipEndChars(str) {
    if (str.length < 2) {
        return "Incompatible."
    }else if (typeof str !== "string") {
        return "Incompatible."
    } else if (str[0] === str[str.length - 1]) {
        return "Two's a pair"
    }
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            result += str[str.length - 1]
        } else if (i === str.length - 1) {
            result += str[0];
        } else { 
            result += str[i]
        }
    }
    return result;
}

// console.log(flipEndChars("Cat, dog, and mouse."));  //➞ ".at, dog, and mouseC"
// console.log(flipEndChars("ada"));  //➞ "Two's a pair."
// console.log(flipEndChars("Ada"));  //➞ "adA"
// console.log(flipEndChars("z"));  //➞ "Incompatible."
// console.log(flipEndChars([1, 2, 3]));  //➞ "Incompatible."



// 73 Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// // Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// // Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// // Final string: "apargrapepesple"

// Examples

function fruitSalad(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let half = Math.floor(arr[i].length / 2)
        result.push(arr[i].slice(0, half));
        result.push(arr[i].slice(half));
    }
    return result.sort().join("")
}

// console.log(fruitSalad(["apple", "pear", "grapes"]));  //➞ "apargrapepesple"
// console.log(fruitSalad(["raspberries", "mango"]));  //➞ "erriesmangoraspb"
// console.log(fruitSalad(["banana"]));  //➞ "anaban"



// 74 Apples and Bananas
// Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

// Examples

// console.log("apples and bananas".vreplace("u"));  //➞ "upplus und bununus"
// console.log("cheese casserole".vreplace("o"));  //➞ "chooso cossorolo"
// console.log("stuffed jalapeno poppers".vreplace("e"));  //➞ "steffed jelepene peppers"



// 75 Alternating Ones and Zeroes
// Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.

// Examples

// function canAlternate(str) {
    // let count0 = str.split("").filter(char => char === "0").length;
    // let count1 = str.split("").filter(char => char === "1").length;

    // return Math.abs(count0 - count1) <= 1; 

    
//     let count0 = str.split("").filter(char => char === "0").length;
//     let count1 = str.length - count0;
//     return Math.abs(count0 - count1) <= 1;
// }

function canAlternate(str) {
    let count0 = 0;
    let count1 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count0++;
        } else if (str[i] === '1') {
            count1++;
        }
    }
    return Math.abs(count0 - count1) <= 1;
}

// console.log(canAlternate("0001111"));  //➞ true
// Can make: "1010101"
// console.log(canAlternate("01001"));  //➞ true
// Can make: "01010"
// console.log(canAlternate("010001"));  //➞ false
// console.log(canAlternate("1111"));  //➞ false



// 76 Extending the String Prototype
// Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:

// consonants(word) which returns the number of consonants in a word when called.
// vowels(word) which returns the number of vowels in a word when called.

// Examples

// console.log("hello".consonants())  //➞ 3
// console.log("hello".vowels())  //➞ 2
// console.log("greatly".consonants())  //➞ 5
// console.log("greatly".vowels())  //➞ 2
// console.log("Smithsonian".consonants())  //➞ 7
// console.log("Smithsonian".vowels())  //➞ 4



// 77 Split Item Codes
// You have an array of item codes with the following format: "[letters][digits]"

// Create a function that splits these strings into their alphabetic and numeric parts.

// Examples

// function splitCode(str) {
//     let letters = "";
//     let numbers = "";
//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(str[i])) {
//             letters += str[i];
//         } else {
//             numbers += str[i];
//         }
//     }
//     return [letters, parseInt(numbers)]
// }

function splitCode(str) {
    let half = Math.floor(str.length / 2);
    let letters = str.slice(0, half);
    let numbers = str.slice(half)
    return [letters, parseInt(numbers)]
}

// console.log(splitCode("TEWA8392"));  //➞ ["TEWA", 8392]
// console.log(splitCode("MMU778"));  //➞ ["MMU", 778]
// console.log(splitCode("SRPE5532"));  //➞ ["SRPE", 5532]



// 78 Check if a String is a Mathematical Expression
// Create a function that takes an input (e.g. "5 + 4") and returns true if it's a mathematical expression or false if not.

// Examples

function mathExpr(str) {
    
}

// console.log(mathExpr("4 + 5"));  //➞ true
// console.log(mathExpr("4*6"));  //➞ true
// console.log(mathExpr("4*no"));  //➞ false



// 79 Grab the Numbers
// Given a string including a bunch of characters and numbers, return the sum of all the numbers in the string. Note that multiple digits next to each other are counted as a whole number rather than separate digits.

// Examples

function grabNumberSum(str) {
    let numbers = str.match(/\d+/g);
    return numbers.map(Number).reduce((sum, num) => sum + num, 0);
}

// console.log(grabNumberSum("aeiou250abc10"));  //➞ 260
// console.log(grabNumberSum("one1two2twenty20"));  //➞ 23
// console.log(grabNumberSum("900uwu50uwuuwuuwu25uwu25"));  //➞ 1000



// 80 Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *.

// Examples

// function censor(str) {
//     let splited = str.split(" ")
//     for (let i = 0; i < splited.length; i++) {
//         if (splited[i].length > 4) {
//             splited[i] = "*".repeat(splited.length)
//         }
//     }
//     return splited.join(" ")
// }

function censor(str) {
    return str.split(" ").map(word => word.length > 4 ? "*".repeat(word.length) : word).join(" ")
}

console.log(censor("The code is fourty"));  //➞ "The code is ******"
console.log(censor("Two plus three is five"));  //➞ "Two plus ***** is five"
console.log(censor("aaaa aaaaa 1234 12345"));  //➞ "aaaa ***** 1234 *****"