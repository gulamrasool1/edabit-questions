// 41 Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples

// function numOfSubbarrays(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             count++
//         }
//     }
//     return count
// }

function numOfSubbarrays(arr) {
    // return arr.filter(item => Array.isArray(item)).length;

    return arr.reduce((item, value) => {
        return item + (Array.isArray(value) ? 1 : 0);
    }, 0)
}

// console.log(numOfSubbarrays([[1, 2, 3]]));  //➞ 1
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));  //➞ 3
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]));  //➞ 4
// console.log(numOfSubbarrays([1, 2, 3]));  //➞ 0



// 42 Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

// Examples

// function findNaN(arr) {
// return arr.findIndex(item => Number.isNaN(item));

//     return arr.map(item => Number.isNaN(item) ? 'NaN' : item).indexOf('NaN');
// }

function findNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i]) {
            return i
        }
    }
    return -1
}

// console.log(findNaN([1, 2, NaN]));  //➞ 2
// console.log(findNaN([NaN, 1, 2, 3, 4]));  //➞ 0
// console.log(findNaN([0, 1, 2, 3, 4]));  //➞ -1



// 43 Zip It, If You Can?
// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// Examples

// function zipIt(women, men) {
//     if (women.length !== men.length) {
//         return "sizes don't match"
//     }

//     let result = []
//     for (let i = 0; i < women.length; i++) {
//         result.push([women[i], men[i]]);
//     }
//     return result
// }

function zipIt(women, men) {
    if (women.length !== men.length) {
        return "sizes don't match"
    }
    return women.map((item, i) => [item, men[i]]);
}

// console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
//  //➞ [["Elise", "John"], ["Mary", "Rick"]]
// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
//  //➞ "sizes don't match"
// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
//➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]



// 44 Odd Up, Even Down — N Times
// Create a function that performs an even - odd transform to an array, n times.Each even - odd transformation:

// Adds two(+2) to each odd integer.
// Subtracts two(-2) from each even integer.
// Examples

// function evenOddTransform(arr, num) {
//     return arr.map(item => {
//         if (item % 2 === 0) {
//             return item - 2 * num;
//         }else{
//             return item + 2 * num;
//         }
//     });
// }

function evenOddTransform(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] -= 2 * num;
        } else {
            arr[i] += 2 * num;
        }
    }
    return arr;
}

// console.log(evenOddTransform([3, 4, 9], 3));  //➞[9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]
// console.log(evenOddTransform([0, 0, 0], 10));  //➞[-20, -20, -20]
// console.log(evenOddTransform([1, 2, 3], 1));  //➞[3, 0, 5]



// 45 Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example
// parallelResistance([6, 3, 6]) ➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
// Examples

function parallelResistance(arr) {
    let sum = arr.reduce((item, value) => item + 1 / value, 0);
    let total = 1 / sum
    return Math.round(total * 10) / 10;
}

// console.log(parallelResistance([6, 3]));  //➞ 2
// console.log(parallelResistance([10, 20, 10]));  //➞ 4
// console.log(parallelResistance([500, 500, 500]));  //➞ 166.6
// Round to the nearest decimal place



// 46 Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// Examples

// function mapping(arr) {
// let entries = arr.map(item => [item, item.toUpperCase()]);
// return Object.fromEntries(entries);


//     return arr.reduce((acc, value) => {
//         acc[value] = value.toUpperCase();
//         return acc
//     }, {});
// }

function mapping(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = arr[i].toUpperCase();
    }
    return result
}

// console.log(mapping(["p", "s"]));  //➞ { "p": "P", "s": "S" }
// console.log(mapping(["a", "b", "c"]));  //➞ { "a": "A", "b": "B", "c": "C" }
// console.log(mapping(["a", "v", "y", "z"]));  //➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }



// 47 Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples

function transformUpvotes(str) {
    return str.split(' ').map(count => {
        if (count.endsWith("k")) {
            return parseFloat(count) * 1000;
        } else {
            return parseFloat(count);
        }
    });
}

// console.log(transformUpvotes("6.8k 13.5k"));  //➞ [6800, 13500]
// console.log(transformUpvotes("5.5k 8.9k 32"));  //➞ [5500, 8900, 32]
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));  //➞ [20300, 3800, 7700, 992]



// 48 Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// Examples

// function removeSpecialCharacters(str) {
//     return str.replace(/[^a-zA-Z0-9\s-_]/g, '');
// }

function removeSpecialCharacters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= 'a' && str[i] <= 'z') ||
            (str[i] >= 'A' && str[i] <= 'Z') ||
            (str[i] >= '0' && str[i] <= '9') ||
            str[i] === ' ' ||
            str[i] === '-' ||
            str[i] === '_') {
            result += str[i];
        }
    }
    return result;
}

// console.log(removeSpecialCharacters("The quick brown fox!"));  //➞ "The quick brown fox"
// console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO."));  //➞ "fd76fd-6GvKlO"
// console.log(removeSpecialCharacters("D0n$c sed 0di0 du1"));  //➞ "D0nc sed 0di0 du1"



// 49 Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

// Examples

// function uniqueArr(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && !result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

function uniqueArr(arr) {
    // return [...new Set(arr.filter(num => num > 0))];
}

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));  //➞ [1, 3]
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));  //➞ [3, 5]
// console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));  //➞ [10, 6, 13, 5]



// 50 Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples

// function identicalFilter(arr) {
    // return arr.filter(str => new Set(str).size === 1);


//     return arr.filter(str => str.split('').every(char => char === str[0]));
// }

function identicalFilter(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        if (str.split('').every(char => char === str[0])) {
            result.push(str)
        }
    }
    return result
}

console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])); 
//➞ ["aaaaaa", "d", "eeee"]
console.log(identicalFilter(["88", "999", "22", "545", "133"])); 
//➞ ["88", "999", "22"]
console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])); 
//➞ []