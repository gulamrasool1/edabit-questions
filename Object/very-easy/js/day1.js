// 1 Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples

// function getVoteCount(votes) {
// return votes.upvotes - votes.downvotes

// const [upvotes, downvotes] = Object.values(votes);
// return upvotes - downvotes

// let allValue = Object.values(votes)
// return allValue[0] - allValue[1] 

//     let allValue = Object.values(votes);
//     return allValue.reduce((acc, item) => acc - item);
// }

function getVoteCount(votes) {
    let upvotes = 0;
    let downvotes = 0;

    let allValue = Object.keys(votes);

    for (let i = 0; i < allValue.length; i++) {
        if (allValue[i] === 'upvotes') {
            upvotes = votes[allValue[i]]
        } else if (allValue[i] === 'downvotes') {
            downvotes = votes[allValue[i]]
        }
    }
    return upvotes - downvotes;
}

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));  //➞ 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));  //➞ -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));  //➞ 0



// 2 Burglary Series (19): Prevent Changes
// The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

// Examples
// const obj = { noChanges: true }

// function preventChanges(obj) {
//     // Write your code here, don't use a return statement

//     Object.freeze(obj)
//     obj.noChanges = false;
//     obj.signature = "whatever"
//     return obj;

// }   //➞ { noChanges: true }

// const result = preventChanges(obj)
// console.log(result);



// 3 Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples

// function volumeOfBox(sizes) {
// return sizes.width * sizes.length * sizes.height;

// let [width, length, height] = Object.values(sizes);
// return width * length * height

// let value = Object.values(sizes);
// return value[0] * value[1] * value[2];

//     let values = Object.values(sizes);
//     return values.reduce((acc,cur) => acc * cur);
// }

function volumeOfBox(sizes) {
    let values = [sizes.width, sizes.length, sizes.height];
    let volume = 1;
    for (let i = 0; i < values.length; i++) {
        volume *= values[i]
    }
    return volume;
}

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));  //➞ 10
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));  //➞ 16
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));  //➞ 30



// 4 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples

// function fiftyThirtyTwenty(num) {
//     let needs = num * 0.5;
//     let wants = num * 0.3;
//     let savings = num * 0.2;

//     return {
//         "Needs": needs,
//         "Wants": wants,
//         "Savings": savings
//     };
// }

function fiftyThirtyTwenty(num) {
    let keys = ['Needs', 'Wants', 'Savings'];
    let percentages = [0.5, 0.3, 0.2];
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = num * percentages[i];
    }
    return result;
}

// console.log(fiftyThirtyTwenty(10000));  //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000));  //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450));  //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }



// 5 Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples

// function relationToLuke(str) {
//     let relation;

//     if (str === "Darth Vader") {
//         relation = "father"
//     }else if (str === 'Leia') {
//         relation = 'sister'
//     }else if (str === 'Han') {
//         relation = 'brother in law'
//     }

//     return `Luke, I am your ${relation}`
// }

function relationToLuke(str) {
    let relations = {
        'Darth Vader': 'father',
        'Leia': 'sister',
        'Han': 'brother in law'
    }

    let relation = relations[str];
    return `Luke I am your ${relation}`;
}

// console.log(relationToLuke("Darth Vader"));  //➞ "Luke, I am your father."
// console.log(relationToLuke("Leia"));  //➞ "Luke, I am your sister."
// console.log(relationToLuke("Han"));  //➞ "Luke, I am your brother in law."



// 6 Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples

// function cityFacts(city) {
// return `${city.name} has a population ${city.population} and is situated in ${city.continent}`

// return city.name + " has a population of " + city.population + " and is situated in " + city.continent;


//     let parts = [
//         city.name,
//         'has a population of',
//         city.population,
//         'and is situated in',
//         city.continent
//     ]
//     return parts.join(" ");
// }


function cityFacts(city) {
    const parts = [
        city.name,
        "has a population of",
        city.population,
        "and is situated in",
        city.continent
    ];

    let result = parts[0];
    for (let i = 0; i < parts.length; i++) {
        result += " " + parts[i];
    }
    return result;
}

// console.log(cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }));  //➞ "Paris has a population of 2,140,526 and is situated in Europe"
// console.log(cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }));  //➞ "Tokyo has a population of 13,929,286 and is situated in Asia"



// 7 Destructuring Assignment
// You can assign variables from arrays like this:

// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// first = arr[0]
// second = arr[1]
// third = arr[2]
// other = arr.slice(3)

// console.log(first)  //➞ outputs 1
// console.log(second)  //➞ outputs 2
// console.log(third)  //➞ outputs 3
// console.log(other)  //➞ outputs [4, 5, 6, 7, 8]
// However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).

// Examples

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
first = arr[0];
second = arr[1];
third = arr[2];
other = arr.slice(3);

// console.log(first);  //➞ 1
// console.log(second);  //➞ 2
// console.log(third);  //➞ 3
// console.log(other);  //➞ [4, 5, 6, 7, 8]
// Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.



// 8 Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples

// function totalAmountAdjectives(obj) {
// return Object.keys(obj).length
// }

function totalAmountAdjectives(obj) {
    let count = 0;
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        count++;
    }
    return count;
}

// console.log(totalAmountAdjectives({ a: "moron" }));  //➞ 1
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));  //➞ 3
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));  //➞ 4



// 9 ES6: Destructuring Objects VIII
// Using basic object destructuring you can assign variables name and email:

// let { name, email } = { name: "John", email: "john@example.com" }

// console.log(name)  // "John"
// console.log(email)  // "john@example.com"
// What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:

let { name, email, ...rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }

// console.log(name);
// console.log(email);
// console.log(rest);

// rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true
// There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. You can find out how in the MDN docs in the Resources tab.

// Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. Only edit the left side of the assignment { name, email, rest }. Ignore the .toString() function (used for validation).



// 10 ES6: Destructuring Objects III
const obj = { two: 2 }
var { one, two } = obj
// console.log(one) // outputs undefined
// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).



// 11 Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples

// function nSidedShape(num) {
//     const shapes = {
//         1: "circle",
//         2: "semi-circle",
//         3: "triangle",
//         4: "square",
//         5: "pentagon",
//         6: "hexagon",
//         7: "heptagon",
//         8: "octagon",
//         9: "nonagon",
//         10:	"decagon"
//     };
//     return shapes[num];
// }

function nSidedShape(num) {
    const shapes = [
        "circle",
        "semi-circle",
        "triangle",
        "square",
        "pentagon",
        "hexagon",
        "heptagon",
        "octagon",
        "nonagon",
        "decagon"
    ];
    for (let i = 0; i < shapes.length; i++) {
        if (i + 1 === num) {
            return shapes[i];
        }
    }
}

// console.log(nSidedShape(3));  //➞ "triangle"
// console.log(nSidedShape(1));  //➞ "circle"
// console.log(nSidedShape(9));  //➞ "nonagon"



// 12 First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// Examples

// function determineLever(arr) {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[0] === 'e' && arr[1] === 'f' && arr[2] === 'l') {
//             result = 'first class level'   
//         } else if (arr[0] === 'e' && arr[1] === 'l' && arr[2] === 'f') {
//             result = 'second class lever'
//         } else if (arr[0] === 'f' && arr[1] === 'e' && arr[2] === 'l') {
//             result = 'third class lever'
//         }
//     }
//     return result;
// }

function determineLever(arr) {
    const result = {
        'efl': "first class lever",
        'elf': "second class lever",
        'fel': "third class lever"
    }
    let key = `${arr[0]}${arr[1]}${arr[2]}`
    return result[key];
}

// console.log(determineLever(["e", "f", "l"]));  //➞ "first class lever"
// console.log(determineLever(["e", "l", "f"]));  //➞ "second class lever"
// console.log(determineLever(["f", "e", "l"]));  //➞ "third class lever"



// 13 Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
// Examples

class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge(){
        return `${this.name} is age ${this.age}`;
    }
    getHeight(){
        return `${this.name} is age ${this.height}cm`;
    }
    getWeight(){
        return `${this.name} is age ${this.weight}kg`;
    }
}

p1 = new Player("David Jones", 25, 175, 75)

// console.log(p1.getAge());  //➞ "David Jones is age 25"
// console.log(p1.getHeight());  //➞ "David Jones is 175cm"
// console.log(p1.getWeight());  //➞ "David Jones weighs 75kg"



// 14 Check if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// Examples

function isInRange(num, math) {
    
}

console.log(isInRange(4, { min: 0, max: 5 })); //➞ true
console.log(isInRange(4, { min: 4, max: 5 })); //➞ true
console.log(isInRange(4, { min: 6, max: 10 }));  //➞ false
console.log(isInRange(5, { min: 5, max: 5 })); //➞ true