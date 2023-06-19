// 169.  Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    let count = 0;
    let result = 0;
    nums.forEach(num => {
        if (count === 0) {
            result = num;
            count++;
        } else if (result === num) {
            count++
        } else {
            count--;
        }
    });
    return result;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2