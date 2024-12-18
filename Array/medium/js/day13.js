// 121 What Type of Triangle?
// Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.

// No sides equal: "scalene"
// Two sides equal: "isosceles"
// All sides equal: "equilateral"
// Less or more than 3 sides given: "not a triangle"

// Examples

function getTriangleType(arr) {
    if (arr.length !== 3) {
        return "not a triangle";
    }
    let [a, b, c] = arr;
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    }
    return "scalene";
}

console.log(getTriangleType([2, 6, 5]));  //➞ "scalene"
console.log(getTriangleType([4, 4, 7]));  //➞ "isosceles"
console.log(getTriangleType([8, 8, 8]));  //➞ "equilateral"
console.log(getTriangleType([3, 5, 5, 2]));  //➞ "not a triangle"