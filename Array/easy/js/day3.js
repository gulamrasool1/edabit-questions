// 28 Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

// Examples

// function isSubset(arr1, arr2) {
//     return arr1.every(arr3 => arr2.includes(arr3));
// }

function isSubset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false
        }
    }
    return true
}

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));  //➞ true
// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]));  //➞ true
// console.log(isSubset([1, 2], [3, 5, 9, 1]));  //➞ false



// 29 Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:

// "user1, user2 and 3 more online"
// Examples

function chatroomStatus(arr) {
    if (arr.length === 0) {
        return "no one online";
    } else if (arr.length === 1) {
        return `${arr[0]} online`;
    } else if (arr.length === 2) {
        return `${arr[0]} and ${arr[1]} online`
    } else {
        return `${arr[0]}, ${arr[1]} and ${arr.length - 2} more online`
    }
}

// console.log(chatroomStatus([]));  //➞ "no one online"
// console.log(chatroomStatus(["paRIE_to"]));  //➞ "paRIE_to online"
// console.log(chatroomStatus(["s234f", "mailbox2"]));  //➞ "s234f and mailbox2 online"
// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));
//➞ "pap_ier44, townieBOY and 4 more online"



// 30 Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Examples

// function spelling(str) {
//     let result = []
//     for (let i = 1; i <= str.length; i++) {
//         result.push(str.slice(0, i));
//     }  
//     return result;
// }

// console.log(spelling("bee"));  //➞ ["b", "be", "bee"]
// console.log(spelling("happy"));  //➞ ["h", "ha", "hap", "happ", "happy"]
// console.log(spelling("eagerly"));  //➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]



// 31 First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

// Examples

function charIndex(str1, str2) {
    let firstIndex = str1.indexOf(str2);
    let lastIndex = str1.lastIndexOf(str2);

    if (firstIndex === -1) {
        return undefined;
    } else {
        return [firstIndex, lastIndex]
    }
}

// console.log(charIndex("hello", "l"));  //➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.
// console.log(charIndex("circumlocution", "c"));  //➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.
// console.log(charIndex("happy", "h"));  //➞ [0, 0]
// // Only one "h" exists, so the first and last index is 0.
// console.log(charIndex("happy", "e"));  //➞ undefined
// "e" does not exist in "happy", so we return undefined.



// 32 Snail Race
// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

// The function inputs:

// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve.
// Examples

function mauriceWins(arr1, arr2) {
    let round1 = arr1[0] > arr2[2]
    let round2 = arr1[1] > arr2[0]
    let round3 = arr1[2] > arr2[1]
    let mauricewinscount = round1  + round2  + round3 >= 2 ;
    return mauricewinscount;
}
// console.log(mauriceWins([3, 5, 10], [4, 7, 11]));  //➞ true
// // Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.
// console.log(mauriceWins([6, 8, 9], [7, 12, 14]));  //➞ false
// // Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.
// console.log(mauriceWins([1, 8, 20], [2, 9, 100]));  //➞ true



// 33 How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples

// function countTrue(arr) {
    // return arr.filter(Boolean).length;
    // return arr.reduce((count, value) => count + (value === true ? 1 : 0),0) 
// }

function countTrue(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            result++
        }
    }
    return result;
}

// console.log(countTrue([true, false, false, true, false]));  //➞ 2
// console.log(countTrue([false, false, false, false]));  //➞ 0
// console.log(countTrue([]));  //➞ 0



// 34 Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples

// function compact(arr) {
//     return arr.filter(Boolean);
// }

function compact(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            result.push(arr[i])
        }
    }    
    return result;
}

// console.log(compact([0, 1, false, 2, "", 3]));   // => [1, 2, 3]



// 35 Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples

// function toArray(obj) {
//     return Object.entries(obj);
// }

function toArray(obj) {
    let result = [];
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        result.push([keys[i] ,obj[keys[i]]])
    }
    return result
}

// console.log(toArray({ a: 1, b: 2 }));  //➞ [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 }));  //➞ [["shrimp", 15], ["tots", 12]]
// console.log(toArray({}));  //➞ []



// 36 Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples 

function concat(arr1, arr2, arr3) {
    return arr1.concat(arr2,arr3)
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));  //➞ [1, 2, 3, 4, 5, 6, 7] 
console.log(concat([1], [2], [3], [4], [5], [6], [7]));  //➞ [1, 2, 3, 4, 5, 6, 7] 
console.log(concat([1, 2], [3, 4]));  //➞ [1, 2, 3, 4] 
console.log(concat([4, 4, 4, 4, 4]));  //➞ [4, 4, 4, 4, 4]