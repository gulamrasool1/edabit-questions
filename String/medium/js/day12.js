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

console.log(stmid("Alexa have to paid"));  //➞ "ehtp"
// "e" is the middle character of "Alexa"
// "h" is the first character of "have"
console.log(stmid("Th3 0n3 4nd 0n1y"));  //➞ "hnn0"
console.log(stmid("who is the winner"));  //➞ "hihw"