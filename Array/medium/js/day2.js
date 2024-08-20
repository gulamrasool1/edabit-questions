// 11 Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples

// function clone(arr) {
// return [...arr, [...arr]]

//     return arr.concat([arr.slice()]);
// }

function clone(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    arr.push(result);
    return arr;
}

// console.log(clone([1, 1]));  //➞ [1, 1, [1, 1]]
// console.log(clone([1, 2, 3]));  //➞ [1, 2, 3, [1, 2, 3]]
// console.log(clone(["x", "y"]));  //➞ ["x", "y", ["x", "y"]]



// 12 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// Examples

// function marathonDistance(arr) {
//     let totalDistance = arr.reduce((acc, item) => acc + Math.abs(item), 0);
//     return totalDistance === 25;
// }

function marathonDistance(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += Math.abs(arr[i])
    }
    return result === 25;
}

console.log(marathonDistance([1, 2, 3, 4]));  //➞ false
console.log(marathonDistance([1, 9, 5, 8, 2]));  //➞ true
console.log(marathonDistance([-6, 15, 4]));  //➞ true