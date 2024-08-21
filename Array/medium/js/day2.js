// 11 Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples

// function clone(arr) {
// return [...arr, [...arr]]

//     return arr.concat([arr.slice()]);
// }

function clone(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    arr.push(result);
    return arr;
}

// console.log(clone([1, 1]));  //➞ [1, 1, [1, 1]]
// console.log(clone([1, 2, 3]));  //➞ [1, 2, 3, [1, 2, 3]]
// console.log(clone(["x", "y"]));  //➞ ["x", "y", ["x", "y"]]



// 12 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// Examples

// function marathonDistance(arr) {
//     let totalDistance = arr.reduce((acc, item) => acc + Math.abs(item), 0);
//     return totalDistance === 25;
// }

function marathonDistance(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += Math.abs(arr[i])
    }
    return result === 25;
}

// console.log(marathonDistance([1, 2, 3, 4]));  //➞ false
// console.log(marathonDistance([1, 9, 5, 8, 2]));  //➞ true
// console.log(marathonDistance([-6, 15, 4]));  //➞ true



// 13 Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples

// function testJackpot(arr) {
// return arr.every(element => element === arr[0]);

// return arr.filter(element => element === arr[0]).length === arr.length;

// return new Set(arr).size === 1;

// return arr.reduce((acc, item) => acc && item === arr[0]);
// }

function testJackpot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

// console.log(testJackpot(["@", "@", "@", "@"]));  //➞ true
// console.log(testJackpot(["abc", "abc", "abc", "abc"]));  //➞ true
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));  //➞ true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));  //➞ false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"]));  //➞ false



// 14 Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// Examples

// function findNemo(str) {
// let nemo = str.split(" ").indexOf("Nemo");
// return `I found Nemo at ${nemo + 1}!`

//     let nemo = str.split(' ').findIndex(word => word === "Nemo");
//     return `I found Nemo at ${nemo + 1}!`
// }

function findNemo(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "Nemo") {
            return `I found Nemo at ${i + 1}!`
        }
    }
}

// console.log(findNemo("I am finding Nemo !"));  //➞ "I found Nemo at 4!"
// console.log(findNemo("Nemo is me"));  //➞ "I found Nemo at 1!"
// console.log(findNemo("I Nemo am"));  //➞ "I found Nemo at 2!"



// 15 Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Examples

// function totalVolume(...arr) {
//     return arr.reduce((total, box) => {
//         const volume = box.reduce((acc, dim) => acc * dim,1);
//         return total + volume;
//     },0)
// }

function totalVolume(...arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i][0] * arr[i][1] * arr[i][2]
    }
    return result;
}

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));  //➞ 63
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));  //➞ 10
// console.log(totalVolume([1, 1, 1]));  //➞ 1



// 16 Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples 

// function indexMultiplier(arr) {
//     return arr.reduce((acc, item, value) => acc + item * value,0)
// }

function indexMultiplier(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i] * i
    }    
    return total
}

// console.log(indexMultiplier([1, 2, 3, 4, 5]));  //➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4) 
// console.log(indexMultiplier([-3, 0, 8, -6]));  //➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)



// 17 Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

// Examples

// function isSpecialArray(arr) {
//     return arr.every((element, index) => {
//         if (index % 2 === 0) {
//             return element % 2 === 0;
//         }else {
//             return element % 2 !== 0;
//         }
//     });
// }

function isSpecialArray(arr) {
    let even = arr.filter((element, i) => i % 2 === 0 && element % 2 !== 0);
    let odd = arr.filter((element, i) => i % 2 !== 0 && element % 2 === 0);

    return even.length === 0 && odd.length === 0
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));  //➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));  //➞ false
// // Index 2 has an odd number 9.
// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));  //➞ false
// Index 3 has an even number 8.



// 18 Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Examples

// function jazzify(arr) {
//     return arr.map(word => {
//         if (word.endsWith("7")) {
//             return word;
//         }
//         return word + "7"
//     });
// }

function jazzify(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (!word.endsWith("7")) {
            word += "7"
        }
        result.push(word);
    }
    return result;
}

// console.log(jazzify(["G", "F", "C"]));  //➞ ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"]));  //➞ ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));  //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([]));  //➞ []



// 19 Finding Adjacent Nodes
// A graph is a set of nodes and edges that connect those nodes.

// Graph Example

// There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).

// For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.

// We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.

// For the example above, the adjacency matrix would be as follows:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// A one indicates that a connection is true and a zero indicates a connection is false.

// Here is how the above model might be written out:

// On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
// On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
// On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
// On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
// Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.

// Examples
// Graph Example

// Adjacency Matrix:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// Nodes 0,1 should return true.
// Nodes 0,2 should return false.
// Graph Example 2

// [
//   [ 0, 1, 0, 1, 1 ],
//   [ 1, 0, 1, 0, 0 ],
//   [ 0, 1, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1 ],
//   [ 1, 0, 0, 1, 0 ]
// ]
// Nodes 0,3 should return true.
// Nodes 1,4 should return false.
// Finding Adjacent Nodes
// A graph is a set of nodes and edges that connect those nodes.

// Graph Example

// There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).

// For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.

// We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.

// For the example above, the adjacency matrix would be as follows:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// A one indicates that a connection is true and a zero indicates a connection is false.

// Here is how the above model might be written out:

// On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
// On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
// On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
// On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
// Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.

// Examples
// Graph Example

// Adjacency Matrix:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// Nodes 0,1 should return true.
// Nodes 0,2 should return false.
// Graph Example 2

// [
//   [ 0, 1, 0, 1, 1 ],
//   [ 1, 0, 1, 0, 0 ],
//   [ 0, 1, 0, 1, 0 ],
//   [ 1, 0, 1, 0, 1 ],
//   [ 1, 0, 0, 1, 0 ]
// ]
// Nodes 0,3 should return true.
// Nodes 1,4 should return false.



// 20 Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples

// function numbersSum(arr) {
//     return arr.filter(item => typeof item === 'number').reduce((acc, num) => acc + num, 0)
// }

function numbersSum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result += arr[i]
        }
    }
    return result
}

console.log(numbersSum([1, 2, "13", "4", "645"]));  //➞ 3
console.log(numbersSum([true, false, "123", "75"]));  //➞ 0
console.log(numbersSum([1, 2, 3, 4, 5, true]));  //➞ 15
