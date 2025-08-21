/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let lastIndex = {}
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i
    }
    let end = 0
    let start = 0
    let result = []

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]); 

        if (i === end) { 
            result.push(end - start + 1);
            start = i + 1;
        }
    }

    return result;
}
