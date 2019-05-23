'use strict';

/**
 * You are given two strings and you have to find an index of the second occurrence of the second string in the first one.
 * https://js.checkio.org/ru/mission/second-index/
 * 
 * Example:
 * secondIndex("sims", "s") == 3
 * secondIndex("find the river", "e") == 12
 * secondIndex("hi", " ")  == undefined
 * 
 * @param {string} str1 - The string in which to find the entry.
 * @param {string} str2 - The string to search for.
 * @returns {(number|undefined)} Int or undefined.
 */
const secondIndex = (str1, str2) => {
  const result = str1.indexOf(str2, str1.indexOf(str2) + 1);
  return (result > 0) ? result : undefined;
};
