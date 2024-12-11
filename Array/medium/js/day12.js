// 111 Potential Friend?
// Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

// Examples

// function isPotentialFriend(arr1, arr2) {
//   let result = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       result++
//     }
//   }
//   return result >= 2 || arr1.length === arr2.length && result === arr1.length
// }

function isPotentialFriend(arr1, arr2) {
  let common = arr1.filter(char => arr2.includes(char));
  return common.length >= 2 || arr1.length === arr2.length && common.length === arr1.length;
}

// console.log(isPotentialFriend(
//   ["sports", "music", "chess"],
//   ["coding", "music", "netflix", "chess"]
// ));  //➞ true
// console.log(isPotentialFriend(
//   ["cycling", "technology", "drawing"],
//   ["dancing", "drawing"]
// ));  //➞ false
// console.log(isPotentialFriend(
//   ["history"],
//   ["history"]
// ));  //➞ true



// 112 All Occurrences of an Element in an Array
// Create a function that returns the indices of all occurrences of an item in the array.

// Examples

function getIndices(arr, num) {
  
}

console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a"));  //➞ [0, 1, 3, 5]
console.log(getIndices([1, 5, 5, 2, 7], 7));  //➞ [4]
console.log(getIndices([1, 5, 5, 2, 7], 5));  //➞ [1, 2]
console.log(getIndices([1, 5, 5, 2, 7], 8));  //➞ []