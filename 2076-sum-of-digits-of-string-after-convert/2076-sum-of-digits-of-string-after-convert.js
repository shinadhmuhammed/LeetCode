/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let numStr = "";
    for (let i = 0; i < s.length; i++) {
        numStr += (s.charCodeAt(i) - 96).toString();
    }

    let sum = 0;
    for (let t = 0; t < k; t++) {
        sum = 0;
        for (let i = 0; i < numStr.length; i++) {
            sum += Number(numStr[i]);
        }
        numStr = sum.toString();
    }

    return sum;
};
