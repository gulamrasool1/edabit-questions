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
        } else {
            odd += value;
        }
    }
    if (even === odd) {
        return "Even and Odd are the same";
    } else if (even > odd) {
        return "Even is greater than Odd";
    } else {
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

// console.log(clearFog("sky"));  //➞ "It's a clear day!"
// console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"));  //➞ "trees"
// console.log(clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog"));  //➞ "birdsandthebees"



// 56 Vowel Sandwich
// Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

// The first and last characters must be a consonant.
// The character in the middle must be a vowel.

// Examples

function isVowelSandwich(str) {
    if (str.length !== 3) {
        return false;
    }

    let vowels = "aeiou";
    let isConsonant = char => !vowels.includes(char.toLowerCase());
    let isVowel = char => vowels.includes(char.toLowerCase());
    return isConsonant(str[0]) && isVowel(str[1]) && isConsonant(str[2]);
}

// console.log(isVowelSandwich("cat"));  //➞ true
// console.log(isVowelSandwich("ear"));  //➞ false
// console.log(isVowelSandwich("bake"));  //➞ false
// console.log(isVowelSandwich("try"));  //➞ false



// 57 Length of Worm
// Given a string worm create a function that takes the length of the worm and converts it into millimeters. Each - represents one centimeter.

// Examples

// function wormLength(str) {
//     if (str === "" || !/^-+$/.test(str)) {
//         return "invalid"
//     }
//     return `${str.length * 10} mm.`;
// }

function wormLength(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '-') {
            return "invalid"
        }
    }
    return str.length === 0 ? "invalid" : `${str.length * 10} mm.`;
}

// console.log(wormLength("----------"));  //➞ "100 mm."
// console.log(wormLength(""));  //➞ "invalid"
// console.log(wormLength("---_-___---_"));  //➞ "invalid"



// 58 Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// Examples

function backToHome(str) {
    let vertical = 0;
    let horizontal = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "N") {
            vertical++
        } else if (str[i] === "S") {
            vertical--
        } else if (str[i] === "E") {
            horizontal++
        } else if (str[i] === "W") {
            horizontal--
        }
    }

    return vertical === 0 && horizontal === 0;
}

// console.log(backToHome("EEWE"));  //➞ false
// console.log(backToHome("NENESSWW"));  //➞ true
// console.log(backToHome("NEESSW"));  //➞ false



// 59 Is the Phone Number Formatted Correctly?
// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

// This is what a valid phone number looks like:

// (123) 456-7890

// Examples

function isValidPhoneNumber(str) {
    return str.length === 14 &&
           str[0] === '(' &&
           str[4] === ')' &&
           str[5] === ' ' && 
           str[9] === '-' &&
           !isNaN(str.slice(1, 4)) &&
           !isNaN(str.slice(6, 9)) &&
           !isNaN(str.slice(10));
}

// console.log(isValidPhoneNumber("(123) 456-7890"));  //➞ true
// console.log(isValidPhoneNumber("1111)555 2345"));  //➞ false
// console.log(isValidPhoneNumber("098) 123 4567"));  //➞ false



// 60 Running Athlete 🏃
// No description.
// Guess the code from test cases.
// Examples

function runningAthlete(act, txt) {
    let result = txt.split('');
    for (let i = 0; i < act.length; i++) {
        if (act[i] === 'run') {
            if (result[i] === '|') {
                result[i] = '/'
            }
        }else if (act[i] === "jump") {
            if (result[i] === '|') {
                result[i] = '|'
            } else {
                result[i] = 'x'
            }
        }
    }
    return result.join('');
}

console.log(runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_"));  //➞ "_|_|_"
console.log(runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_"));  //➞ "_|_/_"
console.log(runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_"));  //➞ "x|x|x"
console.log(runningAthlete(["run", "run", "run", "run", "run"], "_|_|_"));  //➞ "_/_/_"