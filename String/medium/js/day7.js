// 61 Upper or Lower Case
// Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

// Examples

// function stepsToConvert(str) {
//     let lower = 0;
//     let upper = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//             lower++;
//         } else {
//             upper++
//         }
//     }
//     return Math.min(lower, upper);
// }

function stepsToConvert(str) {
    let lower = [...str].filter(char => char === char.toLowerCase()).length;
    let upper = [...str].filter(char => char === char.toUpperCase()).length;
    return Math.min(lower, upper);
}

// console.log(stepsToConvert("abC"));  //➞ 1
// // "abC" converted to "abc" in 1 step
// console.log(stepsToConvert("abCBA"));  //➞ 2
// // "abCBA" converted to "ABCBA" in 2 steps
// console.log(stepsToConvert("aba"));  //➞ 0
// console.log(stepsToConvert("abaCCC"));  //➞ 3



// 62 Wurst Is Better
// Wurst is the best. Create a function that takes a string and replaces every mention of any type of sausage with the German word "Wurst," unless—of course—the sausage is already a type of German "Wurst" (i.e. "Bratwurst", see below), then leave the sausage name unchanged.

// German Wursts	Convert to Wurst
// Bratwurst	Kielbasa
// Kochwurst	Chorizo
// Leberwurst	Moronga
// Mettwurst	Salami
// Rostbratwurst	Sausage
// ~	Andouille
// ~	Naem
// ~	Merguez
// ~	Gurka
// ~	Snorkers
// ~	Pepperoni
// Rules
// Append sausages from the "Convert to Wurst" column with "wurst".
// Do not replace any German sausage with the word "Wurst".
// The word "Wurst" must be title case.

// Examples

function wurstIsBetter(str) {
    let germanWursts = ["Bratwurst", "Kochwurst", "Leberwurst", "Mettwurst", "Rostbratwurst"];
    let nonGermanSausages = ["Kielbasa", "Chorizo", "Moronga", "Salami", "Sausage", "Andouille", "Naem", "Merguez", "Gurka", "Snorkers", "Pepperoni"];
    return str.split(" ").map(word => {
        let cleanWord = word.replace(/[.,]/g, '');
        if (nonGermanSausages.includes(cleanWord)) {
            return word.replace(cleanWord, "Wurst");
        }
        return word;
    }).join(" ");
}

// console.log(wurstIsBetter("I like chorizos, but not sausages"));  //➞ "I like Wursts, but not Wursts"
// console.log(wurstIsBetter("sich die Wurst vom Brot nehmen lassen"));  //➞ "sich die Wurst vom Brot nehmen lassen"
// console.log(wurstIsBetter("Bratwurst and Rostbratwurst are sausages"));  //➞ "Bratwurst and Rostbratwurst are Wursts"



// 63 Joining Digits Together
// Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. Separate each digit from each other with the character "-".

// Examples

// function joinDigits(num) {
// return Array.from({ length: num }, (_, i) => (i + 1).toString().split("").join("-")).join("-")


//     let numbers = Array.from({ length: num }, (_, i) => i + 1);
//     let digits = numbers.map(number => number.toString().split('').join('-'));
//     return digits.join('-');
// }


function joinDigits(num) {
    let result = '';
    for (let i = 0; i <= num; i++) {
        let digits = i.toString().split('');
        result += digits.join("-") + "-"
    }
    return result.slice(2, -1);
}

// console.log(joinDigits(4));  //➞ "1-2-3-4"
// console.log(joinDigits(11));  //➞ "1-2-3-4-5-6-7-8-9-1-0-1-1"
// console.log(joinDigits(15));  //➞ "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"



// 64 Compare by ASCII Codes
// Create a function that compares two words based on the sum of their ASCII codes and returns the word with the smaller ASCII sum.

// Examples

// function asciiSort(arr) {
//     let sum = word => word.split('').reduce((char, item) => char + item.charCodeAt(0), 0);
//     return sum(arr[0]) <= sum(arr[1]) ? arr[0] : arr[1];
// }

function asciiSort(arr) {
    let sum = word => {
        let total = 0;
        for (let i = 0; i < word.length; i++) {
            total += word.charCodeAt(i);
        }
        return total;
    };
    return sum(arr[0]) <= sum(arr[1]) ? arr[0] : arr[1];
}

// console.log(asciiSort(["hey", "man"]));  //➞ "man"
// ["h", "e", "y"] ➞ sum([104, 101, 121]) ➞ 326
// ["m", "a", "n"] ➞ sum([109, 97, 110]) ➞ 316
// console.log(asciiSort(["majorly", "then"]));  //➞ "then"
// console.log(asciiSort(["victory", "careless"]));  //➞ "victory"



// 65 Reverse Titling
// Your stereotypical titleCase() function in JavaScript might capitalize the first letter of every word in a given sentence, leaving all the other letters as lowercase.

// The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!

// Examples

// function reverseTitle(str) {
//     return str.split(' ').map(word => {
//         return word[0].toLowerCase() + word.slice(1).toUpperCase();
//     }).join(' ');
// }

function reverseTitle(str) {
    let result = '';
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        let reverse = words[i][0].toLowerCase() + words[i].slice(1).toUpperCase();
        result += reverse + (i < words[i].length - 1 ? ' ' : ' ');
    }
    return result;
}

// console.log(reverseTitle("this is a title"));  //➞ "tHIS iS a tITLE"
// console.log(reverseTitle("BOLD AND BRASH!"));  //➞ "bOLD aND bRASH!"
// console.log(reverseTitle("Elephants dance about bravely in Thailand"));  //➞ "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"



// 66 Numbered Alphabet
// Create a function that converts a string of letters to their respective number in the alphabet.

// A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
// 0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...

// Examples

// function alphNum(str) {
//     return str.split('').map(char => char.charCodeAt(0) - 65).join(' ');
// }

function alphNum(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let position = str.charCodeAt(i) - 65;
        result += position + (i < str.length - 1 ? ' ' : '');
    }
    return result;
}

// console.log(alphNum("XYZ"));  //➞ "23 24 25"
// console.log(alphNum("ABCDEF"));  //➞ "0 1 2 3 4 5"
// console.log(alphNum("JAVASCRIPT"));  //➞ "9 0 21 0 18 2 17 8 15 19"



// 67 Fix the Spacing
// Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.

// Examples

// function correctSpacing(str) {
// return str.trim().replace(/\s+/g, ' ');


//     return str.split(' ').filter(word => word !== '').join(' ')
// }

function correctSpacing(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' || (result[result.length - 1] !== ' ' && result.length > 0)) {
            result += str[i];
        }
    }
    return result.trim();
}

// console.log(correctSpacing("The film   starts       at      midnight. "));
// //➞ "The film starts at midnight."
// console.log(correctSpacing("The     waves were crashing  on the     shore.   "));
// //➞ "The waves were crashing on the shore."
// console.log(correctSpacing(" Always look on    the bright   side of  life."));
//➞ "Always look on the bright side of life."



// 68 The Million Dollar Fence
// Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.

// Create a function which constructs this pricey pricey fence, using the letter "H" to build.

// constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// // 20 fence posts were set up ($1,000,000 / $50,000 = 20)

// Examples

function constructFence(str) {

}

// console.log(constructFence("$50,000"));  //➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// console.log(constructFence("$100,000"));  //➞ "HHHHHHHHHH"
// console.log(constructFence("$1,000,000"));  //➞ "H"



// 69 Enharmonic Equivalents
// In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.

// C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

// Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.

// Examples

// function getEquivalent(str) {
//     const enharmonics = {
//         "C#": "Db", "Db": "C#",
//         "D#": "Eb", "Eb": "D#",
//         "F#": "Gb", "Gb": "F#",
//         "G#": "Ab", "Ab": "G#",
//         "A#": "Bb", "Bb": "A#"
//     };

//     return enharmonics[str] || str;
// }

function getEquivalent(str) {
    if (str === "C#") {
        return "Db"
    } else if (str === "Db") {
        return "C#"
    } else if (str === "D#") {
        return "Eb";
    } else if (str === "Eb") {
        return "D#";
    } else if (str === "F#") {
        return "Gb";
    } else if (str === "Gb") {
        return "F#";
    } else if (str === "G#") {
        return "Ab";
    } else if (str === "Ab") {
        return "G#";
    } else if (str === "A#") {
        return "Bb";
    } else if (str === "Bb") {
        return "A#";
    } else {
        return str;
    }
}

// console.log(getEquivalent("D#"));  //➞ "Eb"
// console.log(getEquivalent("Gb"));  //➞ "F#"
// console.log(getEquivalent("Bb"));  //➞"A#"



// 70 Formating BigInts
// Cryptocurrencies often have a lot of decimals. For example, the popular cryptocurrency Ethereum has 18 decimals.

// When dealing with money, precision is important, you don't want to lose money because a number is losing precision. However, with JavaScript, normal numbers only can go up to 9007199254740991. To deal with this, Javascript now has BigInt for integers bigger than that.

// However, in order to get back to a decimal number, the number needs to be formatted from a BigInt to a string with the right number of decimals.

// Write a function that takes as arguments a BigInt and the desired amount of decimals and returns a string (not a number, as it will lose precision) with the correct amount of decimals.

// Examples

// function formatBigInt(num, decimals) {
//     let numStr = num.toString();
//     numStr = numStr.padStart(decimals + 1, '0');
//     let decimalIndex = numStr.length - decimals;
//     return numStr.slice(0, decimalIndex) + "." + numStr.slice(decimalIndex);
// }

function formatBigInt(num, decimals) {
    let numStr = num.toString().padStart(decimals + 1, '0');
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        result += numStr[i];
        if (i === numStr.length - decimals - 1) {
            result += '.';
        }
    }
    return result;
}

console.log(formatBigInt(1938908490185852058934n, 18));  //➞ "1938.908490185852058934"
console.log(formatBigInt(987654321987654321n, 6 ));  //➞ "987654321987.654321"
console.log(formatBigInt(13902183984901849081284n, 12));  //➞ "13902183984.901849081284"