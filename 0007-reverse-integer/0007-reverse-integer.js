/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let actualX = x
    let rev = 0
    x = Math.abs(x)
    while (x > 0) {
        let rem = x % 10
        rev = (10 * rev) + rem
        x = Math.floor(x / 10)
    }
    let limit = Math.pow(2, 31)
    if (rev > limit || rev < -limit) return 0
    return (actualX < 0) ? -rev : rev
};