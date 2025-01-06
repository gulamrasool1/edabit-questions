// 131 Largest Gap
// Given an array of integers, return the largest gap between elements of the sorted version of that array.

// Here's an illustrative example. Consider the array:

// [9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]
// ... which, after sorting, becomes the array:

// [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// ... so that we now see that the largest gap in the array is the gap of 11 between 9 and 20.

// Examples

// function largestGap(arr) {
//     arr.sort((a, b) => a - b);

//     let maxGap = 0;

//     for (let i = 1; i < arr.length; i++) {
//         let gap = arr[i] - arr[i - 1]
//         if (gap > maxGap) {
//             maxGap = gap;
//         }
//     }
//     return maxGap;
// }

function largestGap(arr) {
    arr.sort((a, b) => a - b);
    let gaps = arr.map((num, i) => i > 0 ? num - arr[i - 1] : 0);
    return Math.max(...gaps);
}

// console.log(largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]));  //➞ 11
// // After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// // Largest gap of 11 between 9 and 20
// console.log(largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]));  //➞ 4
// // After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// // Largest gap of 4 between 7 and 11
// console.log(largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]));  //➞ 2
// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Largest gap of 2 between 6 and 8



// 132 One, Two, Skip a Few
// Create a function which calculates how many numbers are missing from an ordered number line. This number line starts at the first value of the array, and increases by 1 to the end of the number line, ending at the last value of the array.

// howManyMissing([1, 2, 3, 8, 9]) ➞ 4

// // The number line starts at 1 and ends at 9 (so the numbers 0 and 10 aren't missing from it).
// // The numbers missing from this line are 4, 5, 6, and 7.
// // 4 numbers are missing.

// Examples

function howManyMissing(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        count += arr[i] - arr[i - 1] - 1;
    }
    return count;
}

// console.log(howManyMissing([1, 3]));  //➞ 1
// console.log(howManyMissing([7, 10, 11, 12]));  //➞ 2
// console.log(howManyMissing([1, 3, 5, 7, 9, 11]));  //➞ 5
// console.log(howManyMissing([5, 6, 7, 8]));  //➞ 0



// 133 Basic Statistics: Median
// The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is the average of the middle two numbers. Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).

// Examples

function median(arr) {
    let middle = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[middle - 1] + arr[middle]) / 2;
    } else {
        return arr[middle];
    }
}

// console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));  //➞ 6
// console.log(median([2, 2, 6, 8, 8, 10, 10]));  //➞ 8
// console.log(median([1, 2, 2, 4, 7, 8, 9, 10]));  //➞ 5.5



// 134 Count the Points in a Circle
// Count the total number of coordinates on a two-dimensional grid that are inside a given circle. The function has four parameters: the points (provided as a list of objects), the circle's center x coordinate, the circle's center y coordinate, and the circle's radius. For example:

// Examples

function pointsInCircle(points, centerX, centerY, radius) {

}

// console.log(pointsInCircle([
//   { x: 0, y: 0 },
//   { x: 1, y: 1 },
//   { x: 0, y: 5 },
//   { x: 10, y: 10 }
// ], 0, 0, 5));  //➞ 2



// 135 Letters Shared between Two Words
// Create a function that returns the number of characters shared between two words.

// Examples

// function sharedLetters(str1, str2) {
//     return str1.split("").filter(char => str2.includes(char)).length;
// }

function sharedLetters(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) {
            count++;
        }
    }
    return count;
}

// console.log(sharedLetters("apple", "meaty"));  //➞ 2
// // Since "ea" is shared between "apple" and "meaty".
// console.log(sharedLetters("fan", "forsook"));  //➞ 1
// console.log(sharedLetters("spout", "shout"));  //➞ 4



// 136 Shopping for Memorial Day!
// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

// Examples

// function checkout(arr) {
//     return arr.reduce((total, item) => {
//         let itemTotal = item.prc * item.qty;
//         if (item.taxable) {
//             itemTotal += itemTotal * 0.06;
//         }
//         return total + itemTotal;

//     }, 0);
// }

function checkout(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let itemTotal = arr[i].prc * arr[i].qty;
        if (arr[i].taxable) {
            itemTotal += itemTotal * 0.06;
        }
        total += itemTotal;
    }
    return total;
}

// console.log(checkout([
//     { desc: "potato chips", prc: 2, qty: 2, taxable: false },
//     { desc: "soda", prc: 3, qty: 2, taxable: false },
//     { desc: "paper plates", prc: 5, qty: 1, taxable: true }
// ]));  //➞ 15.3



// 137 Merge Arrays in Order
// Given two arrays, merge them to one array and sort the new array in the same order as the first array.

// Examples

// function mergeSort(arr1, arr2) {
//     return arr1.concat(arr2).sort((a, b) => a - b);
// }

function mergeSort(arr1, arr2) {
    let result = arr1.slice();
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    result.sort((a, b) => a - b);
    return result;
}

// console.log(mergeSort([1, 2, 3], [5, 4, 6]));  //➞ [1, 2, 3, 4, 5, 6]
// console.log(mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]));  //➞ [8, 6, 4, 2, 0, -2, -4, -6]
// console.log(mergeSort([120, 180, 200], [190, 175, 130]));  //➞ [120, 130, 175, 180, 190, 200]



// 138 Sum of Every Nth Number
// Given an array of numbers and a positive value for n, return the sum of every nth number in the array.

// Examples

// function sumEveryNth(arr, n) {
//     return arr.reduce((s, v, i) => {
//         if ((i + 1) % n === 0) {
//             s += v
//         }
//         return s
//     }, 0);
// }

function sumEveryNth(arr, n) {
    let sum = 0;
    for (let i = n - 1; i < arr.length; i += n) {
        sum += arr[i];
    }
    return sum;
}

// console.log(sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1));  //➞ 43
// // 4+8+6+6+7+9+3 = 43
// console.log(sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4));  //➞ 14
// // 4+9+1 = 14
// console.log(sumEveryNth([10, 6, 5, 4, 5, 2, 3, 3, 8, 10, 7, 2], 8));  //➞ 3
// // 3
// console.log(sumEveryNth([6, 8, 9, 4, 6, 4, 7, 1, 5, 6, 10, 2], 13));  //➞ 0
// only 12 numbers in array



// 139 Matrix Subtraction
// Two matrices must have an equal number of rows and columns to be subtracted. In which case, the subtracted of two matrices A and B will be a matrix which has the same number of rows and columns as A and B.

// The result of the subtraction of A and B, denoted A - B is computed by subtracting corresponding elements of A and B.

// Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A-B.

// Examples

// function sub(arr1, arr2) {
//     return arr1.map((row, i) => {
//         return row.map((value, j) => value - arr2[i][j])
//     });
// }

function sub(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            row.push(arr1[i][j] - arr2[i][j]);
        }
        result.push(row);
    }
    return result;
}

// console.log(sub([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ], [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));  //➞ [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]



// 140 Height of the Tallest Building
// Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.

// Examples

// function tallestBuildingHeight(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes("#")) {
//             count++;
//         }
//     }
//     return count * 20 + "m";
// }

function tallestBuildingHeight(arr) {
    let count = arr.filter(item => item.includes("#")).length;
    return count * 20 + "m";
}

console.log(tallestBuildingHeight([
    "            ##",
    "            ##",
    "            ##",
    "###   ###   ##",
    "###   ###   ###",
    "###   ###   ###",
    "###   ###   ###"
]));  //➞ "140m"
// Tallest building is 7 rows
// 7 x 20m = 140m

console.log(tallestBuildingHeight([
    "               ",
    "               ",
    "               ",
    "       #    ###",
    "      # #   ###",
    "###   ###   ###",
    "###   ###   ###"
]));  //➞ "80m"
// tallest building is 4 rows
// 4 x 20m = 80m

console.log(tallestBuildingHeight([
    "                              ",
    "                         ###  ",
    "                         ###  ",
    "###                    #####  ",
    "###      #             #####  ",
    "###     ###            #####  ",
    "######  ###            #######",
    "######  ######  ###    #######",
    "###################    #######",
    "###############################",
    "###############################"
]));  //➞ "200m"
// Tallest building is 10 rows
// 10 x 20m = 200m