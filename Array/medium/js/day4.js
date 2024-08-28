// 31 Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples

// function uniqueSort(arr) {
// let array = [...new Set(arr)];
// return array.sort((a, b) => a - b);

//     let array = arr.filter((acc, value, item) => item.indexOf(acc) === value);
//     return array.sort((a, b) => a - b);
// }

// function uniqueSort(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     result.sort((a, b) => a - b);
//     return result;
// }

// console.log(uniqueSort([1, 2, 4, 3]));  //➞ [1, 2, 3, 4]
// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));  //➞ [1, 2, 3, 4]
// console.log(uniqueSort([6, 7, 3, 2, 1]));  //➞ [1, 2, 3, 6, 7]



// 32 Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

// Examples

// function trace(arr) {
//     return arr.map((acc, i) => acc[i]).reduce((add, value) => add + value)
// }

// function trace(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i][i];
//     }
//     return result;
// }

// console.log(trace([
//   [1, 4],
//   [4, 1]
// ]));  //➞ 2
// // 1 + 1 = 2
// console.log(trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]));  //➞ 15
// // 1 + 5 + 9 = 15
// console.log(trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]
// ]));  //➞ 10
// 1 + 2 + 3 + 4 = 10



// 33 Mirror Array
// Given an integer array, transform that array into a mirror.

// Examples

// function mirror(arr) {
//     return arr.concat(arr.slice(0, -1).reverse());
// }

function mirror(arr) {
    let result = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }
    for (let i = 0; i >= 0; i++) {
        result.push(arr[i]);
    }
    return result
}

// console.log(mirror([0, 2, 4, 6]));  //➞ [0, 2, 4, 6, 4, 2, 0]
// console.log(mirror([1, 2, 3, 4, 5]));  //➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
// console.log(mirror([3, 5, 6, 7, 8]));  //➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]



// 34 Function Function
// Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

// Examples

function factory(arr) {
    return function (divided) {
        return divided.map(num => num / arr)
    }
}

const first = factory(15)
// returns a function first.
const arr1 = [30, 45, 60]
// 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4
// console.log(first(arr1)); //➞ [2, 3, 4]

const second = factory(2)
// returns a function second.
const arr2 = [2, 4, 6]
// 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3
// console.log(second(arr2));  //➞ [1, 2, 3]



// 35 Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples

// function allTruthy(...args) {
// return args.every(Boolean);

// return args.reduce((acc, item) => acc === item);

//     return args.reduce((acc, item) => acc && Boolean(item));
// }

function allTruthy(...args) {
    for (let i = 0; i < args.length; i++) {
        if (!args[i]) {
            return false;
        }
    }
    return true;
}

// console.log(allTruthy(true, true, true));  //➞ true
// console.log(allTruthy(true, false, true));  //➞ false
// console.log(allTruthy(5, 4, 3, 2, 1, 0));  //➞ false



// 36 Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// Examples

// function reverseArr(num) {
//     return num.toString().split("").reverse().map(Number);
// }

function reverseArr(num) {
    let numStr = num.toString();
    let Reversed = [];
    for (let i = 0; i < numStr.length; i++) {
        Reversed.push(Number(numStr[numStr.length - 1 - i]));
    }
    return Reversed
}

// console.log(reverseArr(1485979));  //➞ [9, 7, 9, 5, 8, 4, 1]
// console.log(reverseArr(623478));  //➞ [8, 7, 4, 3, 2, 6]
// console.log(reverseArr(12345));  //➞ [5, 4, 3, 2, 1]



// 37 H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples

function hackerSpeak(str) {
    // const replacement = {
    //     'a': '4',
    //     'e': '3',
    //     'i': '1',
    //     'o': '0',
    //     's': '5'
    // }
    // return str.split('').map(char => replacement[char] || char).join("")

    return str.replace(/a/g, '4').replace(/e/g, '3').replace(/i/g, '1').replace(/o/g, '0').replace(/s/g, '5')
}

// console.log(hackerSpeak("javascript is cool"));  //➞ "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun"));  //➞ "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder"));  //➞ "b3c0m3 4 c0d3r"



// 38 Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// Examples

// function capMe(arr) {
//     return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
// }

function capMe(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let word = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        result.push(word)
    }
    return result
}

// console.log(capMe(["mavis", "senaida", "letty"]));  //➞ ["Mavis", "Senaida", "Letty"]
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));  //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));  //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]



// 39 Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

// Examples


function sumTwoSmallestNums(arr) {
    let positive = arr.filter(num => num > 0)
    let sorted = positive.sort((a, b) => a - b);
    return sorted[0] + sorted[1];
}

// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));  //➞ 7
// console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));  //➞ 3453455
// console.log(sumTwoSmallestNums([2, 9, 6, -1]));  //➞ 8
// console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));  //➞ 563
// console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));  //➞ 4519



// 40 War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples

// function warOfNumbers(arr) {
//     let even = 0;
//     let odd = 0;
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             even += num
//         } else {
//             odd += num
//         }
//     }
//     return Math.abs(odd - even)
// }

function warOfNumbers(arr) {
    let { even, odd } = arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even += num;
        } else {
            acc.odd += num;
        }
        return acc
    }, { even: 0, odd: 0 });

    return Math.abs(odd - even); 
}

// function warOfNumbers(arr) {
//     let even = arr.filter(num => num % 2 === 0);
//     let odd = arr.filter(num => num % 2 !== 0);

//     let evenSum = even.reduce((sum, num) => sum + num, 0);
//     let oddSum = odd.reduce((sum, num) => sum + num, 0);

//     return Math.abs(oddSum - evenSum);
// }

console.log(warOfNumbers([2, 8, 7, 5]));  //➞ 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2
console.log(warOfNumbers([12, 90, 75]));  //➞ 27
console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));  //➞ 168