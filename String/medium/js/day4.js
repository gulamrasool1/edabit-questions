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

// console.log(isHarshad(75));  //➞ false
// // 7 + 5 = 12
// // 75 is not exactly divisible by 12
// console.log(isHarshad(171));  //➞ true
// // 1 + 7 + 1 = 9
// // 9 exactly divides 171
// console.log(isHarshad(481));  //➞ true
// console.log(isHarshad(89));  //➞ false
// console.log(isHarshad(516));  //➞ true
// console.log(isHarshad(200));  //➞ true



// 34 Check for Anagrams
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.

// Examples

// function isAnagram(str1, str2) {
//     let s1 = str1.toLowerCase().split("").sort().join('');
//     let s2 = str2.toLowerCase().split("").sort().join('');

//     return s1 === s2
// }

function isAnagram(str1, str2) {
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();

    if (s1.length !== s2.length) {
        return false;
    }
    let charCount = {};
    for (let i = 0; i < s1.length; i++) {
        charCount[s1[i]] = (charCount[s1[i]] || 0) + 1;
        charCount[s2[i]] = (charCount[s2[i]] || 0) - 1;
    }
    return Object.values(charCount).every(count => count === 0);
}

// console.log(isAnagram("cristian", "Cristina"));  //➞ true
// console.log(isAnagram("Dave Barry", "Ray Adverb"));  //➞ true
// console.log(isAnagram("Nope", "Note"));  //➞ false



// 35 Neatly Formatted Math
// Given a simple math expression as a string, neatly format it as an equation.

// Examples

// function formatMath(str) {
//     let math = str.replace("x", "*");
//     return `${math} = ${eval(math)}`;
// }

function formatMath(str) {
    let combined = "";
    let splited = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (splited[i] === 'x') {
            splited[i] = "*";
            combined += splited[i];
        }else if (splited[i] !== ' ') {
            combined += splited[i];
        }
    }
    return `${str} = ${eval(combined)}`;
}

// console.log(formatMath("3 + 4"));  //➞ "3 + 4 = 7"
// console.log(formatMath("3 - 2"));  //➞ "3 - 2 = 1"
// console.log(formatMath("4 x 5"));  //➞ "4 x 5 = 20"
// console.log(formatMath("6 / 3"));  //➞ "6 / 3 = 2"



// 36 Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// Examples

// function removeSpecialCharacters(str) {
//     return str.replace(/[^\w\s-_]/g, '')
// }

function removeSpecialCharacters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-zA-Z0-9\s-_]/)) {
            result += char;
        }
    }
    return result;
}

// console.log(removeSpecialCharacters("The quick brown fox!"));  //➞ "The quick brown fox"
// console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO."));  //➞ "fd76fd-6GvKlO"
// console.log(removeSpecialCharacters("D0n$c sed 0di0 du1"));  //➞ "D0nc sed 0di0 du1"



// 37 Find the Second Occurrence of "zip" in a String
// Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.

// Examples

// function findZip(str) {
//     let firstIndex = str.indexOf('zip');
//     if (firstIndex === -1) {
//         return -1
//     }
//     let secondIndex = str.indexOf('zip', firstIndex + 1)
//     return secondIndex
// }

function findZip(str) {
    let count = 0;
    for (let i = 0; i < str.length - 3; i++) {
        if (str.slice(i, i + 3) === 'zip') {
            count++;
            if (count === 2) {
                return i;
            }
        }
    }
    return -1
}

// console.log(findZip("all zip files are zipped"));  //➞ 18
// console.log(findZip("all zip files are compressed"));  //➞ -1



// 38 Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.

// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Examples

// function replaceVowel(str) {
//     let vowels = {
//         'a' : '1',
//         'e' : '2',
//         'i' : '3',
//         'o' : '4',
//         'u' : '5',
//     }
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += vowels[str[i]] || str[i];
//     }
//     return result;
// }

function replaceVowel(str) {
    return str
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5')
}

// console.log(replaceVowel("karachi"));  //➞ "k1r1ch3"
// console.log(replaceVowel("chembur"));  //➞ "ch2mb5r"
// console.log(replaceVowel("khandbari"));  //➞ "kh1ndb1r3"



// 39 Remove Repeated Characters
// Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.

// Examples

// function unrepeated(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i + 1]) {
//             result += str[i];
//         }
//     }
//     return result;
// }

function unrepeated(str) {
    let splited = str.split("");
    return splited.reduce((acc, cur, index) => {
      if (cur !== splited[index + 1]) {
        acc += cur;
      }
      return acc;
    }, "");
  }

// console.log(unrepeated("hello"));  //➞ "helo"
// console.log(unrepeated("aaaaa"));  //➞ "a"
// console.log(unrepeated("WWE!!!"));  //➞ "WE!"
// console.log(unrepeated("call 911"));  //➞ "cal 91"



// 40 Explosion Intensity
// Given a number, return a string of the word "Boom", which varies in the following ways:

// The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
// If n is evenly divisible by 2, add an exclamation mark to the end.
// If n is evenly divisible by 5, return the string in ALL CAPS.
// If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// The example below should help clarify these instructions.

// Examples

function boomIntensity(num) {
    if (num < 2) {
        return "boom"
    }
    let boom = "B" + "o".repeat(num) + "m";
    if (num % 2 === 0 && num % 5 !== 0) {
        return boom += "!"
    }else if (num % 5 === 0) {
        return boom.toUpperCase();
    }
    return boom;
}

console.log(boomIntensity(4));  //➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
console.log(boomIntensity(1));  //➞ "boom"
// 1 is lower than 2, so we return "boom"
console.log(boomIntensity(5));  //➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)
console.log(boomIntensity(10));  //➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)