/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
     x = x.toString(2).split('').reverse()
    y = y.toString(2).split('').reverse()
    
        while(x.length<y.length) x.push('0')
        while(x.length>y.length) y.push('0')
            let count=0
            for(var i=0;i<=x.length;i++){
                if(x[i]!=y[i]){
                    count++
                }
            }
            return count
};