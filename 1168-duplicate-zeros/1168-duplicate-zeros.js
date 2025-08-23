/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let n = arr.length
    let zeros = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeros++
    }

    let left = n - 1
    let right = n + zeros - 1

    while (left < right) {
        if (arr[left] !== 0) {
            if (right < n) arr[right] = arr[left]
        } else {
            if (right < n) arr[right] = 0
            right--
            if (right < n) arr[right] = 0
        }
        left--
        right--
    }
};