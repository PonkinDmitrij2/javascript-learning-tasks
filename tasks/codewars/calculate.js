/**
 * Basic Math (Add or Subtract)
 *
 * https://www.codewars.com/kata/basic-math-add-or-subtract/train/javascript
 * @param {string} str - Source string.
 * @returns {string} Result as string.
 * @example
 *
 * calculate("1plus2plus3plus4")
 * // => '10'
 */
const calculate = (str) => {
  const result = str
    .split('plus')
    .join(' ')
    .split('minus')
    .join(' -')
    .split(' ')
    .reduce((acc, item) => Number(acc) + Number(item));

  return `${result}`;
};

export default calculate;
