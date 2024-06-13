// 119 Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

// Examples

// function mean(arr) {
//     let sum = arr.reduce((acc,val)=> acc + val)

//     return sum/arr.length;
// }

function mean(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return res / arr.length
}

// console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10])););   //  7.2
// console.log(mean([1, 3, 8, 9, 9, 10])););   //  6.7
// console.log(mean([2, 3, 3, 6, 6, 8, 9, 10])););   //  5.9


// 120 Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

// Examples

// function oddProduct(arr) {
//     let odd = arr.filter(num => num % 2 !== 0)
//     let pro = odd.reduce((acc, num) => acc * num)
//     return pro
// }

function oddProduct(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            res *= arr[i];
        }
    }
    return res
}

// console.log(oddProduct([3, 4, 1, 1, 5])););   //  15
// console.log(oddProduct([5, 5, 8, 2, 4, 32])););   //  25
// console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2])););   //  1



// 121 Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

// Examples

// function minimumRemovals(arr) {
//    let x = arr.reduce((a,b) => a + b)
//    if (x % 2 === 0) {
//     return 0
//    }else{
//     return 1
//    }
// }

function minimumRemovals(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        res = res + arr[i];
    };
    if (res % 2 === 0) {
        return 0;
    } else {
        return 1;
    }
}

// console.log(minimumRemovals([1, 2, 3, 4, 5])););   //  1
// console.log(minimumRemovals([5, 7, 9, 11])););   //  0
// console.log(minimumRemovals([5, 7, 9, 12])););   //  1



// 122 Is Sam with Frodo?

// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// function middleEarth(arr) {
//     let sam = arr.indexOf('Sam');
//     let frodo = arr.indexOf('Frodo')
//     return frodo - sam === 1 || sam - frodo === 1;
// }

function middleEarth(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 'Sam' && arr[i + 1] === 'Frodo') || (arr[i] === 'Frodo' && arr[i + 1] === 'Sam')) {
            return true;
        }
    }
    return false
}

// console.log(middleEarth(["Frodo", "Sam", "Gandalf"])););   // true
// console.log(middleEarth(["Frodo", "Saruman", "Sam"])););   // false
// console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])););   // true



// 123 Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples

// function findEvenNums(num) {
// let res = [];
// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         res.push(i)
//     }
// }
// return res
// }

function findEvenNums(num) {
    let res = []
    for (let i = 2; i <= num; i += 2) {
        res.push(i)
    }
    return res
}

// console.log(findEvenNums(8)););   //  [2, 4, 6, 8]
// console.log(findEvenNums(4)););   //  [2, 4]
// console.log(findEvenNums(2)););   //  [2]


// 124 Retrieve the Last N Elements
// Write a function that retrieves the last n elements from an array.

// Examples

// function last(arr, n) {
//     if (n > arr.length) {
//         return "invalid"
//     }
//     return arr.slice(-n)
// }

function last(arr, n) {
    let res = [];
    for (let i = arr.length - n; i < arr.length; i++) {
        if (n > arr.length) {
            return "invalid";
        }
        res.push(arr[i])
    }
    return res
}

// console.log(last([1, 2, 3, 4, 5], 1)););   //  [5]
// console.log(last([4, 3, 9, 9, 7, 6], 3)););   //  [9, 7, 6]
// console.log(last([1, 2, 3, 4, 5], 7)););   //  "invalid"
// console.log(last([1, 2, 3, 4, 5], 0)););   //  []



// 125 Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// Examples

// function greetPeople(arr) {
//     return arr.map(num => "Hello " + num).join(", ")
// }

function greetPeople(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push("Hello " + arr[i])
    }
    return result.join(", ")
}

// console.log(greetPeople(["Joe"])););   //  "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"])););   //  "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"])););   //  "Hello Frank, Hello Angela, Hello Joe"



// 126 Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(stri);   //  [first, last]
// Examples

function firstAndLast(str) {

}

// console.log(firstAndLast("marmite")););   //  ["aeimmrt", "trmmiea"]
// console.log(firstAndLast("bench")););   //  ["bcehn", "nhecb"]
// console.log(firstAndLast("scoop")););   //  ["coops", "spooc"]



// 127 Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

// Examples

// function same(arr1, arr2) {
//     return new Set(arr1).size === new Set(arr2).size   
// }

function same(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (new Set(arr1).size === new Set(arr2).size) {
            return true
        }
    }
    return false
}

// console.log(same([1, 3, 4, 4, 4], [2, 5, 7])););   //  true
// console.log(same([9, 8, 7, 6], [4, 4, 3, 1])););   //  false
// console.log(same([2], [3, 3, 3, 3, 3])););   //  true



// 128Recursion: Array Sum
// Write a function that finds the sum of an array. Make your function recursive.

// Examples

// function sum(arr) {
//     let result = 0
//     arr.forEach(elem => result += elem)   
//     return result
// }

function sum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

// console.log(sum([1, 2, 3, 4])););   //  10
// console.log(sum([1, 2])););   //  3
// console.log(sum([1])););   //  1
// console.log(sum([])););   //  0
