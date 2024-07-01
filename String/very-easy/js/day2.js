// 16 Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// Examples

function newWord(str) {
    // return str.slice(1)

    // return str.substring(1);

    return str.substr(1)
}

// console.log(newWord("apple")); //➞ "pple"
// console.log(newWord("cherry"));  //➞ "herry"
// console.log(newWord("plum"));//➞ "lum"



// 17 Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// Examples

function helloName(str) {
    // return "Hello " + str +"!";

    return `Hello ${str}!`
}

// console.log(helloName("Gerald"));  //➞ "Hello Gerald!"
// console.log(helloName("Tiffany"));  //➞ "Hello Tiffany!"
// console.log(helloName("Ed"));  //➞ "Hello Ed!"



// 18 Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples

function arrayToString(arr) {
    // return arr.join("");

    return arr.toString("").split(",").join("")
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));  //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));  //➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));  //➞ "123asdAAAA"



// 19 Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples

// function findIndex(arr, str) {
//     return arr.indexOf(str);
// }

function findIndex(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i;
        }
    }
    return -1;
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));  //➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));  //➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d"));  //➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));  //➞ 0



// 20 Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples

function word(str) {
    const wordToNumber = {
        "one":	1,
        "two":	2,
        "three": 3,
        "four":	4,
        "five":	5,
        "six":	6,
        "seven": 7,
        "eight": 8,
        "nine":	 9,
        "zero":  10,
    };

    return wordToNumber[str];
}

// console.log(word("one")); //➞ 1
// console.log(word("two")); //➞ 2
// console.log(word("nine"));  //➞ 9



// 21 Check String for Spaces
// Create a function that returns true if a string contains any spaces.

// Examples

// function hasSpaces(str) {
    // return str.includes(" ")

    // return str.split(" ").length > 1;
// }

function hasSpaces(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            return true
        }
    }
    return false
}

// console.log(hasSpaces("hello"));  //➞ false
// console.log(hasSpaces("hello, world"));  //➞ true
// console.log(hasSpaces(" "));  //➞ true
// console.log(hasSpaces(""));  //➞ false
// console.log(hasSpaces(",./!@#"));  //➞ false



// 22 Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Examples

function isLastCharacterN(str) {
    // return str.slice(-1).toLowerCase() === "n";

    return str.charAt(str.length - 1).toLowerCase() === "n";
}

// console.log(isLastCharacterN("Aiden"));  //➞ true
// console.log(isLastCharacterN("Piet"));  //➞ false
// console.log(isLastCharacterN("Bert"));  //➞ false
// console.log(isLastCharacterN("Dean"));  //➞ true



// 23 Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples

// function relationToLuke(str) {
//     if (str === "Darth Vader") {
//         return "Luke, I am your father."
//     }else if (str === "Leia") {
//         return "Luke, I am your sister."
//     }else{
//         return "Luke, I am your brother in law."
//     }
// }

function relationToLuke(str) {
    switch (str) {
        case "Darth Vader":
            return `Luke, I am your father.`;
        case "Leia":
            return `Luke, I am your sister.`;
        case "Han":
            return `Luke, I am your brother in law.`;
        default:
            return `Luke, I am your friend.`;
    }
}

// console.log(relationToLuke("Darth Vader"));  //➞ "Luke, I am your father."
// console.log(relationToLuke("Leia"));  //➞ "Luke, I am your sister."
// console.log(relationToLuke("Han"));  //➞ "Luke, I am your brother in law."



// 24 Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// Examples

function frontThree(str) {
    // let front = str.slice(0,3);
    // return front + front + front;

    let front = str.slice(0,3);
    return front.repeat(3);
}

// console.log(frontThree("Python"));//➞ "PytPytPyt"
// console.log(frontThree("Cucumber"));  //➞ "CucCucCuc"
// console.log(frontThree("bioshock"));  //➞ "biobiobio"



// 25 Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples

function cityFacts(str) {
    // return `${str.name} has a population of ${str.population} and is situated in ${str.continent}`;

    return str.name + " has a population of " + str.population + " and is situated in " + str.continent
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




// 26 Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Examples

function isPlural(str) {
    // return str.slice(-1).toLowerCase() === "s";

    return str.charAt(str.length - 1).toLowerCase() === "s";
}

// console.log(isPlural("changes"));   //➞ true
// console.log(isPlural("change"));  //➞ false
// console.log(isPlural("dudes")); //➞ true
// console.log(isPlural("magic")); //➞ false



// 27 Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// Examples

function firstLast(str) {
    // let first = str.slice(0,1);
    // let last = str.slice(-1);
    // return first.concat(last);


    let first = str.charAt(0);
    let last = str.charAt(str.length - 1);
    return first + last;
} 

// console.log(firstLast("ganesh"));  //➞ "gh"
// console.log(firstLast("kali"));  //➞ "ki"
// console.log(firstLast("shiva"));  //➞ "sa"
// console.log(firstLast("vishnu")); //➞ "vu"
// console.log(firstLast("durga")); //➞ "da"



// 28 Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

// Examples

function stutter(str) {
    // let firstTwo = str.slice(0,2);
    // return `${firstTwo}... ${firstTwo}... ${str}?`;  


    let firstTwo = str.slice(0,2);
    return firstTwo + "... " + firstTwo + "... " + str + "?"
}

// console.log(stutter("incredible")); //➞ "in... in... incredible?"
// console.log(stutter("enthusiastic"));   //➞ "en... en... enthusiastic?"
// console.log(stutter("outstanding"));  //➞ "ou... ou... outstanding?"




// 29 Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples

function toNumberArray(arr) {
    return Number(arr)
}

console.log(toNumberArray(["9.4", "4.2"]));   //➞ [9.4, 4.2]
console.log(toNumberArray(["91", "44"])); //➞ [91, 44]
console.log(toNumberArray(["9.5", "8.8"]));   //➞ [9.5, 8.8]
