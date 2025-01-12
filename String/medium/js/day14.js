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
        result.push(repeated)
    }
    return result.join("-")
}

console.log(mumbling("MubAshIr"));  //➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
console.log(mumbling("maTT"));  //➞ "M-Aa-Ttt-Tttt"
console.log(mumbling("EdaBit"));  //➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"