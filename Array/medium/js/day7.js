// 61 Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]

// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]

// // A_Set is a subset of B_Set
// Create a function that determines if the first array is a subset of the second.

// Examples

// function subset(arr1, arr2) {
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);
//     let set1Array = Array.from(set1);
//     for (let i = 0; i < set1Array.length; i++) {
//         if (!set2.has(set1Array[i])) {
//             return false
//         }
//     }
//     return true
// }

function subset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false;
        }
    }
    return true;
}

// console.log(subset([1, 3], [1, 3, 3, 5]));  //➞ true
// console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8]));  //➞ true
// console.log(subset([1, 3], [1, 33]));  //➞ false
// console.log(subset([1, 3, 10], [10, 8, 8, 8]));  //➞ false



// 62 Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
// Examples

// function evenOrOdd(str) {
//     let arr = str.split("").map(Number);
//     let even = arr.filter(item => item % 2 === 0).reduce((a, b) => a + b, 0);
//     let odd = arr.filter(item => item % 2 !== 0).reduce((a, b) => a + b, 0);
//     if (even === odd) {
//         return "Even and Odd are the same";
//     }else if (even > odd) {
//         return "Even is greater than Odd";
//     }else {
//         return "Odd is greater than Even";
//     }
//  }

function evenOrOdd(str) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < str.length; i++) {
        let num = Number(str[i]);
        if (num % 2 === 0) {
            even += num;
        } else {
            odd += num
        }
    }
    if (even === odd) {
        return "Even and Odd are the same";
    } else if (even > odd) {
        return "Even is greater than Odd";
    } else {
        return "Odd is greater than Even";
    }
}

// console.log(evenOrOdd("22471"));  //➞ "Even and Odd are the same"
// console.log(evenOrOdd("213613"));  //➞ "Even and Odd are the same"
// console.log(evenOrOdd("23456"));  //➞ "Even is greater than Odd"



// 63 Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

// Examples

function miniPeaks(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]));  //➞ [5, 9]
// // 5 has neighbours 4 and 2, both are less than 5.
// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]));  //➞ [2, 3, 5]
// console.log(miniPeaks([1, 2, 3, 4, 5, 6]));  //➞ []



// 64 Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// [2, 3, 4, 5] ➞ 30
// (2 + 4) * 5 ➞ 30

// [1, 4, 5, 6, 7, 2, 3] ➞ 48
// (1 + 5 + 7 + 3) * 3 ➞ 48

// Examples

function evenLast(arr) {
    if (arr.length === 0) {
        return 0
    }
    let result = 0;
    for (let i = 0; i < arr.length - 1; i += 2) {
        result += arr[i];
    }
    return result * arr[arr.length - 1]
}

console.log(evenLast([]));  //➞ 0
console.log(evenLast([1, 3, 3, 1, 10]));  //➞ 140
console.log(evenLast([-11, 3, 3, 1, 10]));  //➞ 20