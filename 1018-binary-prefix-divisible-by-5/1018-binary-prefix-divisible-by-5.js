/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let x = 0 
    let result = []
    for(let bit of nums){
        x =(x*2 + bit) % 5
        if(x === 0) {
            result.push(true)
        }else{
            result.push(false)
        }
    }
    return result
};