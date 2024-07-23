// 63 Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Examples

// function keyboardMistakes(str) {
//     const replacements = {
//         '4': 'A',
//         '5': 'S',
//         '1': 'I',
//         '0': 'O',
//     };

//     return str.split("").map(char => replacements[char] || char).join("");
// }

function keyboardMistakes(str) {
    return str
        .replace(/4/g, "A")
        .replace(/5/g, "S")
        .replace(/1/g, "I")
        .replace(/0/g, "O")
}

// console.log(keyboardMistakes("MUB45H1R"));   //➞ "MUBASHIR"
// console.log(keyboardMistakes("DUBL1N"));   //➞ "DUBLIN"
// console.log(keyboardMistakes("51NG4P0RE"));   //➞ "SINGAPORE"



// 64 Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples

// function lastItem(input) {
//     if (input.length === 0) {
//         return undefined
//     }

//     return input.slice(-1)[0]
// }

function lastItem(input) {
    if (input.length === 0) {
        return undefined
    }

    return input[input.length - 1];
}

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));  //➞ 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog"));  //➞ "g"
// console.log(lastItem([]));  //➞ undefined



// 65 Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// Examples
// evenOddString("mubashir") ➞ "mbsi uahr"
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space

// function evenOddString(str) {
//     let even = "";
//     let odd = "";

//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             even += str[i];
//         }else{
//             odd += str[i];
//         }
//     }
//     return even + " " + odd;
// }

function evenOddString(str) {
    const char = str.split("");

    const even = char.filter((char, index) => index % 2 === 0).join("");

    const odd = char.filter((char, index) => index % 2 !== 0).join("");

    return even + " " + odd
}

// console.log(evenOddString("edabit"));  //➞ "eai dbt"
// console.log(evenOddString("airforce"));  //➞ "aroc ifre"



// 66 Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// Examples

// function arithmeticProgression(num1, num2, num3) {
//     let sequence = [];
//     let currentTerm = num1;

//     for (let i = 0; i < num3; i++) {
//         sequence.push(currentTerm);
//         currentTerm += num2
//     }

//     return sequence.join(", ")
// }

function arithmeticProgression(num1, num2, num3) {
    return Array.from({ length: num3 }, (_, index) => num1 + index * num2).join(", ")
}

// console.log(arithmeticProgression(1, 2, 5));  //➞ "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5));  //➞ "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10));   //➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"



// 67 Simple Letters
// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

// Examples

function longestString(str1, str2) {
    return [...new Set(str1 + str2)].sort().join("")
}

str1 = "mubashir"
str2 = "edabit"

// console.log(longestString(str1, str2));  //➞ "abdehimrstu"
// Contains sorted and distinct letters of the given strings.

str1 = "abcdefghijklmnopqrstuvwxyz"
str2 = "abcdefghijklmnopqrstuvwxyz"

// console.log(longestString(str1, str2));  //➞ "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings.



// 68 Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// Examples

// function countCharacters(arr) {
// return arr.join("").length;
//     return arr.reduce((acc, str) => acc + str.length,0);
// }

function countCharacters(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].length
    }
    return result;
}

// console.log(countCharacters([
//   "###",
//   "###",
//   "###"
// ])); //➞ 9
// console.log(countCharacters([
//   "22222222",
//   "22222222",
// ])); //➞ 16
// console.log(countCharacters([
//   "------------------"
// ])); //➞ 18
// console.log(countCharacters([])); //➞ 0
// console.log(countCharacters(["", ""])); //➞ 0



// 69 Western Showdown
// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

// Examples

function showdown(p1, p2) {
    const p1Index = p1.indexOf("Bang!")
    const p2Index = p2.indexOf("Bang!")

    if (p1Index < p2Index) {
        return "p1";
    } else if (p2Index < p1Index) {
        return "p2";
    } else {
        return "tie";
    }
}

// console.log(showdown(
//   "   Bang!        ",
//   "        Bang!   "
// ));  //➞ "p1"

// // p1 draws his gun sooner than p2

// console.log(showdown(
//   "               Bang! ",
//   "             Bang!   "
// ));  //➞ "p2"

// console.log(showdown(
//   "     Bang!   ",
//   "     Bang!   "
// ));  //➞ "tie"



// 70 Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

// Examples

function owofied(str) {
    return str
        .replace(/i/g, "wi")
        .replace(/e/g, "we")
        + " owo";
}

// console.log(owofied("I'm gonna ride 'til I can't no more"));
//  //➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

// console.log(owofied("Do you ever feel like a plastic bag"));
//  //➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

// console.log(owofied("Cause baby you're a firework"));
//➞ "Causwe baby you'rwe a fwirwework owo"



// 71 Formatting Text on Edabit
// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

// Here is a list of the possible formatting options in Edabit and how to apply them:

// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough
// Examples

// function mdFormat(str1, str2) {
//     switch (str2) {
//         case "b":
//             return `**${str1}**`;
//         case "i":
//             return `_${str1}_`;
//         case "c":
//             return `\`${str1}\``;
//         case "s":
//             return `~~${str1}~~`;
//         default:
//             return str1
//     }
// }

function mdFormat(str1, str2) {
    if (str2 === "b") {
        return `**${str1}**`
    } else if (str2 === "i") {
        return `_${str1}_`
    } else if (str2 === "c") {
        return `\`${str1}\``
    } else {
        return `~~${str1}~~`
    }
}

// console.log(mdFormat("Bold", "b"));  //➞ "**Bold**"
// console.log(mdFormat("leaning text", "i"));  //➞ "_leaning text_"
// console.log(mdFormat("Edabit", "c"));  //➞ "`Edabit`"
// console.log(mdFormat("That's a strike!", "s"));  //➞ "~~That's a strike!~~" 



// 72 Stupid Addition
// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

// Examples

function stupidAddition(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return `${a}${b}`
    } else if (typeof a === "string" && typeof b === "string") {
        return Number(a) + Number(b);
    } else {
        return null
    }
}

// console.log(stupidAddition(1, 2));  //➞ "12"
// console.log(stupidAddition("1", "2"));  //➞ 3
// console.log(stupidAddition("1", 2)); //➞ null



// 73 CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples

// function cmsSelector(arr, str) {
//     return arr.filter(item => item.toLowerCase().includes(str.toLowerCase())).sort();
// }

function cmsSelector(arr, str) {
    let result = [];
    str = str.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item.toLowerCase().includes(str)) {
            result.push(item)
        }
    }
    return result.sort();
}

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w"));  //➞ ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));  //➞ ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));  //➞ ["Drupal", "Joomla", "Magento", "WordPress"]



// 74 Profit Margin
// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

// Examples

function profitMargin(costPrice, salesPrice) {
    let profit = salesPrice - costPrice;
    let margin = (profit / salesPrice) * 100;
    return margin.toFixed(1) + "%";
}

// console.log(profitMargin(50, 50));  //➞ "0.0%"
// console.log(profitMargin(28, 39));  //➞ "28.2%"
// console.log(profitMargin(33, 84));  //➞ "60.7%"



// 75 Get Word Count
// Create a function that takes a string and returns the word count. The string will be a sentence.

// Examples

// function countWords(str) {
// return str.split(" ").length;
//     return str.split(" ").filter(char => char.length).length
// }

function countWords(str) {
    let result = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result++
        }
    }
    return result
}

// console.log(countWords("Just an example here move along")); //➞ 6
// console.log(countWords("This is a test")); //➞ 4
// console.log(countWords("What an easy task, right")); //➞ 5



// 76 Hot Pics of Danny DeVito!
// I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

// Examples

function preventDistractions(str) {
    if (str.includes("anime") || str.includes("meme") || str.includes("vines") || str.includes("roasts") || str.includes("Danny DeVito")) {
        return "NO!";
    }

    return "Safe watching!";
}

// console.log(preventDistractions("vines that butter my eggroll"));  //➞ "NO!"
// console.log(preventDistractions("Hot pictures of Danny DeVito"));  //➞ "NO!"
// console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps"));  //➞ "Safe watching!"



// 77 String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Examples

function stringPairs(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str.slice(i, i + 2).padEnd(2, "*"))
    }
    return result;
}

// console.log(stringPairs("mubashir"));  //➞ ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit"));  //➞ ["ed", "ab", "it"]
// console.log(stringPairs("airforces"));  //➞ ["ai", "rf", "or", "ce", "s*"]



// 78 Filter a String
// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

// Examples

function filterString(str) {
    
}

// console.log(filterString("*$(#Mu12bas43hiR%@*!"));  //➞ [2, 6, 4, 8]
// // 2 uppercase letters
// // 6 lowercase letters
// // 4 numbers
// // 8 special characters
// console.log(filterString("^^Edabit^^%$#12379"));  //➞ [1, 5, 5, 7]
// console.log(filterString("**Airforce1**"));  //➞ [1, 7, 1, 4]



// 79 Count the Capital Letters
// Given a string of letters, how many capital letters are there?

// Examples

// function capitalLetters(str) {
//     return str.split("").filter(char => char >= 'A' && char <= 'Z').length
// }

function capitalLetters(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            result++;
        }
    }
    return result
}

// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));  //➞ 6
// console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw"));  //➞ 14
// console.log(capitalLetters("mqeytbbjwqemcdrdsyvq"));  //➞ 0



// 80 Count Syllables
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// Examples

// function numberSyllables(str) {
//     return str.split("-").length
// }

function numberSyllables(str) {
    let result = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
            result++
        }
    }
    return result
}

console.log(numberSyllables("buf-fet"));  //➞ 2
console.log(numberSyllables("beau-ti-ful"));  //➞ 3
console.log(numberSyllables("mon-u-men-tal"));  //➞ 4
console.log(numberSyllables("on-o-mat-o-poe-ia"));  //➞ 6