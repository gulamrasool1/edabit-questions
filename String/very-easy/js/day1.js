// 1 How Edabit Works
// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

function hello() {
    return "hello edabit.com";
}
// console.log(hello());
// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.



// 2 Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples

function giveMeSomething(str) {
    // return "something " + str;
    // return "something ".concat(str);
    return `something ${str}`
}

// console.log(giveMeSomething("is better than nothing"));  //➞ "something is better than nothing"
// console.log(giveMeSomething("Bob Jane"));  //➞ "something Bob Jane"
// console.log(giveMeSomething("something"));  //➞ "something something"



// 3 Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples

function nameString(str) {
    // return `${str}Edabit`;
    // return str + "Edabit";
    return str.concat("Edabit");
}

// console.log(nameString("Mubashir"));  //➞ "MubashirEdabit"
// console.log(nameString("Matt"));  //➞ "MattEdabit"
// console.log(nameString("javaScript"));  //➞ "javaScriptEdabit"



// 4 Boolean to String Conversion
// Create a function that takes a boolean variable flag and returns it as a string.

// Examples

function boolToString(flag) {
    // return flag.toString();
    // return String(flag);
    return `${flag}`
}

// console.log(boolToString(true)); //➞ "true"
// console.log(boolToString(false));  //➞ "false"



// 5 Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples

function calculator(str) {
    return eval(str);
}

// console.log(calculator("23+4"));  //➞ 27
// console.log(calculator("45-15"));  //➞ 30
// console.log(calculator("13+2-5*2"));  //➞ 5
// console.log(calculator("49/7*2-3"));  //➞ 11



// 6 Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples

function greeting(name) {
    // if (name === "Mubashir") {
    //     return "Hello, my Love!";
    // }
    // return "Hello, " + name + "!";    


    if (name === "Mubashir") {
        return "Hello, my Love!";
    }
    return `Hello, ${name}!`;
}

// console.log(greeting("Matt"));  //➞ "Hello, Matt!"
// console.log(greeting("Helen"));  //➞ "Hello, Helen!"
// console.log(greeting("Mubashir"));  //➞ "Hello, my Love!"



// 7 Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples

function comp(str1,str2) {
    // return str1.length === str2.length;


    if (str1.length === str2.length) {
        return true
    }else{
        return false
    }
}

// console.log(comp("AB", "CD"));  //➞ true
// console.log(comp("ABC", "DE"));  //➞ false
// console.log(comp("hello", "edabit"));  //➞ false



// 8 Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

// Examples

function isEmpty(str) {
    // return str === "";


    if (str === "") {
        return true
    }else{
        return false
    }
}

// console.log(isEmpty(""));  //➞ true
// console.log(isEmpty(" "));  //➞ false
// console.log(isEmpty("a"));  //➞ false



// 9 Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

// Examples

function length(str) {
    // return str.length;

    // return `${str}`.length;


    let result = 0;
    for (let char of str) {
        result++
    }
    return result;
}

// console.log(length("apple"));  //➞ 5
// console.log(length("make"));  //➞ 4
// console.log(length("a"));  //➞ 1
// console.log(length(""));  //➞ 0



// 10 Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

// Examples

function stringInt(str) {
    // return str;
    
    return `${str}`
}

// console.log(stringInt("6"));  //➞ 6
// console.log(stringInt("1000"));  //➞ 1000
// console.log(stringInt("12"));  //➞ 12



// 11 Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

// Examples

function concatName(str1, str2) {
    // return `${str2}, ${str1}`

    return str2.concat(", ", str1)
}

// console.log(concatName("First", "Last"));  //➞ "Last, First"
// console.log(concatName("John", "Doe"));  //➞ "Doe, John"
// console.log(concatName("Mary", "Jane"));   //➞ "Jane, Mary"



// 12 Evaluate an Equation
// Create a function that evaluates an equation.

// Examples

function eq(str) {
    return eval(str);
}

// console.log(eq("1+2"));  //➞ 3
// console.log(eq("6/(9-7)"));  //➞ 3
// console.log(eq("3+2-4"));  //➞ 1



// 13 Format I: Template String
// Write a template string according to the following example:

// Example
const a = "John";
const b = "Joe";
const c = "Jack";
// const template = "your template string"  //➞ "Their names were:  John,  Joe  and  Jack."
const template = `their names were: ${a}, ${b} and ${c}.`;

// console.log(template);



// 14 Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// Examples

function oddOrEven(str) {
    // const length = str.length;
    // return length % 2 === 0; 

    
    const length = str.length;

    if (length % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

// console.log(oddOrEven("apples"));  //➞ true
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.
// console.log(oddOrEven("pears")); //➞ false
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.
// console.log(oddOrEven("cherry"));  //➞ true



// 15 String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:

// function intToString(num) {
//     return num.toString();
// }

function stringToInt(str) {
    // return parseInt(str);

    return Number(str);
}

// console.log(intToString(4));  //➞ "4"
// console.log(stringToInt("4"));  //➞ 4
// console.log(intToString(29348));  //➞ "29348"