'use strict';

/**
 * Popular Words
 * https://js.checkio.org/ru/mission/popular-words/
 *
 * In this mission your task is to determine the popularity of certain words in the text.
 * At the input of your function are given 2 arguments: the text and the array of words the
 * popularity of which you need to determine.
 * When solving this task pay attention to the following points:
 * The words should be sought in all registers. This means that if you need to find a word
 * "one" then words like "one" "One", "oNe", "ONE" etc. will do.
 * The search words are always indicated in the lowercase.
 * If the word wasn’t found even once, it has to be returned in the dictionary with 0 (zero) value.
 *
 * Example:
 * popularWords('When I was One I had just begun When I was Two I was nearly new',
 * ['i', 'was', 'three', 'near']) == {
 *   'i': 4,
 *   'was': 3,
 *   'three': 0,
 *   'near': 0
 * }
 * @param {string} str - The text.
 * @param {string[]} arr - The search words array.
 * @returns {Object} The dictionary where the search words are the keys and values
 * are the number of times when those words are occurring in a given text.
 */
const popularWords = (text, arr) => {
  const words = text.toLowerCase().split('\n').join(' ').split(' ');

  return arr.reduce((acc, word) => {
    acc[word] = words.filter((str) => str === word).length;
    return acc;
  }, {});
};
