/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    sort=nums.sort((a,b)=>a-b)
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1]){
            return nums[i]
        }
    }
};