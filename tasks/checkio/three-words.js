/**
 * Three Words.
 * https://js.checkio.org/ru/mission/three-words/
 *
 * You are given a string with words and numbers separated by whitespaces (one space).
 * The words contains only letters.
 * You should check if the string contains three words in succession.
 * For example, the string "start 5 one two three 7 end" contains three words in succession.
 *
 * Example:
 *
 * threeWords("Hello World hello") == True
 *
 * threeWords("He is 123 man") == False
 *
 * threeWords("1 2 3 4") == False
 *
 * threeWords("bla bla bla bla") == True
 *
 * threeWords("Hi") == False
 *
 * @param {string} str - A string with words.
 * @returns {boolean} The answer as a boolean.
 */
const threeWords = (string) => {
  let count = 0;
  const strings = string.split(' ');

  for (const str of strings) {
    const isWord = str.toLowerCase() !== str.toUpperCase();

    count = isWord ? count + 1 : 0;

    if (count === 3) {
      return true;
    }
  }

  return false;
};

export default threeWords;
