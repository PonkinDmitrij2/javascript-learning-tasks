'use strict';

/**
 * You are given two string with words separated by commas.
 * Try to find what is common between these strings. The words are not repeated in the same string.
 * Your function should find all of the words that appear in both strings.
 * The result must be represented as a string of words separated by commas in alphabetic order.
 * https://js.checkio.org/ru/mission/common-words/
 *
 * Example:
 * commonWords("hello,world", "hello,earth") == "hello"
 * commonWords("one,two,three", "four,five,six") == ""
 * commonWords("one,two,three", "four,five,one,two,six,three") == "one,three,two"
 *
 * @param {string} str1 - String with words separated by commas.
 * @param {string} str2 - String with words separated by commas.
 * @returns {string} The common words as a string.
 */
const commonWords = (first, second) => {
  const arr1 = first.split(',').sort();
  const arr2 = second.split(',');

  return arr1.filter((word) => arr2.includes(word)).join(',');
};
