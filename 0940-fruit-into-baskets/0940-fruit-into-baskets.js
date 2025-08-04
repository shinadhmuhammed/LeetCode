/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let count = {}
    let left = 0
    let max = 0

    for (let right = 0; right < fruits.length; right++) {
        const fruit = fruits[right]
        count[fruit] = (count[fruit] || 0) + 1

        while (Object.keys(count).length > 2) {
            const leftFruit = fruits[left]
            count[leftFruit]--
            if (count[leftFruit] === 0) {
                delete count[leftFruit]
            }
            left++
        }
        max = Math.max(max, (right - left) + 1)

    }
    return max

};