// 18 Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

// Examples

// function hashPlusCount(str) {
//     let hashCount = str.split('').filter(char => char === '#').length;
//     let plusCount = str.split('').filter(char => char === '+').length;
//     return [hashCount, plusCount];
// }

function hashPlusCount(str) {
    let hashCount = 0;
    let plusCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            hashCount++;
        }else{
            plusCount++;
        }
    }
    return [hashCount, plusCount];
}

// console.log(hashPlusCount("###+"));  //➞ [3, 1]
// console.log(hashPlusCount("##+++#"));  //➞ [3, 3]
// console.log(hashPlusCount("#+++#+#++#"));  //➞ [4, 6]
// console.log(hashPlusCount(""));  //➞ [0, 0]



// 19 Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples

// function societyName(arr) {
//     return arr.map(char => char[0]).sort().join('')
// }

function societyName(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i][0];
    }
    return result.split('').sort().join('')
}

// console.log(societyName(["Adam", "Sarah", "Malcolm"]));  //➞ "AMS"
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));  //➞ "CHLN"
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));  //➞ "CJMPRR"



// 20 Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples

// function reverseCase(str) {
//     return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
// }

function reverseCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    }
    return result;
}

// console.log(reverseCase("Happy Birthday"));  //➞ "hAPPY bIRTHDAY"
// console.log(reverseCase("MANY THANKS"));  //➞ "many thanks"
// console.log(reverseCase("sPoNtAnEoUs"));  //➞ "SpOnTaNeOuS"



// 21 Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
// Examples

// function isValid(str) {
//     const num = Number(str);
//     return Number.isInteger(num) && str.length === 5 && !str.includes(' ');
// }

// function isValid(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.length !== 5) {
//             return false
//         }else if (str[i] < '0' || str[i] > '9') {
//             return false
//         }
//     }
//     return true
// }

// console.log(isValid("59001"));  //➞ true
// console.log(isValid("853a7"));  //➞ false
// console.log(isValid("732 32")); //);  //➞ false
// console.log(isValid("393939"));  //➞ false



// 22 Convert to Decimal Notation
// Create a function to convert an array of percentages to their decimal equivalents.

// Examples

function convertToDecimal(arr) {
    return arr.map(item => parseFloat(item.replace('%', '')) / 100);
}

// console.log(convertToDecimal(["1%", "2%", "3%"]));  //➞ [0.01, 0.02, 0.03]
// console.log(convertToDecimal(["45%", "32%", "97%", "33%"]));  //➞ [0.45, 0.32, 0.97, 0.33]
// console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]));  //➞ [0.33, 0.981, 0.5644, 1]



// 23 Check If It's a Title String
// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

// Examples

// function checkTitle(str) {
//     let words = str.split(' ');
//     let capitalWord = words.map(item => item.charAt(0).toUpperCase() === item.charAt(0).toUpperCase());
//     return capitalWord[0] && capitalWord[capitalWord.length -1];
// }

function checkTitle(str) {
    let words = str.split(" ");
    if (words.length === 0) {
        return false
    }
    let firstWord = words[0];
    let lastWord = words[words.length - 1]

    let capitalWord = word => word.charAt(0) === word.charAt(0).toUpperCase();
    
    return capitalWord(firstWord) && capitalWord(lastWord);
}

// console.log(checkTitle("A Mind Boggling Achievement"));  //➞ true
// console.log(checkTitle("A Simple Java Script Program!"));  //➞ true
// console.log(checkTitle("Water is transparent"));  //➞ false



// 24 Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

// Examples

// function convertBinary(str) {
//     return str.toLowerCase().split('').map(char => {
//         if (char >= 'a' && char <= 'm') {
//             return '0'
//         }else if (char >= 'n' && char <= 'z') {
//             return '1'
//         }else{
//             return '';
//         }
//     }).join('');
// }

function convertBinary(str) {
    return str.toLowerCase().split('').reduce((acc, char) => {
        if (char >= 'a' && char <= 'm') {
            return acc + '0'
        }else if (char >= 'n' && char <= 'z') {
            return acc + '1'
        }
        return acc;
    }, '')
}

// console.log(convertBinary("house"));  //➞ "01110"
// console.log(convertBinary("excLAIM"));  //➞ "0100000"
// console.log(convertBinary("moon"));  //➞ "0111"



// 25 Most Left Digit
// Write a function that takes a string as an argument and returns the left most digit in the string.

// Examples

// function leftDigit(str) {
//     let match = str.match(/\d/);
//     return match ? parseInt(match) : null; // parseInt ki jagah parseFloat bhi lga sakte hai
// }

function leftDigit(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            return parseInt(str[i])
        }
    }
    return null
}

// console.log(leftDigit("TrAdE2W1n95!"));  //➞ 2
// console.log(leftDigit("V3r1ta$"));  //➞ 3
// console.log(leftDigit("U//DertHe1nflu3nC3"));  //➞ 1
// console.log(leftDigit("J@v@5cR1PT"));  //➞ 5



// 26 Video Length in Seconds
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

// Examples

// function minutesToSeconds(str) {
//     let [minutes, seconds] = str.split(':').map(Number);
//     if (seconds >= 60) {
//         return false
//     }
//     return (minutes * 60) + seconds;
// }

function minutesToSeconds(str) {
    let timeParts = str.split(':').map(Number);
    if (timeParts[1] >= 60) {
        return false
    }
    let totalSeconds = 0;
    for (let i = 0; i < timeParts.length; i++) {
        totalSeconds += i === 0 ? timeParts[i] * 60 : timeParts[i];
    }
    return totalSeconds
}

// console.log(minutesToSeconds("01:00"));  //➞ 60
// console.log(minutesToSeconds("13:56"));  //➞ 836
// console.log(minutesToSeconds("10:60"));  //➞ false



// 27 How Many Decimal Places?
// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

// Examples

// function getDecimalPlaces(str) {
//     if (!str.includes('.')) {
//         return 0;
//     }
//     let index = str.indexOf('.');
//     return str.slice(index + 1).length; 
// }

function getDecimalPlaces(str) {
    let index = str.indexOf('.');
    if (!str.includes('.')) {
        return 0;
    }
    let count = 0;
    for (let i = index + 1; i < str.length; i++) {
        count++;
    }
    return count;
}

// console.log(getDecimalPlaces("43.20"));  //➞ 2
// console.log(getDecimalPlaces("400"));  //➞ 0
// console.log(getDecimalPlaces("3.1"));  //➞ 1



// 28 Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// To illustrate:

// indexShuffle("abcd") ➞ "acbd"
// // "ac" (even-indexed) + "bd" (odd-indexed)
// Examples

// function indexShuffle(str) {
//     let char = str.split("");

//     let evenChar = char.filter((_, index) => index % 2 === 0).join(''); 
//     let oddChar = char.filter((_, index) => index % 2 !== 0).join('');
     
//     return evenChar + oddChar;
// }

function indexShuffle(str) {
    let evenChar = '';
    let oddChar = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenChar += str[i];
        }else{
            oddChar += str[i];
        }
    }
    return evenChar + oddChar;
}

// console.log(indexShuffle("abcdefg"));  //➞ "acegbdf"
// console.log(indexShuffle("holiday"));  //➞ "hldyoia"
// console.log(indexShuffle("maybe"));  //➞ "myeab"



// 29 Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// Examples

function battingAvg(arr) {
    
}

// console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]));  //➞ ".286"
// console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]));  //➞ ".350"
// console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]));  //➞ ".273"



// 30 Detect Browser from User Agent
// You need to detect what browser is being used. Create a function that takes a string (browser identifier) and returns the browser name.

// Examples

function detectBrowser(arr) {
    if (arr.includes('Chrome')) {
        return 'Google Chrome'
    }else if (arr.includes('Firefox')) {
        return 'Mozilla Firefox'
    }else if(arr.includes("Trident")){
        return "Internet Explorer"
    }else{
        return 'Unknown Browser'
    }
}

// console.log(detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"));  //➞ "Google Chrome"
// console.log(detectBrowser("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0"));  //➞ "Mozilla Firefox"
// console.log(detectBrowser("Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko"));  //➞ "Internet Explorer"



// 31 Regex Series: 5-Digit Zip Code
// Write a regular expression that matches a string if and only if it is a valid zip code.

// Examples

// function isValid(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.length !== 5) {
//             return false
//         }else if (str[i] < '0' || str[i] > '9') {
//             return false
//         }
//     }
//     return true
// }

function isValid(str) {
    const num = Number(str);
    return Number.isInteger(num) && str.length === 5 && !str.includes(' ');
}

// console.log(isValid("32554"));
//   //➞ true
// console.log(isValid("92 342"));
//    //➞ false
// // Invalid: contains a whitespace
// console.log(isValid("9@342" ));
//   //➞ false
// // Invalid: contains a non-numeric character
// console.log(isValid("923444"));
   //➞ false
// Invalid: length is not 5



// 32 Prefixes vs. Suffixes
// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

// Examples

// function isPrefix(word, prefix) {
//     let fix = prefix.slice(0, -1);
//     return word.startsWith(fix);
// }

// function isSuffix(word, suffix) {
//     let fix = suffix.slice(1);
//     return word.endsWith(fix);
// }

function isPrefix(word, prefix) {
    let fix = prefix.slice(0, -1);
    if (fix.length > word.length) {
        return false
    }
    for (let i = 0; i < fix.length; i++) {
        if (word[i] !== fix[i]) {
            return false
        }
    }
    return true;
}

function isSuffix(word, suffix) {
    let fix = suffix.slice(1);
    if (fix.length > word.length) {
        return false;
    }
    for (let i = 0; i < fix.length; i++) {
        if (word[word.length - fix.length + i] !== fix[i]) {
            return false
        }
    }
    return true;
}

// console.log(isPrefix("automation", "auto-"));  //➞ true
// console.log(isSuffix("arachnophobia", "-phobia"));  //➞ true
// console.log(isPrefix("retrospect", "sub-"));  //➞ false
// console.log(isSuffix("vocation", "-logy"));  //➞ false