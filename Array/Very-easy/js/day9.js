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
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

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

console.log(unlucky13([53, 182, 435, 591, 637])); //➞ [53, 435, 591]
// 182 and 637 are divisible by 13. 
console.log(unlucky13([24, 316, 393, 458, 1279]));  //➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13. 
console.log(unlucky13([104, 351, 455, 806, 871]));  //➞ []
// All numbers in the array are divisible by 13.
