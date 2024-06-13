// 138 Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples

function sortByLength(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result.sort((a,b) => a.length - b.length)
}

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }

// console.log(sortByLength(["Google", "Apple", "Microsoft"]));
//  //➞ ["Apple", "Google", "Microsoft"]
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
//  //➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// console.log(sortByLength(["Turing", "Einstein", "Jung"]));
 //➞ ["Jung", "Turing", "Einstein"]




// 139 Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// Examples

// function calculateDifference(obj, str) {
//     return (Object.values(obj)).reduce((a, b) => a + b) - str
// }

function calculateDifference(obj, str) {
    let result = 0;
    Object.values(obj).forEach(val => result += val);
    return result - str
}

// function calculateDifference(obj, str) {
//     let result = 0;
//     for (let user in obj) {
//         result = result + obj[user];
//     }
//     return result - str;
// }

// console.log(calculateDifference({ "baseball bat": 20 }, 5));  //➞ 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));  //➞ 11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));  //➞ 1



// 140 Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples

// function isAvgWhole(arr) {
//     return Number.isInteger(arr.reduce((acc, val) => acc + val) / arr.length); 
// }

function isAvgWhole(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result += arr[i];
    }
    return Number.isInteger(result / arr.length);
}

// console.log(isAvgWhole([1, 3]));  //➞ true
// console.log(isAvgWhole([1, 2, 3, 4]));  //➞ false
// console.log(isAvgWhole([1, 5, 6]));  //➞ true
// console.log(isAvgWhole([1, 1, 1]));  //➞ true
// console.log(isAvgWhole([9, 2, 2, 5]));  //➞ false



// 141 Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Examples

// function getAbsSum(arr) {
//     return arr.reduce((acc, val) => acc + Math.abs(val),0);
// }

function getAbsSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += Math.abs(arr[i])
    }
    return result
}

// console.log(getAbsSum([2, -1, 4, 8, 10]));  //➞ 25
// console.log(getAbsSum([-3, -4, -10, -2, -3]));  //➞ 22
// console.log(getAbsSum([2, 4, 6, 8, 10]));  //➞ 30
// console.log(getAbsSum([-1]));  //➞ 1


// 142 Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
// Examples

function sortNumsAscending(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }
    return arr.sort((a,b) => a - b);
}

// function sortNumsAscending(arr) {
//     let result =[]
//     for (let i = 0; i < arr.length; i++) {
//     }
// }

console.log(sortNumsAscending([1, 2, 10, 50, 5]));  //➞ [1, 2, 5, 10, 50]
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));  //➞ [-95, -24, 4, 29, 80, 85]
console.log(sortNumsAscending(null));  //➞ []
console.log(sortNumsAscending([]));  //➞ []