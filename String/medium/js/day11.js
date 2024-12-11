// 101 Abbreviating a Sentence
// Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal to n characters in length and return the first letter of each, capitalised and overall returned as a single string.

// Examples

// function abbreviate(str, n) {
//     if (n === undefined) {
//         n = 4
//     }
//     let splited = str.split(" ");
//     let filtered = splited.filter(word => word.length >= n);
//     let mapped = filtered.map(word => word[0].toUpperCase())
//     return mapped.join("")
// }

function abbreviate(str, n) {
    if (n === undefined) {
        n = 4;
    }
    let result = "";
    let splited = str.split(" ");
    for (let i = 0; i < splited.length; i++) {
        if (splited[i].length >= n) {
            result += splited[i][0].toUpperCase();
        }
    }
    return result;
}

// console.log(abbreviate("do it yourself"));  //➞ "Y"
// console.log(abbreviate("do it yourself", 2));  //➞ "DIY"
// "do" and "it" are included because the second parameter specified that word lengths 2 are allowed.
// console.log(abbreviate("attention AND deficit OR hyperactivity THE disorder")); //➞ "ADHD"
// Words below the default 4 characters are not included in the abbreviation.
// console.log(abbreviate("the acronym of long word lengths", 5));  //➞ "AL"
// "acronym" and "lengths" have 5 or more characters.



// 102 Compounding Letters
// Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.

// Examples

// function accum(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         result.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
//     }
//     return result.join("-")
// }

function accum(str) {
    return str.split("").map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i)).join("-");
}

// console.log(accum("abcd"));  //➞ "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty"));  //➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt"));  //➞ "C-Ww-Aaa-Tttt"



// 103 Numbers to Objects
// Mubashir needs your help in a simple task.

// Given an array of numbers arr:

// Create an object for each given number.
// The object key will be the number converted to a string.
// The value will be the corresponding character code converted to a string (check ASCII table).
// Return an array of the resulting objects.

// Examples

function numObj(arr) {
    return arr.map(num => {
        let obj = {};
        obj[num.toString()] = String.fromCharCode(num);
        return obj;
    });
}

// console.log(numObj([118, 117, 120]));  //➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]
// console.log(numObj([101, 121, 110, 113, 103]));  //➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
// console.log(numObj([118, 103, 110]));  //➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]



// 104 Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

// Examples

// function longestWord(str) {
//     let splited = str.split(" ");
//     let result = "";
//     for (let i = 0; i < splited.length; i++) {
//         if (splited[i].length > result.length) {
//             result = splited[i];
//         }
//     }
//     return result
// }

function longestWord(str) {
    let splited = str.split(" ");
    let max = Math.max(...splited.map(word => word.length));
    return splited.find(word => word.length === max);
}

// console.log(longestWord("Hello darkness my old friend"));  //➞ "darkness"
// console.log(longestWord("Hello there mate"));  //➞ "Hello"
// console.log(longestWord("Kayla's toy is plastic"));  //➞ "Kayla's"



// 105 String Match by Two Letters
// Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

// Examples

// function strMatchBy2char(str1, str2) {
//     let count = 0;
//     let minLength = Math.min(str1.length, str2.length);

//     for (let i = 0; i < minLength - 1; i++) {
//         if (str1[i] === str2[i] && str1[i + 1] === str2[i + 1]) {
//             count++
//         }
//     }
//     return count
// }

function strMatchBy2char(str1, str2) {
    return str1.split("").filter((_, i) => i < str1.length - 1 && str1[i] === str2[i] && str1[i + 1] === str2[i + 1]).length;
}

// console.log(strMatchBy2char("yytaazz", "yyjaaz"));  //➞ 3
// console.log(strMatchBy2char("edabit", "ed"));  //➞ 1
// console.log(strMatchBy2char("", ""));  //➞ 0



// 106 Box Completely Filled?
// Create a function that checks if the box is completely filled with the asterisk symbol *.

// Examples

// function completelyFilled(arr) {
//     for (let i = 1; i < arr.length - 1; i++) {
//         for (let j = 1; j < arr[i].length - 1; j++) {
//             if (arr[i][j] !== '*') {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

function completelyFilled(arr) {
    return arr.slice(1, -1).every(item => {
        return item.slice(1, -1).split("").every(char => char === '*');
    });
}

// console.log(completelyFilled([
//     "#####",
//     "#***#",
//     "#***#",
//     "#***#",
//     "#####"
// ]));  //➞ true
// console.log(completelyFilled([
//     "#####",
//     "#* *#",
//     "#***#",
//     "#***#",
//     "#####"
// ]));  //➞ false
// console.log(completelyFilled([
//     "###",
//     "#*#",
//     "###"
// ]));  //➞ true
// console.log(completelyFilled([
//     "##",
//     "##"
// ]));  //➞ true



// 107 Reformatting the Date
// Create a function that converts dates from one of five string formats:

// 1."January 9, 2019" (MM D, YYYY)
// 2."Jan 9, 2019" (MM D, YYYY)
// 3."01/09/2019" (MM/DD/YYYY)
// 4."01-09-2019" (MM-DD-YYYY)
// 5."01.09.2019" (MM.DD.YYYY)
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:

// Examples

function convertDate(str) {
    let date = new Date(str);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return [month, day, year];
}

// console.log(convertDate("January 9, 2019"));  //➞ [1, 9, 2019]
// console.log(convertDate("Jan 9, 2019"));  //➞ [1, 9, 2019]
// console.log(convertDate("01/09/2019"));  //➞ [1, 9, 2019]
// console.log(convertDate("01-09-2019"));  //➞ [1, 9, 2019]
// console.log(convertDate("01.09.2019"));  //➞ [1, 9, 2019]



// 108 How Good is Your Name?
// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

// const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
// "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
// "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
// "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
// Return your result as per the following rules:

// score <= 60:   "NOT TOO GOOD"

// 61 <= score <= 300:  "PRETTY GOOD"

// 301 <= score <= 599:  "VERY GOOD"

// score >= 600:  "THE BEST"

// Examples

const scores = {
    "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
    "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
    "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
    "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
};

function nameScore(str) {
    let totalScore = 0;
    for (let i = 0; i < str.length; i++) {
        totalScore += scores[str[i].toUpperCase()];
    }
    if (totalScore <= 60) {
        return "NOT TOO GOOD";
    } else if (totalScore <= 300) {
        return "PRETTY GOOD";
    } else if (totalScore <= 599) {
        return "VERY GOOD";
    } else {
        return "THE BEST";
    }
}

// console.log(nameScore("MUBASHIR"));  //➞ "THE BEST"
// console.log(nameScore("YOU"));  //➞ "VERY GOOD"
// console.log(nameScore("MATT"));  //➞ "THE BEST"
// console.log(nameScore("PUBG"));  //➞ "NOT TOO GOOD"



// 109 Extend the Vowels
// Create a function that takes a word and extends all vowels by a number num.

// Examples

// function extendVowels(str, num) {
//     let vowels = "aeiouAEIOU";
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             result += str[i].repeat(num + 1);
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

function extendVowels(str, num) {
    let vowels = "aeiouAEIOU";
    return str.split("").map(char => {
        if (vowels.includes(char)) {
            return char.repeat(num + 1);
        }
        return char;
    }).join("");
}

// console.log(extendVowels("Hello", 5));  //➞ "Heeeeeelloooooo"
// console.log(extendVowels("Edabit", 3));  //➞ "EEEEdaaaabiiiit"
// console.log(extendVowels("Extend", 0));  //➞ "Extend"



// 110 Recursion: String Palindromes
// Write a function that recursively determines if a string is a palindrome.

// Examples

function isPalindrome(str) {
    if (str.length <= 1) {
        return true
    }
    if (str[0] === str[str.length -1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    }
    return false;
}

console.log(isPalindrome("abcba"));  //➞ true
console.log(isPalindrome("b"));  //➞ true
console.log(isPalindrome(""));  //➞ true
console.log(isPalindrome("ad"));  //➞ false