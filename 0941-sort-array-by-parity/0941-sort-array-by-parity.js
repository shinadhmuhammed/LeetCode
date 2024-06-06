/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return nums.filter((num)=>num%2 === 0).concat(nums.filter((num) => num%2 !== 0))
};