// 91 An Introduction to the Map-Reduce Pattern
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

// Examples

// function magnitude(arr) {
//     let sum = arr.map(num => num ** 2).reduce((item, square) => item + square, 0);
//     return Math.sqrt(sum);
// }

function magnitude(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] * arr[i];   
    }
    return Math.sqrt(result);
}

// console.log(magnitude([3, 4]));  //➞ 5
// console.log(magnitude([0, 0, -10]));  //➞ 10
// console.log(magnitude([]));  //➞ 0
// console.log(magnitude([2, 3, 6, 1, 8] ));  //➞ 10.677078252031311



// 92 Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// Examples

// function squarePatch(n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         let row = []
//         for (let j = 0; j < n; j++) {
//             row.push(n);
//         }
//         result.push(row)
//     }
//     return result;
// }

function squarePatch(n) {
    // return Array(n).fill(Array(n).fill(n));

    return Array(n).fill().map(() => Array(n).fill(n));
}

// console.log(squarePatch(3));  //➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]
// console.log(squarePatch(5));  //➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]
// console.log(squarePatch(1));  //➞ [
//   [1]
// ]
// console.log(squarePatch(0));  //➞ []



// 93 Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.

// Examples

// function changeTypes(arr) {
//     return arr.map(item => {
//         if (typeof item === 'number') {
//             return item % 2 === 0 ? item + 1 : item;
//         } else if (typeof item === 'string') {
//             return item[0].toUpperCase() + item.slice(1) + "!";
//         } else if (typeof item === 'boolean') {
//             return !item;
//         }
//         return item
//     });
// }

function changeTypes(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (typeof item === 'number') {
            result.push(item % 2 === 0 ? item + 1 : item);
        } else if (typeof item === "string") {
            result.push(item[0].toUpperCase() + item.slice(1) + "!");
        }else if (typeof item === 'boolean') {
            result.push(!item);
        }
    }
    return result;
}

console.log(changeTypes(["a", 12, true]));  //➞ ["A!", 13, false]
console.log(changeTypes([13, "13", "12", "twelve"]));  //➞ [13, "13!", "12!", "Twelve!"]
console.log(changeTypes([false, "false", "true"]));  //➞ [true, "False!", "True!"]