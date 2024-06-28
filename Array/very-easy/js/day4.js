// 33 Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples

function findDifference(arr1, arr2) {
    let product1 = 1;
    let product2 = 1;

    for (let i = 0; i < arr1.length; i++) {
        product1 *= arr1[i];
        product2 *= arr2[i];
    }

    return Math.abs(product1 - product2);
}

// console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ); //➞ 12040
// console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ])); //➞ 276
// console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ])   ); //➞ 405
// console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ])  ); //➞ 5412


// 34 Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples

function spaceMeOut(str) {
    return str.split('').join(' ')
}

// console.log(spaceMeOut("space")         ); //➞ "s p a c e"
// console.log(spaceMeOut("far out")       ); //➞ "f a r   o u t"
// console.log(spaceMeOut("elongated musk")); //➞ "e l o n g a t e d   m u s k"


//  35 ES6: Destructuring Arrays II
// You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles", "airplane"]]]

let [trans1, trans2, [trans3, [trans4, trans5]]] = arr
// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"
// console.log(trans5) // outputs "airplane"


// 36 Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples

function getSumOfItems(arr) {
    return arr.reduce((num1, num2) => num1 + num2);
}

// console.log(getSumOfItems([2, 7, 4])   ); //➞ 13
// console.log(getSumOfItems([45, 3, 0])  ); //➞ 48
// console.log(getSumOfItems([-2, 84, 23])); //➞ 105


// 37 Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples

function evenOrOdd(arr) {
    let sum = arr.reduce((odd, even) => odd + even, 0)
    return sum % 2 === 0 ? "even" : "odd";
}

// console.log(evenOrOdd([0])      ); //➞ "even"
// console.log(evenOrOdd([1])      ); //➞ "odd"
// console.log(evenOrOdd([])       ); //➞ "even"
// console.log(evenOrOdd([0, 1, 5])); //➞ "even"


// 38 Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples

function invertArray(arr) {
    return arr.map(num => -num)
}

// console.log(invertArray([1, 2, 3, 4, 5])  );  //➞ [-1, -2, -3, -4, -5]
// console.log(invertArray([1, -2, 3, -4, 5]));  //➞ [-1, 2, -3, 4, -5]
// console.log(invertArray([])               );  //➞ []


// 39 Rotate the Array by One 🔄
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples

function rotateByOne(arr) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

// console.log(rotateByOne([1, 2, 3, 4, 5])   );  //➞ [5, 1, 2, 3, 4]
// console.log(rotateByOne([6, 5, 8, 9, 7])   );  //➞ [7, 6, 5, 8, 9]
// console.log(rotateByOne([20, 15, 26, 8, 4]));  //➞ [4, 20, 15, 26, 8]


// 40 Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples

function getFilename(str) {
    let arr = str.split("/");
    let res = arr.slice(-1);
    return res.join("");
}

// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt")  );  //➞ "edabit.txt"
// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));  //➞ "Beethoven_5.mp3"
// console.log(getFilename("ffprobe.exe")                             );  //➞ "ffprobe.exe"


// 41 Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples

function skipTooMuchSugarDrinks(arr) {

    return arr.filter(drink => drink !== "fanta" && drink !== "cola");

}

// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"])   );  //➞ ["water"]
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"])            );  //➞ []
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));  //➞ ["lemonade", "beer", "water"]


// 42 Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples

function addIndexes(arr) {
    return arr.map((num1, num2) => num1 + num2);
}

// console.log(addIndexes([0, 0, 0, 0, 0])); //➞ [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5])); //➞ [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1])); //➞ [5, 5, 5, 5, 5]


// 43 Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples

function sumFive(arr) {
   return arr.reduce((acc,sum)=>{
   if(sum >5){
    return acc + sum
   }else{
    return acc
   }
   },0)

}

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));  //➞ 77
// console.log(sumFive([1, 2, 3, 4]));  //➞ 0
// console.log(sumFive([10, 12, 28, 47, 55, 100]));  //➞ 252


// 44 Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples

function rangeOfNum(start , end) {
    let res = [];
    for(let i = start + 1; i < end ; i++){
        res.push(i);
    }
    return res
}

// console.log(rangeOfNum(2, 4) );  //➞ [3]
// console.log(rangeOfNum(5, 9) );  //➞ [6, 7, 8]
// console.log(rangeOfNum(2, 11));  //➞ [3, 4, 5, 6, 7, 8, 9, 10]


// 45 Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples

function filterArray(arr) {
    return arr.filter((str)=> Number(str));
}

// console.log(filterArray([1, 2, 3, "a", "b", 4])                    ); //➞ [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); //➞ [0, 1729]
// console.log(filterArray(["Nothing", "here"])                       ); //➞ []


// 46Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// Examples

function binaryToDecimal(binary) {
   return  parseInt(binary.join(''),2)
}

// console.log(binaryToDecimal([0, 0, 0, 1])); //➞ 1
// console.log(binaryToDecimal([0, 0, 1, 0])); //➞ 2
// console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1])); //➞ 1005
