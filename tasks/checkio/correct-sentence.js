'use strict';

/**
 * For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).
 * https://js.checkio.org/ru/mission/correct-sentence/
 * 
 * Example:
 * correctSentence("greetings, friends") == "Greetings, friends."
 * correctSentence("Greetings, friends") == "Greetings, friends."
 * correctSentence("Greetings, friends.") == "Greetings, friends."
 * 
 * Precondition: No leading and trailing spaces, text contains only spaces, a-z A-Z , and .
 * 
 * @param {string} str - The string to correct.
 * @returns {string} Corrected version.
 */
const correctSentence = (str) => {
  const result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return ( str.endsWith(`.`) ) ? result : `${result}.`;
};
