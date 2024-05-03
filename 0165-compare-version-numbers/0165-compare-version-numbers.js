/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
        const v1Parts = version1.split('.');
        const v2Parts = version2.split('.');
    const maxLength = Math.max(v1Parts.length, v2Parts.length);
    for (let i = 0; i < maxLength; i++) {
      const num1 = parseInt(v1Parts[i] || 0, 10);
      const num2 = parseInt(v2Parts[i] || 0, 10);

      if (num1 > num2) {
        return 1;
      } else if (num2 > num1) {
        return -1;
      }
    }
    return 0;
        
};