/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map();
    let strs = s.split(" ");
    if (pattern.length !== strs.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== strs[i]) {
                return false;
            }
        } else {
            if (Array.from(map.values()).includes(strs[i])) {
                return false;
            }
            map.set(pattern[i], strs[i]);
        }
    }
    return true;
};
