// 101 Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

// Examples

function checkAllEven(arr) {
    return arr.every(x => x % 2 === 0);
}

// console.log(checkAllEven([1, 2, 3, 4]));  //➞ false
// console.log(checkAllEven([2, 4, 6]));  //➞ true
// console.log(checkAllEven([5, 6, 8, 10]));  //➞ false
// console.log(checkAllEven([-2, 2, -2, 2]));  //➞ true



// 102 X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

// Examples

// function convertCartesian(x, y) {
//     return x.map((arr1, arr2) => {
//         return [arr1, y[arr2]]
//     })
// }

function convertCartesian(x, y) {
    let res = [];

    for (let i = 0; i < x.length; i++) {
        res.push([x[i], y[i]]);
    }
    return res
}

// console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
//  //➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

// console.log(convertCartesian([9, 8, 3], [1, 1, 1]));
//➞ [[9, 1], [8, 1], [3, 1]]



//  103 Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

// Examples

// function additiveInverse(arr) {
//     return arr.map((num) => {
//         return -num
//     })
// }

// function additiveInverse(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(-arr[i])
//     }
//     return res
// }

function additiveInverse(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res.push(-arr[i])
        } else {
            res.push(-arr[i])
        }
    }
    return res;
}

// console.log(additiveInverse([5, -7, 8, 3])); //➞ [-5, 7, -8, -3]
// console.log(additiveInverse([1, 1, 1, 1, 1])); //➞ [-1, -1, -1, -1, -1]
// console.log(additiveInverse([-5, -25, 35])); //➞ [5, 25, -35]



// 104 Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

// Examples

function nthSmallest(arr, n) {
    let sortArr = arr.sort((a, b) => a - b);
    if (n > arr.length) {
        return null;
    }
    return sortArr[n - 1]
}

// console.log(nthSmallest([1, 3, 5, 7], 1));  //➞ 1
// console.log(nthSmallest([1, 3, 5, 7], 3));  //➞ 5
// console.log(nthSmallest([1, 3, 5, 7], 5));  //➞ null
// console.log(nthSmallest([7, 3, 5, 1], 2));  //➞ 3



// 105 Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

// Examples

// function transform(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             result.push(arr[i] - 1);
//         }else{
//             result.push(arr[i] + 1);
//         }
//     }  
//     return result;
// }

function transform(arr) {
    return arr.map((num, index) => {
        if (index % 2 === 0) {
            return num + 1;
        } else {
            return num - 1;
        }
    });
}

// console.log(transform([1, 2, 3, 4, 5]));  //➞ [2, 1, 4, 3, 6]
// console.log(transform([3, 3, 4, 3]));  //➞ [4, 4, 3, 4]
// console.log(transform([2, 2, 0, 8, 10]));  //➞ [1, 1, -1, 7, 9]



// 106 Applying Discounts
// Create a function that applies a discount d to every number in the array.

// Examples

// function getDiscounts(arr, str) {
//     const discount = parseFloat(str) / 100;
//     return arr.map((num) => num * discount)
// }

function getDiscounts(arr, str) {
    let result = []
    const discount = parseFloat(str) / 100

    for (let i = 0; i < arr.length; i++) {
        const discountValue = arr[i] * discount;
        result.push(discountValue)
    }
    return result;
}

// console.log(getDiscounts([2, 4, 6, 11], "50%"));  //➞ [1, 2, 3, 5.5]
// console.log(getDiscounts([10, 20, 40, 80], "75%"));  //➞ [7.5, 15, 30, 60]
// console.log(getDiscounts([100], "45%"));  //➞ [45]



// 107 State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full
// Examples

function filterStateNames(arr, str) {
    if (str === "abb") {
        return arr.filter(state => state.length === 2);
    } else if (str === "full") {
        return arr.filter(state => state.length > 2);
    }
}

// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
//  //➞ ["CA", "NY"]
// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));
//  //➞ ["Arizona", "Nevada"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));
//  //➞ ["MT", "NJ", "TX", "ID", "IL"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));
//  //➞ []



// 108 Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// Examples

// function formatDate(str) {
// return str.split("/").reverse().join("");
// }

function formatDate(str) {
    let year = "";
    let month = "";
    let day = "";
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "/") {
            if (year.length < 4) {
                year += str[i];
            } else if (month.length < 2) {
                month += str[i];
            } else {
                day += str[i];
            }
        }
    }
    res = year + month + day;
    return res
}

// console.log(formatDate("11/12/2019"));  //➞ "20191211"
// console.log(formatDate("12/31/2019"));  //➞ "20193112"
// console.log(formatDate("01/15/2019"));  //➞ "20191501"



// 109 Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

// Examples

// function repeat(str, num) {
// return Array(num).fill(str)
// }

function repeat(str, num) {
    let res = [];

    for (let i = 0; i < num; i++) {
        res.push(str);
    }
    return res;
}

// console.log(repeat("edabit", 3));  //➞ ["edabit", "edabit", "edabit"]
// console.log(repeat(13, 5));  //➞ [13, 13, 13, 13, 13]
// console.log(repeat("7", 2));  //➞ ["7", "7"]
// console.log(repeat(0, 0));  //➞ []



// 110 Return Only the Integer
// Write a function that takes an array of elements and returns only the integers.

// Examples

// function returnOnlyInteger(arr) {
//     return arr.filter((value) => {
//         return Number.isInteger(value);
//     });
// }

// function returnOnlyInteger(arr) {
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (Number.isInteger(arr[i])) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

function returnOnlyInteger(arr) {
    return arr.reduce((acc,num) => {
        if (Number.isInteger(num)) {
            acc.push(num);
        }
        return acc;
    },[]);
}

// console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));  //➞ [9, 2, 16]
// console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]));  //➞ [81, 123]
// console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]));  //➞ [10, 56, 20, 3]
// console.log(returnOnlyInteger(["String", true, 3.3, 1]));  //➞ [1]