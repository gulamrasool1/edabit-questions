// 11 Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

// Examples

// function multiplyNums(str) {
//     return str.split(",").reduce((acc, item) => acc * item)
// }

function multiplyNums(str) {
    let number = str.split(',')
    let result = 1;
    for (let i = 0; i < number.length; i++) {
        result *= number[i];
    }
    return result
}

// console.log(multiplyNums("2, 3"));  //➞ 6
// console.log(multiplyNums("1, 2, 3, 4"));  //➞ 24
// console.log(multiplyNums("54, 75, 453, 0"));  //➞ 0
// console.log(multiplyNums("10, -2"));  //➞ -20



// 12 Xs and Os, Nobody Knows
// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
// When "x" and "o" are not in the string, return true.
// Examples

// function XO(str) {
// let lower = str.toLowerCase();
// return lower.split('x').length === lower.split('o').length;


//     let str2 = str.toLowerCase();
//     let xCount = str2.split('').filter(char => char === 'x').length;
//     let oCount = str2.split('').filter(char => char === 'o').length;
//     return xCount === oCount;
// }

function XO(str) {
    str = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xCount++;
        } else if (str[i] === 'o') {
            oCount++;
        }
    }
    return xCount === oCount;
}

// console.log(XO("ooxx"));  //➞ true
// console.log(XO("xooxx"));  //➞ false
// console.log(XO("ooxXm"));  //➞ true
// // Case insensitive.
// console.log(XO("zpzpzpp"));  //➞ true
// // Returns true if no x and o.
// console.log(XO("zzoo"));  //➞ false



// 13 The DECIMATOR
// Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

// Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!

// Examples

// function DECIMATOR(str) {
// let removed = Math.ceil(str.length / 10);
// return str.slice(0, -removed)

//     let removed = Math.ceil(str.length / 10);
//     return str.substring(0, str.length - removed);
// }

function DECIMATOR(str) {
    let removed = Math.ceil(str.length / 10);
    let result = '';
    for (let i = 0; i < str.length - removed; i++) {
        result += str[i];
    }
    return result;
}

// console.log(DECIMATOR("1234567890"));  //➞ "123456789"
// // 10 characters, removed 1.
// console.log(DECIMATOR("1234567890AB"));  //➞ "1234567890"
// // 12 characters, removed 2.
// console.log(DECIMATOR("123"));  //➞ "12"
// // 3 characters, removed 1.
// console.log(DECIMATOR("123456789012345678901"));  //➞ "123456789012345678"
// 21 characters, removed 3.



// 14 Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

// Examples

// function makeTitle(str) {
//     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// }

function makeTitle(str) {
    let words = str.split(" ");
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            result.push(word.charAt(0).toUpperCase() + word.slice(1))
        } else {
            result.push(word);
        }
    }
    return result.join(' ');
}

// console.log(makeTitle("This is a title"));  //➞ "This Is A Title"
// console.log(makeTitle("capitalize every word"));  //➞ "Capitalize Every Word"
// console.log(makeTitle("I Like Pizza"));  //➞ "I Like Pizza"
// console.log(makeTitle("PIZZA PIZZA PIZZA"));  //➞ "PIZZA PIZZA PIZZA"



// 15 Reverse Words Starting With a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

//Examples

// function specialReverse(str, letter) {
//     return str.split(" ").map(word => word.startsWith(letter) ? [...word].reverse().join('') : word).join(" ");
// }

function specialReverse(str, letter) {
    let words = str.split(" ");
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.startsWith(letter)) {
            result += [...word].reverse().join('') + ' ';
        } else {
            result += word + ' ';
        }
    }
    return result
}

// console.log(specialReverse("word searches are super fun", "s"));
// //➞ "word sehcraes are repus fun"
// console.log(specialReverse("first man to walk on the moon", "m"));
// //➞ "first nam to walk on the noom"
// console.log(specialReverse("peter piper picked pickled peppers", "p"));
//➞ "retep repip dekcip delkcip sreppep"



// 16 Barbecue Skewers
// You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

// For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

// ["--xo--x--ox--",
// "--xx--x--xx--",
// "--oo--o--oo--",      <<< vegetarian skewer
// "--xx--x--ox--",
// "--xx--x--ox--"]
// Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example above, the function should return [1, 4].

// Examples

// function bbqSkewers(arr) {
//     let veg = arr.filter(skewer => !skewer.includes('x'));
//     let meat = arr.filter(skewer => skewer.includes('x'));
//     return [veg.length, meat.length];
// }

function bbqSkewers(arr) {
    let veg = 0;
    let meat = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('x')) {
            meat++
        } else {
            veg++
        }
    }
    return [veg, meat]
}

// console.log(bbqSkewers([
//     "--oooo-ooo--",
//     "--xx--x--xx--",
//     "--o---o--oo--",
//     "--xx--x--ox--",
//     "--xx--x--ox--"
// ]));  //➞ [2, 3]
// console.log(bbqSkewers([
//     "--oooo-ooo--",
//     "--xxxxxxxx--",
//     "--o---",
//     "-o-----o---x--",
//     "--o---o-----"
// ]));  //➞ [3, 2]



// 17 Find the Characters Counterpart Char Code
// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

// Examples
// Given that:
//   - "A" char code is: 65
//   - "a" char code is: 97

// function counterpartCharCode(str) {
//     if (str === str.toUpperCase()) {
//         return str.toLowerCase().charCodeAt(0);
//     }else {
//         return str.toUpperCase().charCodeAt(0);
//     }
// }

function counterpartCharCode(str) {
    return str === str.toUpperCase() ? str.toLowerCase().charCodeAt(0) : str.toUpperCase().charCodeAt(0);
}

// console.log(counterpartCharCode("A"));  //➞ 97
// console.log(counterpartCharCode("a"));  //➞ 65



// 18 Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Examples

function getMiddle(str) {
    let middle = Math.floor(str.length / 2);
    return str.length % 2 === 0 ? str[middle - 1] + str[middle] : str[middle];
}

// console.log(getMiddle("test"));  //➞ "es"
// console.log(getMiddle("testing"));  //➞ "t"
// console.log(getMiddle("middle"));  //➞ "dd"
// console.log(getMiddle("A"));  //➞ "A"



// 19 Emphasise the Words
// Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.

// Examples

// function emphasise(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// }

function emphasise(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        if (i < words.length) {
            result += " ";
        }
    }
    return result
}

// console.log(emphasise("hello world"));  //➞ "Hello World"
// console.log(emphasise("GOOD MORNING"));  //➞ "Good Morning"
// console.log(emphasise("99 red balloons!"));  //➞ "99 Red Balloons!"



// 20 Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// Examples

// function removeABC(str) {
//     if (str.includes('a') || str.includes('b') || str.includes('c')) {
//         let remove = str.replace(/[abc]/g, "");
//         return remove
//     } else {
//         return null
//     }
// }

function removeABC(str) {
    let result = '';
    let abc = false;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === 'a' || char === 'b' || char === 'c') {
            abc = true;
        }else {
            result += char
        }
    }
    return abc ? result : null;
}

console.log(removeABC("This might be a bit hard"));  //➞ "This might e  it hrd"
console.log(removeABC("hello world!"));  //➞ null
console.log(removeABC(""));  //➞ null