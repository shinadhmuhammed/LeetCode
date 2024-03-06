/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let map=new Map()
   for(let words of strs ){
       let sorted=words.split('').sort().join('')
       if(!map.has(sorted)){
           map.set(sorted,[words])
       }else{
             map.get(sorted).push(words)
       }
   }
   return [...map.values()]
};