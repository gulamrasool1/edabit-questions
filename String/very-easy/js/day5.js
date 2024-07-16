// 63 Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Examples

// function keyboardMistakes(str) {
//     const replacements = {
//         '4': 'A',
//         '5': 'S',
//         '1': 'I',
//         '0': 'O',
//     };

//     return str.split("").map(char => replacements[char] || char).join("");
// }

function keyboardMistakes(str) {
    return str
        .replace(/4/g, "A")
        .replace(/5/g, "S")
        .replace(/1/g, "I")
        .replace(/0/g, "O")
}

// console.log(keyboardMistakes("MUB45H1R"));   //➞ "MUBASHIR"
// console.log(keyboardMistakes("DUBL1N"));   //➞ "DUBLIN"
// console.log(keyboardMistakes("51NG4P0RE"));   //➞ "SINGAPORE"



// 64 Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples

// function lastItem(input) {
//     if (input.length === 0) {
//         return undefined
//     }

//     return input.slice(-1)[0]
// }

function lastItem(input) {
    if (input.length === 0) {
        return undefined
    }

    return input[input.length - 1];
}

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));  //➞ 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog"));  //➞ "g"
// console.log(lastItem([]));  //➞ undefined



// 65 Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// Examples
// evenOddString("mubashir") ➞ "mbsi uahr"
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space

// function evenOddString(str) {
//     let even = "";
//     let odd = "";

//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             even += str[i];
//         }else{
//             odd += str[i];
//         }
//     }
//     return even + " " + odd;
// }

function evenOddString(str) {
    const char = str.split("");

    const even = char.filter((char, index) => index % 2 === 0).join("");

    const odd = char.filter((char, index) => index % 2 !== 0).join("");

    return even + " " + odd
}

// console.log(evenOddString("edabit"));  //➞ "eai dbt"
// console.log(evenOddString("airforce"));  //➞ "aroc ifre"



// 66 Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// Examples

// function arithmeticProgression(num1, num2, num3) {
//     let sequence = [];
//     let currentTerm = num1;

//     for (let i = 0; i < num3; i++) {
//         sequence.push(currentTerm);
//         currentTerm += num2
//     }

//     return sequence.join(", ")
// }

function arithmeticProgression(num1, num2, num3) {
    return Array.from({ length: num3 }, (_, index) => num1 + index * num2).join(", ")
}

// console.log(arithmeticProgression(1, 2, 5));  //➞ "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5));  //➞ "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10));   //➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"



// 67 Simple Letters
// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

// Examples
str1 = "mubashir"
str2 = "edabit"

console.log(longestString(str1, str2));  //➞ "abdehimrstu"
// Contains sorted and distinct letters of the given strings.

str1 = "abcdefghijklmnopqrstuvwxyz"
str2 = "abcdefghijklmnopqrstuvwxyz"

console.log(longestString(str1, str2));  //➞ "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings.