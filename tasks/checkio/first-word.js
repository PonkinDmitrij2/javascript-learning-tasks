/**
 * First Word. Find the first word in a stringing.
 * https://js.checkio.org/ru/mission/first-word/
 *
 * You are given a stringing where you have to find its first word.
 * When solving a task pay attention to the following points:
 * There can be dots and commas in a stringing.
 * A stringing can start with a letter or, for example, a dot or space.
 * A word can contain an apostringophe and it's a part of a word.
 * The whole text can be represented with one word and that's it.
 *
 * Precondition: text can contain a-z A-Z , .
 *
 * Example:
 * firstWord("Hello world") == "Hello"
 * firstWord("greetings, friends") == "greetings"
 * firstWord(" a word ") == "a"
 * firstWord("don't touch it") == "don't"
 * firstWord("... and so on ...") == "and"
 * @param {string} string - A stringing.
 * @returns {string} A stringing.
 */
const firstWord = (str) => str.match(/([a-z']+)/i)[0];

export default firstWord;
