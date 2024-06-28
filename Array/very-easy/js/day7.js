// 64 Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

// Examples
// no solve 

function outlierNumber(arr) {
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
    
        }else if(arr[i] % 2 === 0){
            return arr[i]
        }
    }
    // return res !== null ? res : "No outlier found";
}

// console.log(outlierNumber([2, 3, 4]));   //➞ 3
// // 2 and 4 are even numbers.
// // 3 is an outlier number.
// console.log(outlierNumber([1, 2, 3]));   //➞ 2
// console.log(outlierNumber([4, 1, 3, 5, 9]));   //➞ 4



// 65 Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// Examples

function moveZeros(arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
}

// console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));  //➞ [1, 1, 2, 1, 3, 0, 0]
// console.log(moveZeros([0, 1, null, 2, false, 1, 0]));  //➞ [1, null, 2, false, 1, 0, 0]
// console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));  //➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



// 66 Sum of Even Pairs in Array
// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]
// Examples

function oddSum(arr) {
    return arr.slice(0,-1).map((num, index) => (num + arr[index + 1]) % 2 === 0);
}

// console.log(oddSum([12, 21, 5, 9, 65, 32]));  //➞ [false, true, true, true, false]
// console.log(oddSum([11, 15, 6, 8, 9, 10]));  //➞ [true, false, true, false, false]
// console.log(oddSum([1, 2, 3, 4, 5, 6]));  //➞ [false, false, false, false, false]



// 67 Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples

function arraySum(nums) {
    const modifiedArray = nums.map(num => num % 2 === 0 ? num ** 2 : Math.sqrt(num));
    const sum = modifiedArray.reduce((acc, curr) => acc + curr, 0);
    return parseFloat(sum.toFixed(2));
}

// console.log(arraySum([1, 3, 3, 1, 10]));   //➞ 105.46
// console.log(arraySum([2, 3, 4, 5]));   //➞ 23.97
// console.log(arraySum([1, 31, 3, 11, 0]));   //➞ 11.62



// 68 Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// Examples

function countCharacters(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].length;    
    }
    return total;
}

// console.log(countCharacters([
//   "###",
//   "###",
//   "###"
// ]));   //➞ 9

// console.log(countCharacters([
//   "22222222",
//   "22222222",
// ]));   //➞ 16

// console.log(countCharacters([
//   "------------------"
// ]));   //➞ 18

// console.log(countCharacters([]));   //➞ 0

// console.log(countCharacters(["", ""]));   //➞ 0



// 70 Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples

function deNest(arr) {
    return arr.join('');
}

// console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));  //➞ 3
// console.log(deNest([[[[[[[true]]]]]]]));  //➞ true
// console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));  //➞ "edabit"


// 71 String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Examples

function stringPairs(str) {
    let res = [];
    for (let i = 0; i < str.length; i += 2) {
        res.push(str.slice(i, i+2));
    }
    return res;
}
// console.log(stringPairs("mubashir"));   //➞ ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit"));   //➞ ["ed", "ab", "it"]
// console.log(stringPairs("airforces"));   //➞ ["ai", "rf", "or", "ce", "s*"]



// 72 CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples

function cmsSelector(arr, str) {
    let arr2 = []
    let str2 = "";
    for(let i = 0; i <arr.length; i++){
        if (arr[i].toLowerCase().includes(str.toLowerCase())) {
            arr2.push(arr[i]);
        }
    }
    return arr2.sort()
}
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w"));   //➞ ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));   //➞ ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));   //➞ ["Drupal", "Joomla", "Magento", "WordPress"]

