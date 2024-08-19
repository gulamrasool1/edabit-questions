// 1 Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples

// function generation(num, str) {
//     const generation = {
//         "2": { "f": "granddaughter" },
//         "-3": { "m": "great grandfather" },
//         "1": { "f": "daughter" }
//     };
//     return generation[num][str];
// }

// function generation(num, str) {
//     if (num === 2) {
//         return str === "f" ? "granddaughter" : "grandson";
//     } else if (num === -3) {
//         return str === "m" ? "great grandfather" : "great grandmother";
//     } else if (num === 1) {
//         return str === "f" ? "daughter" : "son";
//     }
// }

// console.log(generation(2, "f"));  //➞ "granddaughter"
// console.log(generation(-3, "m"));  //➞ "great grandfather"
// console.log(generation(1, "f"));  //➞ "daughter"



// 2 Remove Trailing and Leading Zeros
// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Examples

// function removeLeadingTrailing(str) {
//     return parseFloat(str).toString();
// }

// console.log(removeLeadingTrailing("230.000"));  //➞ "230"
// console.log(removeLeadingTrailing("00402"));  //➞ "402"
// console.log(removeLeadingTrailing("03.1400"));  //➞ "3.14"
// console.log(removeLeadingTrailing("30"));  //➞ "30"



// 3 Get the Area of a Country
// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

// Examples

// function areaOfCountry(str, num) {
//     let totalLandmass = 148940000;
//     let proportion = (num / totalLandmass) * 100;
//     return str + " " + "is" + " " + proportion.toFixed(2) + "%" + " " + "of the total world's landmass";
// }

// function areaOfCountry(str, num) {
//     let totalLandmass = 148940000;
//     let proportion = (num / totalLandmass) * 100;
//     return `${str} is ${proportion.toFixed(2)} of the total world's landmass`
// }

// function areaOfCountry(str, num) {
//     let totalLandmass = 148939000;
//     let countries = [{ name: str, area: num }];
//     let result = '';

//     for (let i = 0; i < countries.length; i++) {
//         const proportion = (countries[i].area / totalLandmass) * 100;
//         result = `${countries[i].name} is ${proportion.toFixed(2)}% of the total world's landmass`;
//     }

//     return result;
// }

// console.log(areaOfCountry("Russia", 17098242));  //➞ "Russia is 11.48% of the total world's landmass"
// console.log(areaOfCountry("USA", 9372610));  //"USA is 6.29% of the total world's landmass"
// console.log(areaOfCountry("Iran", 1648195));  //➞ "Iran is 1.11% of the total world's landmass"



// 4 Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples

// function testJackpot(arr) {
// return arr.every(element => element === arr[0]);

//     return new Set(arr).size === 1;
// }

// function testJackpot(arr) {
//     if (arr.length === 0) {
//         return false
//     }

//     let firstElement = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== firstElement) {
//             return false
//         }
//     }
//     return true
// }

// console.log(testJackpot(["@", "@", "@", "@"]));  //➞ true
// console.log(testJackpot(["abc", "abc", "abc", "abc"]));  //➞ true
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));  //➞ true
// // console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));  //➞ false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"]));  //➞ false



// 5 Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// Examples

// function findNemo(str) {
//     let word = str.split(" ");
//     let index = word.indexOf("Nemo");
//     if (index !== -1) {
//         return `I found Nemo at ${index + 1}!`
//     }
// }

// function findNemo(str) {
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "Nemo") {
//             return `I found Nemo at ${i + 1}!`
//         }
//     }
// }

// console.log(findNemo("I am finding Nemo !"));  //➞ "I found Nemo at 4!"
// console.log(findNemo("Nemo is me"));  //➞ "I found Nemo at 1!"
// console.log(findNemo("I Nemo am"));  //➞ "I found Nemo at 2!"



// 6 Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

// Examples

// function capToFront(str) {
//     let upper = str.split("").filter(char => char === char.toUpperCase()).join("");
//     let lower = str.split("").filter(char => char === char.toLowerCase()).join("");
//     return upper + lower;
// }

// function capToFront(str) {
//     let capitals = '';
//     let lowers = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             capitals += str[i];
//         } else {
//             lowers += str[i];
//         }
//     }
//     return capitals + lowers;
// }

// console.log(capToFront("hApPy"));  //➞ "APhpy"
// console.log(capToFront("moveMENT"));  //➞ "MENTmove"
// console.log(capToFront("shOrtCAKE"));  //➞ "OCAKEshrt"



// 7 Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// Examples

// function reverseWords(str) {
//     return str.trim().split(/\s+/).reverse().join(" ") ;   
// }

// function reverseWords(str) {
//     let result = "";
//     let word = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (str[i] !== ' ') {
//             word = str[i] + word;
//         } else if (word.length > 0) {
//             result += (result.length > 0 ? " " : "") + word;
//             word = "";
//         }
//     }
//     if (word.length > 0) {
//         result += (result.length > 0 ? " " : "") + word;
//     }
//     return result;
// }

// console.log(reverseWords(" the sky is blue"));  //➞ "blue is sky the"
// console.log(reverseWords("hello   world!  "));  //➞ "world! hello"
// console.log(reverseWords("a good example"));  //➞ "example good a"



// 8 Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples

// function matchLastItem(arr) {
    // if (arr.length < 2) {
    //     return false
    // }
    // const lastItem = arr[arr.length -1];
    // const concatItem = arr.slice(0, -1).join("");
    // return lastItem === concatItem;
// }

// function matchLastItem(arr) {
//     if (arr.length < 2) {
//         return false
//     }
//     const lastItem = arr[arr.length -1];
//     const concatItem = arr.slice(0, -1).reduce((acc, item) => acc + item);
//     return lastItem === concatItem;
// }

// function matchLastItem(arr) {
//     if (arr.length < 2) {
//         return false;
//     }
//     let result = "";
//     for (let i = 0; i < arr.length - 1; i++) {
//         result += arr[i]
//     }
//     const lastItem = arr[arr.length -1];
//     return lastItem === result
// }

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));  //➞ true
// // The last item is the rest joined.
// console.log(matchLastItem([1, 1, 1, "11"]));  //➞ false
// // The last item should be "111".
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));  //➞ true



// 9 Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples

// function removeDups(arr) {
//     return [...new Set(arr)];
// }

// function removeDups(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// function removeDups(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.indexOf(arr[i]) === -1) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(removeDups([1, 0, 1, 0]));  //➞ [1, 0]
// console.log(removeDups(["The", "big", "cat"]));  //➞ ["The", "big", "cat"]
// console.log(removeDups(["John", "Taylor", "John"]));  //➞ ["John", "Taylor"]



// 10 ReverseAndNot
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// To illustrate:

// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// Examples

// function reverseAndNot(num) {
//     const str = num.toString()
//     const reverse = str.split("").reverse().join("")
//     const merge = reverse + str
//     return BigInt(merge);
// }

function reverseAndNot(num) {
    const str = num.toString();
    let reverse = "";
    for (let i = str.length -1; i >= 0; i--) {
        reverse += str[i]
    }
    return BigInt(reverse + str)
}

console.log(reverseAndNot(123));  //➞ 321123
console.log(reverseAndNot(152));  //➞ 251152
console.log(reverseAndNot(123456789));  //➞ 987654321123456789