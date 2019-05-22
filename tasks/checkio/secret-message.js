'use strict';

/**
 * This is a simple exercise in working with strings: iterate, recognize and concatenate.
 * https://js.checkio.org/ru/mission/secret-message/
 * 
 * You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
 * For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".
 * 
 * Example:
 * findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
 * findMessage("hello world!") == ""
 * 
 * @param {string} str - A text as a string (unicode).
 * @returns {string} The secret message as a string or an empty string.
 */
const findMessage = (str) => {
  return [...str]
    .filter((char) => char !== char.toLowerCase())
    .join('');
};
