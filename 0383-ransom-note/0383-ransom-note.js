/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let a=ransomNote.split('')
    let b=magazine.split('')
    for(var i=0;i<a.length;i++){
        let found=false
        for(var j=0;j<b.length;j++){
            if(a[i]===b[j]){
                b.splice(j,1)
                found=true
                break
            }
        }
        if(!found){
            return false
        }
    }
    return true
};