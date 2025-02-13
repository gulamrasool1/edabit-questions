// 121 What Type of Triangle?
// Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.

// No sides equal: "scalene"
// Two sides equal: "isosceles"
// All sides equal: "equilateral"
// Less or more than 3 sides given: "not a triangle"

// Examples

function getTriangleType(arr) {
    if (arr.length !== 3) {
        return "not a triangle";
    }
    let [a, b, c] = arr;
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    }
    return "scalene";
}

// console.log(getTriangleType([2, 6, 5]));  //➞ "scalene"
// console.log(getTriangleType([4, 4, 7]));  //➞ "isosceles"
// console.log(getTriangleType([8, 8, 8]));  //➞ "equilateral"
// console.log(getTriangleType([3, 5, 5, 2]));  //➞ "not a triangle"



// 122 Making a Sandwich
// Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.

// Examples

// function makeSandwich(ingredients, flavour) {
//     let result = [];
//     for (let i = 0; i < ingredients.length; i++) {
//         if (ingredients[i] === flavour) {
//             result.push("bread", flavour, "bread");
//         } else {
//             result.push(ingredients[i])
//         }
//     }
//     return result;
// }

function makeSandwich(ingredients, flavour) {
    return ingredients.reduce((acc, cur) => {
        if (cur === flavour) {
            acc.push("bread", cur, "bread");
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);
}

// console.log(makeSandwich(["tuna", "ham", "tomato"], "ham"));  //➞ ["tuna", "bread", "ham", "bread", "tomato"]
// console.log(makeSandwich(["cheese", "lettuce"], "cheese"));  //➞ ["bread", "cheese", "bread", "lettuce"]
// console.log(makeSandwich(["ham", "ham"], "ham"));  //➞ ["bread", "ham", "bread", "bread", "ham", "bread"]



// 123 Sum Fractions
// Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.

// Examples

// function sumFractions(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let [numerator, denominator] = arr[i];
//         sum += numerator / denominator
//     }
//     return Math.round(sum);
// }

function sumFractions(arr) {
    return arr.reduce((acc, curr) => {
        let [numerator, denominator] = curr;
        acc += numerator / denominator;
        return Math.round(acc);
    }, 0);
}

// console.log(sumFractions([[18, 13], [4, 5]]));  //➞ 2
// console.log(sumFractions([[36, 4], [22, 60]]));  //➞ 9
// console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]));  //➞ 11



// 124 Intersecting Intervals
// Create a function that takes in an array of intervals and returns how many intervals overlap with a given point.

// An interval overlaps a particular point if the point exists inside the interval, or on the interval's boundary. For example the point 3 overlaps with the interval [2, 4] (it is inside) and [2, 3] (it is on the boundary).

// To illustrate:

// countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2) ➞ 3
// // Since [1, 2], [2, 3] and [1, 3] all overlap with point 2.

// Examples

// function countOverlapping(intervals, point) {
//     let count = 0;
//     for (let i = 0; i < intervals.length; i++) {
//         let [first, last] = intervals[i];
//         if (point >= first && point <= last) {
//             count++
//         }
//     }
//     return count;
// }

function countOverlapping(intervals, point) {
    return intervals.reduce((acc, cur) => {
        let [first, last] = cur;
        if (point >= first && point <= last) {
            acc++;
        }
        return acc;
    }, 0);
}

// console.log(countOverlapping([[1, 2], [2, 3], [3, 4]], 5));  //➞ 0
// console.log(countOverlapping([[1, 2], [5, 6], [5, 7]], 5));  //➞ 2
// console.log(countOverlapping([[1, 2], [5, 8], [6, 9]], 7));  //➞ 2



// 125 Hold Your Breath!
// You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:

// Positive numbers represent height above the water.
// 0 is sea level.
// Negative numbers represent depth below the water's surface.
// Create a function which returns whether your character survives their unsupervised diving experience, given an array of integers.

// Your character starts with a breath meter of 10, which is the maximum. When diving underwater, your breath meter decreases by 2 per item in the array. Watch out! If your breath diminishes to 0, your character dies!

// To prevent this, you can replenish your breath by 4 (up to the maximum of 10) for each item in the array where you are at or above sea level.

// Your function should return true if your character survives, and false if not.

// Worked Example
// divingMinigame([-5, -15, -4, 0, 5]) ➞ true

// Breath meter starts at 10.
// -5 is below water, so breath meter decreases to 8.
// -15 is below water, so breath meter decreases to 6.
// -4 is below water, so breath meter decreases to 4.
// 0 is at sea level, so breath meter increases to 8.
// 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
// Character survives!

// Examples

function divingMinigame(arr) {
    let breathMeter = 10;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num >= 0) {
            breathMeter = Math.min(breathMeter + 4, breathMeter);
        } else {
            breathMeter -= 2;
        }
        if (breathMeter <= 0) {
            return false;
        }
    }
    return true;
}

// console.log(divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  //➞ true
// console.log(divingMinigame([-3, -6, -2, -6, -2]));  //➞ false
// console.log(divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4]));  //➞ false



// 126 Back and Forth
// In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. The player should move either left or right, depending on the arrow's direction.

// Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.

// Worked Example
// calculateArrowhead([">>", "<<", "<<<"]) ➞ "<<<"
// >> means to move 2 places right
// << means to move 2 places left (cancelling out >>)
// <<< means to move a further 3 places left
// overall, the movement can be written as <<<

// Examples

function calculateArrowhead(arr) {
    let rightArrow = arr.filter(arrow => arrow[0] === ">").reduce((sum, arrow) => sum + arrow.length, 0);
    let leftArrow = arr.filter(arrow => arrow[0] === "<").reduce((sum, arrow) => sum + arrow.length, 0);

    let sum = rightArrow - leftArrow;
    if (sum > 0) {
        return ">".repeat(sum);
    } else if (sum < 0) {
        return "<".repeat(-sum);
    } else {
        return "";
    }
}

// console.log(calculateArrowhead([">>>>", "<", "<", "<"]));  //➞ ">"
// console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"]));  //➞ "<<"
// console.log(calculateArrowhead([">>>", "<<<"]));  //➞ ""



// 127 ES6: Destructuring Objects IX
// Given an array of user objects. If we just wanted to get the name of the third object in the array, one way could be to use an array method like:

let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
];

// let thirdUser = users.filter((e, i) => i === 2 )[0].name
// console.log(thirdUser)  // "Jeremy"

// let {name : thirdUser} = users[2];
// console.log(thirdUser);

let thirdUser = users.map(e => e.name)[2];
// console.log(thirdUser);



// 128 Digit Distance
// The digit distance between two numbers is the total value of the difference between each pair of digits.

// To illustrate:

// digitDistance(234, 489) ➞ 12
// // Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5
// Create a function that returns the digit distance between two integers.

// Examples

// function digitDistance(num1, num2) {
//     let [s1, s2] = [num1, num2].map(n => n.toString().padStart(3, 0));
//     return [...s1].reduce((sum, item, i) => sum + Math.abs(item - s2[i]),0);
// }

function digitDistance(num1, num2) {
    let [s1, s2] = [num1, num2].map(n => n.toString());
    s1 = s1.padStart(s2.length, "0");
    s2 = s2.padStart(s1.length, "0");

    let sum = 0;
    for (let i = 0; i < s1.length; i++) {
        sum += Math.abs(s1[i] - s2[i]);
    }
    return sum;
}

// console.log(digitDistance(121, 599));  //➞ 19
// console.log(digitDistance(12, 12));  //➞ 0
// console.log(digitDistance(10, 20));  //➞ 1



// 129 Boolean Chain
// Write three functions:

// AND
// OR
// XOR
// These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.

// Examples

// function and(arr) {
//     return arr.reduce((a, b) => a && b);
// }

function and(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false;
    }
    return true;
}

// function or(arr) {
//     return arr.reduce((a, b) => a || b);
// }

function or(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true;
    }
    return false;
}

// function xor(arr) {
//     return arr.reduce((a, b) => a !== b);
// }

function xor(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = result !== arr[i];
    }
    return result;
}

// console.log(and([true, true, false, true]));  //➞ false
// // and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false
// console.log(or([true, true, false, false]));  //➞ true
// // or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true
// console.log(xor([true, true, false, false]));  //➞ false
// xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false



// 130 Count the Number of Duplicate Characters
// Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.

// Examples

function duplicates(str) {
    let count = str.split('').reduce((obj, char) => {
        obj[char] = (obj[char] || 0) + 1
        return obj;
    }, {});

    return Object.values(count).reduce((sum, val) => sum + (val > 1 ? val - 1 : 0), 0);
}

console.log(duplicates("Hello World!"));  //➞ 3
// "o" = 2, "l" = 3.
// "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// Hence 1 + 2 = 3
console.log(duplicates("foobar"));  //➞ 1
console.log(duplicates("helicopter"));  //➞ 1
console.log(duplicates("birthday"));  //➞ 0
// If there are no duplicates, return 0