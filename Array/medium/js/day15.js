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

console.log(getProducts([1, 7, 3, 4]));   //➞ [84, 12, 28, 21]
console.log(getProducts([1, 2, 6, 5, 9]));  //➞ [540, 270, 90, 108, 60]
console.log(getProducts([1, 2, 3, 0, 5]));  //➞ [0, 0, 0, 30, 0]