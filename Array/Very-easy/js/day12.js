// 111 Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]
// Examples

// function calcDeterminant(arr) {
//   const a = arr[0][0];
//   const b = arr[0][1];
//   const c = arr[1][0];
//   const d = arr[1][1];

//   return a * d - b * c;
// }

function calcDeterminant(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {

    let a = arr[i][0];
    let b = arr[i][1];
    let c = arr[i][2];
    let d = arr[i][3];

    let ans = a * d - b * c;
    res.push(ans);
  }
  return res
}

// console.log(calcDeterminant([
//   [1, 2],
//   [3, 4]
// ]));  //➞ -2
// console.log(calcDeterminant([
//   [5, 3],
//   [3, 1]
// ]));  //➞ -4
// console.log(calcDeterminant([
//   [1, 1],
//   [1, 1]
// ]));  //➞ 0



// 112 Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

// Examples

// function existsHigher(arr1, num) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] >= num) {
//       return true
//     }
//   }
//   return false
// }

function existsHigher(arr1, num) {
  return arr1.some((elem) => {
    return elem >= num;
  })
}

// console.log(existsHigher([5, 3, 15, 22, 4], 10));  //➞ true
// console.log(existsHigher([1, 2, 3, 4, 5], 8));  //➞ false
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));  //➞ true
// console.log(existsHigher([], 5));  //➞ false



// 113 Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples

function reverseChallenge(arr1, num) {
  
}

// console.log(reverseChallenge[5, 7, 8, 2, 1], 2);  //➞ [1, 1, 0, 0, 1]
// console.log(reverseChallenge[9, 8, 16, 47], 4);   //➞ [1, 0, 0, 3]
// console.log(reverseChallenge[17, 11, 99, 55, 23, 1], 5);   //➞ [2, 1, 4, 0, 3, 1]
// console.log(reverseChallenge[6, 1], 7);   //➞ [6, 1]
// console.log(reverseChallenge[3, 2, 9], 3);   //➞ [0, 2, 0]
// console.log(reverseChallenge[48, 22, 0, 19, 33, 100], 10);   //➞ [8, 2, 0, 9, 3, 0]




// 114 Filter by Digit Length
// Create a function that filters out an array to include numbers that only have a certain number of digits.

// Examples

// function filterDigitLength(arr, num) {
  // return arr.filter((n) => {
  //   return n.toString().length === num;
  // })
// }

function filterDigitLength(arr, num) {
  let res = []
  for (let i = 0; i < arr.length; i++) {    

    if (arr[i].toString().length === num) {
      res.push(arr[i])
    }
  }
  return res
}

// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));  //➞ [232, 555]
// // Include only numbers with 3 digits.
// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));  //➞ [2, 7, 8, 9]
// // Include only numbers with 1 digit.
// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));  //➞ []
// // No numbers with only 1 digit exist => return empty array.
// console.log(filterDigitLength([5, 6, 8, 9], 1));  //➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.



// 115 Even Odd Partition
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]
// Examples

// function evenOddPartition(arr) {
//   let even = [];
//   let odd = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i])
//     }else{
//       odd.push(arr[i]);
//     }
//   }
//   return [even, odd]
// }

function evenOddPartition(arr) {
  let even = arr.filter(num => num % 2 === 0);
  let odd = arr.filter(num => num % 2 !== 0);
  return [even, odd]
}

// console.log(evenOddPartition([5, 8, 9, 2, 0]));  //➞ [[8, 2, 0], [5, 9]]
// console.log(evenOddPartition([1, 0, 1, 0, 1, 0]));  //➞ [[0, 0, 0], [1, 1, 1]]
// console.log(evenOddPartition([1, 3, 5, 7, 9]));  //➞ [[], [1, 3, 5, 7, 9]]
// console.log(evenOddPartition([]));  //➞ [[], []]



// 116 Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

// function minusOne(arr) {
//   arr.pop()
//   return arr
// }
// Examples

// let x = [1, 2, 3, 4, 5]

// function minusOne(arr) {
//   arr.pop()
//   return arr
// }

let x = [1, 2, 3, 4, 5]

function minusOne(arr) {
  arr.length = arr.length -1;
  return arr;
}

// console.log(minusOne(x))  //➞ [1, 2, 3, 4]  // 1st time function is called.
// console.log(minusOne(x))  //➞ [1, 2, 3]  // 2nd time function is called.
// console.log(minusOne(x))  //➞ [1, 2]  // 3rd time function is called.
// console.log(minusOne(x))  //➞ [1]  // 4th time function is called.

// What I want instead:
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.



// 117 Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

// Examples

// function checkFactors(arr, num) {
  // return arr.every((fac) => num % fac === 0);
  // return arr.filter((fac) => num % fac === 0).length === arr.length;
// }

function checkFactors(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] !== 0) {
      return false;
    }
  }
  return true;
}

// console.log(checkFactors([2, 3, 4], 12));  //➞ true
// // Since 2, 3, and 4 are all factors of 12.
// console.log(checkFactors([1, 2, 3, 8], 12));  //➞ false
// // 8 is not a factor of 12.
// console.log(checkFactors([1, 2, 50], 100));  //➞ true
// console.log(checkFactors([3, 6], 9));  //➞ false



// 118 Get the File Extension
// Write a function that maps files to their extension names.

// Examples

// function getExtension(arr) {
//   return arr.map((num) => num.split('.').pop());
// }

function getExtension(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let parts = arr[i].split('.');
    res.push(parts[parts.length -1])
  }
  return res;
}

console.log(getExtension(["code.html", "code.css"]));
 //➞ ["html", "css"]

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));
 //➞ ["jpg", "pdf", "mp3"]

console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));
 //➞ ["rb", "cpp", "py", "js"]
