// 91 Check if the String is a Palindrome
// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

// Examples

// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     return cleanedStr === cleanedStr.split("").reverse().join("");
// }

function isPalindrome(str) {
    let cleanedStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z')) {
            cleanedStr += char;
        }
    }
    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    return cleanedStr === reversedStr;
}

console.log(isPalindrome("Neuquen"));  //➞ true
console.log(isPalindrome("Not a palindrome"));  //➞ false
console.log(isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!"));  //➞ true