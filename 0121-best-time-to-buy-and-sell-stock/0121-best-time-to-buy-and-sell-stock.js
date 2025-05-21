/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min= prices[0]
    let max = 0
    for (var i=1;i<=prices.length-1;i++){
            if(prices[i] < min){
                min=prices[i]
            }else{
                max=Math.max(max, prices[i] - min)
            }
    }
    return max
};
