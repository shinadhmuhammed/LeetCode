/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {

    let result = []
    for (let i = 0; i <= nums.length - k; i++) {
        let count = {}
        for (let j = i; j < k + i; j++) {
            if (count[nums[j]]) {
                count[nums[j]]++
            } else {
                count[nums[j]] = 1
            }
        }
        let arr = Object.keys(count).map(num => [Number(num), count[num]]);
        arr.sort((a, b) => { if (b[1] === a[1]) return b[0] - a[0]; return b[1] - a[1] })
        console.log(arr)
        let sum = 0;
        for (let t = 0; t < x && t < arr.length; t++) {
            let [val, count] = arr[t];
            sum += val * count;
        }

        result.push(sum);
    }
    return result
};