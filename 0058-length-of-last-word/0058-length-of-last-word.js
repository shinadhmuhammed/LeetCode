/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     let res = 0
     let string = s.trim()
     let len = string.length
     console.log(len,'len()')
     for(let i=len-1;i>=0;i--){
        if(string[i] !== " "){
            res++
        }else{
            break
        }
     }
     return res
};