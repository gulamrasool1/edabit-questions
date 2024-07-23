// 81 Hamming Distance
// Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

// Examples

// function hammingDistance(str1, str2) {
//     let result = 0;
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             result++
//         }
//     } 
//     return result
// }

// function hammingDistance(str1,str2) {
//     return str1.split("").reduce((count, char, index) => {
//         return count + (char !== str2[index] ? 1 : 0)
//     },0);
// }

function hammingDistance(str1, str2) {
    let count = 0;
    str1.split("").map((char, index) => {
        count += (char !== str2[index] ? 1 : 0)
    });
    return count
}

// console.log(hammingDistance("abcde", "bcdef"));  //➞ 5
// console.log(hammingDistance("abcde", "abcde"));  //➞ 0
// console.log(hammingDistance("strong", "strung"));  //➞ 1



// 82 RegEx: Character Classes IX ⁠- \w
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

// Here is a list of the character classes in JavaScript:

// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden word in this string:

const str = "**^&$Regular#$%Expressions$%$$%^**";
const hiddenWord = str.match(/\w+/g).join('');
// console.log(hiddenWord);  // Output: RegularExpressions

// Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.



// 83 Remove the First and Last Characters
// Create a function that removes the first and last characters from a string.

// Examples

function removeFirstLast(str) {
    if (str.length <= 2) {
        return str;
    }
    return str.slice(1, -1)
}

// console.log(removeFirstLast("hello"));  //➞ "ell"
// console.log(removeFirstLast("maybe"));  //➞ "ayb"
// console.log(removeFirstLast("benefit"));  //➞ "enefi"
// console.log(removeFirstLast("a"));  //➞ "a"



// 84 Retrieve the Subreddit
// Create a function to extract the name of the subreddit from its URL.

// Examples

function subReddit(str) {
    let start = str.indexOf('/r/') + 3;
    let end = str.indexOf('/', start);
    return str.slice(start, end);
}

// console.log(subReddit("https://www.reddit.com/r/funny/"));  //➞ "funny"
// console.log(subReddit("https://www.reddit.com/r/relationships/"));  //➞ "relationships"
// console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/"));  //➞ "mildlyinteresting"



// 85 Broken Bridge
// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

// Examples

function isSafeBridge(str) {
    return !str.includes(' ') && str.split('').every(char => char === '#');
}

// console.log(isSafeBridge("####"));  //➞ true
// console.log(isSafeBridge("## ####"));  //➞ false
// console.log(isSafeBridge("#"));  //➞ true



// 86 Between Words
// Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the console.log(dictionary, otherwise false.

// Examples

// function isBetween(first, last, word) {
//     return word > first && word < last;
// }

function isBetween(first, last, word) {
    if (word > first) {
        if (word < last) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// console.log(isBetween("apple", "banana", "azure"));  //➞ true
// console.log(isBetween("monk", "monument", "monkey"));  //➞ true
// console.log(isBetween("bookend", "boolean", "boost"));  //➞ false



// 87 Regex Series: String Contains at Least One Digit
// Write a regular expression that matches a string if it contains at least one digit.

// Examples

function containsDigit(str) {
    let regex = /\d/;
    return regex.test(str);
}

// console.log(containsDigit("c8"));   //➞ true
// console.log(containsDigit("23cc //4"));   //➞ true
// console.log(containsDigit("abwekz"));  //  //➞ false
// console.log(containsDigit("sdfkxi"));   //➞ false



// 88 Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

// Examples

// function replaceVowels(str1, str2) {
//     let vowels = /[aeiou]/g;
//     return str1.replace(vowels, str2)
// }

function replaceVowels(str1, str2) {
    let vowels = "aeiou";
    let result = "";
    for (let i = 0; i < str1.length; i++) {
        if (vowels.includes(str1[i])) {
            result += str2
        } else {
            result += str1[i];
        }
    }
    return result;
}

// console.log(replaceVowels("the aardvark", "#"));  //➞ "th# ##rdv#rk"
// console.log(replaceVowels("minnie mouse", "?"));  //➞ "m?nn?? m??s?"
// console.log(replaceVowels("shakespeare", "*"));  //➞ "sh*k*sp**r*"



// 89 Word Endings
// Create a function that adds a string ending to each member in an array.

// Examples

// function addEnding(arr, str) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] + str)
//     }
//     return result   
// }

function addEnding(arr, str) {
    // return arr.map(char => char + str)
    return arr.map(char => char.concat(str))
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
//  //➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// console.log(addEnding(["new", "pander", "scoop"], "er"));
//  //➞ ["newer", "panderer", "scooper"]
// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));
//➞ ["bending", "sharpening", "meaning"]



// 90 Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// Examples

// function isFourLetters(arr) {
    // return arr.filter(char => char.length === 4);
// }

function isFourLetters(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(isFourLetters(["Tomato", "Potato", "Pair"])); //➞ ["Pair"]
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); //➞ ["Bear"]
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); //➞ ["Ryan", "Matt"]



// 91 Semantic Versioning
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

// Examples
// 6.1.9

function retrieveMajor(semver) {
    return semver.split('.')[0];
}

function retrieveMinor(semver) {
    return semver.split('.')[1];
}

function retrievePatch(semver) {
    return semver.split('.')[2];
}

// console.log(retrieveMajor("6.1.9")); //➞ "6"
// console.log(retrieveMinor("6.1.9")); //➞ "1"
// console.log(retrievePatch("6.1.9")); //➞ "9"

// // 2.1.0
// console.log(retrieveMajor("2.1.0")); //➞ "2"
// console.log(retrieveMinor("2.1.0")); //➞ "1"
// console.log(retrievePatch("2.1.0")); //➞ "0"



// 92 Alphabet Soup
// Create a function that takes a string and returns a string with its letters in alphabetical order.

// Examples

function AlphabetSoup(str) {
    return str.split("").sort().join("");
}

// console.log(AlphabetSoup("hello"));  //➞ "ehllo"
// console.log(AlphabetSoup("edabit")); //  //➞ "abdeit"
// console.log(AlphabetSoup("hacker"));  //➞ "acehkr"
// console.log(AlphabetSoup("geek"));  //➞ "eegk"
// console.log(AlphabetSoup("javascript"));  //➞ "aacijprstv"



// 93 Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.

// Examples

// function reverse(str) {
//     return str.split("").reverse().join("")
// }

function reverse(str) {
    let reversed = '';
    for (let i = str.length -1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverse("Hello World"));  //➞ "dlroW olleH"
// console.log(reverse("The quick brown fox."));  //➞ ".xof nworb kciuq ehT"
// console.log(reverse("Edabit is really helpful!"));  //➞ "!lufpleh yllaer si tibadE"



// 94 Fix the Error: Vowel Edition
// Your friend is trying to write a function that removes all vowels from a string. They write:

// function removeVowels(str) {
//   return str.replace(/[aeiou]/, "")
// }
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

// Examples

// function removeVowels(str) {
//     let vowels = "aeiou";
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!vowels.includes(str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }

function removeVowels(str) {
    return str.replace(/[aeiou]/g, '');
}

// console.log(removeVowels("candy"));  //➞ "cndy"
// console.log(removeVowels("hello"));  //➞ "hllo"
// // The "e" is removed, but the "o" is still there!
// console.log(removeVowels("apple"));  //➞ "pple"



// 95 Smaller String Number
// Create a function that returns the smaller number.

// Examples

// function smallerNum(str1, str2) {
//     return Math.min(Number(str1), Number(str2)).toString();
// }

function smallerNum(str1, str2) {
    if (Number(str1) < Number(str2)) {
        return str1;
    }else{
        return str2;
    }
}

// console.log(smallerNum("21", "44"));  //➞ "21"
// console.log(smallerNum("1500", "1"));  //➞ "1"
// console.log(smallerNum("5", "5"));  //➞ "5"



// 96 Convert Number to String of Dashes
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

// Examples

// function Go(num) {
//     let result = "";
//     for (let i = 0; i < num; i++) {
//         result += "-"
//     }
//     return result;
// }

function Go(num) {
    return '-'.repeat(num);
}

// console.log(Go(1));  //➞ "-"
// console.log(Go(5));  //➞ "-----"
// console.log(Go(3));  //➞ "---"



// 97 Reverse and Capitalize
// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

// Examples

// function reverseCapitalize(str) {
//     return str.split("").reverse("").join('').toUpperCase();
// }

function reverseCapitalize(str) {
    let reversed = '';
    for (let i = str.length -1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed.toUpperCase();
}

// console.log(reverseCapitalize("abc"));  //➞ "CBA"
// console.log(reverseCapitalize("hellothere"));  //➞ "EREHTOLLEH"
// console.log(reverseCapitalize("input"));  //➞ "TUPNI"



// 98 Little Dictionary
// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

// Examples

// function dictionary(str, arr) {
//     return arr.filter(word => word.startsWith(str))
// }

function dictionary(str, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(str)) {
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(dictionary("bu", ["button", "breakfast", "border"])); //➞ ["button"]
// console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); //➞ ["triplet", "tries", trip"]
// console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); //➞ []



// 99 Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

// Examples

// function checkEnding(str1, str2) {
//     return str1.endsWith(str2);
// }

function checkEnding(str1, str2) {
    if (str2.length > str1.length) {
        return false;
    }

    let ending = str1.slice(-str2.length);

    return ending === str2;
}

// console.log(checkEnding("abc", "bc"));  //➞ true
// console.log(checkEnding("abc", "d"));  //➞ false
// console.log(checkEnding("samurai", "zi"));  //➞ false
// console.log(checkEnding("feminine", "nine"));  //➞ true
// console.log(checkEnding("convention", "tio"));  //➞ false



// 100 Shuffle the Name
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

// Examples

// function nameShuffle(str) {
    // return str.split(" ").reverse().join(" ")

//     let names = str.split(' ');
//     return `${names[1]} ${names[0]}`;
// }

function nameShuffle(str) {
    let names = str.split(' ');
    let result = '';
    for (let i = names.length -1; i >= 0; i--) {
        result += names[i] + ' ';
    }
    return result;
}

console.log(nameShuffle("Donald Trump"));  //➞ "Trump Donald"
console.log(nameShuffle("Rosie O'Donnell"));  //➞ "O'Donnell Rosie"
console.log(nameShuffle("Seymour Butts"));  //➞ "Butts Seymour"