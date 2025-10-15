/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let firstCount = 0
    let secondCount = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            firstCount++
        } else {
            firstCount = 0
        }

        if (secondCount < firstCount) {
            secondCount = firstCount
        }
    }
    return secondCount
};