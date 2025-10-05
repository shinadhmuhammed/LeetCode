/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let actualX = x
    let rev = 0
    while (x > 0) {
        rem = x % 10
        rev = (rev * 10) + rem
        x = Math.floor(x / 10)
    }
    if (rev === actualX) {
        return true
    } else {
        return false
    }
};
