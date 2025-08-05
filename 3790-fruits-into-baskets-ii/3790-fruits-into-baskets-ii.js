/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
    let used = new Array(baskets.length).fill(false);
    let count = 0;

    for (let i = 0; i < fruits.length; i++) {
        let placed = false;
        for (let j = 0; j < baskets.length; j++) {
            if (!used[j] && fruits[i] <= baskets[j]) {
                used[j] = true
                placed = true
                break
            }
        }
        if (!placed) {
            count++
        }

    }

    return count;
};
