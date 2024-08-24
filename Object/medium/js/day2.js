// 11 ES6: Destructuring Objects IV
const obj =  { first: "James", last: "Baker" } 
var { first = "John", last = "Doe", nickname = "JD" } = obj
// console.log(nickname) // outputs nickname is not defined
// There may be times where we would like the property name to be different from the object property names we receive and also give those new property names a default value.

// Question
// Use ES6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD". Ignore the .toString() function (used for validation).



// 12 Online Shopping
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// Examples

// function freeShipping(obj) {
//     let total = Object.values(obj).reduce((acc, item) => acc + item);
//     return total > 50
// }

function freeShipping(obj) {
    let result = 0;
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        let item = keys[i];
        result += obj[item]
    }
    return result > 50
}

// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));  //➞ false
// console.log(freeShipping({ "Flatscreen TV": 399.99 }));  //➞ true
// console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));  //➞ true



// 13 Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// Examples

// function mapping(arr) {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         let lower = arr[i];
//         let upper = arr[i].toUpperCase();

//         result[lower] = upper
//     }
//     return result
// }

function mapping(arr) {
    // let entries = arr.map(letter => [letter, letter.toUpperCase()]);
    // return Object.fromEntries(entries);

    return arr.reduce((acc, letter) => {
        acc[letter] = letter.toUpperCase();
        return acc
    }, {});
}

// console.log(mapping(["p", "s"]));  //➞ { "p": "P", "s": "S" }
// console.log(mapping(["a", "b", "c"]));  //➞ { "a": "A", "b": "B", "c": "C" }
// console.log(mapping(["a", "v", "y", "z"]));  //➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }



// 14 Burglary Series (03): Is It Gone?
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

// Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:

// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.
// Note that the first letter of the name in the return statement is capitalized.

// Examples

function solve(stolenItems, petName) {
    let capital = petName.charAt(0).toUpperCase() + petName.slice(1);

    if (stolenItems.hasOwnProperty(petName)) {
        return `${capital} is gone...`;
    }else{ 
        return `${capital} is here!`;
    }
}

// const obj1 = {
//   tv: 30,
//   timmy: 20,
//   stereo: 50,
// }
// console.log(solve(obj1, 'timmy'));
// //➞ "Timmy is gone..."
// // Timmy is in the object.

// const obj2 = {
//   tv: 30,
//   stereo: 50,
// }
// console.log(solve(obj2, 'timmy'));
// //➞ "Timmy is here!"
// // Timmy is not in the stolen list object.

// const obj3 = { } 
// console.log(solve(obj3, 'timmy'));

// //➞ "Timmy is here!"
// // Timmy is not in the object.



// 15 ES6: Destructuring Objects X
// Given an array of user objects.

// let names = []

// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]

// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name)
// }

// console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]
// Push the first names of all users in the names array.



// 16 Can You Spare a Square?
// Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?

// Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.

// Create a function that will receive an object with two key/values:

// people ⁠— Number of people in the household.
// tp ⁠— Number of rolls.
// Return a statement telling the user if they need to buy more TP!

// Examples

function tpChecker(obj) {
    
}

console.log(tpChecker({ people: 4, tp: 1 }));  //➞ "Your TP will only last 2 days, buy more!"
console.log(tpChecker({ people: 3, tp: 20 }));  //➞ "Your TP will last 58 days, no need to panic!"
console.log(tpChecker({ people: 4, tp: 12 }));  //➞ "Yur TP will last 26 days, no need to panic!"