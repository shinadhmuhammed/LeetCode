/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    const num = nums.sort((a, b) => a - b)
    let moves = 0
    for (let i = 1; i <= num.length; i++) {
        if (num[i] <= num[i - 1]) {
            let needed = num[i-1] + 1
            moves += needed - num[i]
            num[i] = needed
        }
    }
    return moves
};