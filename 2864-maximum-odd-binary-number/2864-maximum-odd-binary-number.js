/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
   
    let arr=s.split('')
    arr.sort((a,b)=>b-a)

    let firstOne=arr.indexOf('1')
    arr.splice(firstOne,1)
    arr.push(1)
   return arr.join('')
};