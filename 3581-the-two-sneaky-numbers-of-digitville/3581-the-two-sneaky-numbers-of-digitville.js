/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let res = {}

    for (let i = 0; i < nums.length; i++) {
        if (res[nums[i]]) {
            res[nums[i]]++
        } else {
            res[nums[i]] = 1
        }
    }
    let arr = []
    for (let val in res) {
        if (res[val] > 1) {
            arr.push(Number(val))
        }
    }
    return arr
};