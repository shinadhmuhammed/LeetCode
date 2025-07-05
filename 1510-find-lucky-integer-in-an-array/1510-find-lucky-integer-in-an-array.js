/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let count = {}
    for (let s of arr){
        count[s] = (count[s]||0) + 1;
    }
  var res = -1
 for (let a in count) {
        if (+a === count[a]) { 
            res = Math.max(res, +a)
        }
    }
  return res 
};
