/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    let diffBit = xor & -xor;
    let num1 = 0, num2 = 0;
    for (let num of nums) {
        if (num & diffBit) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    return [num1, num2];
};