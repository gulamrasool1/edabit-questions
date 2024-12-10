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

console.log(strMatchBy2char("yytaazz", "yyjaaz"));  //➞ 3
console.log(strMatchBy2char("edabit", "ed"));  //➞ 1
console.log(strMatchBy2char("", ""));  //➞ 0