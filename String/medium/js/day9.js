// 81  Harshad Numbers
// A number n is a Harshad (also called Niven) number if it is divisible by the sum of its digits. For example, 666 is divisible by 6 + 6 + 6, so it is a Harshad number.

// Write a function to determine whether the given number is a Harshad number.

// Examples

// function isHarshad(num) {
//     let sum = String(num).split("").reduce((a, b) => a + +b, 0)
//     return num % sum === 0
// }

function isHarshad(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    return num % sum === 0;
}

// console.log(isHarshad(209));  //➞ true
// console.log(isHarshad(41));  //➞ false
// console.log(isHarshad(12255));  //➞ true



// 82 Capital Split
// Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.

// Examples

// function capSpace(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i].toLowerCase()) {
//             result += ' ';
//         }
//         result += str[i].toLowerCase()
//     }
//     return result
// }

function capSpace(str) {
    return str.split('').map(char => char !== char.toLowerCase() ? " " + char.toLowerCase() : char.toLowerCase()).join("");
}

// console.log(capSpace("helloWorld"));  //➞ "hello world"
// console.log(capSpace("iLoveMyTeapot"));  //➞ "i love my teapot"
// console.log(capSpace("stayIndoors"));  //➞ "stay indoors"



// 83 Doubleton Number
// Mubashir was reading about Doubleton Numbers on Wikipedia.

// A natural number is a "Doubleton Number", if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 114455 are not.

// Create a function which takes a number n and finds the next doubleton number.

// Examples

function doubleton(num) {
    for (let i = num + 1; ; i++) {
        let digits = new Set(String(i));
        if (digits.size === 2) {
            return i;
        }
    }
}

// console.log(doubleton(10));  //➞ 12
// 12 has only two distinct numbers 1 and 2
// console.log(doubleton(120));  //➞ 121
// 121 has only two distinct numbers 1 and 2
// console.log(doubleton(1234));  //➞ 1311
// 1311 has only two distinct numbers 1 and 3



// 84 Stripping a Sentence Down
// Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

// Examples

// function stripSentence(str, chars) {
//     return str.split("").filter(char => !chars.includes(char)).join("");
// }

function stripSentence(str, chars) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!chars.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

// console.log(stripSentence("the quick brown fox jumps over the lazy dog", "aeiou"));  //➞ "th qck brwn fx jmps vr th lzy dg"
// console.log(stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s"));  //➞ "the hiing nake initerly lither acro the rutling leave"
// console.log(stripSentence("gone, reduced to atoms", "go, muscat nerd"));  //➞ ""



// 85 Scoring System
// Andy, Ben and Charlotte are playing a board game. The three of them decided to come up with a new scoring system. A player's first initial ("A", "B" or "C") denotes that player scoring a single point. Given a string of capital letters, return an array of the players' scores.

// For instance, if ABBACCCCAC is written when the game is over, then Andy scored 3 points, Ben scored 2 points, and Charlotte scored 5 points, since there are 3 instances of letter A, 2 instances of letter B, and 5 instances of letter C. So the array [3, 2, 5] should be returned.

// Examples

// function calculateScores(str) {
//     let first = str.split("").filter(char => char === "A").length;
//     let second = str.split("").filter(char => char === "B").length;
//     let third = str.split("").filter(char => char === "C").length;

//     return [first,second,third]
// }

function calculateScores(str) {
    let scores = [0, 0, 0];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            scores[0]++;
        } else if (str[i] === 'B') {
            scores[1]++;
        } else if (str[i] === 'C') {
            scores[2]++;
        }
    }
    return scores;
}

// console.log(calculateScores("A"));  //➞ [1, 0, 0]
// console.log(calculateScores("ABC"));  //➞ [1, 1, 1]
// console.log(calculateScores("ABCBACC"));  //➞ [2, 2, 3]



// 86 First N Vowels
// Write a function that returns the first n vowels of a string.

// Examples

// function firstNVowels(str, num) {
//     let vowels = "aeiou";
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             result += str[i]
//             if (result.length === num) {
//                 return result;
//             }
//         }
//     }
//     return "invalid";
// }

function firstNVowels(str, num) {
    let vowels = "aeiou";
    let vowelsArray = str.split('').filter(char => vowels.includes(char));
    return vowelsArray.length >= num ? vowelsArray.slice(0, num).join("") : "invalid";
}

// console.log(firstNVowels("sharpening skills", 3));  //➞ "aei"
// console.log(firstNVowels("major league", 5));  //➞ "aoeau"
// console.log(firstNVowels("hostess", 5));  //➞ "invalid"



// 87 First Before Second Letter
// You are given three inputs: a string, one letter, and a second letter.

// Write a function that returns true if every instance of the first letter occurs before every instance of the second letter.

// Examples

// function firstBeforeSecond(str, first, second) {
//     let result = false;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === second) {
//             result = true
//         } else if (result && str[i] === first) {
//             return false
//         }
//     }
//     return true;
// }

function firstBeforeSecond(str, first, second) {
    let lastIndex = str.lastIndexOf(first);
    let firstIndex = str.indexOf(second);
    return lastIndex < firstIndex;
}
// console.log(firstBeforeSecond("a rabbit jumps joyfully", "a", "j"));  //➞ true
// every instance of "a" occurs before every instance of "j"
// console.log(firstBeforeSecond("knaves knew about waterfalls", "k", "w"));  //➞  true
// console.log(firstBeforeSecond("happy birthday", "a", "y"));  //➞ false
// the "a" in "birthday" occurs after the "y" in "happy"
// console.log(firstBeforeSecond("precarious kangaroos", "k", "a"));  //➞ false



// 88 Return the Index of All Capital Letters
// Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.

// Examples

// function indexOfCaps(str) {
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 'A' && str[i] <= 'Z') {
//             result.push(i);
//         }
//     }
//     return result
// }

function indexOfCaps(str) {
    return [...str].map((char, i) => char >= 'A' && char <= 'Z' ? i : -1).filter(i => i !== -1);
}

// console.log(indexOfCaps("eDaBiT"));  //➞ [1, 3, 5]
// console.log(indexOfCaps("eQuINoX"));  //➞ [1, 3, 4, 6]
// console.log(indexOfCaps("determine"));  //➞ []
// console.log(indexOfCaps("STRIKE"));  //➞ [0, 1, 2, 3, 4, 5]
// console.log(indexOfCaps("sUn"));  //➞ [1]



// 89 Longest Sequence of Consecutive Zeroes
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

// Examples

function longestZero(str) {
    let splited = str.split('1')
    let longest = splited.reduce((max, item) => max.length > item.length ? max : item)
    return longest
}

// console.log(longestZero("01100001011000"));  //➞ "0000"
// console.log(longestZero("100100100"));  //➞ "00"
// console.log(longestZero("11111"));  //➞ ""



// 90 Capitalize the Last Letter
// Create a function that capitalizes the last letter of every word.

// Examples

function capLast(str) {
    return str.split(" ").map(word => word.slice(0, -1) + word.slice(-1).toUpperCase()).join(" ");
}

console.log(capLast("hello"));  //➞ "hellO"
console.log(capLast("My Name Is Edabit"));  //➞ "MY NamE IS EdabiT"
console.log(capLast("HELp THe LASt LETTERs CAPITALISe"));  //➞ "HELP THE LAST LETTERS CAPITALISE"