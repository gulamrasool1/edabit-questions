// 111 Potential Friend?
// Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

// Examples

// function isPotentialFriend(arr1, arr2) {
//   let result = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       result++
//     }
//   }
//   return result >= 2 || arr1.length === arr2.length && result === arr1.length
// }

function isPotentialFriend(arr1, arr2) {
  let common = arr1.filter(char => arr2.includes(char));
  return common.length >= 2 || arr1.length === arr2.length && common.length === arr1.length;
}

// console.log(isPotentialFriend(
//   ["sports", "music", "chess"],
//   ["coding", "music", "netflix", "chess"]
// ));  //➞ true
// console.log(isPotentialFriend(
//   ["cycling", "technology", "drawing"],
//   ["dancing", "drawing"]
// ));  //➞ false
// console.log(isPotentialFriend(
//   ["history"],
//   ["history"]
// ));  //➞ true



// 112 All Occurrences of an Element in an Array
// Create a function that returns the indices of all occurrences of an item in the array.

// Examples

// function getIndices(arr, item) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       result.push(i)
//     }
//   }
//   return result;
// }

function getIndices(arr, item) {
  return arr.reduce((acc, curr, i) => {
    if (curr === item) {
      acc.push(i);
    }
    return acc;
  }, []);
}

// console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a"));  //➞ [0, 1, 3, 5]
// console.log(getIndices([1, 5, 5, 2, 7], 7));  //➞ [4]
// console.log(getIndices([1, 5, 5, 2, 7], 5));  //➞ [1, 2]
// console.log(getIndices([1, 5, 5, 2, 7], 8));  //➞ []



// 113 Flash Cards
// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

// Examples

function flash([num1, op, num2]) {
  if (op === 'x') {
    return num1 * num2;
  } else if (op === '+') {
    return num1 + num2;
  } else if (op === '-') {
    return num1 - num2;
  } else if (num2 === 0) {
    return undefined;
  }
  return (num1 / num2).toFixed(2);
}

// console.log(flash([3, "x", 7]));  //➞ 21
// console.log(flash([5, "+", 7]));  //➞ 12
// console.log(flash([10, "-", 9]));  //➞ 1
// console.log(flash([10, "/", 0]));  //➞ undefined
// console.log(flash([10, "/", 3]));  //➞ 3.33



// 114 Tidy Title and Author Strings
// You have an array of strings, each consisting of a book title and an author's name.

// To illustrate:

// [
//   ["   Death of a Salesman - Arthur Miller    "],
//   ["   Macbeth - William Shakespeare    "],
//   ["    A Separate Peace - John Knowles     "],
//   [" Lord of the Flies - William Golding"],
//   ["A Tale of Two Cities - Charles Dickens"]
// ]
// Create a function that takes an array like the one above and transforms it into the same format as the one below:

// [
//   ["Death of a Salesman", "Arthur Miller"],
//   ["Macbeth", "William Shakespeare"],
//   ["A Separate Peace", "John Knowles"],
//   ["Lord of the Flies", "William Golding"],
//   ["A Tale of Two Cities", "Charles Dickens"]
// ]

// Examples

// function tidyBooks(arr) {
//   return arr.map(word => word.trim().split(" - ")).flat();
// }

function tidyBooks(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let splitArray = arr[i].trim().split(" - ");
    result.push(splitArray);
  }
  return result.flat();
}

// console.log(tidyBooks([
//   "     The Catcher in the Rye - J. D. Salinger    ",
//   "    Brave New World - Aldous Huxley   ",
//   "    Of Mice and Men - John Steinbeck    "
// ]));  //➞ [
//   "The Catcher in the Rye", "J. D. Salinger",
//   "Brave New World", "Aldous Huley",
//   "Of Mice and Men", "John Steinbeck"
// ]



// 115 Identical Subarrays
// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.

// Examples

// function countIdentical(arr) {
// let count = arr.filter(sub => new Set(sub).size === 1).length;
// return count

//   return arr.filter(subArr => subArr.every(item => item === subArr[0])).length
// }

function countIdentical(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let innerArr = arr[i];
    if (innerArr.length === 1) {
      count++;
    } else if (innerArr.every((el) => el === innerArr[0])) {
      count++;
    }
  }
  return count;
}

// console.log(countIdentical([
//   [1],
//   [2],
//   [3],
//   [4]
// ]));  //➞ 4
// Single-item arrays still count as having identical elements.

// console.log(countIdentical([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 4]
// ]));  //➞ 1
// console.log(countIdentical([
//   [33, 33],
//   [5],
//   ["a", "a"],
//   [2, 2, 2],
//   [1, 2, 2],
//   [3, 1]
// ]));  //➞ 4
// // 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]

// console.log(countIdentical([
//   ["@", "@", "@", "@"],
//   [2, 3], [3, 4], [4, 4]
// ]));  //➞ 2



// 116 Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

// Examples

// function cumulativeSum(arr) {
// let sum = 0;
// return arr.map(item => sum += item);

//   let sum = 0;
//   return arr.reduce((acc, curr) => {
//     sum += curr
//     acc.push(sum);
//     return acc
//   }, [])
// }

function cumulativeSum(arr) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  return result;
}

// console.log(cumulativeSum([1, 2, 3]));  //➞ [1, 3, 6]
// console.log(cumulativeSum([1, -2, 3]));  //➞ [1, -1, 2]
// console.log(cumulativeSum([3, 3, -2, 408, 3, 3]));  //➞ [3, 6, 4, 412, 415, 418]



// 117 Are the Sum of Digits in the Numbers Equal?
// Write a function that takes an array of two numbers and determines if the sum of the digits in each number are equal to each other.

// Examples

function isEqual(arr) {
  let sum = num => num.toString().split("").reduce((acc, curr) => acc + Number(curr), 0);
  return sum(arr[0]) === sum(arr[1]);
}

// console.log(isEqual([105, 42]));  //➞ true
// // # 1 + 0 + 5 = 6
// // # 4 + 2 = 6
// console.log(isEqual([21, 35]));  //➞ false
// console.log(isEqual([0, 0]));  //➞ true



// 118 Determine If Two Numbers Add up to a Target Value
// Given two unique integer arrays a and b, and an integer target value v, create a function to determine whether there is a pair of numbers that add up to the target value v, where one number comes from one array a and the other comes from the second array b.

// Return true if there is a pair that adds up to the target value and false otherwise.

// Examples

// function sumOfTwo(a, b, v) {
//     return a.some(x => b.includes(v - x));
// }

function sumOfTwo(a, b, v) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }
  return false;
}

// console.log(sumOfTwo([1, 2], [4, 5, 6], 5));  //➞ true
// console.log(sumOfTwo([1, 2], [4, 5, 6], 8));  //➞ true
// console.log(sumOfTwo([1, 2], [4, 5, 6], 3));  //➞ false
// console.log(sumOfTwo([1, 2], [4, 5, 6], 9));  //➞ false



// 119 Secret Function 4.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

// Examples

function secret(text) {
  let [tag, ...className] = text.split(".");
  return `<${tag} class="${className.join(" ")}"></${tag}>`;
}

// console.log(secret("p.one.two.three"));  //➞ `<p class="one two three"></p>`
// console.log(secret("p.one"));  //➞ `<p class="one"></p>`
// console.log(secret("p.four.five"));  //➞ `<p class="four five"></p>`



// 120 Musical Cadences
// In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:

// V followed by I is a Perfect Cadence
// IV followed by I is a Plagal Cadence
// V followed by Any chord other than I is an Interrupted Cadence
// Any chord followed by V is an Imperfect Cadence
// Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.

// Examples

function findCadence(arr) {
  let [secondLast, Last] = arr.slice(-2);
  if (secondLast === "V" && Last === "I") {
    return "perfect";
  }
  if (secondLast === "IV" && Last === "I") {
    return "plagal";
  }
  if (secondLast === "V" && Last !== "I") {
    return "interrupted";
  }
  if (Last === "V") {
    return "imperfect";
  }
}

console.log(findCadence(["I", "IV", "V"]));  //➞ "imperfect"
console.log(findCadence(["ii", "V", "I"]));  //➞ "perfect"
console.log(findCadence(["I", "IV", "I", "V", "vi"]));  //➞ "interrupted"