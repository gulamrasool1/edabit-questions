// 16 Return Sole Element in a Set
// Given a set containing an element, return the sole element.

// Examples

function elementSet(set) {
    let iterator= set.values();
    return iterator.next().value;
}

const first = new Set();
first.add(1); 
// console.log(elementSet(first)); //➞ 1

const second = new Set();
second.add("apple"); 
// console.log(elementSet(second));  //➞ "apple"

const third  = new Set();
third.add(false); 
// console.log(elementSet(third)); //➞ false



// 17 Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// Examples

// function concatenatevalue(obj) {
//     let values = Object.values(obj)
//     let concat = values.join(' ');
//     let secondvalue = obj[2];
//     return concat + " " + secondvalue;
// }

function concatenatevalue(obj) {
    let result = '';
    let secondvalue = '';
    let key = Object.keys(obj);

    for (let i = 0; i < key.length; i++) {
        if (i > 0) {
            result += ' ';
        }
        result += obj[key[i]];
        if (i === 1) {
            secondvalue = obj[key[i]];
        }
    }
    result += ' ' + secondvalue;
    return result;
}

// console.log(concatenatevalue({ 1: "Mommy", 2: "please", 3: "help" }));  //➞ "Mommy please help please"
// console.log(concatenatevalue({ 1: "Me", 2: "innocent", 3: "is" }));  //➞ "Me innocent is innocent"
// console.log(concatenatevalue({ 1: "Must", 2: "lawyer", 3: "call" }));  //➞ "Must lawyer call lawyer"



// 18 Learn Lodash: isEqual, Check if Two Items Are Equal
// Write your own version of the lodash _.isEqual function using vanilla JavaScript (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal. You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.

// This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed, but regular JavaScript comparison is too strict.

// Arguments
// value (can be anything): The first value to compare.
// other (can be anything): The other value to compare against.
// returns: (boolean): Returns true if they are the same, otherwise false.
// Examples
// const objects =
// var object = { "a": 1 }
// var other = { "a": 1 }
// isEqual(object, other)
// returns true
// object === other
// returns false



// 19 Find the Bug: Returning Valid Units of Measure
// There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

// The return value should be a Boolean.

// Expected results

// function hasValidUnitOfMeasure(product = {}) {
//     const validUnits = ["L", "PCE"];
//     if (validUnits.includes(product.unitOfMeasure)) {
//         return true;
//     }
//     return !!product.comment;
// }

function hasValidUnitOfMeasure(product = {}) {
    const validUnits = ['L', 'PCE'];

    for (let i = 0; i < validUnits.length; i++) {
        if (product.unitOfMeasure === validUnits[i]) {
            return true
        }
    }
    return !!product.comment;
}

// console.log(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" }));  //➞ true
// console.log(hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" }));  //➞ false
// console.log(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false }));  //➞ false
// console.log(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" }));  //➞ false



// // 20 ES6: Destructuring Objects II
// const obj =  { one : 1, two : 2 }

// const { one: anotherOne, two } = obj
// console.log(anotherOne);
// console.log(two);

// We can assign variables by the same name properties of objects, but what if I wanted to assign obj.one to a different name like anotherOne?

// Use ES6 object destructuring to assign obj.one to the variable anotherOne. Variable two needs to remain assigned to obj.two. Ignore the .toString() function (used for validation).



// 21 Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples

// function hasKey(obj, key) {
    // return key in obj

    // return obj.hasOwnProperty(key);

//     return Object.keys(obj).includes(key);
// }

function hasKey(obj, key) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
            return true;
        }
    }
    return false;
}

// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));  //➞ false
// console.log(hasKey({ craves: true, midnight: true, snack: true },("morning")));  //➞ false
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));  //➞ true



// 22 ES6: Destructuring Objects I
// In JavaScript, you can do basic object assignment like this:

const obj =  { one : 1, two : 2 }

let one = obj.one
let two = obj.two
console.log(one,two);

// However, with ES6 you can assign the variables in a much more succinct way. Use ES6 object destructuring to assign variables one and two to obj.one and obj.two respectively.

// Although you can use let, var, or const for assignment, DO NOT use these in this challenge.
