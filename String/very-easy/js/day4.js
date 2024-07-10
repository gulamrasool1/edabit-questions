// 43 Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

// Examples

function amazingEdabit(str) {
    // return str

    return str.replace()
}

// console.log(amazingEdabit("edabit is amazing.")); //➞ "edabit is amazing."
// console.log(amazingEdabit("Mubashir is amazing.")); //➞ "Mubashir is not amazing."
// console.log(amazingEdabit("Infinity is amazing.")); //➞ "Infinity is not amazing."



// 44 How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

// Examples

// function countDs(str) {
// return (str.match(/d/gi) || []).length;

// let matches = str.match(/d/gi);
// return matches ? matches.length : 0;

//     return str.split("").filter(char => char.toLowerCase() === "d").length;
// }

function countDs(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'd') {
            result++;
        }
    }
    return result;
}

// console.log(countDs("My friend Dylan got distracted in school."));  //➞ 4
// console.log(countDs("Debris was scattered all over the yard."));  //➞ 3
// console.log(countDs("The rodents hibernated in their den."));  //➞ 3




// 45 Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
// // Examples
// p1 = new Player("David Jones", 25, 175, 75)

// p1.getAge() ➞ "David Jones is age 25"
// p1.getHeight() ➞ "David Jones is 175cm"
// p1.getWeight() ➞ "David Jones weighs 75kg"



// 46 Raucous Applause
// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

// Examples

// function countClaps(str) {
//     return (str.match(/C/g) || []).length;

// let matches = str.match(/C/gi);
// return matches ? matches.length : 0;
// }

function countClaps(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'c') {
            result++;
        }
    }
    return result;
}

// console.log(countClaps("ClaClaClaClap!"));   //➞ 4
// console.log(countClaps("ClClClaClaClaClap!"));   //➞ 6
// console.log(countClaps("CCClaClClap!Clap!ClClClap!"));   //➞ 9



// 47 Lowercase, Uppercase or Mixed?
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// Examples

function getCase(str) {
    if (str === str.toLowerCase()) {
        return "lower"
    } else if (str === str.toUpperCase()) {
        return "upper"
    } else {
        return "mixed"
    }
}

// console.log(getCase("whisper..."));  //➞ "lower"
// console.log(getCase("SHOUT!")); //➞ "upper"
// console.log(getCase("Indoor Voice"));  //➞ "mixed"



// 48 WordCharWord
// Create a function that will put the first argument, a character, between every word in the second argument, a string.

// Examples

// function add(str1, str2) {
//     return str2.split(" ").join(str1)
// }

function add(str1, str2) {
    let result = "";
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === " ") {
            result += str1;
        } else {
            result += str2[i];
        }
    }
    return result;
}

// console.log(add("R", "javascript is fun"));   //➞ "javascriptRisRfun"
// console.log(add("#", "hello world!"));   //➞ "hello#world!"
// console.log(add("#", " "));   //➞ "#"



// 49 Scottish Screaming
// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

// Examples

// function toScottishScreaming(str) {
// return str.toUpperCase().replace(/[AEIOU]/gi, "E");
// }

function toScottishScreaming(str) {
    let result = "";
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if ('AEIOU'.includes(str[i])) {
            result += 'E';
        } else {
            result += str[i];
        }
    }
    return result;
}

// console.log(toScottishScreaming("hello world"));  //➞ "HELLE WERLD"
// console.log(toScottishScreaming("Mr. Fox was very naughty")); //➞ "MR. FEX WES VERY NEEGHTY"
// console.log(toScottishScreaming("Butterflies are beautiful!"));  //➞ "BETTERFLEES ERE BEEETEFEL!"




// 50 City School Creating IDS
// Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

// Examples

function createID(str1, str2) {
    let first = str1[0].toLowerCase();
    let last = str2.slice(0, 3).toLowerCase().replace(str2[0].toLowerCase(), str2[0].toUpperCase());

    return first + last
}

// console.log(createID("mary", "lamb"));   //➞ "mLam"
// console.log(createID("John", "SMITH"));   //➞ "jSmi"
// console.log(createID("mary", "smith"));   //➞ "mSmi"



// 51 The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

// Examples

// function wumbo(str) {
// return str.replace(/M/g, "W");

//     return str.split("").map(char => char === "M" ? "W" : char).join("");
// }

function wumbo(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "M") {
            result += "W"
        } else {
            result += str[i]
        }
    }
    return result;
}

// console.log(wumbo("I LOVE MAKING CHALLENGES"));  //➞ "I LOVE WAKING CHALLENGES"
// console.log(wumbo("MEET ME IN WARSAW"));  //➞ "WEET WE IN WARSAW"
// console.log(wumbo("WUMBOLOGY"));  //➞ "WUWBOLOGY"



// 52 Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples

function filterArray(arr) {
    // return arr.filter(item => typeof item === "number");

    // return arr.filter(Number);

    return Number.isInteger(arr);
}

// console.log(filterArray([1, 2, 3, "a", "b", 4]));   //➞ [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));   //➞ [0, 1729]
// console.log(filterArray(["Nothing", "here"]));   //➞ []



// 53 Is the Water Boiling?
// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

// Examples

function isBoiling(str) {
    let temp = parseInt(str);
    return str.endsWith("F") ? temp >= 212 : str.endsWith("C") ? temp >= 100 : false;
}

// console.log(isBoiling("212F"));  //➞ true
// console.log(isBoiling("100C"));  //➞ true
// console.log(isBoiling("0F"));//➞ false



// 54 Height of an Equilateral Triangle
// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.

// Examples

function height(num) {
    // let multiply = (Math.sqrt(3) / 2) * num * 10;
    // return multiply.toFixed(1) + " mm";

    let multiply = num * Math.sqrt(3) * 10 / 2;
    return multiply.toFixed(1) + " mm";
}

// console.log(height(2)); //➞ 17.3 mm
// console.log(height(5)); //➞ 43.3 mm
// console.log(height(6.2));   //➞ 53.7 mm



// 55 Secret Function 2.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

// Examples

function secret(str) {
    // return `<${str.split("*")[0]}></${str.split("*")[0]}`.repeat(str.split("*")[1]);

    let [str1, str2] = str.split("*");
    return `<${str1}></${str1}>`.repeat(parseInt(str2));
}

// console.log(secret("div*2"));  //➞ "<div></div><div></div>"
// console.log(secret("p*1"));//➞ "<p></p>"
// console.log(secret("li*3")); //➞ "<li></li><li></li><li></li>"



// 56 Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples

function removeNumbers(str) {
    // return str.split("").filter(c => !parseInt(c)).join("");

    return str.replace(/\d/g, "");
}

// console.log(removeNumbers("mubashir1"));  //➞ "mubashir"
// console.log(removeNumbers("12ma23tt"));  //➞ "matt"
// console.log(removeNumbers("e1d2a3b4i5t6"));  //➞ "edabit"



// 57 Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// Examples

function sayWhat(obj) {
    // const values = Object.values(obj);
    // return values.join(" ").concat(" ", values[1]);

    return Object.values(obj).join(" ").concat(" ", Object.values(obj)[1])
}

// console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" }));  //➞ "Mommy please help please"
// console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" }));  //➞ "Me innocent is innocent"
// console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" }));  //➞ "Must lawyer call lawyer"



// 58 True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples

// function integerBoolean(str) {
// return str.split("").map(char => char === "1");
// return Array.from(str, char => char === "1");
// }

function integerBoolean(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i] === "1");
    }
    return result;
}

// console.log(integerBoolean("100101"));  //➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10"));  //➞ [true, false]
// console.log(integerBoolean("001"));  //➞ [false, false, true]



// 59 YouTube Upload Count
// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

// Examples

function uploadCount(arr, str) {
    return arr.filter(char => char.startsWith(str)).length;
}

// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"));  //➞ 2
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")); //➞ 1



// 60 The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples

// function forbiddenLetter(str, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes(str)) {
//             return false
//         }
//     }
//     return true
// }

function forbiddenLetter(str, arr) {
    if (arr.length === 0) {
        return true; // Return true if array is empty
    }

    return arr.some(item => item.includes(str));
}

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));   //➞ false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));   //➞ true
// console.log(forbiddenLetter("m", []));   //➞ true



// 61 Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples

// function cleanUpArray(str) {
//     let even = str.filter(item => parseInt(item) % 2 === 0).map(item => parseInt(item));
//     let odd = str.filter(item => parseInt(item) % 2 !== 0).map(item => parseInt(item));

//     return [even, odd];
// }

function cleanUpArray(str) {
    let even = [];
    let odd = [];

    for (let i = 0; i < str.length; i++) {
        let num = parseInt(str[i]);
        if (!isNaN(num)) {
            if (num % 2 === 0) {
                even.push(num);
            } else {
                odd.push(num);
            }
        }
    }

    return [even, odd];
}

// console.log(cleanUpArray(["8"]));  //➞ [[8], []]
// console.log(cleanUpArray(["11"]));  //➞ [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"]));  //➞ [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"]));  //➞ [[4, 8], [9, 5]]



// 62 Calculate Using String Operation
// Create a function that takes two numbers and a mathematical operator and returns the result.

// Examples

// function calculate(num1, num2, op) {
//     let calculates = num1 + op + num2
//     return eval(calculates)
// }

function calculate(num1, num2, op) {

    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            return NaN;
    }
}

// console.log(calculate(4, 9, "+"));  //➞ 13
// console.log(calculate(12, 5, "-"));   //➞ 7
// console.log(calculate(6, 3, "*"));  //➞ 18
// console.log(calculate(25, 5, "/"));   //➞ 5
// console.log(calculate(14, 3, "%"));   //➞ 2

