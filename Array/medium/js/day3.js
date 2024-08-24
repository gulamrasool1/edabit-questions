// 21 Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// Examples

// function ascDesNone(arr, str) {
//     if (str === "Asc") {
//         return arr.sort((a, b) => a - b);
//     }else if (str === "Des") {
//         return arr.sort((a, b) => b - a);
//     }else if (str === "None") {
//         return arr;
//     }
// }

function ascDesNone(arr, str) {
    let sort = {
        "Asc": (a, b) => a - b,
        "Des": (a, b) => b - a,
        "None": () => 0
    }[str] || (() => 0);

    return arr.slice().sort(sort)
}

// console.log(ascDesNone([4, 3, 2, 1], "Asc" ));  //➞ [1, 2, 3, 4]
// console.log(ascDesNone([7, 8, 11, 66], "Des"));  //➞ [66, 11, 8, 7]
// console.log(ascDesNone([1, 2, 3, 4], "None"));  //➞ [1, 2, 3, 4]



// 22 Currying Functions
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples

// function multiply(arr) {
//     return num => arr.map(x => x * num);
// }

function multiply(arr) {
    return function (num) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * num)
        }
        return result;
    };
}

// console.log(multiply([1, 2, 3])(2));  //➞ [2, 4, 6]
// console.log(multiply([4, 6, 5])(10));  //➞ [40, 60, 50]
// console.log(multiply([1, 2, 3])(0));  //➞ [0, 0, 0]



// 23 Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples

// function getBudgets(arr) {
//     return arr.reduce((acc, item) => acc + item.budget,0);
// }

function getBudgets(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].budget;
    }
    return total;
}

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]));  //➞ 65700
// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]));  //➞ 62600



// 24 Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples

// function matchLastItem(arr) {
// let concat = arr.slice(0, -1).join('');
// return concat === arr[arr.length - 1];

//     let concat = arr.slice(0, -1).reduce((acc, item) => acc + item)
//     return concat === arr[arr.length -1];
// }

function matchLastItem(arr) {
    let concat = "";
    for (let i = 0; i < arr.length - 1; i++) {
        concat += arr[i];
    }
    return concat === arr[arr.length - 1];
}

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));  //➞ true
// // The last item is the rest joined.
// console.log(matchLastItem([1, 1, 1, "11"]));  //➞ false
// // The last item should be "111".
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));  //➞ true



// 25 Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples

function calculateBurglary(stolenItem) {
    let total = Object.values(stolenItem).reduce((acc, item) => acc + item, 0)
    return total > 0 ? total : "Lucky you!";
}

const stolenItems1 = {
    tv: 30,
    skate: 20,
    stereo: 50,
}   //➞ 100
const stolenItems2 = {
    painting: 20000,
}   //➞ 20000
const stolenItems3 = {}  //➞ "Lucky you!"

// console.log(calculateBurglary(stolenItems1));
// console.log(calculateBurglary(stolenItems2));
// console.log(calculateBurglary(stolenItems3));



// 26 Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples

// function removeDups(arr) {
//     return arr.filter((item, value) => arr.indexOf(item) === value);
// }

function removeDups(arr) {
    let result = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            result.push(arr[i]);
            seen.add(arr[i])
        }
    }
    return result
}

// console.log(removeDups([1, 0, 1, 0]));  //➞ [1, 0]
// console.log(removeDups(["The", "big", "cat"]));  //➞ ["The", "big", "cat"]
// console.log(removeDups(["John", "Taylor", "John"]));  //➞ ["John", "Taylor"]



// 27 Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// Examples

// function lineLength([x1, y1], [x2, y2]) {
//     let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     return Math.round(distance * 100) / 100;
// }

function lineLength(arr1, arr2) {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        let differce = arr2[i] - arr1[i];
        result += differce ** 2;
    }
    let distance = Math.sqrt(result);
    return Math.round(distance * 100) / 100;
}

// console.log(lineLength([15, 7], [22, 11]));  //➞ 8.06
// console.log(lineLength([0, 0], [0, 0]));  //➞ 0
// console.log(lineLength([0, 0], [1, 1]));  //➞ 1.41



// 28 Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples

// function factorChain(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] % arr[i] !== 0) {
//             return false
//         }
//     }
//     return true;
// }

function factorChain(arr) {
    // let multiply = arr.slice(0, -1).map((num, index) => arr[index + 1] % num === 0);
    // return multiply.every(Boolean);


    // let multiply = arr.slice(0, -1).filter((num, index) => arr[index + 1] % num === 0);
    // return multiply.length === arr.length - 1;


    return arr.slice(0, -1).reduce((acc, num, index) => {
        return acc && arr[index + 1] % num === 0
    }, true);
}

// console.log(factorChain([1, 2, 4, 8, 16, 32]));  //➞ true
// console.log(factorChain([1, 1, 1, 1, 1, 1]));  //➞ true
// console.log(factorChain([2, 4, 6, 7, 12]));  //➞ false
// console.log(factorChain([10, 1]));  //➞ false



// 29 Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples

function progressDays(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i -1]) {
            result++
        }
    }
    return result;
}

console.log(progressDays([3, 4, 1, 2]));  //➞ 2
// There are two progress days, (3->4) and (1->2)
console.log(progressDays([10, 11, 12, 9, 10]));  //➞ 3
console.log(progressDays([6, 5, 4, 3, 2, 9]));  //➞ 1
console.log(progressDays([9, 9]));  //➞ 0