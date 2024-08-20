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

console.log(clone([1, 1]));  //➞ [1, 1, [1, 1]]
console.log(clone([1, 2, 3]));  //➞ [1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"]));  //➞ ["x", "y", ["x", "y"]]
