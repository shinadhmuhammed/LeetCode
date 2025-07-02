/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freqMap = {}
    let arr = []
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1
    }
    let sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1])
    let result = sorted.slice(0, k).map(entry => parseInt(entry[0]));
    return result
};