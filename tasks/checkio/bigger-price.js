'use strict';

/**
 * Bigger Price
 * https://js.checkio.org/ru/mission/bigger-price/
 *
 * You have a table with all available goods in the store. The data is represented as a list of
 * objects. Your mission here is to find the TOP most expensive goods. The amount we are
 * looking for will be given as a first argument and the whole data as the second one.
 *
 * Example:
 * biggerPrice(2, [
 *     {"name": "bread", "price": 100},
 *     {"name": "wine", "price": 138},
 *     {"name": "meat", "price": 15},
 *     {"name": "water", "price": 1}
 * ]) == [
 *     {"name": "wine", "price": 138},
 *     {"name": "bread", "price": 100}
 * ]
 *
 * biggerPrice(1, [
 *     {"name": "pen", "price": 5},
 *     {"name": "whiteboard", "price": 170}
 * ]) == [{"name": "whiteboard", "price": 170}]
 *
 * @param {number} num - Amount of goods.
 * @param {Object[]} arr - Data on goods as array of objects.
 */
const biggerPrice = (num, products) => {
  const sorted = products.sort(({ price: a }, { price: b }) => b - a);

  sorted.length = num;
  return sorted;
};
