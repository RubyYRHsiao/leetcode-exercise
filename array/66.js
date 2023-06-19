// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => (BigInt(digits.join('')) + 1n).toString().split('').map(Number);

console.log(plusOne([1, 2, 3])); // [ 1, 2, 4 ]
console.log(plusOne([4, 3, 2, 1])); // [ 4, 3, 2, 2 ]