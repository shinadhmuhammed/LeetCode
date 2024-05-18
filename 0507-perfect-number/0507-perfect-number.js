/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    var temp=0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }
    return temp === num && temp !== 0
 
};