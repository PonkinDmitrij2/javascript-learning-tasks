/**
 * Sum Mixed Array.
 *
 * https://www.codewars.com/kata/sum-mixed-array/train/javascript
 *
 * @param {Object[]} array - Array of integers as strings and numbers.
 * @returns {number} Return the sum of the array values as if all were numbers.
 * @example
 *
 * sumMix([9, 3, '7', '3']))
 * // => 22
 */
const sumMix = (array) => {
  return array.reduce((acc, item) => {
    acc += Number(item);
    return acc;
  }, 0);
};

export default sumMix;
