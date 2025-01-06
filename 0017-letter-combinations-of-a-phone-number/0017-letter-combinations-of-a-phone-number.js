/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    if (!digits) return []; 

    const result = [];

    function res(index, path) {
        if (index === digits.length) {
            result.push(path.join('')); 
            return;
        }

        const digit = digits[index];
        const letters = keyboard[digit];

        for (const letter of letters) {
            path.push(letter);       
            res(index + 1, path);     
            path.pop();               
        }
    }

    res(0, []); 
    return result;
};


