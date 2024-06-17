// Flatten and Remove Duplicates
// Flattening means converting a multidimensional or nested array into a one-dimensional array.

function flattenAndRemoveDuplicates(arr) {
  // explain the code here using comments
  // 1. Flatten the array using flat() method
  // 2. Remove duplicates using Set object
  // 3. Convert Set object to an array using spread operator
  // 4. Return the final array
  // Infinity is a global object in JavaScript that represents a numeric value that is larger than any other number.
  return [...new Set(arr.flat(Infinity))];
}

const arr = [1, 2, [3, 4, [5, 6]], 2, [3, 4]];
const result = flattenAndRemoveDuplicates(arr);
console.log(result);

// Remove Duplicates without flattening using filter method
function removeDuplicates(arr) {
  // 1. Use filter() method to remove duplicates
  // 2. The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  // 3. The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  // 4. The filter() method will return only the elements whose index is equal to the first occurrence of the element in the array.
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

const arr1 = [1, 2, 3, 4, 2, 3, 4];
const result1 = removeDuplicates(arr);
console.log(result); // Output: [1, 2, 3, 4]
