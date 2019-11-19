/**
 * Odd Ones Out.
 *
 * https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0
 *
 * @param {Object[]} arr - Array of numbers.
 * @returns {Object[]} Array.
 * @example
 *
 * oddOnesOut([1, 2, 3, 1, 3, 3])
 * // => [1, 1]
 *
 * oddOnesOut([1, 1, 2, 2, 3, 3, 3])
 * // => [1, 1, 2, 2]
 *
 * oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26])
 * // => [26, 24, 24, 26]
 *
 * oddOnesOut([1, 2, 3])
 * // => []
 *
 * oddOnesOut([1])
 * // => []
 */
const oddOnesOut = (arr) => {
  const map = arr.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});

  return arr.filter((item) => map[item] % 2 === 0);
};

export default oddOnesOut;
