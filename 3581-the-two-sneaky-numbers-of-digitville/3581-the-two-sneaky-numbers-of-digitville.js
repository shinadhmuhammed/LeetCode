/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let res = {}
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (res[nums[i]]) {
            res[nums[i]]++
        } else {
            res[nums[i]] = 1
        }

        if(res[nums[i]] === 2){
            arr.push(nums[i])
        }
    }
    return arr
};