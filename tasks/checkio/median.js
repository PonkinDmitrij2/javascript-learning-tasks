/**
 * Median
 *
 * https://js.checkio.org/ru/mission/median/
 *
 * @param {Object[]} array - An array as a list of integers.
 * @returns {number} The median as a float or an integer.
 * @example
 *
 * median([1, 2, 3, 4, 5])
 * // => 3
 *
 * median([3, 1, 2, 5, 3])
 * // => 3
 *
 * median([1, 300, 2, 200, 1])
 * // => 2
 *
 * median([3, 6, 20, 99, 10, 15])
 * // => 12.5
 */
const median = (data) => {
  const sortedData = [...data].sort((a, b) => a - b);
  const len = sortedData.length;
  const n = Math.floor(len / 2);
  return (sortedData[n] + sortedData[len - 1 - n]) / 2;
};

export default median;
