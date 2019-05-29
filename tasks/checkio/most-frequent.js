'use strict';

/**
 * The Most Frequent.
 *
 * You have a sequence of strings, and you’d like to determine the most frequently
 * occurring string in the sequence. It can be only one
 * https://js.checkio.org/en/mission/the-most-frequent/
 *
 * Example:
 * mostFrequent(['a', 'b', 'c', 'a', 'b', 'a']) == 'a'
 * mostFrequent(['a', 'a', 'bi', 'bi', 'bi']) == 'bi'
 *
 * @param {string[]} arr - Non empty Array of strings.
 * @returns {string} The most common string in the sequence.
 */
const mostFrequent = (arr) => {
  const map = arr.reduce((acc, str) => {
    acc[str] = (acc[str] + 1) || 1;
    return acc;
  }, {});

  const numbers = Object.values(map);

  return Object.keys(map)[numbers.indexOf(Math.max(...numbers))];
};
