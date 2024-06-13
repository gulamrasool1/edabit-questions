// 1 Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples

function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max]
}

// console.log(minMax([1, 2, 3, 4, 5])););   //  [1, 5]
// console.log(minMax([2334454, 5])););   //  [5, 2334454]
// console.log(minMax([1])););   //  [1, 1]



// 2 Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples

// function canNest(arr1,arr2){
//     return  Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)

// let min1 = Math.min(...arr1);
// let min2 = Math.min(...arr2);
// let max1 = Math.max(...arr1);
// let max2 = Math.max(...arr2);
// return min1 > min2 && max1 < max2
// }

function canNest(arr1, arr2) {
    if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
        return true
    } else {
        return false
    }
}

// console.log(canNest([1, 2, 3, 4], [0, 6]));   //  true
// console.log(canNest([3, 1], [4, 0]));   //  true
// console.log(canNest([9, 9, 8], [8, 9]));   //  false
// console.log(canNest([1, 2, 3, 4], [2, 3]));   //  false



// 3 Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// Examples

function seriesResistance(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result === 1.0 ? `${result} ohm` : `${result} ohms`;
}

// function seriesResistance(arr) {
//     let result = arr.reduce((acc, item) => acc + item, 0);
//     // return result === 1 ? `${result} ohm` : `${result} ohms`

//     if (result === 1) {
//         return `${result} ohm`
//     }else{
//         return `${result} ohms`
//     }
// }

// console.log(seriesResistance([1, 5, 6, 3]));  //➞ "15 ohms"
// console.log(seriesResistance([16, 3.5, 6]));  //➞ "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5]));//➞ "1.0 ohm"



// 4 Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examplesparams

// function tuckIn(arr1, arr2) {
    // return [arr1[0], ...arr2, arr1[1]];


    // arr1.splice(1,0, ...arr2);
    // return arr1;
// }

function tuckIn(arr1, arr2) {
    let result = [];
    result.push(arr1[0]);
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    result.push(arr1[1]);
    return result
}

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));  //➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15,150], [45, 75, 35]));  //➞ [15, 45, 75, 35, 150]
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));  //➞ [[1, 2], [3, 4], [5, 6]]




// 5 Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples

// function numberSplit(n) {
    // return [Math.floor(n/2),Math.ceil(n/2)];

//     let split1 = Math.floor(n/2);
//     let split2 = n - split1;
//     return [split1, split2]
// }

function numberSplit(n) {
    let result = [];
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            result.push(Math.floor(n/2));
        }else{
            result.push(n - result[0]);
        }
    }
    return result
}

// console.log(numberSplit(4));  //➞ [2, 2]
// console.log(numberSplit(10));  //➞ [5, 5]
// console.log(numberSplit(11));  //➞ [5, 6]
// console.log(numberSplit(-9));  //➞ [-5, -4]



// 6 Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples

// function filterArray(arr) {
    // return arr.filter((num) => typeof num === 'number')

    // return arr.filter((num) => Number.isInteger(num))

    // return arr.filter((num) => typeof num !== 'string')
// }

function filterArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result.push(arr[i])
        }        
    }
    return result;
}

// console.log(filterArray([1, 2, "a", "b"]));  //➞ [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15]));  //➞ [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));  //➞ [1, 2, 123]



// 7 Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.

// Examples

// function sortByLength(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     return result.sort((a, b) => a.length - b.length)
// }

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
// }

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));  //➞ ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["apple", "pie", "shortcake"]));  //➞ ["pie", "apple", "shortcake"]
console.log(sortByLength(["may", "april", "september", "august"]));  //➞ ["may", "april", "august", "september"]
console.log(sortByLength([]));  //➞ []



// 8 Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples

// function sumOfCubes(arr) {
//     return arr.reduce((acc, item) => acc + (item*item*item),0)
// }

function sumOfCubes(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += Math.pow(arr[i], 3);
    }
    return result
}

// console.log(sumOfCubes([1, 5, 9]));  //➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// console.log(sumOfCubes([3, 4, 5]));  //➞ 216
// console.log(sumOfCubes([2]));  //➞ 8
// console.log(sumOfCubes([]));  //➞ 0



// 9 Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// Examples

// function getOnlyEvens(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0 && arr[i] % 2 === 0) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

function getOnlyEvens(arr) {
    let res = [];
  return arr.forEach(value,index => {
    if(index % 2 === 0){
        res.push(value)
    }
  });
  return res
}

// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));  //➞ [2, 4]
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));  //➞ [0, 2, 4]
// console.log(getOnlyEvens([1, 2, 3, 4, 5]));  //➞ []



// 10 Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples

function sortByLength(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result.sort((a,b) => a.length - b.length)
}

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length)
// }

// console.log(sortByLength(["Google", "Apple", "Microsoft"]));
//  //➞ ["Apple", "Google", "Microsoft"]
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
//  //➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// console.log(sortByLength(["Turing", "Einstein", "Jung"]));
 //➞ ["Jung", "Turing", "Einstein"]




// 11 Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// Examples

// function calculateDifference(obj, str) {
//     return (Object.values(obj)).reduce((a, b) => a + b) - str
// }

function calculateDifference(obj, str) {
    let result = 0;
    Object.values(obj).forEach(val => result += val);
    return result - str
}

// function calculateDifference(obj, str) {
//     let result = 0;
//     for (let user in obj) {
//         result = result + obj[user];
//     }
//     return result - str;
// }

// console.log(calculateDifference({ "baseball bat": 20 }, 5));  //➞ 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));  //➞ 11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));  //➞ 1



// 12 Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples

// function isAvgWhole(arr) {
//     return Number.isInteger(arr.reduce((acc, val) => acc + val) / arr.length); 
// }

function isAvgWhole(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result += arr[i];
    }
    return Number.isInteger(result / arr.length);
}

// console.log(isAvgWhole([1, 3]));  //➞ true
// console.log(isAvgWhole([1, 2, 3, 4]));  //➞ false
// console.log(isAvgWhole([1, 5, 6]));  //➞ true
// console.log(isAvgWhole([1, 1, 1]));  //➞ true
// console.log(isAvgWhole([9, 2, 2, 5]));  //➞ false



// 13 Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Examples

// function getAbsSum(arr) {
//     return arr.reduce((acc, val) => acc + Math.abs(val),0);
// }

function getAbsSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += Math.abs(arr[i])
    }
    return result
}

// console.log(getAbsSum([2, -1, 4, 8, 10]));  //➞ 25
// console.log(getAbsSum([-3, -4, -10, -2, -3]));  //➞ 22
// console.log(getAbsSum([2, 4, 6, 8, 10]));  //➞ 30
// console.log(getAbsSum([-1]));  //➞ 1


// 14 Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
// Examples

function sortNumsAscending(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }
    return arr.sort((a,b) => a - b);
}

// function sortNumsAscending(arr) {
//     let result =[]
//     for (let i = 0; i < arr.length; i++) {
//     }
// }

console.log(sortNumsAscending([1, 2, 10, 50, 5]));  //➞ [1, 2, 5, 10, 50]
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));  //➞ [-95, -24, 4, 29, 80, 85]
console.log(sortNumsAscending(null));  //➞ []
console.log(sortNumsAscending([]));  //➞ []