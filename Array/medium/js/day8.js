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
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let fruit = arr[i];
        let mid = Math.floor(fruit.length / 2);
        result.push(fruit.slice(0, mid));
        result.push(fruit.slice(mid));
    }
    return result.sort().join("");
}

// console.log(fruitSalad(["apple", "pear", "grapes"]));  //➞ "apargrapepesple"
// console.log(fruitSalad(["raspberries", "mango"]));  //➞ "erriesmangoraspb"
// console.log(fruitSalad(["banana"]));  //➞ "anaban"



// 77 Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.

// Examples

// function matrix(x, y, z) {
//     let result = [];
//     for (let i = 0; i < x; i++) {
//         let subArray = []
//         for (let i = 0; i < y; i++) {
//             subArray.push(z);
//         }
//         result.push(subArray);
//     }
//     return result;
// }

function matrix(x, y, z) {
    return Array(x).fill().map(() => Array(y).fill(z));
}

// console.log(matrix(3, 2, 3));  //➞ [[3, 3], [3, 3], [3, 3]]
// console.log(matrix(2, 1, "edabit"));  //➞ [["edabit"], ["edabit"]]
// console.log(matrix(3, 2, 0));  //➞ [[0, 0], [0, 0], [0, 0]]



// 78 Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

// Examples

// function puzzlePieces(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     return arr1.every((num, i) => num + arr2[i] === arr1[0] + arr2[0]);
// }

function puzzlePieces(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let sum = arr1[0] + arr2[0];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] + arr2[i] !== sum) {
            return false
        }
    }
    return true
}

// console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]));  //➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]
// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]));  //➞ true
// console.log(puzzlePieces([1, 2], [-1, -1]));  //➞ false
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]));  //➞ false



// 79 Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.

// Examples

// function flattenCurve(arr) {
//     if (arr.length === 0) {
//         return []
//     } 
//     let sum = arr.reduce((sum, num) => sum + num);
//     let divide = sum / arr.length
//     return arr.map(() => divide);
// }

function flattenCurve(arr) {
    if (arr.length === 0) {
        return [];
    }
    let sum = arr.reduce((sum, num) => sum + num);
    let divide = sum / arr.length
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(divide);
    }
    return result;
}

// console.log(flattenCurve([1, 2, 3, 4, 5]));  //➞ [3, 3, 3, 3, 3]
// console.log(flattenCurve([0, 0, 0, 2, 7, 3]));  //➞ [2, 2, 2, 2, 2, 2]
// console.log(flattenCurve([4]));  //➞ [4]
// console.log(flattenCurve([]));  //➞ []



// 80 Flick Switch
// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples

// function flickSwitch(arr) {
//     let currentValue = true
//     return arr.map((item) => {
//         if (item === "flick") {
//             currentValue = !currentValue
//         }
//         return currentValue;
//     });
// }

function flickSwitch(arr) {
    let currentValue = true;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "flick") {
            currentValue = !currentValue
        }
        result.push(currentValue);
    }
    return result;
}


console.log(flickSwitch(["edabit", "flick", "eda", "bit"]))  //➞ [true, false, false, false]
console.log(flickSwitch(["flick", 11037, 3.14, 53]))  //➞ [false, false, false, false]
console.log(flickSwitch([false, false, "flick", "sheep", "flick"]))  //➞ [true, true, false, false, true]


// interview question

//Ques 1
//On line 8 what will be the value of obj1
const obj1 = { a: 1, b: 2 };
const obj2 = obj1;
obj2.a = 4;
// console.log(obj1);
// Output
// { a: 4, b: 2}


//Ques 2
//Write a function to conver this array of
//object into single objet with key value pair
const arr = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Harry" },
];

// let result = arr.reduce((acc, obj) => {
//     acc[obj.id] = obj.name;
//     return acc
// },{})
// console.log(result);


const result = {};
for (let i = 0; i < arr.length; i++) {
    result[arr[i].id] = arr[i].name;
}
// console.log(result);

// Output
// {'1': 'Bob', '2': 'Harry'}



//Ques 3
//Merge array of onbject arr1 and arr2 by
//employee id, as mention in output below arrays
const arr1 = [
    { employeeId: 5, name: "Mark" },
    { employeeId: 10, name: "Peter" },
  ];
  
  const arr2 = [
    { employeeCode: "emp101", employeeId: 10 },
    { employeeCode: "emp102", employeeId: 5 },
  ];
  
  // Output
  // [
  //  {"employeeId":10, employeeCode":"emp101", "name": "Peter"},
  //  {"employeeId":5, employeeCode": "emp102", "name":"Mark"}
  // ]