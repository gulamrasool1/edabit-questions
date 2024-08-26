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

// function doubleLetters(str) {
//     let character = str.split('');
//     return character.some((char, i) => char === character[i + 1]);
// }

function doubleLetters(str) {
    let char = str.split("");
    for (let i = 0; i < char.length - 1; i++) {
        if (char[i] === char[i + 1]) {
            return true
        }
    }
    return false
}

// console.log(doubleLetters("loop"));  //➞ true
// console.log(doubleLetters("yummy"));  //➞ true
// console.log(doubleLetters("orange"));  //➞ false
// console.log(doubleLetters("munchkin"));  //➞ false



// 26 Maskify the String
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// Examples

// function maskify(str) {
//     if (str.length <= 4) {
//         return str;
//     }
//     let mask = '#'.repeat(str.length - 4)
//     let last = str.slice(-4)
//     return mask + last;
// }

function maskify(str) {
    if (str.length <= 4) {
        return str
    }
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 4) {
            result += '#'
        } else {
            result += str[i]
        }
    }
    return result
}

// console.log(maskify("4556364607935616"));  //➞ "############5616"
// console.log(maskify("64607935616"));  //➞ "#######5616"
// console.log(maskify("1"));  //➞ "1"
// console.log(maskify(""));  //➞ ""



// 27 Basic E-Mail Validation
// Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

// The string must contain an @ character.
// The string must contain a . character.
// The @ must have at least one character in front of it.
// e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
// The . and the @ must be in the appropriate places.
// e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
// If the string passes these tests, it's considered a valid email address.

// Examples

function validateEmail(str) {
    let atIndex = str.indexOf('@');
    let dotIndex = str.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < str.length - 1;
}

// console.log(validateEmail("@gmail.com"));  //➞ false
// console.log(validateEmail("hello.gmail@com"));  //➞ false
// console.log(validateEmail("gmail"));  //➞ false
// console.log(validateEmail("hello@gmail"));  //➞ false
// console.log(validateEmail("hello@edabit.com"));  //➞ true



// 28 Neutralisation
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// neutralise("+-+", "+--") ➞ "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.
// Examples

// function neutralise(str1, str2) {
// return str1.split('').map((char, i) => {
//     return char === str2[i] ? char : '0';
// }).join('');

//     return str1.split('').reduce((acc, char, i) => {
//         return acc + (char === str2[i] ? char : '0');
//     })
// }

function neutralise(str1, str2) {
    let result = '';
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i]) {
            result += str1[i]
        } else {
            result += '0';
        }
    }
    return result;
}

// console.log(neutralise("--++--", "++--++"));  //➞ "000000"
// console.log(neutralise("-+-+-+", "-+-+-+"));  //➞ "-+-+-+"
// console.log(neutralise("-++-", "-+-+"));  //➞ "-+00"



// Parity Bit Validation
// Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that validates whether a binary string is valid, using parity bits.

// Worked Example
// validateBinary("10110010") ➞ true

// The last digit is the parity bit.
// 0 is the last digit.
// 0 means that there should be an even number of 1's.
// There are four 1's.
// Return true.
// Examples

// function validateBinary(str) {
//     let count = str.split('').reduce((acc, item) => {
//         return item === '1' ? acc + 1 : acc
//     },0)
//     return count % 2 === 0
// }

function validateBinary(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            result++;
        }
    }
    return result % 2 === 0;
}

// console.log(validateBinary("00101101"));  //➞ true
// console.log(validateBinary("11000000"));  //➞ true
// console.log(validateBinary("11000001"));  //➞ false



// 30 Reverse the Order of Words with Five Letters or More
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples

function reverse(str) {
    // return str.split(" ").map(word => word
    //     .length >= 5 ? word.split("").reverse().join("") : word).join(" ");

    let spli = str.split(" ")
    if (spli.length <= 5) {
        return str
    }
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
}

console.log(reverse("Reverse"));  //➞ "esreveR"
console.log(reverse("This is a typical sentence."));  //➞ "This is a lacipyt .ecnetnes"
console.log(reverse("The dog is big."));  //➞ "The dog is big."