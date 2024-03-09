/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let set1=new Set(nums1)
    let set2=new Set(nums2)

    for(let num of set1 ){
        if(set2.has(num)){
            return num
        }
    }

    for(let nums of set2){
        if(set1.has(nums)){
            return nums
            
        }
        
    }
    return -1
};