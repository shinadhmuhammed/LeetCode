/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result=[]
    for (const letter of words[0]) {
        console.log(words[0])
        if (words.every(w => w.includes(letter))) {
            result.push(letter)
            words = words.map(w => w.replace(letter,""))
        }
    }
    return result
};