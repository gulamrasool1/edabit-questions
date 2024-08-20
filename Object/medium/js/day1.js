// 1 Burglary Series (04): Add its Name
// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples

// function addName(obj, name, value) {
// obj[name] = value;
// return obj;

// return { ...obj, [name]: value };

// return Object.assign({}, obj, { [name]: value });
// }

function addName(obj, name, value) {
    let entries = Object.entries(obj);

    entries.push([name, value]);
    return Object.fromEntries(entries);
}

// console.log(addName({}, "Brutus", 300));  //➞ { Brutus: 300 }
// console.log(addName({ piano: 500 }, "Brutus", 400));  //➞ { piano: 500, Brutus: 400 }
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));  //➞ { piano: 500, stereo: 300, Caligula: 440 }



// 2  Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples

// function generation(num, str) {
//     const generation = {
//                 "2": { "f": "granddaughter" },
//                 "-3": { "m": "great grandfather" },
//                 "1": { "f": "daughter" }
//             };
//             return generation[num][str];
// }

function generation(num, str) {
    if (num === 2) {
        return str === "f" ? "granddaughter" : "grandson";
    } else if (num === -3) {
        return str === "m" ? "great grandfather" : "great grandmother";
    } else if (num === 1) {
        return str === "f" ? "daughter" : "son";
    }
}

// console.log(generation(2, "f"));  //➞ "granddaughter"
// console.log(generation(-3, "m"));  //➞ "great grandfather"
// console.log(generation(1, "f"));  //➞ "daughter"



// 3 Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples

// function toArray(obj) {    
//     return Object.entries(obj)
// }

function toArray(obj) {
    let result = [];
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        result.push([keys[i], obj[keys[i]]])
    }
    return result;
}

// console.log(toArray({ a: 1, b: 2 }));  //➞ [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 }));  //➞ [["shrimp", 15], ["tots", 12]]
// console.log(toArray({}));  //➞ []



// 4 Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let circy1 = new Circle(11)
// console.log(circy1.getArea());
// Should return 380.132711084365
let circy2 = new Circle(4.44)
// console.log(circy2.getPerimeter());
// Should return 27.897342763877365



// 5 Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples

// function keysAndValues(obj) {
// let keys = Object.keys(obj)
// let values = Object.values(obj)
// return [keys, values]


//     let entries = Object.entries(obj);
//     let keys = entries.map(entry => entry[0]);
//     let values = entries.map(entry => entry[1]);
//     return [keys, values];
// }

function keysAndValues(obj) {
    let keys = [];
    let values = [];
    let entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i++) {
        keys.push(entries[i][0]);
        values.push(entries[i][1]);
    }
    return [keys, values];
}

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
//  //➞ [["a", "b", "c"], [1, 2, 3]]
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
//  //➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
 //➞ [["key1", "key2", "key3"], [true, false, undefined]]



// 6 Convert Key, Values in an Object to Array
//  Write a function that converts an object into an array of keys and values.

// Examples

// function objectToArray(obj) {
//     return Object.entries(obj)
// }

function objectToArray(obj) {
    let result = [];
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        result.push([keys[i], obj[keys[i]]])
    }
    return result;
}

// console.log(objectToArray({
//     D: 1,
//     B: 2,
//     C: 3
// }));  //➞[["D", 1], ["B", 2], ["C", 3]]
// console.log(objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
// }));  //➞[["likes", 2], ["dislikes", 3], ["followers", 10]]



// 7 Rounding in Millions
// Given an array of cities and populations, return an array where all populations are rounded to the nearest million.

// Examples

function millionsRounding(arr) {
    return arr.map(([city, population])=> [
        city,
        Math.round(population / 1000000) * 1000000
    ]);
}

// console.log(millionsRounding([
//   ["Nice", 942208],
//   ["Abu Dhabi", 1482816],
//   ["Naples", 2186853],
//   ["Vatican City", 572]
// ]));
// ➞ [
//   ["Nice", 1000000],
//   ["Abu Dhabi", 1000000],
//   ["Naples", 2000000],
//   ["Vatican City", 0]
// ]



// 8 Is it an Object?
// Create a function to check whether the given parameter is an Object or not.

// Examples

function isObject(param) {
    return typeof param === 'object' && param !== null || typeof param === 'function';
}

// console.log(isObject(function add(x,y) {return x + y}));  //➞ true
// console.log(isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')));  //➞ true
// console.log(isObject(null));  //➞ false
// console.log(isObject(""));  //➞ false



// 9 Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples

function getBudgets(arr) {
    // return arr.reduce((acc, item) => acc + item.budget,0)

    return arr.map(obj => obj.budget).reduce((acc, item) => acc + item)


    // let result = 0;
    // arr.forEach(obj => {
    //     result += obj.budget;
    // });
    // return result;
}

// function getBudgets(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i].budget
//     }
//     return result;
// }

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]));  //➞ 65700
// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]));  //➞ 62600



// 10 Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples

// function stolenItems(obj) {
//     let total = Object.values(obj).reduce((acc,item) => acc + item,0);
//     return total > 0 ? total : "Lucky you!"
// }

function stolenItems(obj) {
    let total = 0;
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        total += obj[keys[i]];
    }
    return total > 0 ? total : "Lucky you!";
}

console.log(stolenItems({
  tv: 30,
  skate: 20,
  stereo: 50,
}));  //➞ 100
console.log(stolenItems({
  painting: 20000,
}));  //➞ 20000
console.log(stolenItems({}));  //➞ "Lucky you!"
