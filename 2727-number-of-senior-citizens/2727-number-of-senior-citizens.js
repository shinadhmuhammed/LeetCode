/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count=0
    let array=details.map(arr=>arr.slice(11,13))
    for(var i=0;i<array.length;i++){
        if(array[i] > 60){
            count++
        }
    }
    return count
};