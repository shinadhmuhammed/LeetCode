/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let length=s.length
        let right=0
        let left=0
        let maxLength=0
        let set=new Set()

        while(right < length){
            if(!set.has(s[right])){
                set.add(s[right])
                right++
                maxLength=Math.max(maxLength,set.size)
            }else{
                set.delete(s[left])
                left++
            }
        }
    return maxLength
};