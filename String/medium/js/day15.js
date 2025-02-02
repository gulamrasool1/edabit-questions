// 141 Noddy's Mystery Function
// Noddy has written a mysterious function which takes in a word and returns true if it's passed a specific test. Solve the riddle of what Noddy's function is by having a look at some of the examples below.

// Examples

// function noddyFunction(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'T') {
//             return true;
//         }
//     }
//     return false;
// }

function noddyFunction(str) {
    return str.indexOf("T") !== -1;
}

// console.log(noddyFunction("FANTASTIC"));  //➞ true
// console.log(noddyFunction("wonderful"));  //➞ false
// console.log(noddyFunction("NODDY"));  //➞ false



// 142 Rotated Words
// Some characters do not change after a rotation of 180 degrees. They can be read, although sometimes in a different way. For example, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and vice versa.

// So, the word "WOW" turns into the word "MOM". On the other hand, the word "HOME" cannot be rotated.

// Find the number of unique readable Rotated Words in the input string txt (without duplicates).

// Examples

function rotatedWords(str) {

}

// console.log(rotatedWords("HSSN"));  //➞ 1
// // String can be rotated to a valid string
// console.log(rotatedWords("OS IS UPDATED"));  //➞ 2
// // "OS" and "IS" can be rotated to a valid string
// console.log(rotatedWords("MUBASHIR"));  //➞ 0



// 143 Height of the Tallest Building
// Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.

// Examples

// function tallestBuildingHeight(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes("#")) {
//             return (arr.length - i) * 20 + "m";
//         }
//     }
// }

function tallestBuildingHeight(arr) {
    return arr.filter(arr1 => arr1.includes("#")).length * 20 + "m";
}

// console.log(tallestBuildingHeight([
//     "            ##",
//     "            ##",
//     "            ##",
//     "###   ###   ##",
//     "###   ###   ###",
//     "###   ###   ###",
//     "###   ###   ###"
// ]));  //➞ "140m"
// // Tallest building is 7 rows
// // 7 x 20m = 140m

// console.log(tallestBuildingHeight([
//     "               ",
//     "               ",
//     "               ",
//     "       #    ###",
//     "      # #   ###",
//     "###   ###   ###",
//     "###   ###   ###"
// ]));  //➞ "80m"
// // tallest building is 4 rows
// // 4 x 20m = 80m

// console.log(tallestBuildingHeight([
//     "                              ",
//     "                         ###  ",
//     "                         ###  ",
//     "###                    #####  ",
//     "###      #             #####  ",
//     "###     ###            #####  ",
//     "######  ###            #######",
//     "######  ######  ###    #######",
//     "###################    #######",
//     "###############################",
//     "###############################"
// ]));  //➞ "200m"
// Tallest building is 10 rows
// 10 x 20m = 200m



// 144 Complete the Binary Number
// Create a function which adds zeros to the start of a binary string, so that its length is a multiple of 8.

// Examples

// function completeBinary(str) {
//     let zero = 8 - (str.length % 8);
//     return zero === 8 ? str : '0'.repeat(zero) + str;
// }

function completeBinary(str) {
    return str.padStart(Math.ceil(str.length / 8) * 8, '0');
}

// console.log(completeBinary("1100"));  //➞ "00001100"
// console.log(completeBinary("1101100"));  //➞ "01101100"
// console.log(completeBinary("110010100010"));  //➞ "0000110010100010"



// 145 No Yelling
// Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.

// Examples

function noYelling(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== '?' && str[i] !== '!') {
            return str.slice(0, i + 1) + str[i + 1];
        }
    }
}

console.log(noYelling("What went wrong?????????"));  //➞ "What went wrong?"
console.log(noYelling("Oh my goodness!!!"));  //➞ "Oh my goodness!"
console.log(noYelling("I just!!! can!!! not!!! believe!!! it!!!"));  //➞ "I just!!! can!!! not!!! believe!!! it!"
// Only change repeating punctuation at the end of the sentence.
console.log(noYelling("Oh my goodness!"));  //➞ "Oh my goodness!"
// Do not change sentences where there exists only one or zero exclamation marks/question marks.
console.log(noYelling("I just cannot believe it."));  //➞ "I just cannot believe it."