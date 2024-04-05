/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const map=new Map()
    while(!map.has(n=getSumSquares(n))){
        if(n===1){
            return true
        }
        map.set(n,true)
    }
    return false
}

function getSumSquares(n) {
    let sumOfSquares = 0;

    while (n) {
        sumOfSquares += Math.pow(n % 10, 2);
        n = (n - (n % 10)) / 10;
    }

    return sumOfSquares;
}
