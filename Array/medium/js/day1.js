// 1 How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples

// function countTrue(arr) {
    // return arr.filter(Boolean).length;
    // return arr.reduce((count, value) => count + (value === true ? 1 : 0),0) 
// }

function countTrue(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            result++
        }
    }
    return result;
}

// console.log(countTrue([true, false, false, true, false]));  //➞ 2
// console.log(countTrue([false, false, false, false]));  //➞ 0
// console.log(countTrue([]));  //➞ 0



// 2 Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples

// function compact(arr) {
//     return arr.filter(Boolean);
// }

function compact(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            result.push(arr[i])
        }
    }    
    return result;
}

// console.log(compact([0, 1, false, 2, "", 3]));   // => [1, 2, 3]



// 3 Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples

// function toArray(obj) {
//     return Object.entries(obj);
// }

function toArray(obj) {
    let result = [];
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        result.push([keys[i] ,obj[keys[i]]])
    }
    return result
}

// console.log(toArray({ a: 1, b: 2 }));  //➞ [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 }));  //➞ [["shrimp", 15], ["tots", 12]]
// console.log(toArray({}));  //➞ []



// 4 Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples 

function concat(arr1, arr2, arr3) {
    return arr1.concat(arr2,arr3)
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));  //➞ [1, 2, 3, 4, 5, 6, 7] 
console.log(concat([1], [2], [3], [4], [5], [6], [7]));  //➞ [1, 2, 3, 4, 5, 6, 7] 
console.log(concat([1, 2], [3, 4]));  //➞ [1, 2, 3, 4] 
console.log(concat([4, 4, 4, 4, 4]));  //➞ [4, 4, 4, 4, 4]