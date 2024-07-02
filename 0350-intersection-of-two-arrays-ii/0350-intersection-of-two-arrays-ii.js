/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr=[]
    const map1=new Map()
 
   for(var nums of nums1){
      if(map1.has(nums)){
        map1.set(nums,map1.get(nums)+1)
      }else{
        map1.set(nums,1)
      }
   }
    
    for(var nums of nums2){
        if(map1.has(nums)&& map1.get(nums) > 0){
            arr.push(nums)
            map1.set(nums,map1.get(nums)-1)
        }
    }
  return arr
};