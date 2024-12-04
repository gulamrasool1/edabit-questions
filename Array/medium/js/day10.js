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
        } else if (typeof item === 'boolean') {
            result.push(!item);
        }
    }
    return result;
}

// console.log(changeTypes(["a", 12, true]));  //➞ ["A!", 13, false]
// console.log(changeTypes([13, "13", "12", "twelve"]));  //➞ [13, "13!", "12!", "Twelve!"]
// console.log(changeTypes([false, "false", "true"]));  //➞ [true, "False!", "True!"]



// 94 Find Unique Number in Array
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Examples

// function findSingleNumber(arr) {
//     if (arr.length === 0) {
//         return null
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//             return arr[i];
//         }
//     }
// }

function findSingleNumber(arr) {
    if (arr.length === 0) {
        return null;
    }
    let unique = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
    return unique.toString();
}

// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4]));  //➞ 3
// console.log(findSingleNumber([2]));  //➞ 2
// console.log(findSingleNumber([]));  //➞ null
// console.log(findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]));  //➞ 8
// console.log(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]));  //➞ 101



// 95 Ping Pong!
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.

// Examples

// function pingPong(arr, win) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//         result.push("Pong!");
//     }

//     if (!win) {
//         result.pop();
//     }
//     return result;
// }

function pingPong(arr, win) {
    let compare = arr.reduce((acc, cur) => {
        acc.push(cur, "Pong!");
        return acc;
    },[]);
    if (!win) {
        compare.pop()
    }
    return compare
}

console.log(pingPong(["Ping!"], true));  //➞ ["Ping!", "Pong!"]
console.log(pingPong(["Ping!", "Ping!"], false));  //➞ ["Ping!", "Pong!", "Ping!"]
console.log(pingPong(["Ping!", "Ping!", "Ping!"], true));  //➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]