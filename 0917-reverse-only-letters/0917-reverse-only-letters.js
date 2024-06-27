/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const string=s.split('')
    let left=0
    let right=string.length - 1
    while(left < right){
          while (left < right && !/[a-zA-Z]/.test(string[left])) {
        left++;
    }
      while (left < right && !/[a-zA-Z]/.test(string[right])) {
      right--;
    }
        if(left < right){
            [string[left],string[right]]=[string[right],string[left]]
            left++
            right--
        }
    }
    return string.join('')
};
