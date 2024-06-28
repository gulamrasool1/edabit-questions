// 11 Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples

function findIndex(arr1, arr2) {
    return arr1.indexOf(arr2);
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));                  //➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));               //➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d"));                              //➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); //➞ 0


// 12 Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Examples

function valueAt(arr1, i) {
    return arr1[parseInt(i)];
}

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));    //➞ 6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));   //➞ 5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); //➞ 4


// 13 Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples

function search(arr1, arr2) {
    return arr1.indexOf(arr2);
}

// console.log(search([1, 5, 3], 5)); //➞ 1
// console.log(search([9, 8, 3], 3)); //➞ 2
// console.log(search([1, 2, 3], 4)); //➞ -1


// 14 Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples

function sumArray(arr) {
    return arr.reduce((arr1, arr2) => {
        return arr1 + arr2
    })
}

// console.log(sumArray([1, 2, 3, 4, 5])); //➞ 15
// console.log(sumArray([-1, 0, 1])); //➞ 0
// console.log(sumArray([0, 4, 8, 12])); //➞ 24


// 15  Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples

function search(arr1, arr2) {
    return arr1.indexOf(arr2);

}

// console.log(search([1, 2, 3, 4], 3)    ); //➞ 2
// console.log(search([2, 4, 6, 8, 10], 8)); //➞ 3
// console.log(search([1, 3, 5, 7, 9], 11)); //➞ -1


// 16 Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples

function check(num1, num2) {
    return num1.includes(num2);
    
}

// console.log(check([1, 2, 3, 4, 5], 3)); //➞ true
// console.log(check([1, 1, 2, 1, 1], 3)); //➞ false
// console.log(check([5, 5, 5, 6], 5)); //➞ true
// console.log(check([], 5)); //➞ false


// 17 Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Examples

function arrBetween(num1 , num2 , arr) {
   return arr.filter((item)=> item >= num1 && item <= num2)
}

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])   ); //➞ [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); //➞ [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78])        ); //➞ []

// 18 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples

function fiftyThirtyTwenty(num){
let needs = 0.5 * num;
let wants = 0.3 * num;
let savings = 0.2 * num;
   return  a = {
    "Needs" : needs,
    "Wants": wants,
    "Savings":savings
}
}
// console.log(fiftyThirtyTwenty(10000)); // ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000)); // ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450)); // ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }


// 19 Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples

function hasSameBread(arr1, arr2) {
    if(arr1[0] === arr1[2] && arr1[0] === arr2[0]){
        return true
    }else{
      return   false
    }
}

// console.log( hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// )); // ➞ true

// console.log( hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// )); //➞ false

// console.log( hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// )); //➞ false


// 20 Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
function parseArray(arr) {
    return arr.map(item => String(item));
}

console.log(parseArray([1, 2, "a", "b"])); // ➞ ["1", "2", "a", "b"]
console.log(parseArray(["abc", 123, "def", 456])); // ➞ ["abc", "123", "def", "456"]
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])); // ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
console.log(parseArray([])); // ➞ []
