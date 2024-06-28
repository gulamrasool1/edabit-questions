// 47 Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// Examples

function mergevalue(obj) {
    return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`;
}

// console.log(mergevalue({ 1: "Mommy", 2: "please", 3: "help" }));  //➞ "Mommy please help please"
// console.log(mergevalue({ 1: "Me", 2: "innocent", 3: "is" }   ));  //➞ "Me innocent is innocent"
// console.log(mergevalue({ 1: "Must", 2: "lawyer", 3: "call" } ));  //➞ "Must lawyer call lawyer"


// 48 True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples

function integerBoolean(str) {
    return str.split('').map(num => num === '1')
}

// console.log(integerBoolean("100101"));  //➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10")    );  //➞ [true, false]
// console.log(integerBoolean("001")   );  //➞ [false, false, true]


// 49 Learn Lodash: _.fill, Fill an Array With New Values
// According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.
// Examples

function fill(arr, item, start = 0, end = arr.length) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= start && i < end) {
            res.push(item);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

// console.log(fill(array, "a"));   //➞ ["a", "a", "a"]
// console.log(fill(Array(3), 2));   //➞ [2, 2, 2]
// console.log(fill([4, 6, 8, 10], "*", 1, 3));   //➞ [4, "*", "*", 10]

// 50 Designing Rugs
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples

function makeRug(m, n, s = "#") {
    let res = [];
    for (let i = 0; i < m; i++) {
        let row = "";

        for (let j = 0; j < n; j++) {
            row += s
        }
        res.push(row)
    }
    return res
}

// console.log( makeRug(3, 5));   //➞ [
//   "#####",
//   "#####",
//   "#####"
//]
// console.log( makeRug(3, 5, '$'));  // ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
//]
// console.log( makeRug(2, 2, 'A'));  //➞ [
//   "AA",
//   "AA"
//]


// 51 The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples

function forbiddenLetter(str, arr) {
    for (let word of arr) {
        if (word.includes(str)) {
            return false;
        }
    }
    return true;
}

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));  //➞ false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])   );  //➞ true
// console.log(forbiddenLetter("m", [])                           );  //➞ true


// 52 Chinese Zodiac
// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

// Examples

function chineseZodiac(year) {

}

// console.log(chineseZodiac(2021));   //➞ "Ox"
// console.log(chineseZodiac(2020));   //➞ "Rat"
// console.log(chineseZodiac(1933));   //➞ "Rooster"


// 53 Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples

function cleanUpArray(str) {
    const evenArray = str.filter((num) => num % 2 === 0).map((num) => parseInt(num));
    const oddArray = str.filter((num) => num % 2 !== 0).map((num) => parseInt(num));

    return [evenArray, oddArray];
}

// console.log(cleanUpArray(["8"])               );  //➞ [[8], []]
// console.log(cleanUpArray(["11"])              );  //➞ [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"])     );  //➞ [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"]));  //➞ [[4, 8], [9, 5]]


// 54 Tallest Birthday Cake Candles
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Examples

function birthdayCakeCandles(arr) {
    const maxHeight = Math.max(...arr);
    const count = arr.filter(height => height === maxHeight).length;
    return count;
}

// console.log( birthdayCakeCandles([4, 4, 1, 3]));  //➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.
// console.log( birthdayCakeCandles([3, 2, 1, 3]));   //➞ 2
// console.log( birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));   //➞ 4


// 55 argest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples

function largestNumbers(n, arr) {
    arr.sort((a, b) => b - a);
    const largest = arr.slice(0, n).reverse();
    return largest;
}

// console.log(largestNumbers(2, [4, 3, 2, 1]));  //➞ [3, 4]

// console.log(largestNumbers(1, [7, 19, 4, 2]));  //➞ [19]
// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]));  //➞ [16, 18, 57]
// console.log(largestNumbers(0, [1, 3, 4, 2]));  //➞ []


// 56 Factors of a Given Number
// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

// Examples

function findFactors(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            res.push(i)
        }
    }
    return res
}

// console.log(findFactors(9));   //➞ [1, 3, 9]
// // 9 has three factors 1, 3 and 9

// console.log(findFactors(12));   //➞ [1, 2, 3, 4, 6, 12]

// console.log(findFactors(20));   //➞ [1, 2, 4, 5, 10, 20]

// console.log(findFactors(0));   //➞ []
// 0 has no factors


// 57 Trimmed Averages
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// Examples

function trimmedAverages(arr) {
    arr.sort((a,b) => a - b);
    
    const trimmedArray = arr.slice(1,-1)

    const sum = trimmedArray.reduce((num1, num2) => num1 + num2)
    const avg = sum / trimmedArray.length;

    return avg;
}

console.log(trimmedAverages([4, 5, 7, 100]));  //➞ 6
// Average of 5 and 7
console.log(trimmedAverages([10, 25, 5, 15, 20]));  //➞ 15
// Average of 10, 15 and 20
console.log(trimmedAverages([1, 1, 1]));  //➞ 1
// 1

