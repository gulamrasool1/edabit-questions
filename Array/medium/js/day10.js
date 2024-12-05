// 91 An Introduction to the Map-Reduce Pattern
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

// Examples

// function magnitude(arr) {
//     let sum = arr.map(num => num ** 2).reduce((item, square) => item + square, 0);
//     return Math.sqrt(sum);
// }

function magnitude(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] * arr[i];
    }
    return Math.sqrt(result);
}

// console.log(magnitude([3, 4]));  //➞ 5
// console.log(magnitude([0, 0, -10]));  //➞ 10
// console.log(magnitude([]));  //➞ 0
// console.log(magnitude([2, 3, 6, 1, 8] ));  //➞ 10.677078252031311



// 92 Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// Examples

// function squarePatch(n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         let row = []
//         for (let j = 0; j < n; j++) {
//             row.push(n);
//         }
//         result.push(row)
//     }
//     return result;
// }

function squarePatch(n) {
    // return Array(n).fill(Array(n).fill(n));

    return Array(n).fill().map(() => Array(n).fill(n));
}

// console.log(squarePatch(3));  //➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]
// console.log(squarePatch(5));  //➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]
// console.log(squarePatch(1));  //➞ [
//   [1]
// ]
// console.log(squarePatch(0));  //➞ []



// 93 Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.

// Examples

// function changeTypes(arr) {
//     return arr.map(item => {
//         if (typeof item === 'number') {
//             return item % 2 === 0 ? item + 1 : item;
//         } else if (typeof item === 'string') {
//             return item[0].toUpperCase() + item.slice(1) + "!";
//         } else if (typeof item === 'boolean') {
//             return !item;
//         }
//         return item
//     });
// }

function changeTypes(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (typeof item === 'number') {
            result.push(item % 2 === 0 ? item + 1 : item);
        } else if (typeof item === "string") {
            result.push(item[0].toUpperCase() + item.slice(1) + "!");
        } else if (typeof item === 'boolean') {
            result.push(!item);
        }
    }
    return result;
}

// console.log(changeTypes(["a", 12, true]));  //➞ ["A!", 13, false]
// console.log(changeTypes([13, "13", "12", "twelve"]));  //➞ [13, "13!", "12!", "Twelve!"]
// console.log(changeTypes([false, "false", "true"]));  //➞ [true, "False!", "True!"]



// 94 Find Unique Number in Array
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Examples

// function findSingleNumber(arr) {
//     if (arr.length === 0) {
//         return null
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//             return arr[i];
//         }
//     }
// }

function findSingleNumber(arr) {
    if (arr.length === 0) {
        return null;
    }
    let unique = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
    return unique.toString();
}

// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4]));  //➞ 3
// console.log(findSingleNumber([2]));  //➞ 2
// console.log(findSingleNumber([]));  //➞ null
// console.log(findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]));  //➞ 8
// console.log(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]));  //➞ 101



// 95 Ping Pong!
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.

// Examples

// function pingPong(arr, win) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//         result.push("Pong!");
//     }

//     if (!win) {
//         result.pop();
//     }
//     return result;
// }

function pingPong(arr, win) {
    let compare = arr.reduce((acc, cur) => {
        acc.push(cur, "Pong!");
        return acc;
    }, []);
    if (!win) {
        compare.pop();
    }
    return compare;
}

// console.log(pingPong(["Ping!"], true));  //➞ ["Ping!", "Pong!"]
// console.log(pingPong(["Ping!", "Ping!"], false));  //➞ ["Ping!", "Pong!", "Ping!"]
// console.log(pingPong(["Ping!", "Ping!", "Ping!"], true));  //➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]



// 96 Numbers to Objects
// Mubashir needs your help in a simple task.

// Given an array of numbers arr:

// Create an object for each given number.
// The object key will be the number converted to a string.
// The value will be the corresponding character code converted to a string (check ASCII table).
// Return an array of the resulting objects.

// Examples

// function numObj(arr) {
//     return arr.map(num => {
//         return { [num]: String.fromCharCode(num) };
//     });
// }

function numObj(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj[arr[i]] = String.fromCharCode(arr[i]);
        result.push(obj);
    }
    return result;
}

// console.log(numObj([118, 117, 120]));  //➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]
// console.log(numObj([101, 121, 110, 113, 103]));  //➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
// console.log(numObj([118, 103, 110]));  //➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]



// 97 Pyramid Arrays
// Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

// Examples

function pyramidArrays(num) {
    // let result = [];
    // for (let i = 1; i <= num; i++) {
    //     let subArray = [];
    //     for (let j = 0; j < i; j++) {
    //         subArray.push(i);
    //     }
    //     result.push(subArray);
    // }
    // return result;

    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push(Array(i).fill(i));
    }
    return result;
}

// console.log(pyramidArrays(1));  //➞ [[1]]
// console.log(pyramidArrays(3));  //➞ [[1], [2, 2], [3, 3, 3]]
// console.log(pyramidArrays(5));  //➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]



// 98 Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

// Examples

// function longestWord(str) {
//     let splited = str.split(" ");
//     let result = '';
//     for (let i = 0; i < splited.length; i++) {
//         if (splited[i].length > result.length) {
//             result = splited[i]
//         }
//     }
//     return result;
// }

function longestWord(str) {
    let splited = str.split(' ');
    let longest = splited.reduce((long, curr) => {
        return curr.length > long.length ? curr : long;
    }, '');
    return longest;
}

// console.log(longestWord("Hello darkness my old friend"));  //➞ "darkness"
// console.log(longestWord("Hello there mate"));  //➞ "Hello"
// console.log(longestWord("Kayla's toy is plastic"));  //➞ "Kayla's"



// 99 String Match by Two Letters
// Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

// Examples

function strMatchBy2char(a, b) {
    let count = 0;
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i] && a[i + 1] === b[i + 1]) {
            count++;
        }
    }
    return count;
}

// console.log(strMatchBy2char("yytaazz", "yyjaaz"));  //➞ 3
// console.log(strMatchBy2char("edabit", "ed"));  //➞ 1
// console.log(strMatchBy2char("", ""));  //➞ 0



//  100 Superheroes
// Create a function that takes an array of console.log(superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.

// Examples

function superheroes(arr) {
    return arr.filter(name => name.toLowerCase().endsWith("man"));
}

console.log(superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"]));
//➞ ["Batman", "Spider-man", "Superman"]

console.log(superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"]));
//➞ ["Aquaman"]

console.log(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"]));
//➞ []