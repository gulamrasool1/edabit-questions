// 41 Burglary Series (03): Is It Gone?
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

// Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.
// Note that the first letter of the name in the return statement is capitalized.

// Examples

// function findIt(obj, name) {
//     let capitalized = name.charAt(0).toUpperCase() + name.slice(1);

//     if (obj.hasOwnProperty(name)) {
//         return `${capitalized} is gone...`
//     }else{
//         return `${capitalized} is here!`
//     }
// }

function findIt(obj, name) {
    let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === name) {
            return `${capitalized} is gone...`;
        }
    }
    return `${capitalized} is here!`;
}

const obj1 = {
    tv: 30,
    timmy: 20,
    stereo: 50,
}
// console.log(findIt(obj1, 'timmy'));  //➞ "Timmy is gone..."
// Timmy is in the object.

const obj2 = {
    tv: 30,
    stereo: 50,
}
// console.log(findIt(obj2, 'timmy'));  //➞ "Timmy is here!"
// Timmy is not in the stolen list object.

const obj3 = {}
// console.log(findIt(obj3, 'timmy'));  //➞ "Timmy is here!"
// Timmy is not in the object.



// 42 Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples

// function identicalFilter(arr) {
// return arr.filter(str => new Set(str).size === 1);


// return arr.filter(str => str.split('').every(char => char === str[0]));
// }

function identicalFilter(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        if (str.split('').every(char => char === str[0])) {
            result.push(str)
        }
    }
    return result
}

// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
// //➞ ["aaaaaa", "d", "eeee"]
// console.log(identicalFilter(["88", "999", "22", "545", "133"]));
// //➞ ["88", "999", "22"]
// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
//➞ []



// 43 Adding Parity Bits
// Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that adds the correct parity bit to a binary string.

// Examples

// function addParityBit(str) {
//     let onesCount = str.split('').filter(char => char === '1').length
//     let parityBit = onesCount % 2 === 0 ? '0' : '1';
//     return str + parityBit
// }

function addParityBit(str) {
    let onesCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            onesCount++;
        }
    }
    let parityBit = onesCount % 2 === 0 ? '0' : '1';
    return str + parityBit;
}

// console.log(addParityBit("1011011"));  //➞ "10110111"
// // There are five 1's.
// // Since five is odd, the parity bit should be a 1.
// // Add the parity bit to the end of the string.
// // Return the result.
// console.log(addParityBit("0110000"));  //➞ "01100000"
// console.log(addParityBit("0101101"));  //➞ "01011010"
// console.lo?g(addParityBit("1111111"));  //➞ "11111111"



// 44 Same ASCII?
// Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.

// Examples

// function sameAscii(str1, str2) {
//     let asciiSum = str => 
//         str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
//     return asciiSum(str1) === asciiSum(str2);
// }

function sameAscii(str1, str2) {
    function asciiSum(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }
        return sum;
    }
    let sum1 = asciiSum(str1);
    let sum2 = asciiSum(str2);
    return sum1 === sum2;
}

// console.log(sameAscii("a", "a"));  //➞ true
// console.log(sameAscii("AA", "B@"));  //➞ true
// console.log(sameAscii("EdAbIt", "EDABIT"));  //➞ false



// 45 Dashed Vowels
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

// Examples

// function dashed(str) {
//     let vowels = 'aeiou'
//     let char = str.split('');
//     let dashedArray = [];
//     for (let i = 0; i < char.length; i++) {
//         if (vowels.includes(char[i].toLowerCase())) {
//             if (i > 0) {
//                 dashedArray.push('-');
//             }
//             dashedArray.push(char[i]);
//             dashedArray.push('-');
//         } else {
//             dashedArray.push(char[i]);
//         }
//     }
//     return dashedArray.join('');
// }

function dashed(str) {
    return str.split('').map(char => 'aeiou'.includes(char.toLowerCase()) ? `-${char}-` : char).join('');
}

// console.log(dashed("Edabit"));  //➞ "-E-d-a-b-i-t"
// console.log(dashed("Carpe Diem"));  //➞ "C-a-rp-e- D-i--e-m"
// console.log(dashed("Fight for your right to party!"));  //➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"



// 46 Fractions and Rounding
// Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

// "{fraction} rounded to {n} decimal places is {answer}"

// Examples

// function fracRound(frac, n) {
    // let [numerator, denominator] = frac.split('/').map(Number);
    // let decimal = numerator / denominator;
    // let rounded = decimal.toFixed(n);
    // return `${frac} rounded to ${n} decimal places is ${rounded}`;
// }

function fracRound(frac, n) {
    let decimal = eval(frac);
    let rounded = decimal.toFixed(n);
    return `${frac} rounded to ${n} decimal places is ${rounded}`;
}

// console.log(fracRound("1/3", 5));  //➞ "1/3 rounded to 5 decimal places is 0.33333"
// console.log(fracRound("2/8", 4));  //➞ "2/8 rounded to 4 decimal places is 0.2500"
// console.log(fracRound("22/7", 2));  //➞ "22/7 rounded to 2 decimal places is 3.14"



// 47 The Reverser!
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

// Examples

function reverse(str) {
    let reverse = str.split('').reverse().join("")
    let result = '';
    for (let i = 0; i < reverse.length; i++) {
        let char = reverse[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase(); 
        }else{
            result += char.toUpperCase();
        }
    }
    return result;
}

// console.log(reverse("Hello World"));  //➞ "DLROw OLLEh"
// console.log(reverse("ReVeRsE"));  //➞ "eSrEvEr"
// console.log(reverse("Radar"));  //➞ "RADAr"



// 48 Syncopated Rhythm
// Syncopation means an emphasis on a weak beat of a bar of music; most commonly, beats 2 and 4 (and all other even-numbered beats if applicable).

// You will be given a string representing beats, where hashtags # represent emphasized beats. Create a function that returns true if the line of music contains any syncopation, and false otherwise.

// Examples

// function hasSyncopation(str) {
//     for (let i = 1; i < str.length; i += 2) {
//         if (str[i] === '#') {
//             return true;
//         }
//     }
//     return false
// }

function hasSyncopation(str) {
    const chars = str.split('');
    return chars.map((char, index) => {
        if (index % 2 === 1 && char === '#') {
            return true;
        }
        return false;
    }).includes(true);
}

console.log(hasSyncopation(".#.#.#.#"));  //➞ true
// There are Hash signs in the second, fourth, sixth and
// eighth positions of the string.
console.log(hasSyncopation("#.#...#."));  //➞ false
// There are no Hash signs in the second, fourth, sixth or
// eighth positions of the string.
console.log(hasSyncopation("#.#.###."));  //➞ true
// There is a Hash sign in the sixth position of the string.