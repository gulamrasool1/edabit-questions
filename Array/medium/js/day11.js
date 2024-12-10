// 101 Count the Towers
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



// 102 Balancing Scales
// Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

// Examples

// function scaleTip(arr) {
//     let index = arr.indexOf("i");
//     let leftSum = arr.slice(0, index).reduce((sum, num) => sum + num);
//     let rightSum = arr.slice(index + 1).reduce((sum, num) => sum + num);

//     if (leftSum > rightSum) {
//         return "left";
//     } else if (rightSum > leftSum) {
//         return "right";
//     } else {
//         return "balanced";
//     }
// }

function scaleTip(arr) {
    let result = -1;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "i") {
            result = i;
        } else if (result === -1) {
            leftSum += arr[i];
        } else {
            rightSum += arr[i];
        }
    }
    if (leftSum > rightSum) {
        return "left";
    } else if (rightSum > leftSum) {
        return "right";
    } else {
        return "balanced";
    }
}

// console.log(scaleTip([0, 0, "i", 1, 1]));  //➞ "right"
// 0 < 2 so it will tip right
// console.log(scaleTip([1, 2, 3, "i", 4, 0, 0]));  //➞ "left"
// 6 > 4 so it will tip left
// console.log(scaleTip([5, 5, 5, 0, "i", 10, 2, 2, 1]));  //➞ "balanced"
// 15 = 15 so it will stay balanced



// 103 Sum of Array Elements Except Itself
// An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.

// Clarification
// [1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
// [1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
// [1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
// [1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]

// Examples

// function arrEleSum(arr) {
//     let totalSum = 0;
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         totalSum += arr[i];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         result.push(totalSum - arr[i]);
//     }
//     return result;
// }

function arrEleSum(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    return arr.map(num => totalSum - num);
}

// console.log(arrEleSum([1, 2, 3, 2, 1]));  //➞ [8, 7, 6, 7, 8]
// console.log(arrEleSum([1, 2]));  //➞ [2, 1]
// console.log(arrEleSum([1, 2, 3]));  //➞ [5, 4, 3]
// console.log(arrEleSum([1, 2, 3, 4, 5]));  //➞ [14, 13, 12, 11, 10]
// console.log(arrEleSum([10, 20, 30, 40, 50, 60]));  //➞ [200, 190, 180, 170, 160, 150]



// 104 All Numbers in Array Are Prime
// Create a function that takes an array of integers and returns true if every number is prime. Otherwise, return false.

// Examples

// function allPrime(arr) {
//     return arr.every(num => {
//         if (num < 2) {
//             return false;
//         }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }

function allPrime(arr) {
    let result = false;
    return arr.reduce((acc, number) => {
        if (number < 2) {
            return result;
        } else if (number === 2) {
            result = true;
        } else if (number > 2 && number % 2 === 1) {
            return result;
        }
        return acc;
    }, false);
}


// console.log(allPrime([7, 5, 2, 4, 6]));  //➞ false
// console.log(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]));  //➞ true
// console.log(allPrime([1, 5, 3]));  //➞ false



// 105 Burglary Series (06): Convert to Number
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.

// Examples

// function convertToNumber(obj) {
//     return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, +v]));
// }

function convertToNumber(obj) {
    return Object.keys(obj).reduce((result, key) => {
        result[key] = +obj[key];
        return result;
    }, {});
}

// console.log(convertToNumber({ piano: "200" }));  ///➞ { piano: 200 }
// console.log(convertToNumber({ piano: "200", tv: "300" }));  ///➞ { piano: 200, tv: 300 }
// console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" }));  ///➞ { piano: 200, tv: 300, stereo: 400 }



// 106 Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples

// function mostExpensiveItem(obj) {
//     return Object.keys(obj).reduce((high, item) => {
//         return obj[item] > obj[high] ? item : high;
//     });
// }

function mostExpensiveItem(obj) {
    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1])[0][0];
}

// console.log(mostExpensiveItem({
//     piano: 2000,
// }));  //➞ "piano"
// console.log(mostExpensiveItem({
//     tv: 30,
//     skate: 20,
// }));  //➞ "tv"
// console.log(mostExpensiveItem({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
// }));  //➞ "stereo"



// 107 Total Count of Numbers in a MultiDimensional Array
// Create a function that takes a multidimensional array and return the total count of numbers in that array.

// Examples

// function countNumber(arr) {
//     return arr.flat(Infinity).filter(item => typeof item === 'number').length;
// }

function countNumber(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count += countNumber(arr[i]);
        } else if (typeof arr[i] === 'number') {
            count++;
        }
    }
    return count;
}

// console.log(countNumber([["", 17.2, 5, "edabit"]]));  //➞ 2
// 17.2 and 5.
// console.log(countNumber([[[[[2, 14]]], 2, 3, 4]]));  //➞ 5
// 2, 14, 2, 3 and 4.
// console.log(countNumber([["balkot"]]));  //➞ 0



// 108 Edabit Experience Points
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

// Difficulty	Experience Points
// Very Easy	5XP
// Easy	10XP
// Medium	20XP
// Hard	40XP
// Very Hard	80XP
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

// Examples

// function getXP(obj) {
//     let experiencePoints = {
//         "Very Easy": 5,
//         "Easy": 10,
//         "Medium": 20,
//         "Hard": 40,
//         "Very Hard": 80
//     };

//     let total = 0;
//     let keys = Object.keys(obj);
//     for (let i = 0; i < keys.length; i++) {
//         total += obj[keys[i]] * experiencePoints[keys[i]];
//     }
//     return total + "XP";
//     // return values
//     // let veryEasy = 89 * 5;
//     // let easy = 77 * 10;
//     // let medium = 30 * 20;
//     // let hard = 40 * 4;
//     // let veryHard = 80 * 1;
//     // return veryEasy + easy + medium + hard + veryHard;
// }

function getXP(obj) {
    let experiencePoints = {
        "Very Easy": 5,
        "Easy": 10,
        "Medium": 20,
        "Hard": 40,
        "Very Hard": 80
    };

    let total = Object.keys(obj).reduce((sum, item) => sum + obj[item] * experiencePoints[item], 0);

    return total + "XP";
}

// console.log(getXP({
//     "Very Easy": 89,
//     "Easy": 77,
//     "Medium": 30,
//     "Hard": 4,
//     "Very Hard": 1
// }));  //➞ "2055XP"
// console.log(getXP({
//     "Very Easy": 254,
//     "Easy": 32,
//     "Medium": 65,
//     "Hard": 51,
//     "Very Hard": 34
// }));  //➞ "7650XP"
// console.log(getXP({
//     "Very Easy": 11,
//     "Easy": 0,
//     "Medium": 2,
//     "Hard": 0,
//     "Very Hard": 27
// }));  //➞ "2255XP"



// 109 Stalactites or Stalagmites?
// Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.

// Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.

// Examples

function mineralFormation(arr) {
    let firstArr = arr[0];
    let lastArr = arr[arr.length - 1];
    let Stalactites = firstArr.includes(1);
    let Stalagmites = lastArr.includes(1);

    if (Stalactites && Stalagmites) {
        return "both";
    } else if (Stalactites) {
        return "stalactites";
    } else if (Stalagmites) {
        return "stalagmites";
    }
}

// console.log(mineralFormation([
//   [0, 1, 0, 1],
//   [0, 1, 0, 1],
//   [0, 0, 0, 1],
//   [0, 0, 0, 0]
// ]));  //➞ "stalactites"
// console.log(mineralFormation([
//   [0, 0, 0, 0],
//   [0, 1, 0, 1],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1]
// ]));  //➞ "stalagmites"
// console.log(mineralFormation([
//   [1, 0, 1, 0],
//   [1, 1, 0, 1],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1]
// ]));  //➞ "both"



// 110 Array Multiplier
// Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.

// Examples

// function multiply(arr) {
// let length = arr.length;
// return arr.map(elem => Array(length).fill(elem));   
// }

function multiply(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let nestedArr = [];
        for (let j = 0; j < arr.length; j++) {
            nestedArr.push(arr[i]);
        }
        result.push(nestedArr);
    }
    return result;
}

console.log(multiply([4, 5]));  //➞ [[4, 4], [5, 5]]
console.log(multiply(["*", "%", "$"]));  //➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]
console.log(multiply(["A", "B", "C", "D", "E"]));  //➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]