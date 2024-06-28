// 73 Cowboy Shootout
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// Examples

function rogerShots(arr) {
    let res = 0;

    arr.forEach(str => {
        if (str === "Bang!") {
            res += 0.5;
        }else if (str === "BangBang!") {
            res += 0.5;
        }
    });

    return res;
}

// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]));  //➞ 3
// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]));  //➞ 2.5
// console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]));  //➞ 2



// 74 Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December
// Examples

function monthName(num) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return months[num - 1];
}

// console.log(monthName(3)); //➞ "March"
// console.log(monthName(12)); //➞ "December"
// console.log(monthName(6)); //➞ "June"


// 75 Even and Last
// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

// Examples

function evenLast(arr) {
    let sum = 0;
    const lastElement = arr[arr.length -1];
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i] * lastElement;
    }
    return sum;
}

// console.log(evenLast([2, 3, 4, 5]));  //➞ 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30
// console.log(evenLast([1, 3, 3, 1, 10]));  //➞ 140
// console.log(evenLast([]));  //➞ 0
