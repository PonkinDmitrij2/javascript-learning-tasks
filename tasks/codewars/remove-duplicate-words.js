/**
 * Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
 *
 * https://www.codewars.com/kata/5b39e3772ae7545f650000fc
 *
 * https://www.codewars.com/kata/remove-duplicate-words/train/javascript
 *
 * @param {string} str - The line in which to remove duplicates.
 * @returns {string} The row in which duplicates are deleted.
 * @example
 *
 * Input:
 *
 * 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
 *
 * Output:
 *
 * 'alpha beta gamma delta'
 */
const removeDuplicateWords = (str) => {
  const words = str.split(' ');

  const result = words.filter((word, i, arr) => arr.indexOf(word) === i);

  return result.join(' ');
};

export default removeDuplicateWords;
