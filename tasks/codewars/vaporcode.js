/**
 * https://www.codewars.com/kata/v-a-p-o-r-c-o-d-e/train/javascript
 *
 * @param {string} str - Source string.
 * @returns {string} Converted string.
 * @example
 *
 * vaporcode("Let's go to the movies")
 * // => 'L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S'
 */
const vaporcode = (str) => {
  return str
    .toUpperCase()
    .split(' ')
    .join('')
    .split('')
    .join('  ');
};

export default vaporcode;
