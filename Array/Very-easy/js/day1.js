// 1 Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
function getFirstValue(arr) {
    return arr.shift();   
}
function  getFirstValue(arr){
    return arr[0];
}

// console.log(getFirstValue([1, 2, 3])); //➞ 1
// console.log(getFirstValue([80, 5, 100])); //➞ 80
// console.log(getFirstValue([-500, 0, 50])); //➞ -500


// 2 Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
function makePair(arr1, arr2){
    return [arr1, arr2];
}

// console.log( makePair(1, 2)); //➞ [1, 2]
// console.log( makePair(51, 21)); //➞ [51, 21]
// console.log( makePair(512124, 215)); //➞ [512124, 215]


// 3 Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples

function drop(arr, n) {
    return arr.slice(n);
}

// console.log(drop([1, 2, 3], 1)); //➞ [2, 3]
// console.log(drop([1, 2, 3], 2)); //➞ [3]
// console.log(drop([1, 2, 3], 5)); //➞ []
// console.log(drop([1, 2, 3], 0)); //➞ [1, 2, 3]


// 4 Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
function getVoteCount(obj) {
    return obj.upvotes - obj.downvotes;
}

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })   ); //➞ 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })   ); //➞ -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //➞ 0


// 5 Reverse an Array
// Write a function to reverse an array.

// Examples
function reverse(num) {
    return num.reverse();
}

// console.log(reverse([1, 2, 3, 4])   ); //➞ [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])); //➞ [4, 3, 2, 9, 9]
// console.log(reverse([])             ); //➞ []


// 6 Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
function incrementItems(num1) {
    num2 = num1.map((value)=>{
        return value + 1;
    })
    return num2
}

// console.log(incrementItems([0, 1, 2, 3])    ); //➞ [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8])    ); //➞ [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4])); //➞ [0, -1, -2, -3]


// 7 ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.



// 8 Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// Examples
function getLastItem(arr) {
    return arr.pop();    
}

// console.log(getLastItem([1, 2, 3])             ); //➞ 3
// console.log(getLastItem(["cat", "dog", "duck"])); //➞ "duck"
// console.log(getLastItem([true, false, true])   ); //➞ true



// 9 Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
function arrayToString(arr) {
    return '"' + arr.join("") + '"';
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6])            ); //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])  ); //➞ "123asdAAAA"



// 10 Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

// Examples
function concat(num1, num2) {
    return num1.concat(num2);
}

// console.log(concat([1, 3, 5], [2, 6, 8])      ); //➞ [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2])  ); //➞ [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])); //➞ [4, 5, 1, 3, 3, 3, 3, 3]
