/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const result = new Set();

    const dfs = (start, path) => {
        if (path.length >= 2) {
            result.add(path.join(',')); 
        }

        const used = new Set(); // to prevent same number at same level
        for (let i = start; i < nums.length; i++) {
            if ((path.length === 0 || nums[i] >= path[path.length - 1]) && !used.has(nums[i])) {
                used.add(nums[i]);
                dfs(i + 1, [...path, nums[i]]);
            }
        }
    };

    dfs(0, []);

    // Convert comma-separated strings back to arrays
    return Array.from(result).map(seq => seq.split(',').map(Number));
};
