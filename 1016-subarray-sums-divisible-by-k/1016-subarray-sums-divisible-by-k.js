/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysDivByK(nums, k) {
    const remainderMap = new Map();
    remainderMap.set(0, 1); 
    
    let cumulativeSum = 0;
    let count = 0;
    
    for (let num of nums) {
        cumulativeSum += num;
        let remainder = ((cumulativeSum % k) + k) % k; 
        
        if (remainderMap.has(remainder)) {
            count += remainderMap.get(remainder);
            remainderMap.set(remainder, remainderMap.get(remainder) + 1);
        } else {
            remainderMap.set(remainder, 1);
        }
    }
    
    return count;
}