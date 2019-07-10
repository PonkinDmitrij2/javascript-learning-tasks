/**
 * https://www.codewars.com/kata/find-the-stray-number/train/javascript
 *
 * You are given an odd-length array of integers,
 * in which all of them are the same, except for one single number.
 *
 * Complete the method which accepts such an array, and returns that single different number.
 *
 * The input array will always be valid! (odd-length >= 3)
 *
 * Examples:
 *
 * [1, 1, 2] ==> 2
 *
 * [17, 17, 3, 17, 17, 17, 17] ==> 3
 *
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Returns that single different number.
 */
const stray = (arr) => {
  const arrSorted = [...arr].sort((a, b) => a - b);

  if (arrSorted[0] === arrSorted[1]) {
    return arrSorted[arrSorted.length - 1];
  }

  return arrSorted[0];
};

export default stray;
