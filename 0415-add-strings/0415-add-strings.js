/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let n1=BigInt(num1)
    let n2=BigInt(num2)
    let sum=n1+n2
    return sum.toString()
   
};