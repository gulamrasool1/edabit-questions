// 76 Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

// Examples

function averageIndex(arr){
    let sum = 0;
    for(let i = 1; i < arr.length; i++){
        sum += i;
    }

    let average = sum / arr.length;
    return average.toFixed(2)
    
}

// console.log(averageIndex(["a", "b", "c", "i"]));  //➞ 1.50
// console.log(averageIndex(["e", "d", "a", "b", "i", "t"]));  //➞ 2.50
// console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]));  //➞ 6.00


// 77 RegEx: Boundary Assertions II
// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

// Examples

function accepted(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(!arr[i].includes("C")){
            res.push(arr[i]);
        }
    }   
return res
}

// console.log(accepted(["Ducks", "Bears",  "Cats"]));  //➞ ["Ducks", "Bears"]
// console.log(accepted(["cars", "trucks", "planes"]));  //➞ ["cars", trucks", "planes"]
// console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]));  //➞ ["Worms", "Bugs", "Beans"]



// 78 Unlucky 13
// Given a sorted array of numbers, remove any numbers that are console.log(divisible by 13. Return the amended array.

// Examples 

function unlucky13(arr) {
    // return arr.filter(num => num % 13 !== 0);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 !== 0) {

            res.push(arr[i])
        }
    }
    return res
}

// console.log(unlucky13([53, 182, 435, 591, 637])); //➞ [53, 435, 591]
// 182 and 637 are console.log(divisible by 13. 
// console.log(unlucky13([24, 316, 393, 458, 1279]));  //➞ [24, 316, 393, 458, 1279]
// No numbers in the array are console.log(divisible by 13. 
// console.log(unlucky13([104, 351, 455, 806, 871]));  //➞ []
// All numbers in the array are console.log(divisible by 13.



// 79 Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

function removeEmptyArrays(arr) {
    // return arr.filter(item => !(Array.isArray(item) && item.length === 0));

    let emptyArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(Array.isArray(arr[i]) && arr[i].length === 0)) {
            emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}

// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// Examples
// What I want:
// console.log(removeEmptyArrays(["a", "b", []]));  //➞ ["a", "b"]
// console.log(removeEmptyArrays([1, 2, [], 4])); //➞ [1, 2, 4]

// What I am getting:
// removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
// removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]



// 80 Product Divisible by Sum?
// Write a function that returns true if the product of an array is console.log(divisible by the sum of that same array. Otherwise, return false.

// Examples

function divisible(arr) {
    let mul = 1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i];
        sum += arr[i];

        let res = mul / sum;
        if (res % 2 === 0) {
            return true
        }
    }
    return false;
}

console.log(divisible([3, 2, 4, 2]));  //➞ false
console.log(divisible([4, 2, 6]));  //➞ true
// 4 * 2 * 6 / (4 + 2 + 6)
console.log(divisible([3, 5, 1]));  //➞ false



//  81 Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples

function findBob(arr) {
    // return arr.indexOf("Bob");
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Bob") {
            return i
        }
    }
    return -1
}

// console.log(findBob(["Jimmy", "Layla", "Bob"]));  //➞ 2
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));  //➞ 0
// console.log(findBob(["Jimmy", "Layla", "James"]));  //➞ -1



// 82 Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

// Examples

function findLargestNum(arr) {
    // return Math.max(...arr);
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// console.log(findLargestNum([4, 5, 1, 3]));  //➞ 5
// console.log(findLargestNum([300, 200, 600, 150]));  //➞ 600
// console.log(findLargestNum([1000, 1001, 857, 1]));  //➞ 1001



// 83 Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
// Examples

function correctStream(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            result.push(1);
        } else {
            result.push(-1);
        }
    }
    return result;
}

// console.log(correctStream(
//   ["it", "is", "find"],
//   ["it", "is", "fine"]
// ));  //➞ [1, 1, -1]

// console.log(correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// ));  //➞ [1, -1, 1, 1, 1]



// 84 Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// Examples

function nextElement(arr) {
    let difference = arr[1] - arr[0];
    let lastElement = arr[arr.length - 1];
    return lastElement + difference;
}

// console.log(nextElement([3, 5, 7, 9]));  //➞ 11
// console.log(nextElement([-5, -6, -7]));  //➞ -8
// console.log(nextElement([2, 2, 2, 2, 2]));  //➞ 2



// 85 Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples

function canCapture(arr) {
    let rooks1 = arr[0];
    let rooks2 = arr[1];

    if (rooks1[0] === rooks2[0] || rooks1[1] === rooks2[1]) {
        return true;
    } else {
        return false;
    }

}

// console.log(canCapture(["A8", "E8"]));  //➞ true
// console.log(canCapture(["A1", "B2"]));  //➞ false
// console.log(canCapture(["H4", "H3"]));  //➞ true
// console.log(canCapture(["F5", "C8"]));  //➞ false