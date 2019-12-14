/**
 * The Most Wanted Letter
 *
 * https://js.checkio.org/en/mission/most-wanted-letter/
 *
 * @param {string} data - A text for analysis as a string.
 * @returns {string} The most frequent letter in lower case as a string.
 * @example
 *
 * mostWanted("Hello World!")
 * // => "l"
 */
const mostWanted = (data) => {
  return data
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/([a-z])\1*/g)
    .sort((a, b) => b.length - a.length)
    .filter((item, i, arr) => item.length === arr[0].length)
    .sort()[0][0];
};

export default mostWanted;
