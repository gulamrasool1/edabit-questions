// 51 Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// Examples

function reverseImage(image) {
    let result = [];
    for (let i = 0; i < image.length; i++) {
        let res = [];
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] === 0 ? res.push(1) : res.push(0)
        }
        result.push(res)
    }
    return result
}

console.log(reverseImage([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]));
//➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]
console.log(reverseImage([
    [1, 1, 1],
    [0, 0, 0]
]));
//➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]
console.log(reverseImage([
    [1, 0, 0],
    [1, 0, 0]
]));
//➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]