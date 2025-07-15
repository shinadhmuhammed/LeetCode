/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
     const vowels = "aeiouAEIOU";
    let hasVowel = false;
    let hasConsonant = false;

    if (word.length < 3) {
        return false
    }
        for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (!/[a-zA-Z0-9]/.test(char)) {
            return false; 
        }

        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;

}

