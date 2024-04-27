/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count=0
    let words=s.split(' ')
    console.log(words)
    for(var i=0;i<words.length;i++){
        if(words[i] !== ''){
            count++
        }
    }    
    return count
};
