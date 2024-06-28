// 21 Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples

function arrayValuesTypes(arr) {
    const arr2 = arr.map((elem) => typeof elem);
    return arr2
}

// console.log( arrayValuesTypes([1, 2, "null", []]));
// //➞ ["number", "number", "string", "object"]
// console.log( arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
// //➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log( arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
//➞ ["number", "string", "string", "object", "object", "boolean", "number"]


// 22 Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Examples

function toNumberArray(arr) {
    return arr.map(Number);
}

// console.log(toNumberArray(["9.4", "4.2"])); //➞ [9.4, 4.2]
// console.log(toNumberArray(["91", "44"])  ); //➞ [91, 44]
// console.log(toNumberArray(["9.5", "8.8"])); //➞ [9.5, 8.8]


// 23 ES6: Destructuring Arrays IV
// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

const [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2


// 24 Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples

function checkSquareAndCube(num1,num2) {
    // const [num1, num2] = arr;
    // const square = Math.sqrt(num1);
    // const square2 = Math.cbrt(num2);
    // return square === square2;
}

// console.log(checkSquareAndCube([4, 8])  ); //➞ true
// console.log(checkSquareAndCube([16, 48])); //➞ false
// console.log(checkSquareAndCube([9, 27]) ); //➞ true


// 25 Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples

function totalAmountAdjectives(obj) {
    let total = 1;
    let key = Object.keys(obj);
    for (let i = 1; i < key.length; i++) {
        total++;
    }
    return total
}

// console.log(totalAmountAdjectives({ a: "moron" })); //➞ 1
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })); //➞ 3
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })); //➞ 4


// 26 ES6: Destructuring Arrays III
// You can assign variables from arrays with destructuring like this:

const arr = ["eyes", "nose", "lips", "ears"]
let [eyes, nose, lips, ears] = arr
// console.log(eyes);


// 27 Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples

function length(arr) {
    let count = 0;
    while (arr[count] != undefined)
        count++
    return count
}

// console.log(length("Hello World")     ); //➞ 11
// console.log(length("Edabit")          ); //➞ 6
// console.log(length("wash your hands!")); //➞ 16


// 28 Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples

function halfQuarterEighth(arr) {
    let arr2 = []
    for (i = 1; i <= 3; i++) {
        arr = (arr / 2)
        arr2.push(arr)
    }
    return arr2
}

// console.log(halfQuarterEighth(6) ); //➞ [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22)); //➞ [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25)); //➞ [12.5, 6.25, 3.125]


// 29 Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	
function nSidedShape(n){

let shape ={
1 :"circle" ,
2 :"semi-circle",
3 :"triangle",
4 :"square",
5 :"pentagon",
6 :"hexagon",
7 :"heptagon",
8 :"octagon",
9 :"nonagon",
10 :"decagon",
}

if (shape[n]) {
    return shape[n];
} 

}

// console.log(nSidedShape(3)); // ➞ "triangle"
// console.log(nSidedShape(1)); // ➞ "circle"
// console.log( nSidedShape(9)); // ➞ "nonagon"


// 30 Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples

function getMultipliedArr(arr) {
    return arr.map((value) => {
        return value * 2;
    })

}

// console.log(getMultipliedArr([2, 5, 3])); //➞ [4, 10, 6]
// console.log(getMultipliedArr([1, 86, -5])); //➞ [2, 172, -10]
// console.log(getMultipliedArr([5, 382, 0])); //➞ [10, 764, 0]


// 31 Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples

function wordLengths(arr1) {
    // let res = [];
    // for(let i = 0; i < arr.length; i++ ){
    //     res.push(arr[i].length);
    // }
    // return res;

    // return arr1.map((arr2) => {
    //     return arr2.length
    // })

    return arr1.length
}

console.log(wordLengths(["hello", "world"])); //➞ [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); //➞ [9, 12, 9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])); //➞ [3, 5, 9, 4, 2, 3, 8]