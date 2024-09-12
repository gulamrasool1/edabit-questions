// 51 Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

// Examples

function measureDepth(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 1;
    }
    let depth = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            depth = Math.max(depth, measureDepth(arr[i]));
        }
    }
    return depth + 1;
}

// console.log(measureDepth([]));  //➞ 1
// console.log(measureDepth([[]]));  //➞ 2
// console.log(measureDepth([[[]]]));  //➞ 3
// console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]]));  //➞ 11



// 52 Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

// Examples

// function evenOrOdd(str) {
//     let arr = str.split('').map(Number);
//     let even = arr.filter(item => item % 2 === 0).reduce((acc, value) => acc + value, 0);
//     let odd = arr.filter(item => item % 2 !== 0).reduce((acc, value) => acc + value , 0);
//     if (even === odd) {
//         return "Even and Odd are the same";
//     } else if (even > odd) {
//         return "Even is greater than Odd";
//     } else {
//         return "Odd is greater than Even";
//     }
// }

function evenOrOdd(str) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < str.length; i++) {
        let value = Number(str[i]);
        if (value % 2 === 0) {
            even += value;
        }else {
            odd += value;
        }
    }
    if (even === odd) {
        return "Even and Odd are the same";
    }else if (even > odd) {
        return "Even is greater than Odd";
    }else{
        return "Odd is greater than Even";
    }
}

// console.log(evenOrOdd("22471"));  //➞ "Even and Odd are the same"
// console.log(evenOrOdd("213613"));  //➞ "Even and Odd are the same"
// console.log(evenOrOdd("23456"));  //➞ "Even is greater than Odd"



// 53 String Slice-athon
// This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!

// Examples
const s = "abcdefghijklmnopqrstuvwxyz"

function challenge1(str) {
    return str.slice(0, 5)
}
function challenge2(str) {
    return str.slice(-5)
}
function challenge3(str) {
    return str.split('').reverse().join('');
}
function challenge4(str) {
    return str.slice(0, 6).split('').reverse().join('');
}
function challenge5(str) {
    last7 = str.slice(-7);
    let result = '';
    for (let i = 0; i < last7.length; i++) {
        if (i % 2 === 0) {
            result += last7[i];
        }
    }
    return result;
}

// console.log(challenge1(s));  //➞ "abcde"
// First 5 characters of the string.
// console.log(challenge2(s));  //➞ "vwxyz"
// Last 5 characters of the string.
// console.log(challenge3(s));  //➞ "zyxwvutsrqponmlkjihgfedcba"
// All characters in the string from back.
// console.log(challenge4(s));  //➞ "fedcba"
// First 6 characters in the string (start with 6th character and go backwards).
// console.log(challenge5(s));  //➞ "tvxz"
// Take last 7 characters and only return odd positioned ones.



// 54 Shhh Be Quiet Function
// Write a function that removes all capital letters from a sentence except the first letter, puts quotation marks around the sentence and adds ", whispered Edabit." at the end.

// Examples

// function shhh(str) {
//     if (str.length === 0) {
//         return '"", whispered Edabit.'
//     }

//     let value = str[0].toUpperCase() + str.slice(1).toLowerCase();
    // return `${value}, whispered Edabit.`;
//     return '"' + value + '", whispered Edabit.';
// }

function shhh(str) {
    if (str.length === 0) {
        return '"", whispered Edabit.';
    }
    let result = '';
    result += str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        result += str[i].toLowerCase();
    }
    return '"' + result + '", whispered Edabit.';
}

// console.log(shhh("HI THERE!"));  //➞ '"Hi there!", whispered Edabit.'
// console.log(shhh("tHaT'S Pretty awesOme"));  //➞ '"That's pretty awesome", whispered Edabit.'
// console.log(shhh(""));  //➞ '"", whispered Edabit.'



// 55 Clear the Fog
// Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".

// Examples

function clearFog(str) {
    let result = str.replace(/[fog]/gi, '');
    if (result === str) {
        return "It's a clear day!";
    }
    return result;
}

console.log(clearFog("sky"));  //➞ "It's a clear day!"
console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"));  //➞ "trees"
console.log(clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog"));  //➞ "birdsandthebees"