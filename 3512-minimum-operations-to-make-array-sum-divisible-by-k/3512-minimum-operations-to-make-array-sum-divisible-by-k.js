/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {

    let sum = nums.reduce((a, b) => a + b, 0)
    let r = sum % k;
    console.log(r)
    if (r === 0) {
        return 0
    }else{
        return r
    }

};