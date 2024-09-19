/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const compute = (s) => {
        let n = s.length
        if (n < 3)
            return n > 0? [Number(s)] : []
        let ans = [], left, right
        for (let i = 0; i < n; i++) {
            if (s[i] < '0') {
                left = compute(s.slice(0, i))
                right = compute(s.slice(i+1))
                for (a of left) {
                    for (b of right)
                        ans.push(s[i] == '+'? a+b : s[i] =='-'? a-b : a*b)
                }
            }
        }
        return ans
    }
    return compute(expression)
};