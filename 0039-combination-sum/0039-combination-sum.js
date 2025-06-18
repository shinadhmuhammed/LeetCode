/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(remaining, combo, start) {

        if(remaining === 0 ){
            result.push([...combo])
            return 
        }
        for (var i = start; i <= candidates.length; i++) {
            const curr = candidates[i]
            if (curr <= remaining) {
                combo.push(curr)
                backtrack(remaining - curr,combo,i)
                combo.pop()
            }
        }
    }

    backtrack(target, [], 0);
    return result;
}