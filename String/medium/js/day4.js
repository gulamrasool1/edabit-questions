// 31 Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples

// function transformUpvotes(str) {
//     return str.split(' ').map(count => count.endsWith('k') ? parseFloat(count) * 1000 : parseFloat(count))
// }

function transformUpvotes(str) {
    let arr = str.split(' ');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('k')) {
            result.push(parseFloat(arr[i]) * 1000)
        } else {
            result.push(parseFloat(arr[i]))
        }
    }
    return result;
}

// console.log(transformUpvotes("6.8k 13.5k"));  //➞ [6800, 13500]
// console.log(transformUpvotes("5.5k 8.9k 32"));  //➞ [5500, 8900, 32]
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));  //➞ [20300, 3800, 7700, 992]



// 32 Get the Century
// Create a function that takes in a year and returns the correct century.

// Examples

function century(num) {
    let century = Math.ceil(num / 100);
    return `${century}${getOrdinal(century)} century`
}

function getOrdinal(number) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return 'st'
    } else if (number % 10 === 2 && number % 100 !== 12) {
        return 'nd'
    } else if (number % 10 === 3 && number % 100 !== 13) {
        return 'rd'
    } else {
        return 'th';
    }
}

// console.log(century(1756));  //➞ "18th century"
// console.log(century(1555));  //➞ "16th century"
// console.log(century(1000));  //➞ "10th century"
// console.log(century(1001));  //➞ "11th century"
// console.log(century(2005));  //➞ "21st century"



// 33 Harshad Number
// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

// Examples

// function isHarshad(num) {
//     let sum = num.toString().split('').reduce((acc, item) => acc + parseInt(item), 0);
//     return num % sum === 0
// }

function isHarshad(num) {
    let sum = 0;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    return num % sum === 0;
}

console.log(isHarshad(75));  //➞ false
// 7 + 5 = 12
// 75 is not exactly divisible by 12
console.log(isHarshad(171));  //➞ true
// 1 + 7 + 1 = 9
// 9 exactly divides 171
console.log(isHarshad(481));  //➞ true
console.log(isHarshad(89));  //➞ false
console.log(isHarshad(516));  //➞ true
console.log(isHarshad(200));  //➞ true