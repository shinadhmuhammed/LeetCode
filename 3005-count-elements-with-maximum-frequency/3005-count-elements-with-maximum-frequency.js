/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let count=0
    let max=0
       let map=new Map()

        for(var num of nums){
                map.set(num,(map.get(num)||0)+1)
        }

        for(let frequency of map.values()){
            max=Math.max(max,frequency)
        }

        for(let frequency of map.values()){
            if(frequency === max){
                count+=frequency
            }
        }
    return count
};