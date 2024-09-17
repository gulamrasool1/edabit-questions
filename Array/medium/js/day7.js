// 61 Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]

// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]

// // A_Set is a subset of B_Set
// Create a function that determines if the first array is a subset of the second.

// Examples

// function subset(arr1, arr2) {
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);
//     let set1Array = Array.from(set1);
//     for (let i = 0; i < set1Array.length; i++) {
//         if (!set2.has(set1Array[i])) {
//             return false
//         }
//     }
//     return true
// }

function subset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false;
        }
    }
    return true;
}

// console.log(subset([1, 3], [1, 3, 3, 5]));  //➞ true
// console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8]));  //➞ true
// console.log(subset([1, 3], [1, 33]));  //➞ false
// console.log(subset([1, 3, 10], [10, 8, 8, 8]));  //➞ false



// 62 Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
// Examples

// function evenOrOdd(str) {
//     let arr = str.split("").map(Number);
//     let even = arr.filter(item => item % 2 === 0).reduce((a, b) => a + b, 0);
//     let odd = arr.filter(item => item % 2 !== 0).reduce((a, b) => a + b, 0);
//     if (even === odd) {
//         return "Even and Odd are the same";
//     }else if (even > odd) {
//         return "Even is greater than Odd";
//     }else {
//         return "Odd is greater than Even";
//     }
//  }

function evenOrOdd(str) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < str.length; i++) {
        let num = Number(str[i]);
        if (num % 2 === 0) {
            even += num;
        } else {
            odd += num
        }
    }
    if (even === odd) {
        return "Even and Odd are the same";
    } else if (even > odd) {
        return "Even is greater than Odd";
    } else {
        return "Odd is greater than Even";
    }
}

// console.log(evenOrOdd("22471"));  //➞ "Even and Odd are the same"
// console.log(evenOrOdd("213613"));  //➞ "Even and Odd are the same"
// console.log(evenOrOdd("23456"));  //➞ "Even is greater than Odd"



// 63 Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

// Examples

function miniPeaks(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]));  //➞ [5, 9]
// // 5 has neighbours 4 and 2, both are less than 5.
// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]));  //➞ [2, 3, 5]
// console.log(miniPeaks([1, 2, 3, 4, 5, 6]));  //➞ []



// 64 Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// [2, 3, 4, 5] ➞ 30
// (2 + 4) * 5 ➞ 30

// [1, 4, 5, 6, 7, 2, 3] ➞ 48
// (1 + 5 + 7 + 3) * 3 ➞ 48

// Examples

// function evenLast(arr) {
//     if (arr.length === 0) {
//         return 0
//     }
//     let result = 0;
//     for (let i = 0; i < arr.length; i += 2) {
//         result += arr[i];
//     }
//     return result * arr[arr.length - 1];
// }

function evenLast(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const sumEvenIndices = arr.reduce((sum, num, index) => {
        return index % 2 === 0 ? sum + num : sum;
    }, 0);
    return sumEvenIndices * arr[arr.length - 1];
}

// console.log(evenLast([]));  //➞ 0
// console.log(evenLast([1, 3, 3, 1, 10]));  //➞ 140
// console.log(evenLast([-11, 3, 3, 1, 10]));  //➞ 20



// 65 Spin Around, Touch The Ground
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that item.

// Examples

// function spinAround(arr) {
// let total = 0;
// arr.forEach(item => {
//     if (item === 'right') {
//         total += 90
//     } else if (item === 'left') {
//         total -= 90;
//     }
// });
// return Math.floor(Math.abs(total) / 360);


//     let total = arr.reduce((acc, item) => {
//         return item === 'right' ? acc + 90 : acc - 90;
//     }, 0);
//     return Math.floor(Math.abs(total) / 360);
// }

function spinAround(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'right') {
            total += 90;
        } else if (arr[i] === 'left') {
            total -= 90;
        }
    }
    return Math.floor(Math.abs(total) / 360);
}

// console.log(spinAround(["right", "right", "right", "right", "left", "right"]));  //➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)
// console.log(spinAround(["left", "right", "left", "right"]));  //➞ 0
// console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]));  //➞ 2
// console.log(spinAround(["left", "left", "left", "left"]));  //➞ 1



// 66 Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// Examples

function backToHome(str) {
    let vertical = 0;
    let horizontal = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "N") {
            vertical++
        } else if (str[i] === "S") {
            vertical--
        } else if (str[i] === "E") {
            horizontal++
        } else if (str[i] === "W") {
            horizontal--
        }
    }

    return vertical === 0 && horizontal === 0;
}

// console.log(backToHome("EEWE"));  //➞ false
// console.log(backToHome("NENESSWW"));  //➞ true
// console.log(backToHome("NEESSW"));  //➞ false



// 67 Sum of Odd and Even Numbers
// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.

// Example

// function sumOddAndEven(arr) {
//     let even = arr.filter(item => item % 2 === 0).reduce((a, b) => a + b, 0);
//     let odd = arr.filter(item => item % 2 !== 0).reduce((a, b) => a + b, 0); 
//     return [even, odd];
// }

function sumOddAndEven(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    return [even, odd];
}

// console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]));  //➞ [12, 9]
// // 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
// console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6]));  //➞ [-12, -9]
// console.log(sumOddAndEven([0, 0]));  //➞ [0, 0]



// 68 No Hidden Fees
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// Examples

// function hasHiddenFee(arr, str) {
//     let totalPrice = arr.reduce((sum, item) => sum + parseFloat(item.replace("$", '')), 0);
//     let total = parseFloat(str.replace('$', ''));
//     return total > totalPrice;
// }

function hasHiddenFee(arr, str) {
    let totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        totalPrice += parseFloat(arr[i].replace('$', ''));
    }
    let total = parseFloat(str.replace('$', ''));
    return total > totalPrice
}

// console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"));  //➞ false
// console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));  //➞ false
// console.log(hasHiddenFee(["$1"], "$4"));  //➞ true



// 69 Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

// Examples

function diceGame(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let [dice1, dice2] = arr[i];
        if (dice1 === dice2) {
            count += 0;
            break;
        }else {
            count += dice1 + dice2
        }
    }
    return count;
}

// console.log(diceGame([[1, 2], [3, 4], [5, 6]]));  //➞ 21
// console.log(diceGame([[1, 1], [5, 6], [6, 4]]));  //➞ 0
// console.log(diceGame([[4, 5], [4, 5], [4, 5]]));  //➞ 27



// 70 Count Letters in a Word Search
// Create a function that counts the number of times a particular letter shows up in the word search.

// Examples

// function letterCounter(arr, str) {
//     return arr.flat().filter(letter => letter === str).length
// }

function letterCounter(arr, str) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === str) {
                count++
            }
        }
    }
    return count;
}

console.log(letterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D"));  //➞ 3
// "D" shows up 3 times: twice in the first row, once in the third row.
console.log(letterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "H"));  //➞ 2