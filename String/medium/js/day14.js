// 131 grab the City
// Write a function to return the city from each of these vacation spots.

// Examples

// function grabCity(str) {
//     let start = str.lastIndexOf("[");
//     let end = str.indexOf("]", start);
//     return str.slice(start + 1, end);
// }

function grabCity(str) {
    let result = '';
    let grab = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[') {
            grab = true;
            result = "";
        } else if (str[i] === ']') {
            grab = false;
        } else if (grab) {
            result += str[i];
        }
    }
    return result;
}

// console.log(grabCity("[Last Day!] Beer Festival [Munich]"));  //➞ "Munich"
// console.log(grabCity("Cheese Factory Tour [Portland]"));  //➞ "Portland"
// console.log(grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]"));  //➞ "Kyoto"



// 132 ASCII Charts (Part 1: Progress Bar)
// Given a character and a value between 0 and 100, return a string that represents a simple progress bar.

// The value represents a percentage.
// The bar should begin and end with "|"
// Repeat the character to fill the bar, with each character equivalent to 10%
// Use spaces to pad the bar to a length of 10 characters.
// A single space comes after the bar, then a message with the % of completion (e.g. "Progress: 60%")
// If the value is 100, the message should be "Completed!".

// Examples

function progressBar(bar, progress) {
    let filled = Math.floor(progress / 10);
    let space = 10 - filled;
    let barString = bar.repeat(filled) + " ".repeat(space);
    let message = progress === 100 ? "Complete!" : `progress: ${progress}%`;
    return `|${barString}| ${message}`;
}

// console.log(progressBar("#", 0));  //➞ "|          | Progress: 0%"
// console.log(progressBar("=", 40));  //➞ "|====      | Progress: 40%"
// console.log(progressBar("#", 60));  //➞ "|######    | Progress: 60%"
// console.log(progressBar(">", 100));  //➞ "|>>>>>>>>>>| Completed!"



// 133 Counting Adverbs
// Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.

// Examples

// function countAdverbs(str) {
//     return str.split(" ").filter(word => word.toLowerCase().replace(/[^a-z]/g, "").endsWith("ly")).length;
// }

function countAdverbs(str) {
    let words = str.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i].replace(/[^a-z]/g, "");
        if (word.toLowerCase().endsWith("ly")) {
            count++;
        }
    }
    return count;
}

// console.log(countAdverbs("She ran hurriedly towards the stadium."));  //➞ 1
// console.log(countAdverbs("She ate the lasagna heartily and noisily."));  //➞ 2
// console.log(countAdverbs("He hates potatoes."));  //➞ 0
// console.log(countAdverbs("He was happily, crazily, foolishly over the moon."));  //➞ 3



// 134 Function to Arrow Function
// Create a function that takes an empty function as a string and returns the function as a arrow function.

// Examples

function toArrow(str) {

}

// console.log(toArrow("function test(a) {}"));  //➞  "const test = (a) =>"
// console.log(toArrow("function twoArgs(a,b) {}"));  //➞ "const twoArgs = (a,b) =>"
// console.log(toArrow("function restArgs(...a) {}"));  //➞  "const restArgs = (...a) =>"



// 135 Mumbling Challenge
// Create a function that takes a string str and modifies the given string as per the below examples:

// Examples

// function mumbling(str) {
//     return str.split("").map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i)).join("-");
// }

function mumbling(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let repeated = char.toUpperCase() + char.toLowerCase().repeat(i);
        result.push(repeated);
    }
    return result.join("-");
}

// console.log(mumbling("MubAshIr"));  //➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
// console.log(mumbling("maTT"));  //➞ "M-Aa-Ttt-Tttt"
// console.log(mumbling("EdaBit")); //➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"



// 136 Verbed Nouns
// Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.

// Examples

// function verbify(str) {
//     let words = str.split(" ")
//     if (!words[0].endsWith("ed")) {
//         words[0] += "ed"
//     }
//     return words.join(" ")
// }

function verbify(str) {
    let splited = str.split(" ");
    splited[0] = splited[0].endsWith("ed") ? splited[0] : splited[0] + "ed";
    return splited.join(" ");
}

// console.log(verbify("cheese burger"));  //➞ "cheeseed burger"
// console.log(verbify("salt water"));  //➞ "salted water"
// console.log(verbify("orange juice"));  //➞ "orangeed juice"
// console.log(verbify("shredded cheese"));  //➞ "shredded cheese"



// 137 Letters Shared between Two Words
// Create a function that returns the number of characters shared between two words.

// Examples

// function sharedLetters(str1, str2) {
//     return str1.split('').filter(char => str2.includes(char)).length;
// }

function sharedLetters(str1, str2) {
    let splited = str1.split("");
    let count = 0;
    for (let i = 0; i < splited.length; i++) {
        if (str2.includes(splited[i])) {
            count++;
        }
    }
    return count;
}

// console.log(sharedLetters("apple", "meaty"));  //➞ 2
// // Since "ea" is shared between "apple" and "meaty".
// console.log(sharedLetters("fan", "forsook"));  //➞ 1
// console.log(sharedLetters("spout", "shout"));  //➞ 4



// 138 An Absolute
// Given a sentence, create a function that replaces every "a" as an article with "an absolute". It should return the same string without any change if it doesn't have any "a".

// Examples

// function absolute(str) {
//     return str.split(" ").map(word => word.toLowerCase() === 'a' ? 'an absolute' : word).join(" ")
// }

function absolute(str) {
    let splited = str.split(' ');
    for (let i = 0; i < splited.length; i++) {
        if (splited[i].toLowerCase() === 'a') {
            splited[i] = 'an absolute';
        }
    }
    return splited.join(" ");
}

// console.log(absolute("I am a champion!!!"));  //➞ "I am an absolute champion!!!"
// console.log(absolute("Such an amazing bowler."));  //➞ "Such an amazing bowler."
// console.log(absolute("A man with no haters."));  //➞ "An absolute man with no haters."



// 139 A Simple Timer
// Mubashir created a simple timer but he needs your help to make it readable inside a microcontroller.

// Create a function that takes the number of seconds and returns the timer in "00:00:00" format.

// Examples

function simpleTimer(seconds) {
    let hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

// console.log(simpleTimer(0));  //➞ "00:00:00"
// console.log(simpleTimer(59));  //➞ "00:00:59"
// console.log(simpleTimer(60));  //➞ "00:01:00"
// console.log(simpleTimer(3599));  //➞ "00:59:59"



// 140 String Flips
// Create a function that takes a string as the first argument, and a (string) specification as a second argument. If the specification is "word", return a string with each word reversed while maintaining their original order. If the specification is "sentence", reverse the order of the words in the string, while keeping the words intact.

// Examples

str = "There's never enough time to do all the nothing you want";

function flip(str, spec) {
    if (spec === 'word') {
        return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
    } else if (spec === 'sentence') {
        return str.split(" ").reverse().join(" ");
    }
}

console.log(flip("Hello", "word"));  //➞ "olleH"
console.log(flip("Hello", "sentence"));  //➞ "Hello"
console.log(flip(str, "word"));  //➞ "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
console.log(flip(str, "sentence"));  //➞ "want you nothing the all do to time enough never There's"