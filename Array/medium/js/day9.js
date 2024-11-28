// 81 Peeling off the Outer Layers
// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

// Examples

// function peelLayerOff(arr) {
//     let remove = arr.slice(1, -1);
//     return remove.map(row => row.slice(1, -1));
// }

function peelLayerOff(arr) {
    let result = [];
    for (let i = 1; i < arr.length - 1; i++) {
        let row = [];
        for (let j = 1; j < arr[i].length - 1; j++) {
            row.push(arr[i][j])
        }
        if (row.length > 0) {
            result.push(row);
        }
    }
    return result;
}

// console.log(peelLayerOff([
//   ["a", "b", "c", "d"],
//   ["e", "f", "g", "h"],
//   ["i", "j", "k", "l"],
//   ["m", "n", "o", "p"]
// ]));  //➞ [
//   ["f", "g"],
//   ["j", "k"]
// ]
// console.log(peelLayerOff([
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
//   [26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35]
// ]));  //➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]
// console.log(peelLayerOff([
//   [true, false, true],
//   [false, false, true],
//   [true, true, true]
// ]));  //➞ [[false]]
// console.log(peelLayerOff([
//   ["hello", "world"],
//   ["hello", "world"]
// ]));  //➞ []



// 82 Moving to the End
// Write a function that moves all elements of one type to the end of the array.

// Examples

// function moveToEnd(arr, num) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== num) {
//             result.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             result.push(arr[i]);
//         }
//     }
//     return result
// }

function moveToEnd(arr, num) {
    let notNum = arr.filter(char => char !== num);
    let isNum = arr.filter(char => char === num);
    return notNum.concat(isNum);
}

// console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1));  //➞ [3, 2, 4, 4, 1, 1]
// Move all the 1s to the end of the array.
// console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9));  //➞ [7, 8, 1, 2, 3, 4, 9]
// console.log(moveToEnd(["a", "a", "a", "b"], "a"));  //➞ ["b", "a", "a", "a"]



// 83 Lonely Integer
// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

// Examples

function lonelyInteger(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let element = arr[i];
        if (arr.indexOf(-element) === -1) {
            return arr[i];
        }
    }
}
 
// console.log(lonelyInteger([1, -1, 2, -2, 3]));  //➞ 3
// 3 has no matching negative appearance.
// console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));  //➞ -4
// -4 has no matching positive appearance.
// console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));  //➞ -9



// 84 Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// Examples

// function checkSum(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         let complement = n - arr[i];
//         if (arr.slice(i + 1).includes(complement)) {
//             return true
//         }
//     }
//     return false
// }

function checkSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                return true
            }
        }
    }
    return false
}

// console.log(checkSum([10, 12, 4, 7, 9, 11], 16));  //➞ true
// console.log(checkSum([4, 5, 6, 7, 8, 9], 13));  //➞ true
// console.log(checkSum([0, 98, 76, 23], 174));  //➞ true
// console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39));  //➞ false
// console.log(checkSum([2, 8, 9, 12, 45, 78], 1));  //➞ false



// 85 Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

// Examples

// function removeEnemies(arr1, arr2) {
//     return arr1.filter(name => !arr2.includes(name));
// }

function removeEnemies(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

// console.log(removeEnemies(["Fred"], []));  //➞ ["Fred"]
// console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]));  //➞ ["Adam", "Tanya"]
// console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]));  //➞ ["Emily", "Steve"]



// 86 The Museum of Incredibly DULL Things
// A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

// Create a function that takes an array of integers and removes the smallest value.

// Examples

// function removeSmallest(arr) {
//     let min = arr.indexOf(Math.min(...arr))
//     arr.splice(min, 1);
//     return arr
// }

function removeSmallest(arr) {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;            
        }
    }
    arr.splice(minIndex, 1);
    return arr
}

// console.log(removeSmallest([1, 2, 3, 4, 5] ));  //➞ [2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4]));  //➞ [5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1]));  //➞ [2, 2, 2, 1]



// 87 Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

// Examples

// function probability(arr, n) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= n) {
//             count++;
//         }
//     }
//     let probability = (count / arr.length) * 100;
//     return parseFloat(probability.toFixed(1))
// }

function probability(arr, n) {
    let filterArr = arr.filter(num => num >= n);
    let probability = (filterArr.length / arr.length) * 100;
    return parseFloat(probability.toFixed(1));
}

// console.log(probability([5, 1, 8, 9], 6));  //➞ 50.0
// console.log(probability([7, 4, 17, 14, 12, 3], 16));  //➞ 16.7
// console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6));  //➞ 70.0



// 88 Is There an Upward Trend?
// Create a function that determines if there is an upward trend.

// Examples

// function upwardTrend(arr) {
//     if (arr.some(item => typeof item !== "number")){
//         return "Strings not permitted!"
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] >= arr[i + 1]) {
//             return false
//         }
//     }
//     return true
// }

function upwardTrend(arr) {
    if (!arr.every(item => typeof item === "number")) {
        return "Strings not permitted!";
    }

    return arr.slice(0, -1).every((item, index) => item < arr[index + 1]);
}

// console.log(upwardTrend([1, 2, 3, 4]));  //➞ true
// console.log(upwardTrend([1, 2, 6, 5, 7, 8]));  //➞ false
// console.log(upwardTrend([1, 2, 3, "4"]));  //➞ "Strings not permitted!"
// console.log(upwardTrend([1, 2, 3, 6, 7]));  //➞ true



// 89 Simple Encoder
// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

// Examples

function simpleEncoder(str) {
    const lowerStr = str.toLowerCase(); 
    return lowerStr
        .split("")
        .map(char => lowerStr.split(char).length - 1 === 1 ? "[" : "]")
        .join("");
}

// console.log(simpleEncoder("Mubashir"));  //➞ "[[[[[[[["
// '[' for each character
// console.log(simpleEncoder("Matt"));  //➞ "[[]]"
// ']' for both 't'
// console.log(simpleEncoder("eD  aBiT"));  //➞ "[[]][[[["
// Two spaces in between



// 90 Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

// Examples

function winRound(arr1, arr2) {
    arr1.sort((a, b) => b - a);
    arr2.sort((a, b) => b - a);

    let num1 = arr1[0] * 10 + arr1[1];
    let num2 = arr2[0] * 10 + arr2[1];
    
    return num1 > num2;
}

console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]));  //➞ true
// Your cards can make the number 96
// Your opponent can make the number 73
// You win the round since 96 > 73
console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]));  //➞ true
console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]));  //➞ false
console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]));  //➞ false