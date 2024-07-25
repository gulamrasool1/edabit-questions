// 101 Check if the Same Case
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

// Examples

// function sameCase(str) {
// return str === str.toUpperCase() || str === str.toLowerCase();

//     let upperCase = /[A-Z]/.test(str);
//     let lowerCase = /[a-z]/.test(str);
//     return !(upperCase && lowerCase);    
// }

function sameCase(str) {
    let lowerCase = false;
    let upperCase = false;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char <= 'z') {
            lowerCase = true;
        } else if (char >= 'A' && char <= 'Z') {
            upperCase = true;
        }

        if (lowerCase && upperCase) {
            return false
        }
    }
    return true;
}

// console.log(sameCase("hello"));  //➞ true
// console.log(sameCase("HELLO"));  //➞ true
// console.log(sameCase("Hello"));  //➞ false
// console.log(sameCase("ketcHUp"));  //➞ false



// 102 Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

// Examples

// function isInOrder(str) {
//     return str === str.split("").sort().join("")
// }

function isInOrder(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] < str[i - 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isInOrder("abc"));  //➞ true
// console.log(isInOrder("edabit"));  //➞ false
// console.log(isInOrder("123"));  //➞ true
// console.log(isInOrder("xyzz"));  //➞ true



// 103 Is the String a Palindrome?
// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

// Examples

// function checkPalindrome(str) {
//     return str === str.split('').reverse().join("")
// }

function checkPalindrome(str) {
    const char = str.length;
    for (let i = 0; i < char / 2; i++) {
        if (str[i] !== str[char - 1 - i]) {
            return false;
        }
    }
    return true;
}

// console.log(checkPalindrome("mom"));  //➞ true
// console.log(checkPalindrome("scary"));  //➞ false
// console.log(checkPalindrome("reviver"));  //➞ true
// console.log(checkPalindrome("stressed"));  //➞ false



// 104 Strange Pair
// A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

// Examples

function isStrangePair(str1, str2) {
    if (str1[0] === str2[str2.length - 1] && str1[str1.length - 1] === str2[0]) {
        return true
    }
    return false
}

// console.log(isStrangePair("ratio", "orator"));  //➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".
// console.log(isStrangePair("sparkling", "groups"));  //➞ true
// console.log(isStrangePair("bush", "hubris"));  //➞ false
// console.log(isStrangePair("", ""));  //➞ true



// 105 Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.

// Examples

// function toArray(str) {
    // return str.split(",").map(item => item.trim());


//     return str.split(",").filter(item => item.trim());
// }

function toArray(str) {
    let result = [];
    let start = 0;

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === ',' || i === str.length) {
            let item = str.substring(start, i).trim();

            if (item) {
                result.push(item);
            }
            start = i + 1;
        }
    }
    return result;
}

// console.log(toArray("watermelon, raspberry, orange"));
// //➞ ["watermelon", "raspberry", "orange"]
// console.log(toArray("x1, x2, x3, x4, x5"));
// //➞ ["x1", "x2", "x3", "x4", "x5"]
// console.log(toArray("a, b, c, d"));
// //➞ ["a", "b", "c", "d"]
// console.log(toArray(""));
//➞ []



// 106 Edaaaaabit
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

// Examples

// function howManyTimes(num) {
//     let a = 'a'.repeat(num)
    // return `Ed${a}bit`;
//     return "Ed" + a + "bit"
// }

function howManyTimes(num) {
    let result = "Ed";

    for (let i = 0; i < num; i++) {
        result += "a";   
    }

    result += "bit";
    return result;
}

// console.log(howManyTimes(5)); //➞ "Edaaaaabit"
// console.log(howManyTimes(0)); //➞ "Edbit"
// console.log(howManyTimes(12)); //➞ "Edaaaaaaaaaaaabit"



// 107 Repeating Letters N Times
// Create a function that repeats each character in a string n times.

// Examples

// function repeat(str, num) {
//     return str.split("").map(char => char.repeat(num)).join("");
// }

function repeat(str, num) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
            result += str[i].repeat(num);
    }
    return result;
}

// console.log(repeat("mice", 5));  //➞ "mmmmmiiiiiccccceeeee"
// console.log(repeat("hello", 3));  //➞ "hhheeellllllooo"
// console.log(repeat("stop", 1));  //➞ "stop"



// 108 The Full Length of a Google
// Google's logo can be stretched depending on how many pages it lets you skip forward to.

// Image of Goooooooooogle

// Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

// Examples

// function googlify(num) {
//     if (num < 0) {
//         return "invalid"
//     }

//     let a = 'o'.repeat(num)
//     // return `G${a}gle`;
//     return "G" + a + "gle"
// }

function googlify(num) {
    if (num < 0) {
        return "invalid"   
    }
    let result = "G";

    for (let i = 0; i < num; i++) {
        result += "o";   
    }

    result += "gle";
    return result;
}


// console.log(googlify(10));  //➞ "Goooooooooogle"
// console.log(googlify(23));  //➞ "Gooooooooooooooooooooooogle"
// console.log(googlify(2));  //➞ "Google"
// console.log(googlify(-2));  //➞ "invalid"



// 109 Get the File Extension
// Write a function that maps files to their extension names.

// Examples

function getExtension(arr) {
    // return arr.map(filename => {
    //     const split = filename.split(".");
    //     return split[split.length - 1];
    // })

    return arr.map(filename => {
        const dotIndex = filename.lastIndexOf('.');
        return filename.slice(dotIndex + 1);
    });
}

// console.log(getExtension(["code.html", "code.css"]));
// //➞ ["html", "css"]
// console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));
// //➞ ["jpg", "pdf", "mp3"]
// console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));
//➞ ["rb", "cpp", "py", "js"]


// 110 Check if a String Contains only Identical Characters
// Write a function that returns true if all characters in a string are identical and false otherwise.

// Examples

// function isIdentical(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[0]) {
//             return false;
//         }
//     }
//     return true;
// }

function isIdentical(str) {
    // return new Set(str).size === 1;
    return str.split('').every(char => char === str[0]);
}

console.log(isIdentical("aaaaaa"));  //➞ true
console.log(isIdentical("aabaaa"));  //➞ false
console.log(isIdentical("ccccca"));  //➞ false
console.log(isIdentical("kk"));  //➞ true