/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {

    if (s.length === 1)
        return 1;

    let array = s.split("").sort().join("");
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            count += 2;
            i++;
        }
    }
    if (count < s.length) {
        return count + 1;
    }

    return count;
};