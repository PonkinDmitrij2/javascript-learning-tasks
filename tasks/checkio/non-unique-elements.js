/**
 * Non-unique Elements
 *
 * https://js.checkio.org/ru/mission/non-unique-elements/
 *
 * @param {Object[]} array - Array of integers.
 * @returns {Object[]} Array without unique values.
 * @example
 *
 * nonUniqueElements([1, 2, 3, 1, 3])
 * // => [1, 3, 1, 3]
 *
 * nonUniqueElements([1, 2, 3, 4, 5])
 * // => []
 *
 * onUniqueElements([5, 5, 5, 5, 5])
 * // => [5, 5, 5, 5, 5]
 *
 * nonUniqueElements([10, 9, 10, 10, 9, 8])
 * // => [10, 9, 10, 10, 9]
 */
const nonUniqueElements = (array) => {
  return array.filter((item) => array.indexOf(item) !== array.lastIndexOf(item));
};

export default nonUniqueElements;
