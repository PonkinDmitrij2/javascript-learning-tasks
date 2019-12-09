/**
 * Double Sort
 *
 * https://www.codewars.com/kata/double-sort/train/javascript
 *
 * @param {Object[]} arr - Array of numbers and strings.
 * @returns {Object[]} Array.
 *
 * @example
 *
 * dbSort([6, 2, 3, 4, 5])
 * // => [2, 3, 4, 5, 6]
 *
 * dbSort([14, 32, 3, 5, 5])
 * // => [3, 5, 5, 14, 32]
 *
 * dbSort([1, 2, 3, 4, 5])
 * // => [1, 2, 3, 4, 5]
 *
 * dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])
 * // => [0,2,2,"Apple","Banana","Mango","Orange"]
 *
 * dbSort(["C", "W", "W", "W", 1, 2, 0])
 * // => [0,1,2,"C","W","W","W"]
 */
const dbSort = (arr) => {
  const numbers = arr
    .filter((item) => typeof item === 'number')
    .sort((a, b) => a - b);
  const strings = arr.filter((item) => typeof item === 'string').sort();
  return [...numbers, ...strings];
};

export default dbSort;
