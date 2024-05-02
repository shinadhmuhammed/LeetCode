/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num=digits.join('')
    console.log(num)
     let nums=BigInt(num)
     console.log(nums)
        nums++
        
  const res= nums.toString().split('')
  return res
 
       
};