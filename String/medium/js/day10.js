// 91 Check if the String is a Palindrome
// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

// Examples

// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     return cleanedStr === cleanedStr.split("").reverse().join("");
// }

function isPalindrome(str) {
    let cleanedStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z')) {
            cleanedStr += char;
        }
    }
    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
}

// console.log(isPalindrome("Neuquen"));  //➞ true
// console.log(isPalindrome("Not a palindrome"));  //➞ false
// console.log(isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!"));  //➞ true



// 92 Simple Encoder
// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

// Examples

function simpleEncoder(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        if (count === 1) {
            result += '[';
        } else {
            result += ']';
        }
    }
    return result;
}

// console.log(simpleEncoder("Mubashir"));  //➞ "[[[[[[[["
// '[' for each character
// console.log(simpleEncoder("Matt"));  //➞ "[[]]"
// ']' for both 't'
// console.log(simpleEncoder("eD  aBiT"));  //➞ "[[]][[[["
// Two spaces in between



// 93 Single Occurrence
// Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

// Examples

// function singleOccurrence(str) {
//     if (str.length === 0) {
//         return "";
//     }
//     let lowerStr = str.toLowerCase();
//     let singleChars = [...lowerStr].filter(char => lowerStr.indexOf(char) === lowerStr.lastIndexOf(char));
//     return singleChars.length > 0 ? singleChars[0].toUpperCase() : '';
// }

function singleOccurrence(str) {
    return [...str.toLowerCase()]
        .filter(char => str.toLowerCase().indexOf(char) === str.toLowerCase().lastIndexOf(char))[0]?.toUpperCase() || "";
}

// console.log(singleOccurrence("EFFEAABbc"));  //➞ "C"
// console.log(singleOccurrence("AAAAVNNNNSS"));  //➞ "V"
// console.log(singleOccurrence("S"));  //➞ "S"



// 94 Calculate the Shortest Distance Between Two Points
// Create a function that takes a string of four numbers. These numbers represent two separate points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis).

// The order of coordinates in the string corresponds as follows:

// "x1,y1,x2,y2"
// Calculate the distance between x and y.

// Examples

function shortestDistance(str) {
    let [x1, y1, x2, y2] = str.split(',').map(Number);
    let sum = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return parseFloat(sum.toFixed(2));
}

// console.log(shortestDistance("1,1,2,1"));  //➞ 1
// console.log(shortestDistance("1,1,3,1"));  //➞ 2
// console.log(shortestDistance("-5,1,3,1"));  //➞ 8
// console.log(shortestDistance("-5,2,3,1"));  //➞ 8.06



// 95 Convert to Hex
// Create a function that takes a string's characters as ASCII and returns each character's hexadecimal value as a string.

// Examples

// function toHex(str) {
//     return str.split("").map(char => char.charCodeAt(0).toString(16)).join(" ");
// }

function toHex(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let hex = str.charCodeAt(i).toString(16);
        result += hex + " ";
    }
    return result;
}

// console.log(toHex("hello world"));  //➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"
// console.log(toHex("Big Boi"));  //➞ "42 69 67 20 42 6f 69"
// console.log(toHex("Marty Poppinson"));  //➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"



// 96 Functioninator 8000
// Create a function that takes a single word string and does the following:

// Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.

// Adds the word length of the original word to the end, supplied with '000'.

// The examples should make this clear.

// Examples

function inatorInator(str) {
    let result = "aeiou".includes(str[str.length - 1]) ? "-inator" : "inator";
    return str + result + " " + str.length + "000";
}

// console.log(inatorInator("Shrink"));  //➞ "Shrinkinator 6000"
// console.log(inatorInator("Doom"));  //➞ "Doominator 4000"
// console.log(inatorInator("EvilClone"));  //➞ "EvilClone-inator 9000"



// 97 Valid Hex Code
// Create a function that determines whether a string is a valid hex code.

// A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.

// Examples

function isValidHexCode(str) {
    if (str[0] !== '#' || str.length !== 7) {
        return false;
    }
    for (let i = 1; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (!((char >= '0' && char <= '9') || (char >= 'a' && char <= 'f'))) {
            return false;
        }
    }
    return true;
}

// console.log(isValidHexCode("#CD5C5C"));  //➞ true
// console.log(isValidHexCode("#EAECEE"));  //➞ true
// console.log(isValidHexCode("#eaecee"));  //➞ true
// console.log(isValidHexCode("#CD5C58C"));  //➞ false
// // Length exceeds 6
// console.log(isValidHexCode("#CD5C5Z"));  //➞ false
// // Not all alphabetic characters in A-F
// console.log(isValidHexCode("#CD5C&C"));  //➞ false
// // Contains unacceptable character
// console.log(isValidHexCode("CD5C5C"));  //➞ false
// Missing 



// 98 Valid Variable Names
// When creating variables, the variable name must always start with a letter and cannot contain spaces, though numbers and underscores are allowed to be contained in it also.

// Create a function which returns true if a given variable name is valid, otherwise return false.

// Examples

function variableValid(str) {
    
}

// console.log(variableValid("result"));  //➞ true
// console.log(variableValid("odd_nums"));  //➞ true
// console.log(variableValid("2TimesN"));  //➞ false



// 99 Word Nests
// A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.

// Nesting 3 times with the word "incredible":

// start  = incredible
// first  = incre|incredible|dible
// second = increin|incredible|credibledible
// third  = increinincr|incredible|ediblecredibledible
// The final nest is "increinincrincredibleediblecredibledible" (depth = 3).

// Given a starting word and the final word nest, return the depth of the word nest.

// Examples

function wordNest(str1, str2) {
    let depth = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2.includes(str1)) {
            str2 = str2.replace(str1, "");
            depth++;
        }
    }
    return depth - 1;
}

// console.log(wordNest("floor", "floor"));  //➞ 0
// console.log(wordNest("code", "cocodccococodededeodeede"));  //➞ 4
// console.log(wordNest("incredible", "increinincrincredibleediblecredibledible"));  //➞ 3



// 100 Change Every Letter to the Next Letter
// Write a function that changes every letter to the next letter:

// "a" becomes "b"
// "b" becomes "c"
// "d" becomes "e"
// and so on ...

// Examples

// function move(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let next = String.fromCharCode(str.charCodeAt(i) + 1);
//         result += next;
//     }
//     return result;
// }

function move(str) {
    return str.split("").map(char => String.fromCharCode(char.charCodeAt() + 1)).join("");
}

console.log(move("hello"));  //➞ "ifmmp"
console.log(move("bye"));  //➞ "czf"
console.log(move("welcome"));  //➞ "xfmdpnf"