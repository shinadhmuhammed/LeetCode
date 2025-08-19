/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let current = 0
    let count = 0
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 0) {
            count += 1
            current += count
        } else {
            count = 0
        }

    }
    return current
};