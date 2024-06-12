/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left=0
  let mid=0
  let right=nums.length - 1

  while(mid <= right){
    if(nums[mid] === 0){
        [nums[left],nums[mid]]=[nums[mid],nums[left]]
        left++
        mid++
    }else if(nums[mid] === 1){
        mid++
    }else if(nums[mid] === 2){
        [nums[right],nums[mid]]=[nums[mid],nums[right]]
        right--
    }
  }
};