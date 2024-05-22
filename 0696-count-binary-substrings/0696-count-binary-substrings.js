/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
   let curr = 1, prev = 0, res = 0;
   for(let i = 1; i < s.length; i++)
       if(s[i] === s[i - 1]) curr++;
       else res += Math.min(curr, prev),
            prev = curr, 
            curr = 1;
       return res + Math.min(curr, prev)  
};