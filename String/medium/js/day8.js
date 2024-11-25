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

console.log(canAlternate("0001111"));  //➞ true
// Can make: "1010101"
console.log(canAlternate("01001"));  //➞ true
// Can make: "01010"
console.log(canAlternate("010001"));  //➞ false
console.log(canAlternate("1111"));  //➞ false