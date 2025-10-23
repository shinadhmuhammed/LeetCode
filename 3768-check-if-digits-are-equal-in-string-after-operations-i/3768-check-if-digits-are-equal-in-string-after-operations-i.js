/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    let str = [...s]
    while (str.length > 2) {
        let result = ''
        for (let i = 0; i < str.length - 1; i++) {
            let count = (Number(str[i]) + Number(str[i + 1])) % 10
            result += count
        }
        str = [...result]
    }
    return str[0] === str[1]
};