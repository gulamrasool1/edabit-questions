// 111 Count the Towers
// Create a function that counts the number of towers.

// Examples

// function count_towers(towers) {
//     let arr;
//     for (let i = 0; i < towers.length; i++) {
//         arr = towers[i][towers[i].length - 1];
//     }
//     return arr.split("  ").length;
// }

function count_towers(towers) {
    const cols = towers[0][0].length;
    const towerColumns = Array.from({ length: cols }, (_, col) =>
        towers.some(row => row[0][col] === '#')
    );
    return towerColumns.filter((val, idx) => val && (!towerColumns[idx - 1])).length;
}

// console.log(count_towers([
//     ["     ##         "],
//     ["##   ##        ##"],
//     ["##   ##   ##   ##"],
//     ["##   ##   ##   ##"]
// ]));  //➞ 4
// console.log(count_towers([
//     ["                         ##"],
//     ["##             ##   ##   ##"],
//     ["##        ##   ##   ##   ##"],
//     ["##   ##   ##   ##   ##   ##"]
// ]));  //➞ 6
// console.log(count_towers([
//     ["##"],
//     ["##"]
// ]));  //➞ 1



// 112 Making a Countdown
// Create a function where given the number n to count down from, and some words str, return a countdown sequence as a string leading up to the words at the end.

// Put a full stop after each number and uppercase and add an exclamation mark to the word. See the examples below for clarification!

// Examples

function countdown(n, str) {
    let result = "";
    for (let i = n; i >= 1; i--) {
        result += i + ". ";
    }
    result += str.toUpperCase() + "!";
    return result;
}

// console.log(countdown(10, "Blast Off"));  //➞ "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!"
// console.log(countdown(3, "go"));  //➞ "3. 2. 1. GO!"
// console.log(countdown(5, "FIRE"));  //➞ "5. 4. 3. 2. 1. FIRE!"



// 113 In the Centre?
// Given a string containing mostly spaces and one non-space character, return whether the character is positioned in the very centre of the string. This means the number of spaces on both sides should be the same.

// Examples

// function isCentral(str) {
//     let trimStr = str.trim();
//     if (trimStr.length % 2 === 0) {
//         return false
//     }
//     let mid = Math.floor(trimStr.length / 2);
//     return str.indexOf(trimStr[mid]) === Math.floor(str.length / 2);
// }

function isCentral(str) {
    // return str.trimLeft().length === str.trimRight().length;


    // return str.length % 2 !== 0 ? true : false; 

    return str === str.split('').reverse().join("");
}

// console.log(isCentral("  #  "));  //➞ true
// console.log(isCentral(" 2    "));  //➞ false
// console.log(isCentral("@"));  //➞ true



// 114 First N Mid
// Create a function that takes a string and returns the first character of every word if the length of the word is even and the middle character if the length of the word is odd.

// Examples

// function stmid(str) {
//     return str.split(" ").map(word => {
//         if (word.length % 2 === 0) {
//             return word[0];
//         } else {
//             return word[Math.floor(word.length / 2)];
//         }
//     }).join("");
// }

function stmid(str) {
    let splited = str.split(" ");
    let result = "";
    for (let i = 0; i < splited.length; i++) {
        let word = splited[i];
        if (word.length % 2 === 0) {
            result += word[0];
        } else {
            result += word[Math.floor(word.length / 2)];
        }
    }
    return result;
}

// console.log(stmid("Alexa have to paid"));  //➞ "ehtp"
// "e" is the middle character of "Alexa"
// "h" is the first character of "have"
// console.log(stmid("Th3 0n3 4nd 0n1y"));  //➞ "hnn0"
// console.log(stmid("who is the winner"));  //➞ "hihw"



// 115 Bundle Up!
// Let's assume for the purposes of this challenge that for every layer of fabric you wear when it's cold outside (coats, cardigans, etc), the temperature increases by a tenth of the total.

// Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.

// calcBundledTemp(2, "10*C") ➞ "12.1*C"
// // 10 * 1.1 = 11
// // 11 * 1.1 = 12.1

// Examples);

// function calcBundledTemp(n, temp) {
//     let currTemp = parseFloat(temp);
//     for (let i = 0; i < n; i++) {
//         currTemp *= 1.1;
//     }
//     return `${currTemp.toFixed(1)}*C`;
// }

function calcBundledTemp(n, temp) {
    let currTemp = parseFloat(temp);
    currTemp *= Math.pow(1.1, n); ``;
    return `${currTemp.toFixed(1)}*C`;
}

// console.log(calcBundledTemp(1, "2*C"));  //➞ "2.2*C"
// console.log(calcBundledTemp(4, "6*C"));  //➞ "8.8*C"
// console.log(calcBundledTemp(20, "4*C"));  //➞ "26.9*C"



// 116 Bug: Regular Expression
// Indira first year computer science student is taking an intro to RegEx class. Her professor gives her the assignment to write a function that checks whether an input date as a string is in the format yyyy/mm/dd. She has written a regular expression but the regular expression does not seem to be correct. Help her fix the error.

// Examples

function assignment(str) {

}

// console.log(assignment("12/1/1"));  //➞ false
// console.log(assignment("1234/12/01"));  //➞ true
// console.log(assignment("2012/1/1"));  //➞ false
// console.log(assignment("2012/01/07"));  //➞ true



// 117 Are Letters in the Second String Present in the First?
// Create a function that accepts an array of two strings and checks if all of the letters in the second string are present in the first string.

// Examples

// function letterCheck(arr) {
//     let [str1, str2] = arr.map(item => item.toLowerCase());
//     return str2.split("").every(char => str1.includes(char));
// }

function letterCheck(arr) {
    let [str1, str2] = arr.map(item => item.toLowerCase());
    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            return false;
        }
    }
    return true;
}

// console.log(letterCheck(["trances", "nectar"]));  //➞ true
// console.log(letterCheck(["compadres", "DRAPES"]));  //➞ true
// console.log(letterCheck(["parses", "parsecs"]));  //➞ false



// 118 Hidden Calculator Words
// At school, we used to play with our calculators and send each other secret messages. The trick was to enter a special number and turn the calculator upside-down. LOL ... I mean 707!

// Given a number, create a function that converts it into a word by turning the integer 180 degrees around.

// Examples

// function turnCalc(num) {
//     let numberLetter = {
//         1: "I",
//         2: "Z",
//         3: "E",
//         4: "H",
//         5: "S",
//         6: "G",
//         7: "L",
//         8: "B",
//         9: "-",
//         0:	"O"
//     };
//     return num.toString().split("").reverse().map(item => numberLetter[item]).join("");
// }

function turnCalc(num) {
    let nL = {
        1: "I",
        2: "Z",
        3: "E",
        4: "H",
        5: "S",
        6: "G",
        7: "L",
        8: "B",
        9: "-",
        0: "O"
    };
    let str = num.toString();
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += nL[str[i]];
    }
    return result;
}

// console.log(turnCalc(707));  //➞ "LOL"
// console.log(turnCalc(5508));  //➞ "BOSS"
// console.log(turnCalc(3045));  //➞ "SHOE"

// number	letter
// 1	I
// 2	Z
// 3	E
// 4	H
// 5	S
// 6	G
// 7	L
// 8	B
// 9	-
// 0	O



// 119 Tidy Title and Author Strings
// You have an array of strings, each consisting of a book title and an author's name.

// To illustrate:

// [
//   ["   Death of a Salesman - Arthur Miller    "],
//   ["   Macbeth - William Shakespeare    "],
//   ["    A Separate Peace - John Knowles     "],
//   [" Lord of the Flies - William Golding"],
//   ["A Tale of Two Cities - Charles Dickens"]
// ]
// Create a function that takes an array like the one above and transforms it into the same format as the one below:

// [
//   ["Death of a Salesman", "Arthur Miller"],
//   ["Macbeth", "William Shakespeare"],
//   ["A Separate Peace", "John Knowles"],
//   ["Lord of the Flies", "William Golding"],
//   ["A Tale of Two Cities", "Charles Dickens"]
// ]

// Examples

// function tidyBooks(arr) {
//     return arr.map(word => word.trim().split(" - ")).flat();
// }

function tidyBooks(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let splitArray = arr[i].trim().split(" - ");
      result.push(splitArray);
    }
    return result.flat();
  }

// console.log(tidyBooks([
//   "     The Catcher in the Rye - J. D. Salinger    ",
//   "    Brave New World - Aldous Huxley   ",
//   "    Of Mice and Men - John Steinbeck    "
// ])); //➞ [
//   "The Catcher in the Rye", "J. D. Salinger",
//   "Brave New World", "Aldous Huley",
//   "Of Mice and Men", "John Steinbeck"
// ]



// 120 Fruit Juices
// A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a flavor's name and its capacity.

// Create a function that creates the product IDs for the variety of fruit juices.

// Examples

// function getDrinkID(str1, str2) {
//     let words = str1.split(" ")
//     let result = words.map(word => word.slice(0, 3).toUpperCase()).join("");
//     let words2 = str2.slice(0, -2)
//     return result + words2;
// }

function getDrinkID(str1, str2) {
    let words = str1.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        result += words[i].slice(0, 3).toUpperCase();
    }
    let words2 = "";
    for (let i = 0; i < str2.length - 2; i++) {
        words2 += str2[i];
    }
    return result + words2;
}

console.log(getDrinkID("apple", "500ml"));  //➞ "APP500"
console.log(getDrinkID("pineapple", "45ml"));  //➞ "PIN45"
console.log(getDrinkID("passion fruit", "750ml"));  //➞ "PASFRU750"