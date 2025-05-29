/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxOnesCount = 0

  let left = 0
  let right = 0
    while (right < nums.length || right !== left ){
        if(nums[right]){
            right ++
            continue
        }

        maxOnesCount = Math.max(maxOnesCount,right - left)
        right++
        left = right
    }
    return maxOnesCount
};