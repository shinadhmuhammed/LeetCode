/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i=1

    while((i*i) <= x){
        if((i*i) % x == 0){
            return i
        }
        i+=1
    }
    return i-1
};