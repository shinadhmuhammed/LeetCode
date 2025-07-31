/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let maxLength = 0
        let left = 0
        let sIndex = {}
        for(let right=0;right<s.length;right++){
                let val = s[right]
                if(val in sIndex && sIndex[val] >= left){
                    left = sIndex[val] + 1
                }
                sIndex[val] = right
             maxLength = Math.max(maxLength,right - left +1)
        }
        return maxLength
};