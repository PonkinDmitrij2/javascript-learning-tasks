/**
 * Isograms
 *
 * https://www.codewars.com/kata/isograms/train/javascript
 *
 * @param {string} str Source string.
 * @returns {boolean} True or false.
 * @example
 *
 * isIsogram("Dermatoglyphics")
 * // => true
 *
 * isIsogram("aba")
 * // => false
 */
const isIsogram = (str) => new Set(str.toUpperCase()).size === str.length;

export default isIsogram;
