// 71 Increment to Top
// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

// Examples

// function incrementToTop(arr) {
//     let maximum = Math.max(...arr)
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += maximum - arr[i];
//     }
//     return result;
// }

function incrementToTop(arr) {
    // let maximum = Math.max(...arr);
    // return arr.reduce((item, num) => item + (maximum - num), 0);


    let maximum = Math.max(...arr);
    let stepsArr = arr.map(num => maximum - num);
    return stepsArr.reduce((total, steps) => total + steps);
}

// console.log(incrementToTop([3, 4, 5]));  //➞ 3
// Maximal element in the array is 5.
// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// To transform 4 to 5 requires 1 step: 4 -> 5.
// Total steps required is 3.
// console.log(incrementToTop([4, 3, 4]));  //➞ 1
// Maximal element in the array is 4.
// To transform 3 to 4 requires 1 steps: 3 -> 4.
// Total steps required is 1.
// console.log(incrementToTop([3, 3, 3]));  //➞ 0
// console.log(incrementToTop([3, 10, 3]));  //➞ 14



// 72 Simon Says
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

// Examples

// function simonSays(arr1, arr2) {
//     for (let i = 0; i < arr1.length - 1; i++) {
//         if (arr1[i] !== arr2[i + 1]) {
//             return false
//         }
//     }
//     return true
// }

function simonSays(arr1, arr2) {
    return arr1.slice(0, -1).toString() === arr2.slice(1).toString();
}

// console.log(simonSays([1, 2], [5, 1]));  //➞ true
// console.log(simonSays([1, 2], [5, 5]));  //➞ false
// console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]));  //➞ true
// console.log(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]));  //➞ false



// 73 Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

// Examples

// function isScalable(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (Math.abs(arr[i] - arr[i + 1]) > 5) {
//             return false;
//         }
//     }
//     return true;
// }

function isScalable(arr) {
    return arr.every((num, i) => {
        if (i < arr.length - 1) {
            return Math.abs(num - arr[i + 1]) <= 5;
        }
        return true;
    });
}

// console.log(isScalable([1, 2, 4, 6, 7, 8]));  //➞ true
// console.log(isScalable([40, 45, 50, 45, 47, 52]));  //➞ true
// console.log(isScalable([2, 9, 11, 10, 18, 21]));  //➞ false



// 74 Stand in Line
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

// Examples

// function nextInLine(arr, num) {
// if (arr.length === 0) {
//     return "No array has been selected";
// }
// arr.push(num);
// arr.shift();
// return arr;


// if (arr.length === 0) {
//     return "No array has been selected";
// }
// let newArr = arr.slice(1);
// return newArr.concat(num);


//     if (arr.length === 0) {
//         return "No array has been selected";
//     }
//     arr.splice(0, 1);
//     arr.splice(arr.length, 0, num);

//     return arr;
// }


function nextInLine(arr, num) {
    if (arr.length === 0) {
        return "No array has been selected";
    }

    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i]);
    }
    result.push(num);
    return result;
}

// console.log(nextInLine([5, 6, 7, 8, 9], 1));  //➞ [6, 7, 8, 9, 1]
// console.log(nextInLine([7, 6, 3, 23, 17], 10));  //➞ [6, 3, 23, 17, 10]
// console.log(nextInLine([1, 10, 20, 42], 6));  //➞ [10, 20, 42, 6]
// console.log(nextInLine([], 6));  //➞ "No array has been selected"



// 75 Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

// Examples

function flipEndChars(str) {
    if (str.length < 2) {
        return "Incompatible.";
    } else if (typeof str !== "string") {
        return "Incompatible."
    } else if (str[0] === str[str.length - 1]) {
        return "Two's a pair.";
    }

    return str[str.length - 1] + str.slice(1, -1) + str[0];
}

// console.log(flipEndChars("Cat, dog, and mouse."));  //➞ ".at, dog, and mouseC"
// console.log(flipEndChars("ada"));  //➞ "Two's a pair."
// console.log(flipEndChars("Ada"));  //➞ "adA"
// console.log(flipEndChars("z"));  //➞ "Incompatible."
// console.log(flipEndChars([1, 2, 3]));  //➞ "Incompatible."



// 76 Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// fruitSalad(["apple", "pear", "grapes"]) ➞ "apargrapepesple"

// // Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// // Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// // Final string: "apargrapepesple"

// Examples

function fruitSalad(arr) {
    
}

console.log(fruitSalad(["apple", "pear", "grapes"]));  //➞ "apargrapepesple"
console.log(fruitSalad(["raspberries", "mango"]));  //➞ "erriesmangoraspb"
console.log(fruitSalad(["banana"]));  //➞ "anaban"