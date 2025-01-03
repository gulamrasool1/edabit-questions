// 121 Find the True Equations
// In this challenge you will be given an array containing equations, with each equation written as a string. Here's an example:

// ["1+1=2", "2+2=3", "5*5=10", "3/3=1"]
// If you do the math, you'll see that the equations "1+1=2" and "3/3=1" are actually true while "2+2=3" and "5*5=10" are false nonsense.

// Write a function which, given an array of equations as above, returns only the true equations. For instance, for the example above the output should be:

// ["1+1=2", "3/3=1"]

// Examples

// function trueEquations(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let [expression, value] = arr[i].split('=');
//         if (eval(expression) === Number(value)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

function trueEquations(arr) {
    return arr.filter(equation => {
        let [expression, value] = equation.split("=");
        return eval(expression) === Number(value);
    });
}

// console.log(trueEquations(["2*2=4"]));  //➞ ["2*2=4"]
// console.log(trueEquations(["1+1=3", "3-1=1"]));  //➞ []
// console.log(trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]));  //➞ ["1+1=2", "3/3=1"]



// 122 Musical Cadences
// In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:

// V followed by I is a Perfect Cadence
// IV followed by I is a Plagal Cadence
// V followed by Any chord other than I is an Interrupted Cadence
// Any chord followed by V is an Imperfect Cadence
// Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.

// Examples

function findCadence(arr) {
    let [secondLast, last] = arr.slice(-2);
    if (secondLast === "V" && last === "I") return "perfect";
    if (secondLast === "IV" && last === "I") return "plagal";
    if (secondLast === "V" && last !== "I") return "interrupted";
    if (last === "V") return "imperfect";
}

// console.log(findCadence(["I", "IV", "V"]));  //➞ "imperfect"
// console.log(findCadence(["ii", "V", "I"]));  //➞ "perfect"
// console.log(findCadence(["I", "IV", "I", "V", "vi"]));  //➞ "interrupted"



// 123 Secret Function 4.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

// Examples

function secret(str) {
    let [tag, ...classes] = str.split('.');
    return `<${tag} class="${classes.join(' ')}"></${tag}>`;
}

// console.log(secret("p.one.two.three"));  //➞ `<p class="one two three"></p>`
// console.log(secret("p.one"));  //➞ `<p class="one"></p>`
// console.log(secret("p.four.five"));  //➞ `<p class="four five"></p>`



// 124 Remove Repeated Letters
// Create a function that replaces all consecutively repeated letters in a word with single letters.

// Examples

// function removeRepeats(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i - 1]) {
//             result += str[i];
//         }
//     }
//     return result;
// }

function removeRepeats(str) {
    return str.split("").filter((char, i, arr) => {
        return char !== arr[i - 1];
    }).join("");
}

// console.log(removeRepeats("aaabbbccc"));  //➞ "abc"
// console.log(removeRepeats("bookkeeper"));  //➞ "bokeper"
// console.log(removeRepeats("nananana"));  //➞ "nananana"



// 125 Recursion: Count Vowels
// Write a function that recursively returns the number of vowels in a string.

// Examples

// function countVowels(str) {
//     if (str.length === 0) {
//         return 0;
//     }
//     let vowels = "aeiou";
//     return vowels.includes(str[0]) + countVowels(str.slice(1));
// }

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let vowels = "aeiou";
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// console.log(countVowels("apple"));  //➞ 2
// console.log(countVowels("cheesecake"));  //➞ 5
// console.log(countVowels("bbb"));  //➞ 0
// console.log(countVowels(""));  //➞ 0



// 126 Stretched Words
// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

// Examples

// function unstretch(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i - 1]) {
//             result += str[i];
//         }
//     }
//     return result;
// }

function unstretch(str) {
    return str.split("").filter((char, i, arr) => {
        return char !== arr[i - 1];
    }).join("");
}

// console.log(unstretch("ppoeemm"));  //➞ "poem"
// console.log(unstretch("wiiiinnnnd"));  //➞ "wind"
// console.log(unstretch("ttiiitllleeee"));  //➞ "title"
// console.log(unstretch("cccccaaarrrbbonnnnn"));  //➞ "carbon"



// 127 Replace Letters With Position In Alphabet
// Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.

// Examples

function alphabetIndex(str) {
    // return str.toLowerCase().replace(/[^a-z]/g, "").split("").map(a => a.charCodeAt(0) - 96).join(" ");

    return str.toLowerCase().split('').map(char => char >= 'a' && char <= 'z' ? char.charCodeAt(0) - 96 : '').filter(char => char).join(" ");
}

// console.log(alphabetIndex("Wow, does that work?"));
// //➞ "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11"
// console.log(alphabetIndex("The river stole the gods."));
// //➞ "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19"
// console.log(alphabetIndex("We have a lot of rain in June."));
//➞ "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5"



// 128 Back and Forth
// In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. The player should move either left or right, depending on the arrow's direction.

// Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.

// Worked Example
// calculateArrowhead([">>", "<<", "<<<"]) ➞ "<<<"
// // >> means to move 2 places right
// // << means to move 2 places left (cancelling out >>)
// // <<< means to move a further 3 places left
// // overall, the movement can be written as <<<

// Examples

function calculateArrowhead(arr) {
    
}

// console.log(calculateArrowhead([">>>>", "<", "<", "<"]));  //➞ ">"
// console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"]));  //➞ "<<"
// console.log(calculateArrowhead([">>>", "<<<"]));  //➞ ""



// 129 Count the Number of Duplicate Characters
// Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.

// Examples

function duplicates(str) {
    let counts = [...str].map(char => str.split(char).length - 1);
    return [...new Set(counts)].filter(count => count > 1).reduce((acc, count) => acc + count - 1, 0)
}

console.log(duplicates("Hello World!"));  //➞ 3
// "o" = 2, "l" = 3.
// "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// Hence 1 + 2 = 3
console.log(duplicates("foobar"));  //➞ 1
console.log(duplicates("helicopter"));  //➞ 1
console.log(duplicates("birthday"));  //➞ 0
// If there are no duplicates, return 0