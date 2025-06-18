/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    const arr = []
    for(var i=0 ;i<nums.length;i+=3){
        if(i + 2 >= nums.length || nums[i+2] - nums[i] > k) return []
        arr.push([nums[i],nums[i+1],nums[i+2]])
    }
    return arr
};