/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let firstPointer = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[firstPointer] = nums[i]
            firstPointer = firstPointer + 1
        }
    }
    return firstPointer
};