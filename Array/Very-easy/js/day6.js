// 58 Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First str of the sequence first
// Constant diffefor(let i = 0; i < str.length; i++
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// Examples

function arithmeticProgression(first, diff, n) {
    let res = []

    for(let i = 0; i < n; i++){
        res.push(first + i * diff);
    }
    return res.join(',');
}

// console.log(arithmeticProgression(1, 2, 5)); //➞ "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5)); //➞ "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10)); //➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"


// 59 Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples

function arrayLessThan100(arr) {
    const sum = arr.reduce((num1,num2) => num1 + num2)

    return sum < 100;
}

// console.log(arrayLessThan100([5, 57]));  //➞ true
// console.log(arrayLessThan100([77, 30]));  //➞ false
// console.log(arrayLessThan100([0]));  //➞ true


// 60 Sum of Minimums
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples

function sumMinimums(arr) {
    let res = 0;
    for(let i = 0; i < arr.length; i++){

        let min = Math.min(...arr[i]);
        
        res += min
    }
    return res;
}

// console.log(sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ]));  //➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20


// 61 Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples

function lastItem(arr) {
    if(Array.isArray(arr)){
        return arr.pop();
    }else if (typeof arr === 'string'){
        return arr[arr.length - 1];
    }else{
        return undefined;
    }
}

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));//➞ 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog"));  //➞ "g"
// console.log(lastItem([]));//➞ undefined


// 62 Age Difference Between Spouses
// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

// Examples

function ageDifference(ages) {
    
}

// console.log(ageDifference([29, 1, 6, 8, 28]));  //➞ "1 year"
// console.log(ageDifference([43, 86, 49, 86]));  //➞ "No age difference between spouses."
// console.log(ageDifference([2, 4, 6, 32, 27]));  //➞ "5 years"



// 63 Buggy Uppercase Counting
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// Examples

function countUppercase(arr) {
    let total = 0;

    arr.forEach(str => {
        for(let i = 0; i < str.length; i++){
            if (str[i] >= 'A' && str[i] <= "Z"){
                total++;
            }
        }
    });
    return total;
}

// console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"])) //➞ 6
// console.log(countUppercase(["little", "lower", "down"])) //➞ 0
// console.log(countUppercase(["EDAbit", "Educate", "Coding"])) //➞ 5

