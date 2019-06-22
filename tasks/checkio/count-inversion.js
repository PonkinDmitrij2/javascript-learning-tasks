/**
 * Count Inversion.
 * https://js.checkio.org/ru/mission/count-inversions/
 *
 * You are given a sequence of unique numbers and you should
 * count the number of inversions in this sequence.
 * Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three
 * inversions - 5 and 3; - 5 and 4; - 7 and 6.
 *
 * Example:
 *
 * countInversion([1, 2, 5, 3, 4, 7, 6]) == 3
 *
 * countInversion([0, 1, 2, 3]) == 0
 *
 * countInversion([99, -99]) == 1
 *
 * countInversion([5, 3, 2, 1, 0]) == 10
 *
 * @param {number[]} arr - A sequence as a tuple of integers.
 * @returns {number} The inversion number as an integer.
 */
const countInversion = (sequence) => {
  return sequence.reduce((acc, item, i, arr) => {
    arr.slice(i + 1).forEach((elem) => {
      if (item > elem) {
        acc += 1;
      }
    });

    return acc;
  }, 0);
};

export default countInversion;
