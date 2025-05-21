// 141 Accumulating Array
// Create a function that takes in an array and returns an array of the accumulating sum.

// Examples

// function accumulatingArray(arr) {
//     return arr.map((num, i) => arr.slice(0, i + 1).reduce((sum, curr) => sum + curr, 0));
// }

function accumulatingArray(arr) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }
    return result;
}

// console.log(accumulatingArray([1, 2, 3, 4]));  //➞ [1, 3, 6, 10]
// // [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
// console.log(accumulatingArray([1, 5, 7]));  //➞ [1, 6, 13]
// console.log(accumulatingArray([1, 0, 1, 0, 1]));  //➞ [1, 1, 2, 2, 3]
// console.log(accumulatingArray([]));  //➞ []



// 142 Likes vs. Dislikes
// YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

// There are two other interesting rules to be noted about the interface:

// Pressing a button, which is already active, will undo your press.
// If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
// Create a function that takes an array of button inputs and returns the final state.

// Examples

// function likeOrDislike(arr) {
//     let result = 'Nothing';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === result) {
//             result = 'Nothing'
//         } else {
//             result = arr[i]
//         }
//     }
//     return result;
// }

function likeOrDislike(arr) {
    return arr.reduce((num, not) =>
        not === num ? 'Nothing' : not,
        "Nothing");
}

// console.log(likeOrDislike(["Dislike"]));  //➞ "Dislike"
// console.log(likeOrDislike(["Like", "Like"]));  //➞ "Nothing"
// console.log(likeOrDislike(["Dislike", "Like"]));  //➞ "Like"
// console.log(likeOrDislike(["Like", "Dislike", "Dislike"]));  //➞ "Nothing"



// 143 Spicy Food
// The facts are:

// You've just finished dinner.
// You love spicy food but your friend hates it.
// Given your friend's unfortunate taste preferences, you decide to split the bill only for non-spicy items. You will pay in full for the spicy dishes.

// Given two ordered arrays, one classifying the dishes as spicy vs. non-spicy and the other listing their prices, write a function that outputs an array where the first element is how much you pay and the second element is how much your friend pays.

// billSplit(["S", "N", "S", "S"], [13, 18, 15, 4]) ➞ [41, 9]

// // Since:
// // You pay: [13, 9, 15, 4] = 41
// // Friend pays: [0, 9, 0, 0] = 9

// Examples

function billSplit(arr1, arr2) {
    let yourTotal = 0;
    let friendTotal = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 'S') {
            yourTotal += arr2[i];
        } else {
            yourTotal += arr2[i] / 2;
            friendTotal += arr2[i] / 2;
        }
    }
    return [yourTotal, friendTotal];
}

// console.log(billSplit(["N", "S", "N"], [10, 10, 20]));   //➞ [25, 15]
// // You pay for half of both "N" dishes (5 + 10) and entirely pay for the "S" dish (10).
// console.log(billSplit(["N", "N"], [10, 10]));  //➞ [10, 10]
// console.log(billSplit(["S", "N"], [41, 10]));  //➞ [46, 5]



// 144 Merge Two Arrays
// Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.

// The arrays may be of different lengths, with at least one character / digit.
// The first array will contain string characters (lowercase, a-z).
// The second array will contain integers (all positive).

// Examples

function mergeArrays(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
    }
    return result;
}

// console.log(mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8]));
// //➞ ["f", 5, "d", 3, "w", 7, "t", 8]
// console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]));
// //➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]
// console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
//➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]



// 145 Product of All Other Numbers
// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Create a function that takes an array of integers and returns an array of the products.

// Examples

// function getProducts(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let product = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 product *= arr[j];
//             }
//         }
//         result.push(product);
//     }
//     return result;
// }

function getProducts(arr) {
    return arr.map((_, i) => arr.reduce((acc, num, j) => i !== j ? acc * num : acc, 1));
}

// console.log(getProducts([1, 7, 3, 4]));  //➞ [84, 12, 28, 21]
// console.log(getProducts([1, 2, 6, 5, 9]));  //➞ [540, 270, 90, 108, 60]
// console.log(getProducts([1, 2, 3, 0, 5]));  //➞ [0, 0, 0, 30, 0]



// 146 Good Match?
// In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums).

// If the array has an odd length, one number is (sadly) left out, so you should return "bad match".

// Examples

// function isGoodMatch(arr) {
//     if (arr.length % 2 !== 0) {
//         return "bad match";
//     }
//     let result = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         result.push(arr[i] + arr[i + 1]);
//     }
//     return result
// }

function isGoodMatch(arr) {
    if (arr.length % 2 !== 0) {
        return "bad match";
    }

    return arr.reduce((acc, val, i) => {
        if (i % 2 === 0) {
            acc.push(val + arr[i + 1]);
        }
        return acc;
    }, []);
}

// console.log(isGoodMatch([1, 2, 4, 7]));  //➞ [1+2, 4+7] ➞ [3, 11]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2]));  //➞ [12, 8, 6]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2, 3]));  //➞ "bad match"
// console.log(isGoodMatch([2, 6, 7, -2, 4]));  //➞ "bad match"



// 147 Longest Daily Streak
// Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. Output the longest streak of consecutive logged in days.

// Examples

function dailyStreak(arr) {
    let max = 0;
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            current++;
            if (current > max) {
                max = current;
            }
        }else {
            current = 0;
        }
    }
    return max;
}

// console.log(dailyStreak([true, true, false, true]));  //➞ 2
// console.log(dailyStreak([false, false, false]));  //➞ 0
// console.log(dailyStreak([true, true, true, false, true, true]));  //➞ 3



// 148 Adding Both Ends Together
// Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criteria:

// The first and last digits of a number must add to 10.

// Examples

function endsAddTo10(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let numStr = Math.abs(arr[i]).toString();
        let first = Number(numStr[0]);
        let last = Number(numStr[numStr.length - 1]);

        if (first + last === 10) {
            count++
        }
    }
    return count;
}

// console.log(endsAddTo10([19, 46, 2098]));  //➞ 3
// console.log(endsAddTo10([33, 44, -55]));  //➞ 1
// console.log(endsAddTo10([]));  //➞ 0



// 149 Word Builder
// In this challenge, you have to build a word from the scrambled letters contained in the first given array. For establishing how to assign the spots to the letters, you will use the positions contained in the second given array.

// letters = ["e", "t", "s", "t"]
// positions = [1, 3, 2, 0]

// Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
// Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
// Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
// Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
// Given the two arrays letters (containing the scrambled letters of the word) and positions (containing the indexes of the letters), implement a function that returns the resulting word as a string.

// Examples

function wordBuilder(letters, positions) {
    let result = [];

    for (let i = 0; i < letters.length; i++) {
        result[positions[i]] = letters[i];
    }
    return result.join("")
}

// console.log(wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]));  //➞ "test"
// console.log(wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]));  //➞ "edabit"
// console.log(wordBuilder(["g", "e", "o"], [1, 0, 2]));  //➞ "ego"



// 150 Accumulating Product
// Create a function that takes an array and returns an array of the accumulating product.

// Examples

// function accumulatingProduct(arr) {
//     let result = [];
//     let product = 1;

//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
//         result.push(product);
//     }
//     return result;
// }

// function accumulatingProduct(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0) {
//             result.push(arr[i]);
//         } else {
//             result.push(result[i - 1] * arr[i]);
//         }
//     }
//     return result;
// }

function accumulatingProduct(arr) {
    return arr.map((_, i) => {
        return arr.slice(0, i + 1).reduce((item, num) => item * num)
    });
}

console.log(accumulatingProduct([1, 2, 3, 4]));  //➞ [1, 2, 6, 24]
// [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]
console.log(accumulatingProduct([1, 5, 7]));  //➞ [1, 5, 35]
console.log(accumulatingProduct([1, 0, 1, 0]));  //➞ [1, 0, 0, 0]
console.log(accumulatingProduct([]));  //➞ []