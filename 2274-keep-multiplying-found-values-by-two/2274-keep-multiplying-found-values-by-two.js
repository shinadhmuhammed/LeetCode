/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === original) {
            original = nums[i] * 2
            i = -1
        }
    }
    return original
};