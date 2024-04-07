/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr=s.split('')
    let vowels='aeiouAEIOU'
    let p=[]
    for(var i=0;i<=arr.length;i++){
        if(vowels.includes(arr[i])){
            p.push(arr[i])
        }
    }
    p.reverse()
    let str=''
    let k=0
    for(var i=0;i<arr.length;i++){
        if(vowels.includes(arr[i])){
            str+=p[k]
            k++
        }else{
            str+=arr[i]
        }
    }
    return str
};