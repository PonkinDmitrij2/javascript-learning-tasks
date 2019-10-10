/**
 * The First Non Repeated Character In A String.
 *
 * https://www.codewars.com/kata/the-first-non-repeated-character-in-a-string/train/javascript
 *
 * @param {string} str - Some string.
 * @returns {string} Returns the first non-repeated character in the given string.
 * @example
 *
 * firstNonRepeated('test')
 * // => 'e'
 */

const firstNonRepeated = (str) => {
  const result = [...str].find(
    (letter) => str.indexOf(letter) === str.lastIndexOf(letter),
  );

  return result || null;
};

export default firstNonRepeated;
