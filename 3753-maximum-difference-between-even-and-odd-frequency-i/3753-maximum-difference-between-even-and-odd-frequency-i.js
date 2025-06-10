var maxDifference = function (s) {
    let freq = new Array(26).fill(0);

    for (let char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let maxDiff = -Infinity;

    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 === 1) { 
            for (let j = 0; j < 26; j++) {
                if (freq[j] > 0 && freq[j] % 2 === 0) { 
                    maxDiff = Math.max(maxDiff, freq[i] - freq[j]);
                }
            }
        }
    }

    return maxDiff === -Infinity ? 0 : maxDiff;
};
