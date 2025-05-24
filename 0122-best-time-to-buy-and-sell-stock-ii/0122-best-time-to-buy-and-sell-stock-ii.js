/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let i = 0
    let result = 0
    while (i < prices.length - 1) {

        while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
            i++
        }

        if (i === prices.length - 1) break;
        let buy = prices[i]
        i++

        while (i < prices.length  && prices[i] >= prices[i - 1]) {
            i++
        }

        let sell = prices[i - 1]
        result += sell - buy
    }
    return result
};