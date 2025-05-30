/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = []
    for(let i=0;i<=rowIndex;i++){
         arr[i] = new Array(i+1)
         arr[i][0] = 1
         arr[i][i] = 1

        for(let j=1;j<i;j++){
            arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
        }
    }
        return arr[rowIndex]
 
};