/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let words = s.split('');
    for (let i = 0; i < words.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, words.length - 1); 

        while (left<right) {
           
            let temp = words[left];
            words[left] = words[right];
            words[right] = temp;
            left++;
            right--;
        }
    }

    return words.join('');
};