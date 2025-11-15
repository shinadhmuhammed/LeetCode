/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = []
    let left = nums1.length
    let right = nums2.length
    let i = 0
    let j = 0

    while (i < left && j < right) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    while (i < left) {
        arr.push(nums1[i])
        i++
    }

    while (j < right) {
        arr.push(nums2[j])
        j++
    }

    let arrLength = arr.length
    let mid = Math.floor(arr.length / 2)

    for (let z = 0; z < arr.length; z++) {
            if(arrLength % 2 === 0){
                return Math.floor(arr[mid] + arr[mid - 1]) / 2
            }else{
                 return Math.floor(arr[mid] )
            }
    }
};