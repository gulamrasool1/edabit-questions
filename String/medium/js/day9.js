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
    return str.split('').map(char => char !== char.toLowerCase() ? " " + char.toLowerCase(): char.toLowerCase()).join("");
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

console.log(firstNVowels("sharpening skills", 3));  //➞ "aei"
console.log(firstNVowels("major league", 5));  //➞ "aoeau"
console.log(firstNVowels("hostess", 5));  //➞ "invalid"