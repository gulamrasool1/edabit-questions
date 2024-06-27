// 15 Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples

// function findLargestNums(arr) {
//     return arr.map(large => Math.max(...large))
// }

function findLargestNums(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.max(...arr[i]))
    }
    return result;
}

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));  //➞ [7, 90, 2]
// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));  //➞ [-34, -2, 7]
// console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));  //➞ [0.7634, 9.32, 9]



// 16 Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// Examples

// function set(arr) {
//     return arr.filter((num, index, num1) => num1.indexOf(num) === index)
// }

function set(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(set([1, 3, 3, 5, 5]));  //➞ [1, 3, 5]
// console.log(set([4, 4, 4, 4]));  //➞ [4]
// console.log(set([5, 7, 8, 9, 10, 15]));  //➞ [5, 7, 8, 9, 10, 15]
// console.log(set([3, 3, 3, 2, 1]));  //➞ [1, 2, 3]



// 17 Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Examples

// function formatPhoneNumber(arr) {
//     let a = arr.slice(0,3).join("");
//     let b = arr.slice(3,6).join("");
//     let c = arr.slice(6).join("");
//     return `(${a}) ${b}-${c}`;   
// }   

function formatPhoneNumber(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) result += "(";
        if (i === 3) result += ") ";
        if (i === 6) result += "-"
        result += arr[i]
    }
    return result;
}

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));  //➞ "(123) 456-7890"
// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));  //➞ "(519) 555-4468"
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));  //➞ "(345) 501-2527"




// 18 Amplify the Multiples of Four
// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

// Examples

// function amplify(num) {
//     let result = []
//     for (let i = 0; i <= num; i++) {
//         if (i % 4 === 0) {
//             result.push(i * 10)
//         }else{
//             result.push(i)
//         }
//     }
//     return result
// }

function amplify(num) {
    return Array.from({ length: num }, (_, i) => {
        const num1 = i + 1;
        return num1 % 4 === 0 ? num1 * 10 : num1;
    })
}

// console.log(amplify(4)); //➞ [1, 2, 3, 40]
// // Create a sequence from 1 to 4
// // 4 is exactly divisible by 4, so it will be 4*10 = 40
// console.log(amplify(3)); //➞ [1, 2, 3]
// // Create a sequence from 1 to 3
// // There are no numbers that can be exactly divided by 4
// console.log(amplify(25));  //➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.



// 19 Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples

// function societyName(arr) {
//     return arr.map(num => num[0]).sort().join("")
// }

function societyName(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0]);
    }
    return result.sort().join("");
}

// console.log(societyName(["Adam", "Sarah", "Malcolm"]));  //➞ "AMS"
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));  //➞ "CHLN"
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));  //➞ "CJMPRR"



// 20 Array Operation
// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// Examples

// function arrayOperation(x, y, n) {
//     let result = []
//     for (let i = x; i <= y; i++) {
//         if (i % n === 0) {
//             result.push(i)
//         }
//     }
//     return result
// }

function arrayOperation(x, y, n) {
    let result = [];
    for (let i = x; i <= y; i++) {
        result.push(i);
    }
    return result.filter((a) => a % n === 0);
}

// console.log(arrayOperation(1, 10, 3));  //➞ [3, 6, 9]
// console.log(arrayOperation(7, 9, 2));  //➞ [8]
// console.log(arrayOperation(15, 20, 7));  //➞ []



// 21 Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// Examples

// function maxTotal(arr) {
//     arr.sort((a, b) => b - a);
//     return arr.slice(0, 5).reduce((num1, num2) => num1 + num2);
// }

function maxTotal(arr) {
    arr.sort((a, b) => b - a);

    let result = 0;

    for (let i = 0; i < 5; i++) {
        result += arr[i]
    }
    return result;
}

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));  //➞ 43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));  //➞ 100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  //➞ 40



// 22 Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

// Examples

// function isOmnipresent(arr, val) {
//     return arr.every(num => num.includes(val));
// }

function isOmnipresent(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(val)) {
            return false;
        }
    }
    return true
}

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));  //➞ true
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));  //➞ false
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5));  //➞ true
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6));  //➞ false



// 23 Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// Examples

function battingAvg(arr) {

}

// console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]));  //➞ ".286"
// console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]));  //➞ ".350"
// console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]));  //➞ ".273"



// 24 Numbers to Arrays and Vice Versa
// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.
// Examples

// function toArray(str) {
//     return str.toString().split("").map(Number)
// }

// function toNumber(arr) {
//     return arr.join("");
// }

// function toArray(str) {
//     let stringVal = str.toString()
//     let result = [];
//     for (let i = 0; i < stringVal.length; i++) {
//         let loopVal = Number(stringVal[i])
//         result.push(loopVal)
//     }
//     return result
// }

function toNumber(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

// console.log(toArray(235));  //➞ [2, 3, 5]
// console.log(toArray(0));  //➞ [0]
// console.log(toNumber([2, 3, 5]));  //➞ 235
// console.log(toNumber([0]));  //➞ 0



// 25 Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples

// function dropRight(arr, num = 1) {
//     const endIndex = num >= arr.length ? 0 : arr.length - num;
//     return arr.slice(0, endIndex);
// }

function dropRight(arr, num = 1) {
    let result = [];
    for (let i = 0; i < arr.length - num; i++) {
        result.push(arr[i]);
    }
    return result;
}

// console.log(dropRight([1, 2, 3]));  //➞ [1, 2]
// console.log(dropRight([1, 2, 3], 2));  //➞ [1]
// console.log(dropRight([1, 2, 3], 5));  //➞ []
// console.log(dropRight([1, 2, 3], 0)); //➞ [1, 2, 3]



// 26 Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// sliceSum([9, 8, 7, 6], 3) ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.
// Examples

// function sliceSum(arr, val) {
//     return arr.slice(0,val).reduce((sum,num) => sum + num,0) 
// }

function sliceSum(arr, val) {
    let result = 0
    for (let i = 0; i < val; i++) {
        result += arr[i]
    }
    return result
}

// console.log(sliceSum([1, 3, 2], 2)); //➞ 4
// console.log(sliceSum([4, 2, 5, 7], 4)); //➞ 18
// console.log(sliceSum([3, 6, 2], 0)); //➞ 0



// 27 Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

// Examples

// function countOnes(arr) {
//     return arr.flat().filter(num => num === 1).length;
// }

function countOnes(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1) {
                result++;
            }
        }
    }
    return result;
}

// console.log(countOnes([
//     [1, 0],
//     [0, 0]
// ]));  //➞ 1
// console.log(countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1]
// ]));  //➞ 7
// console.log(countOnes([
//     [1, 2, 3],
//     [0, 2, 1],
//     [5, 7, 33]
// ]));  //➞ 2