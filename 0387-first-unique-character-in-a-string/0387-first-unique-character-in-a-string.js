/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
        let newMap=new Map()

        for(const char of s){
        newMap.set(char,(newMap.get(char)||0)+1)
        }

        for(let i=0;i<s.length;i++){
            if(newMap.get(s[i])===1){
                return i
            }
        }
        return -1
};