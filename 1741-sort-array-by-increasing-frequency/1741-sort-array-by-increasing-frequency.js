/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let count={}
   nums.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0) + 1
    return acc
   },count)
   
   let sorting=nums.sort((a,b)=>{
        if(count[a]===count[b]){
            return b-a
        }
         return count[a] - count[b];
   })
   return sorting
};