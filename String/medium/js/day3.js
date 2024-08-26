// 21 Is the Word an Isogram?
// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// Examples

// function isIsogram(str) {
//     const lower = str.toLowerCase();
//     const letter = new Set(lower);
//     return letter.size === str.length;
// }

function isIsogram(str) {
    const lower = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (lower[i] === lower[j]) {
                return false
            }
        }
    }
    return true
}

// console.log(isIsogram("Algorism"));  //➞ true
// console.log(isIsogram("PasSword"));  //➞ false
// // Not case sensitive.
// console.log(isIsogram("Consecutive"));  //➞ false



// 22 Who's in First Place?
// Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

// Examples

// function firstPlace(str) {
//     let filter = str.replace(/=/g, "");
//     return filter.charAt(filter.length - 1);
// }

function firstPlace(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '=') {
            result = str[i]
        }
    }
    return result;
}

// console.log(firstPlace("====b===O===e===U=A=="));  //➞ "A"
// console.log(firstPlace("e==B=Fe"));  //➞ "e"
// console.log(firstPlace("proeNeoOJGnfl"));  //➞ "l"



// 23 Format Number with Comma(s) Separating Thousands
// Create a function that takes a number as an argument and returns a string formatted to separate thousands.

// Examples

function formatNum(num) {
    return num.toLocaleorString()
}

// console.log(formatNum(1000));  //➞ "1,000"
// console.log(formatNum(100000));  //➞ "100,000"
// console.log(formatNum(20));  //➞ "20"



// 24 Finish the Sentence You're On!
// POV: You are in an exam and time has just run out. While the teacher's back is turned, you hastily take the opportunity to finish scribbling down the last few words of the conclusion.

// For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

// Worked Example
// timeToFinish(
//   "And so brings my conclusion to its conclusion.",
//   "And so brings my conclusion to"
// ) ➞ 7

// "its" has 3 characters
// "conclusion." has 11 characters, including punctuation.
// 11 + 3 = 14
// 14 x 0.5 = 7
// Remember not to include spaces.
// Examples

// function timeToFinish(str1, str2) {
//     let full = str1.split(" ").map(i => i.trim()).join("").length
//     let half = str2.split(" ").map(i => i.trim()).join("").length
//     return (full - half) * 0.5;
// }

function timeToFinish(str1, str2) {
    let result1 = '';
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== ' ') {
            result1 += str1[i]
        }
    }
    
    let result2 = '';
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] !== ' ') {
            result2 += str2[i];
        }
    }
    let charsToFinish = result1.length - result2.length;
    return 0.5 * charsToFinish
}

// console.log(timeToFinish(
//   "And so brings my conclusion to its conclusion.",
//   "And so brings my conclusion to its conclus"
// ));  //➞ 2
// console.log(timeToFinish(
//   "As a result, my point is still valid.",
//   "As a result, my"
// ));  //➞ 9
// console.log(timeToFinish(
//   "Thank you for reading my essay.",
//   "T"
// ));  //➞ 12.5



// 25 Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.

// Examples

// function doubleLetters(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             return true
//         }
//     }
//     return false
// }

function doubleLetters(str) {
    let character = str.split('');
    return character.some((char, i) => char === character[i + 1]);
}
 
console.log(doubleLetters("loop"));  //➞ true
console.log(doubleLetters("yummy"));  //➞ true
console.log(doubleLetters("orange"));  //➞ false
console.log(doubleLetters("munchkin"));  //➞ false