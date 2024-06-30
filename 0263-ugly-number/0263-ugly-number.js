/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<1){
        return false
    }
    let values=[2,3,5]
    for(var i=0;i<=values.length;i++){
             while (n % values[i] === 0) {
            n /= values[i];
        }
    }  
    return n === 1;
    }
