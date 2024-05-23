/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words=s.split(' ')
    let reverseString=''
    for(var i=words.length-1;i>=0;i--){
        if(words[i] === '') continue
        if(reverseString.length > 0) reverseString+=' '
        reverseString+=words[i]
    }
    return reverseString
};