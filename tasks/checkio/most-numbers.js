'use strict';

/**
 * The Most Numbers.
 * Determine the difference between the smallest and the biggest numbers.
 * https://js.checkio.org/ru/mission/most-numbers/
 *
 * Example:
 * mostNumbers(1, 2, 3) == 2
 * mostNumbers(5, -5) == 10
 * mostNumbers(10.2, -2.2, 0, 1.1, 0.5) == 12.4
 * mostNumbers() == 0
 *
 * @param  {...any} args An arbitrary number of arguments as numbers (int, float).
 * @returns {number} The difference between maximum and minimum as a number (int, float).
 */
const mostNumbers = (...args) => {
  if (!args.length) {
    return 0;
  }

  return Math.max(...args) - Math.min(...args);
};
