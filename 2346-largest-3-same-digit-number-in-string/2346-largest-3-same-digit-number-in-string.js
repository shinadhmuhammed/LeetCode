/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let result = ""
    for (let i = 0; i <= num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
           let sub =  num.slice(i,i+3)
           if(sub > result){
            result = sub
           }
        }
    }
        return result
};