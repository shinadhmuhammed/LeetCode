/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let countMap={}
        for(let num of arr1){
            countMap[num]= (countMap[num] || 0) +1
        }
      let arr=[]
      for(let nums of arr2){
        if(countMap !== undefined){
            for(let i=0;i<countMap[nums];i++){
                arr.push(nums)
            }
            delete countMap[nums]
        }
      }
       const remainingElements = [];
    for (let num in countMap) {
        for (let i = 0; i < countMap[num]; i++) {
            remainingElements.push(num);
        }
    }
    remainingElements.sort((a, b) => a - b);
    arr.push(...remainingElements);
    return arr
};