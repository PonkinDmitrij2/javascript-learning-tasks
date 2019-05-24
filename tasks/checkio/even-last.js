'use strict';

/**
 * You are given an array of integers.
 * You should find the sum of the integers with even indexes (0th, 2nd, 4th...).
 * Then multiply this summed number and the final element of the array together.
 * Don't forget that the first element has an index of 0.
 * For an empty array, the result will always be 0 (zero).
 * https://js.checkio.org/ru/mission/even-last/
 *
 * Example:
 * evenLast([0, 1, 2, 3, 4, 5]) == 30
 * evenLast([1, 3, 5]) == 30
 * evenLast([6]) == 36
 * evenLast([]) == 0
 *
 * @param {number[]} arr - A list of integers.
 * @returns {number} The number as an integer.
 */
const evenLast = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  return arr
    .filter((item, i) => i % 2 === 0)
    .reduce((acc, item) => acc + item, 0) * arr[arr.length - 1];
};
