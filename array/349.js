// 349. Intersection of Two Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => nums1.filter((value, index) => nums2.includes(value) && nums1.indexOf(value) === index);

console.log(intersection([1, 2, 2, 1], [2, 2])); // [ 2 ]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [ 4, 9 ]