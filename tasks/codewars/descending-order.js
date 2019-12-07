// https://www.codewars.com/kata/descending-order/train/javascript

// descendingOrder(0), ==> 0
// descendingOrder(1), ==> 1
// descendingOrder(123456789), ==> 987654321
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321

const descendingOrder = (num) => {
  return Number(
    String(num)
      .split('')
      .sort()
      .reverse()
      .join(''),
  );
};

console.log(typeof descendingOrder(123456789));
