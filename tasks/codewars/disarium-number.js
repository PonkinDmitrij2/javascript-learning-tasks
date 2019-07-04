/**
 * Disarium number is the number that The sum of its digits powered with their respective
 * positions is equal to the number itself.
 *
 * Task: Given a number, Find if it is Disarium or not.
 *
 * Examples
 *
 * 1- disariumNumber(89) ==> return "Disarium !!"
 *
 * Explanation: Since , 8 * 1 + 9 * 2 = 89 , thus output is "Disarium !!"
 *
 * 2- disariumNumber(564) ==> return "Not !!"
 *
 * Explanation: Since , 5 * 1 + 6 * 2 + 4 * 3 = 105 != 546 , thus output is "Not !!"
 *
 * @param {number} num - Number passed is always Positive.
 * @returns {string} Return the result as String.
 */
const disariumNumber = (num) => {
  const res = [...String(num)].reduce((acc, item, i) => {
    acc += Number(item) ** (i + 1);
    return acc;
  }, 0);

  return res === num ? 'Disarium !!' : 'Not !!';
};

export default disariumNumber;
