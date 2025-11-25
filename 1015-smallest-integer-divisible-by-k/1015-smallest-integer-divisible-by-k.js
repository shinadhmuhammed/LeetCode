/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
    let res = 0
 for (let i = 1; i <= k; i++) {
        res = (res * 10 + 1) % k
        if (res === 0) return i;
    }
    return -1
};