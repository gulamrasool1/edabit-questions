// 51 Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// Examples

// function reverseImage(image) {
// let result = [];
// for (let i = 0; i < image.length; i++) {
//     let res = [];
//     for (let j = 0; j < image[i].length; j++) {
//         res.push(image[i][j] === 0 ? 1 : 0);
//     }
//     result.push(res)
// }
// return result


//     for (let i = 0; i < image.length; i++) {
//         for (let j = 0; j < image[i].length; j++) {
//             image[i][j] = image[i][j] === 0 ? 1 : 0;
//         }
//     }
//     return image
// }

function reverseImage(image) {
    return image.map(item => item.map(value => value === 0 ? 1 : 0))
}

// console.log(reverseImage([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ]));
// //➞ [
// //   [0, 1, 1],
// //   [1, 0, 1],
// //   [1, 1, 0]
// // ]
// console.log(reverseImage([
//     [1, 1, 1],
//     [0, 0, 0]
// ]));
// //➞ [
// //   [0, 0, 0],
// //   [1, 1, 1]
// // ]
// console.log(reverseImage([
//     [1, 0, 0],
//     [1, 0, 0]
// ]));
//➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]



// 52 Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

// Examples

// function sumFoundIndexes(arr, n) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === n) {
//             sum += i
//         }
//     }
//     return sum;
// }

function sumFoundIndexes(arr, n) {
    // return arr.map((num, index) => num === n ? index : 0).reduce((a, b) => a + b);

    return arr.reduce((sum, num, i) => num === n ? sum + i : sum, 0);
}

// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3));  //➞ 8
// // The number 3 was found at indexes 1, 2 and 5.
// // 8 = 1 + 2 + 5
// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3));  //➞ 2
// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100));  //➞ 10
// console.log(sumFoundIndexes([5, 10, 15, 20], 2));  //➞ 0



// 53 Record Temperatures
// You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.

// The records array contains the all-time record low/high temperatures for that day of the week.

// [[record low, record high], ...]
// The current week array contains the daily low/high temperatures for each day of the current week.

// [[daily low, daily high], ...]
// A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.

// Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.

// There may be multiple record temperatures in a week.
// If there are no broken records return the original records array.
// Example
//             sun       mon      tues       wed      thur      fri       sat
// console.log(recordTemps([[34, 82], [24, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]],
// [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]]));

//➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]



// 54 Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

// Examples

// function sumArray(arr) {
//     return arr.flat(Infinity).reduce((a , b) => a + b, 0)
// }

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumArray(arr[i]);
        }else {
            sum += arr[i];
        }
    }
    return sum;
}

// console.log(sumArray([1, 2, 3]));  //➞ 6
// // 1 + 2 + 3 = 6
// console.log(sumArray([1, [2, [1]], 3]));  //➞ 7
// 1 + 2 + 1 + 3 = 7



// 55 Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

// Examples

// function sumOfEvens(arr) {
//     return arr.flat().filter(item => item % 2 === 0).reduce((sum1, sum2) => sum1 + sum2, 0);
// }

function sumOfEvens(arr) {
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         if (arr[i][j] % 2 === 0) {
    //             sum += arr[i][j];
    //         }
    //     }
    // }
    // return sum

    return arr.flat().reduce((acc, item) => {
        if (item % 2 === 0) {
            acc += item
        }
        return acc;
    }, 0)
}

// console.log(sumOfEvens([
//   [1, 0, 2],
//   [5, 5, 7],
//   [9, 4, 3]
// ]));  //➞ 6
// // 2 + 4 = 6
// console.log(sumOfEvens([
//   [1, 1],
//   [1, 1]
// ]));  //➞ 0
// console.log(sumOfEvens([
//   [42, 9],
//   [16, 8]
// ]));  //➞ 66
// console.log(sumOfEvens([
//   [],
//   [],
//   []
// ]));  //➞ 0



// 56 Inclusive Array Ranges
// Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

// Examples

// function inclusiveArray(num1, num2) {
//     let result = [];
//     if (num1 > num2) {
//         return [num1]
//     }
//     for (let i = num1; i <= num2; i++) {
//         result.push(i)
//     }
//     return result;
// }

function inclusiveArray(num1, num2) {
    if (num1 > num2) {
        return [num1]
    }
    return [...Array(num2 - num1 + 1)].map((_, i) => num1 + i);
}

// console.log(inclusiveArray(1, 5));  //➞ [1, 2, 3, 4, 5]
// console.log(inclusiveArray(2, 8));  //➞ [2, 3, 4, 5, 6, 7, 8]
// console.log(inclusiveArray(10, 20));  //➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(inclusiveArray(17, 5));  //➞ [17]



// 57 Find Unique Character Strings
// Create a function that returns only strings with unique characters.

// Examples

// function filterUnique(arr) {
//     return arr.filter(str => {
//         let char = new Set(str);
//         return char.size === str.length;
//     })
// }

function filterUnique(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let isTrue = true;
        for (let j = 0; j < str.length; j++) {
            if (str.indexOf(str[j]) !== str.lastIndexOf(str[j])) {
                isTrue = false;
            }
        }
        if (isTrue) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));  //➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
// console.log(filterUnique(["88", "999", "989", "9988", "9898"]));  //➞ []
// console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]));  //➞ ["ABCDE", "BED", "BAC"]



// 58 Chocolate Dilemma
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.

// To illustrate:

// testFairness([[4, 3], [2, 4], [1, 2]],
// [[6, 2], [4, 2], [1, 1], [1, 1]])
// ➞ true

// // Agatha's pieces: [4, 3], [2, 4], [1, 2]
// // Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// // Total area of Agatha's chocolate
// // 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// // Total area of Bertha's chocolate is:
// // 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
// Examples

// function testFairness(arr1, arr2) {
//     let calculateTotal = (arr) => arr.reduce((total, [l, w]) => total + l * w, 0);
//     return calculateTotal(arr1) === calculateTotal(arr2);
// }

function testFairness(arr1, arr2) {
    function calculateTotal(arr) {
        let totalArea = 0;
        for (let i = 0; i < arr.length; i++) {
            let [l, w] = arr[i];
            totalArea += l * w;
        }
        return totalArea;
    }
    return calculateTotal(arr1) === calculateTotal(arr2);
}

// console.log(testFairness([[1, 2], [2, 1]], [[2, 2]]));  //➞ true
// console.log(testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]));  //➞ false
// console.log(testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]));  //➞ true
// console.log(testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]));  //➞ false




// 59 Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// Examples

// function countPosSumNeg(arr) {
//     if (arr.length === 0) {
//         return [];
//     }
//     let countPositive = 0;
//     let sumNegative = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             countPositive++;
//         }else if (arr[i] < 0) {
//             sumNegative += arr[i];
//         }
//     }
//     return [countPositive, sumNegative];
// }

function countPosSumNeg(arr) {
    // if (arr.length === 0) {
    //     return []
    // }
    // return arr.reduce((acc, num) => {
    //     if (num > 0) {
    //         acc[0]++
    //     }else if (num < 0) {
    //         acc[1] += num
    //     }
    //     return acc
    // }, [0, 0]);


    if (arr.length === 0) {
        return []
    }
    let positive = arr.filter(num => num > 0).length;
    let negative = arr.filter(num => num < 0).reduce((sum, num) => sum + num)
    return [positive, negative]
}

// console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));  //➞ [10, -65]
// // There are a total of 10 positive numbers.
// // The sum of all negative numbers equals -65.
// console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]));  //➞ [7, -252]
// console.log(countPosSumNeg([91, -4, 80, -73, -28]));  //➞ [2, -105]
// console.log(countPosSumNeg([]));  //➞ []



// 60 Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

// Examples

function measureDepth(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 1;
    }
    let depth = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            depth = Math.max(depth, measureDepth(arr[i]));
        }
    }
    return depth + 1;
}

console.log(measureDepth([]));  //➞ 1
console.log(measureDepth([[]]));  //➞ 2
console.log(measureDepth([[[]]]));  //➞ 3
console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]]));  //➞ 11