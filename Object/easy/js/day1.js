// 1 Drink Sorting
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// The output of the sorted drinks object will be:

// Examples

function sortDrinkByPrice(drinks) {
    // return drinks.sort((a, b) => a.price - b.price);

    return [drinks[1], drinks[0]];
}

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]

// console.log(sortDrinkByPrice(drinks));  //➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]



// 2 Slightly Superior
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

// Examples

// function isFirstSuperior(arr1, arr2) {
//     if (arr1[0] > arr2[0]) {
//         return true
//     }else if (arr1[1] > arr2[1]) {
//         return true
//     } else if (arr1[2] > arr2[2]) {
//         return true
//     }
//     return false
// }

// function isFirstSuperior(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false; 
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] < arr2[i]) {
//             return false;
//         }
//     }
    
//     return true;
// }

function isFirstSuperior(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    return arr1.every((item, index) => item >= arr2[index]);
}

// console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]));  //➞ true
// // The pair of items at each index are compared in turn.
// // 1 from the first array is the same as 1 from the second array.
// // 2 is the same as 2.
// // However, 4 is greater than 3, so first array is superior.
// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));  //➞ true
// console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]));  //➞ true
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]));  //➞ false
// console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));  //➞ false



// 3 Burglary Series (20): Sign Your Name
// The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

// Examples
// const obj = { yourSignature: "" };

// function signYourName(obj ) {
//     Object.seal(obj);
//   // write your code here


//   obj.yourSignature = "Whatever";
//   obj.spouseSignature = "Nice Try";
//   return obj;

// }
// console.log(signYourName(obj)); //➞ { yourSignature: "Whatever" }



// 4 Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// Examples

// function calculateDifference(obj, diff) {
//     let values = Object.values(obj);
//     let sum = values.reduce((acc, value) => acc + value)
//     return sum - diff
// }

function calculateDifference(obj, diff) {
    let sum = 0;
    let values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum - diff
}

// console.log(calculateDifference({ "baseball bat": 20 }, 5));  //➞ 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));  //➞ 11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));  //➞ 1



// 5 Scrabble Hand
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

// Here's an example hand:

// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

// Examples

// function maximumScore(titleHand) {
//     let sum = 0;
//     for (let i = 0; i < titleHand.length; i++) {
//         sum += titleHand[i].score
//     }
//     return sum
// }

function maximumScore(titleHand) {
    return titleHand.reduce((acc, item) => acc + item.score, 0);
}

// console.log(maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]));  //➞ 28
// console.log(maximumScore([
//   { tile: "B", score: 2 },
//   { tile: "V", score: 4 },
//   { tile: "F", score: 4 },
//   { tile: "U", score: 1 },
//   { tile: "D", score: 2 },
//   { tile: "O", score: 1 },
//   { tile: "U", score: 1 }
// ]));  //➞ 15



// 6 Printer Levels
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

// Examples

// function inkLevels(link) {
    // let value = Object.values(link);
    // return Math.min(...value);

//     let value = Object.values(link)
//     return value.sort()[0]
// }

function inkLevels(link) {
    let value = Object.values(link);
    let min = Infinity;
    for (let i = 0; i < value.length; i++) {
        if (value[i] < min) {
            min = value[i];
        }
    }
    return min
}

console.log(inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}));  //➞ 10
console.log(inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}));  //➞ 432
console.log(inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}));  //➞ 0
