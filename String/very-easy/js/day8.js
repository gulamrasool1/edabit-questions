// 111 Letters Only
// Write a function that removes any non-letters from a string, returning a well-known film title.

// Examples

function lettersOnly(str) {
    // return str.replace(/[^a-zA-Z]/g, '');
    return str.split('').filter(char => /[a-zA-Z]/.test(char)).join("")
}

// console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));  //➞ "Rocky"
// console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4"));  //➞ "Bambi"
// console.log(lettersOnly("^U)6$22>8p)."));  //➞ "Up"



// 112 Recursion: Reverse a String
// Write a function that reverses a string. Make your function recursive.

// Examples

// function reverse(str) {
//     if (str === "") {
//         return "";
//     }
//     return str.split("").reverse().join('');
// }

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}

// console.log(reverse("hello"));  //➞ "olleh"
// console.log(reverse("world"));  //➞ "dlrow"
// console.log(reverse("a"));  //➞ "a"
// console.log(reverse(""));  //➞ ""


// 113 Fullname and Email
// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.
// Examples
// emp1 = Employee("John", "Smith")
// emp1.fullname  //➞ "John Smith"
// emp2 = Employee("Mary",  "Sue")
// emp2.email  //➞ "mary.sue@company.com"
// emp3 = Employee("Antony", "Walker")
// emp3.firstname  //➞ "Antony"



// 114 Total Number of Unique Characters
// Given two strings, create a function that returns the total number of unique characters from the combined string.

// Examples

function countUnique(str1, str2) {
    let add = str1 + str2; // str1.concat(str2);
    let unique = new Set(add)
    return unique.size;
}

// console.log(countUnique("apple", "play"));  //➞ 5
// // "appleplay" has 5 unique characters:
// // "a", "e", "l", "p", "y"
// console.log(countUnique("sore", "zebra"));  //➞ 7
// // "sorezebra" has 7 unique characters:
// // "a", "b", "e", "o", "r", "s", "z"
// console.log(countUnique("a", "soup"));  //➞ 5



// 115 Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// Examples

// function greetPeople(arr) {
    // return arr.map(char => "Hello " + char).join(', ');
    // return arr.map(char => `Hello ${char}`).join(', ');
// }

function greetPeople(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            result += ", "
        }
        result += `Hello ${arr[i]}`;
    }
    return result;
}

// console.log(greetPeople(["Joe"]));  //➞ "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"]));  //➞ "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"]));  //➞ "Hello Frank, Hello Angela, Hello Joe"



// 116 Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]
// Example

function firstAndLast(str) {
    let charArray = str.split("");
    let assending = charArray.sort().join('');
    let descending = charArray.sort().reverse().join('');
    return [assending, descending];
}

// console.log(firstAndLast("marmite"));  //➞ ["aeimmrt", "trmmiea"]
// console.log(firstAndLast("bench"));  //➞ ["bcehn", "nhecb"]
// console.log(firstAndLast("scoop"));  //➞ ["coops", "spooc"]



// 117 Re-Form the Word
// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

// Examples

// function getWord(str1, str2) {
//     let concat = str1.concat(str2);
//     let capital = concat.charAt(0).toUpperCase() + concat.slice(1);
//     return capital;
// }

function getWord(str1, str2) {
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        result += str1[i];
    }
    for (let i = 0; i < str2.length; i++) {
        result += str2[i];
    }

    let capital = result.charAt(0).toUpperCase() + result.slice(1);
    return capital;
}

console.log(getWord("seas", "onal"));  //➞ "Seasonal"
console.log(getWord("comp", "lete"));  //➞ "Complete"
console.log(getWord("lang", "uage"));  //➞ "Language"