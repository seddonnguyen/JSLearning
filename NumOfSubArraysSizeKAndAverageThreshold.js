// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.
// Example 1:
// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
//
// Example 2:
// Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6
// Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function(arr, k, threshold) {
    let left = 0;
    let right = 0;
    let result = 0;
    let currentSum = 0;

    while(right < arr.length) {
        let size = right - left + 1;
        currentSum += arr[right];

        if(size > k) {
            currentSum -= arr[left];
            left++;
            size = right - left + 1;
        }

        if(size === k) {
            const avg = currentSum / k;
            result += avg >= threshold ? 1 : 0;
        }

        right++
    }
    return result;
};

let arr = [2, 2, 2, 2, 5, 5, 5, 8];
let k = 3;
let threshold = 4;
console.log(numOfSubarrays(arr, k, threshold));